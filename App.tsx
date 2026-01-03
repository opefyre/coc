
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Compass, 
  MessageSquare, 
  History, 
  Moon, 
  Sun, 
  User as UserIcon,
  ChevronRight,
  X,
  Send,
  Loader2,
  ChevronDown,
  Map as MapIcon,
  Play,
  Pause,
  CheckCircle2,
  Circle,
  GraduationCap,
  Bookmark,
  Share2,
  FlaskConical,
  Zap,
  ShieldAlert,
  ArrowRight,
  Search,
  FilterX,
  Sparkles,
  RefreshCcw,
  Terminal,
  Minus,
  Quote,
  BookOpen
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as L from 'leaflet';
import { HISTORY_EVENTS, DECISION_POINTS } from './data/historyData';
import { WarPeriod, TimelineEvent, ChatMessage, User, DecisionPoint } from './types';
import { getHistorianChat, simulateAlternativeTimeline } from './services/gemini';
import { generateNarration } from './services/tts';
import { decodeBase64, decodeAudioData } from './utils/audio';
import { GenerateContentResponse } from "@google/genai";

interface EventPlaybackData {
  buffer: AudioBuffer;
  lastPosition: number;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const [filterBookmarked, setFilterBookmarked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);
  
  // What-If Laboratory State
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [customWhatIf, setCustomWhatIf] = useState('');
  const [simulationResult, setSimulationResult] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const [readEvents, setReadEvents] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('chronicles_read_records');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('chronicles_bookmarks');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const chatInstance = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const audioStartTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);
  
  const audioCacheRef = useRef<Map<string, EventPlaybackData>>(new Map());
  const activeEventIdRef = useRef<string | null>(null);

  const handleStopCurrent = useCallback(() => {
    if (audioSourceRef.current) {
      try { audioSourceRef.current.stop(); } catch(e) {}
      audioSourceRef.current = null;
    }
    if (activeEventIdRef.current) {
      const cached = audioCacheRef.current.get(activeEventIdRef.current);
      if (cached && audioContextRef.current) {
        const elapsed = (audioContextRef.current.currentTime - audioStartTimeRef.current) + cached.lastPosition;
        cached.lastPosition = elapsed >= cached.buffer.duration ? 0 : elapsed;
        setAudioCurrentTime(cached.lastPosition);
        setAudioProgress((cached.lastPosition / cached.buffer.duration) * 100);
      }
    }
    setIsNarrating(false);
    activeEventIdRef.current = null;
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#event=')) {
        const eventId = hash.replace('#event=', '');
        const event = HISTORY_EVENTS.find(e => e.id === eventId);
        if (event) setSelectedEvent(event);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    localStorage.setItem('chronicles_read_records', JSON.stringify([...readEvents]));
  }, [readEvents]);

  useEffect(() => {
    localStorage.setItem('chronicles_bookmarks', JSON.stringify([...bookmarks]));
  }, [bookmarks]);

  useEffect(() => {
    if (isChatOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const progressStats = useMemo(() => {
    const total = HISTORY_EVENTS.length;
    const completed = readEvents.size;
    const percentage = Math.round((completed / total) * 100);
    return { total, completed, percentage };
  }, [readEvents]);

  const visibleEvents = useMemo(() => {
    let filtered = filterBookmarked 
      ? HISTORY_EVENTS.filter(e => bookmarks.has(e.id)) 
      : HISTORY_EVENTS;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(q) ||
        e.year.toLowerCase().includes(q) ||
        (e.location && e.location.toLowerCase().includes(q)) ||
        e.shortDescription.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [filterBookmarked, bookmarks, searchQuery]);

  useEffect(() => {
    if (selectedEvent) {
      const cached = audioCacheRef.current.get(selectedEvent.id);
      if (cached) {
        setAudioDuration(cached.buffer.duration);
        setAudioCurrentTime(cached.lastPosition);
        setAudioProgress((cached.lastPosition / cached.buffer.duration) * 100);
      } else {
        setAudioDuration(0);
        setAudioCurrentTime(0);
        setAudioProgress(0);
      }
      setIsNarrating(activeEventIdRef.current === selectedEvent.id && !!audioSourceRef.current);
      
      try {
        window.history.replaceState(null, '', `#event=${selectedEvent.id}`);
      } catch (e) {
        console.warn("History API restricted.");
      }
    } else {
      handleStopCurrent();
      if (window.location.hash.startsWith('#event=')) {
        try {
          window.history.replaceState(null, '', window.location.pathname);
        } catch (e) {}
      }
    }
  }, [selectedEvent, handleStopCurrent]);

  const updateProgress = useCallback(() => {
    if (isNarrating && audioContextRef.current && activeEventIdRef.current) {
      const cached = audioCacheRef.current.get(activeEventIdRef.current);
      if (cached) {
        const currentTime = audioContextRef.current.currentTime;
        const elapsed = (currentTime - audioStartTimeRef.current) + cached.lastPosition;
        
        if (elapsed >= cached.buffer.duration) {
          handleStopCurrent();
        } else {
          setAudioCurrentTime(elapsed);
          setAudioProgress((elapsed / cached.buffer.duration) * 100);
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      }
    }
  }, [isNarrating, handleStopCurrent]);

  useEffect(() => {
    if (isNarrating) {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    }
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isNarrating, updateProgress]);

  useEffect(() => {
    if (selectedEvent && selectedEvent.coordinates && mapContainerRef.current) {
      if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; }
      const map = L.map(mapContainerRef.current, { zoomControl: false, attributionControl: false }).setView(selectedEvent.coordinates, 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
      L.control.zoom({ position: 'bottomright' }).addTo(map);
      const markerIcon = L.divIcon({
        html: `<div class="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-zinc-900 transition-transform hover:scale-125">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>`,
        className: 'custom-div-icon', iconSize: [32, 32], iconAnchor: [16, 32]
      });
      L.marker(selectedEvent.coordinates, { icon: markerIcon }).addTo(map).bindPopup(`<div class="font-bold text-zinc-900">${selectedEvent.title}</div><div class="text-xs text-zinc-500">${selectedEvent.location}</div>`).openPopup();
      mapInstanceRef.current = map;
      setTimeout(() => { map.invalidateSize(); }, 400);
    }
  }, [selectedEvent]);

  const toggleReadStatus = (id: string) => {
    setReadEvents(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleShare = async (event: TimelineEvent, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}#event=${event.id}`;
    const shareData = { title: `Chronicles of Conflict: ${event.title}`, text: event.shortDescription, url: shareUrl };

    if (navigator.share) {
      try { 
        await navigator.share(shareData); 
      } catch (err: any) { 
        if (err.name !== 'AbortError') console.error('Error sharing:', err); 
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareFeedback(event.id);
        setTimeout(() => setShareFeedback(null), 2000);
      } catch (err) { console.error('Failed to copy:', err); }
    }
  };

  const handleNarrate = async () => {
    if (!selectedEvent) return;
    if (isNarrating && activeEventIdRef.current === selectedEvent.id) { handleStopCurrent(); return; }
    handleStopCurrent();
    
    let playbackData = audioCacheRef.current.get(selectedEvent.id);
    if (!playbackData) {
      setIsAudioLoading(true);
      try {
        const base64Audio = await generateNarration(selectedEvent.fullContent);
        if (!base64Audio) { setIsAudioLoading(false); return; }
        if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const audioCtx = audioContextRef.current;
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        const buffer = await decodeAudioData(decodeBase64(base64Audio), audioCtx, 24000, 1);
        playbackData = { buffer, lastPosition: 0 };
        audioCacheRef.current.set(selectedEvent.id, playbackData);
        setAudioDuration(buffer.duration);
        setIsAudioLoading(false);
      } catch (error) { 
        console.error("Narration error:", error); 
        setIsAudioLoading(false); 
        return; 
      }
    }
    
    if (playbackData && audioContextRef.current) {
      const audioCtx = audioContextRef.current;
      if (audioCtx.state === 'suspended') await audioCtx.resume();
      const source = audioCtx.createBufferSource();
      source.buffer = playbackData.buffer;
      source.connect(audioCtx.destination);
      source.onended = () => { 
        if (audioSourceRef.current === source) { 
          setIsNarrating(false); 
          activeEventIdRef.current = null; 
        } 
      };
      audioStartTimeRef.current = audioCtx.currentTime;
      audioSourceRef.current = source;
      activeEventIdRef.current = selectedEvent.id;
      setIsNarrating(true);
      source.start(0, playbackData.lastPosition);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoadingChat) return;
    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoadingChat(true);
    try {
      if (!chatInstance.current) chatInstance.current = getHistorianChat();
      const stream = await chatInstance.current.sendMessageStream({ message: input });
      let fullResponse = '';
      const assistantMessage: ChatMessage = { role: 'model', content: '' };
      setMessages(prev => [...prev, assistantMessage]);
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].content = fullResponse;
            return newMsgs;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', content: "Error accessing archives. Please try again." }]);
    } finally { setIsLoadingChat(false); }
  };

  const runSimulation = async (scenario: string) => {
    if (!scenario.trim()) return;
    setIsSimulating(true);
    setSimulationResult(null);
    try {
      const result = await simulateAlternativeTimeline("General World War context", scenario);
      setSimulationResult(result || "Unable to compute simulation. Data corrupted.");
    } catch (error) {
      console.error("Simulation error:", error);
      setSimulationResult("Simulation failed due to archive instability.");
    } finally {
      setIsSimulating(false);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const periods: { key: WarPeriod; label: string; short: string }[] = [
    { key: 'PRE_WWI', label: 'Pre-War', short: 'Diplomacy' },
    { key: 'WWI', label: 'WWI', short: '1914-1918' },
    { key: 'INTERWAR', label: 'Interwar', short: '1919-1938' },
    { key: 'WWII', label: 'WWII', short: '1939-1945' },
    { key: 'POST_WWII', label: 'Post-War', short: 'Legacy' }
  ];

  if (!user) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 bg-white dark:bg-zinc-950`}>
        <div className="max-w-md w-full space-y-12 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight heading text-zinc-900 dark:text-zinc-50">Chronicles of Conflict</h1>
            <div className="h-1 w-12 bg-zinc-200 dark:bg-zinc-700 mx-auto"></div>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg leading-relaxed">A professional digital archive for the study of the World Wars.</p>
          </div>
          <button onClick={() => setUser({ name: 'Scholar Doe', email: 'scholar@edu.com', photoUrl: 'https://picsum.photos/seed/history/100/100' })} className="w-full flex justify-center py-4 px-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg">Begin Research Session</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-screen flex flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}>
      <header className="flex-shrink-0 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => mainScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 shadow-lg shadow-zinc-900/10 dark:shadow-white/5 group-hover:scale-110 transition-transform duration-300">
              <Compass size={22} className="group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-full border border-zinc-900/20 dark:border-white/20 animate-ping group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h2 className="text-xl font-black heading tracking-[0.1em] text-zinc-900 dark:text-zinc-50 uppercase">
              Chronicles
            </h2>
          </div>
          <nav className="hidden lg:flex items-center space-x-1">
            {periods.map((p) => (
              <button key={p.key} onClick={() => document.getElementById(p.key)?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-lg transition-all">{p.label}</button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setIsLabOpen(true)}
            className="flex items-center gap-2 px-3 py-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-bold border border-indigo-100 dark:border-indigo-900/50 hover:scale-105 transition-all shadow-sm"
          >
            <FlaskConical size={16} />
            <span className="hidden sm:inline">What-If Lab</span>
          </button>
          <button onClick={() => setFilterBookmarked(!filterBookmarked)} className={`p-2 rounded-xl transition-all ${filterBookmarked ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950' : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`} title="Toggle Bookmarks">
            <Bookmark size={18} fill={filterBookmarked ? "currentColor" : "none"} />
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 rounded-xl transition-colors">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
          <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
            <img src={user.photoUrl} alt="profile" className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-700" />
          </div>
        </div>
      </header>

      <div className="flex-1 relative overflow-hidden flex flex-col">
        <main ref={mainScrollRef} className={`flex-1 overflow-y-auto relative scroll-smooth pb-32 transition-all duration-500 ${isChatOpen || selectedEvent || isLabOpen ? 'pointer-events-none opacity-30 blur-sm' : 'opacity-100'}`}>
          <div className="max-w-5xl mx-auto px-8 py-16">
            <div className="mb-12 space-y-12">
              <h1 className="text-6xl md:text-8xl font-bold heading leading-none tracking-tighter text-zinc-900 dark:text-zinc-50">{filterBookmarked ? "Personal Archives." : "The History of Total War."}</h1>
              
              {!filterBookmarked && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100 flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                        <span>Records examined</span>
                        <span>{progressStats.completed} / {progressStats.total}</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-1000" style={{ width: `${progressStats.percentage}%` }} />
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    onClick={() => setIsLabOpen(true)}
                    className="group relative bg-indigo-600 hover:bg-indigo-700 p-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all shadow-md shadow-indigo-500/10 border border-indigo-500/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                        <FlaskConical size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">Simulation Lab</span>
                        <span className="text-[10px] text-indigo-100/60 font-bold uppercase tracking-wider">Explore what-if scenarios</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )}

              <div className="relative group w-full">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search size={18} className="text-zinc-400 dark:text-zinc-600 group-focus-within:text-zinc-900 dark:group-focus-within:text-zinc-100 transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keywords, years, or theater..." 
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-12 pl-12 pr-6 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900/5 dark:focus:ring-white/5 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-3 flex items-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {visibleEvents.length === 0 ? (
              <div className="py-24 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <FilterX size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">No Matching Records</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">No entries match your current search criteria in the archives.</p>
                </div>
                <button 
                  onClick={() => { setSearchQuery(''); setFilterBookmarked(false); }}
                  className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95"
                >
                  Clear Search Filters
                </button>
              </div>
            ) : (
              periods.map((period, pIdx) => {
                const eventsInPeriod = visibleEvents.filter(e => e.period === period.key);
                if (eventsInPeriod.length === 0) return null;
                return (
                  <section key={period.key} id={period.key} className="mb-24 pt-8">
                    <div className="flex items-center space-x-6 mb-12">
                      <span className="text-lg font-bold text-zinc-300 dark:text-zinc-700">0{pIdx + 1}</span>
                      <h3 className="text-xl font-bold heading leading-none text-zinc-900 dark:text-zinc-50">{period.label}</h3>
                      <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      {eventsInPeriod.map((event) => (
                        <div key={event.id} onClick={() => setSelectedEvent(event)} className={`group relative flex flex-col md:flex-row gap-8 cursor-pointer p-8 rounded-2xl border transition-all ${readEvents.has(event.id) ? 'opacity-60 border-zinc-200 dark:border-zinc-800' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl'}`}>
                          <div className="w-32 flex-shrink-0">
                            <span className="text-xl font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                              {event.year}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-3 heading text-zinc-900 dark:text-zinc-50">{event.title}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{event.shortDescription}</p>
                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center text-xs font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-all">
                                Examine Records <ChevronRight size={14} className="ml-1 group-hover:translate-x-2 transition-transform" />
                              </div>
                              {event.location && (
                                <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest flex items-center gap-1.5">
                                  <MapIcon size={12} />
                                  {event.location}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </main>

        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[150] flex flex-col items-end gap-3 pointer-events-none group">
          {isChatOpen && (
            <div className="w-[calc(100vw-3rem)] sm:w-[320px] lg:w-[380px] h-[400px] max-h-[60vh] bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 zoom-in-95 duration-300 pointer-events-auto origin-bottom-right">
              <header className="px-4 py-3 border-b dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900">
                    <UserIcon size={12} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[10px] font-bold text-zinc-900 dark:text-zinc-50 leading-tight">HISTORIAN AI</h4>
                    <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-wider">Online</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => setIsChatOpen(false)} className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg text-zinc-500 dark:text-zinc-400 transition-colors">
                    <Minus size={14} />
                  </button>
                  <button onClick={() => { setIsChatOpen(false); setMessages([]); }} className="p-1.5 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-red-500 transition-colors">
                    <X size={14} />
                  </button>
                </div>
              </header>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-3 opacity-50 px-6">
                    <MessageSquare size={24} className="text-zinc-400" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Ask a specialist about the Great Wars or specific tactical records.</p>
                  </div>
                )}
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] p-3 rounded-2xl text-[11px] leading-relaxed ${m.role === 'user' ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-tr-none' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-200/50 dark:border-zinc-700/50'}`}>
                      {m.role === 'user' ? (
                        m.content 
                      ) : (
                        <div className="prose prose-zinc dark:prose-invert prose-xs max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoadingChat && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="p-3 border-t dark:border-zinc-800 flex items-center gap-2 bg-white dark:bg-zinc-900">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="Inquire further..." 
                  className="flex-1 bg-zinc-50 dark:bg-zinc-800 py-2 px-3 rounded-xl text-[11px] font-medium border border-zinc-200 dark:border-zinc-700 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900/10 dark:focus:ring-white/10" 
                />
                <button 
                  disabled={isLoadingChat || !input.trim()} 
                  className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 disabled:opacity-30 transition-all"
                >
                  <Send size={12} />
                </button>
              </form>
            </div>
          )}
          
          <div className="flex items-center gap-3">
            {!isChatOpen && messages.length > 0 && (
              <div className="bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-xl text-[9px] font-bold uppercase tracking-widest animate-in fade-in slide-in-from-right-2 pointer-events-auto">
                Session Active
              </div>
            )}
            <button 
              onClick={() => { setIsChatOpen(!isChatOpen); if (selectedEvent) setSelectedEvent(null); }} 
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 pointer-events-auto ${isChatOpen ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rotate-90 border border-zinc-200 dark:border-zinc-700' : 'bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 shadow-zinc-950/20 dark:shadow-white/5'}`}
            >
              {isChatOpen ? <ChevronDown size={20} /> : <MessageSquare size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isLabOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" onClick={() => setIsLabOpen(false)} />
          <div className="relative bg-white dark:bg-zinc-900 w-full max-w-6xl h-[92vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800 animate-in zoom-in-95 duration-300">
            <header className="px-8 py-6 border-b dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <FlaskConical size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold heading text-zinc-900 dark:text-zinc-50">Decision Laboratory</h2>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Alternative Timeline Simulation Engine</p>
                </div>
              </div>
              <button onClick={() => setIsLabOpen(false)} className="p-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full text-zinc-500 transition-colors">
                <X size={24} />
              </button>
            </header>
            
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 overflow-x-auto lg:overflow-y-auto p-6 flex lg:flex-col gap-6">
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">SUGGESTED SCENARIOS</h4>
                  <div className="flex lg:flex-col gap-3">
                    {DECISION_POINTS.map((point) => (
                      <button 
                        key={point.id} 
                        onClick={() => {
                          setCustomWhatIf(point.whatIfQuestion);
                          setSimulationResult(null);
                        }}
                        className={`flex-shrink-0 w-64 lg:w-full text-left p-4 rounded-2xl border transition-all ${customWhatIf === point.whatIfQuestion ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300' : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-indigo-400 text-zinc-700 dark:text-zinc-300'}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Zap size={14} className="text-indigo-500" />
                          <span className="text-xs font-bold truncate">{point.title}</span>
                        </div>
                        <p className="text-[10px] leading-tight line-clamp-2 text-zinc-500 dark:text-zinc-400">
                          {point.eventContext}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto hidden lg:block p-4 rounded-2xl bg-zinc-900 dark:bg-black text-zinc-400 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Archive Link Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] text-zinc-500">Connected to Chronos-Net</span>
                  </div>
                </div>
              </aside>
              
              <main className="flex-1 overflow-y-auto bg-white dark:bg-zinc-900 p-6 lg:p-12 relative">
                <div className="max-w-3xl mx-auto space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-indigo-500" />
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Simulate a Custom Turning Point</h3>
                    </div>
                    
                    <div className="relative group">
                      <textarea 
                        value={customWhatIf}
                        onChange={(e) => setCustomWhatIf(e.target.value)}
                        placeholder="e.g., What if the Ottoman Empire had remained neutral in WWI?"
                        className="w-full h-32 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none shadow-inner"
                      />
                      <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <button 
                          onClick={() => setCustomWhatIf('')}
                          className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                          title="Clear input"
                        >
                          <RefreshCcw size={16} />
                        </button>
                        <button 
                          onClick={() => runSimulation(customWhatIf)}
                          disabled={!customWhatIf.trim() || isSimulating}
                          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-500/20 disabled:opacity-50 transition-all flex items-center gap-2"
                        >
                          {isSimulating ? <Loader2 size={14} className="animate-spin" /> : <Zap size={14} />}
                          Run Simulation
                        </button>
                      </div>
                    </div>
                  </div>

                  {isSimulating ? (
                    <div className="flex flex-col items-center justify-center py-20 space-y-6">
                      <div className="relative">
                        <Loader2 size={48} className="animate-spin text-indigo-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Recalculating Historical Causality...</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">"Small changes, massive consequences."</p>
                      </div>
                    </div>
                  ) : simulationResult ? (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-12">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4">Simulation Results</span>
                        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                      </div>
                      <div className="prose prose-zinc lg:prose-xl dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-li:text-sm">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{simulationResult}</ReactMarkdown>
                      </div>
                      <div className="mt-16 p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 flex flex-col sm:flex-row gap-6 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                          <ShieldAlert size={24} />
                        </div>
                        <div className="space-y-3">
                          <h5 className="text-xs font-bold text-indigo-900 dark:text-indigo-100 uppercase tracking-widest">HISTORIAN'S PROBABILITY ASSESSMENT</h5>
                          <p className="text-sm text-indigo-700/80 dark:text-indigo-400/80 leading-relaxed italic">
                            The resulting timeline presented above is a scholarly projection of likely political and military divergence. Alternative outcomes remain theoretically possible within the framework of historical chaos theory.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : !customWhatIf && (
                    <div className="py-20 flex flex-col items-center justify-center text-center opacity-40">
                      <div className="w-24 h-24 rounded-full bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center mb-6">
                        <FlaskConical size={48} className="text-zinc-400" />
                      </div>
                      <p className="text-zinc-500 font-medium">Draft a question or select a preset to begin exploration.</p>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" onClick={() => setSelectedEvent(null)} />
          <div className="relative bg-white dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 border border-zinc-200 dark:border-zinc-800">
            <header className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-900/95 border-b border-zinc-100 dark:border-zinc-800 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em]">
                <span>{selectedEvent.period.replace('_', ' ')}</span>
                <span className="w-1 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                <span>RECORD {selectedEvent.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={(e) => handleShare(selectedEvent, e)} className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  {shareFeedback === selectedEvent.id ? (
                    <span className="text-[9px] font-bold text-zinc-900 dark:text-zinc-100">LINK COPIED</span>
                  ) : (
                    <Share2 size={18} />
                  )}
                </button>
                <button onClick={() => toggleBookmark(selectedEvent.id)} className={`p-2 transition-colors ${bookmarks.has(selectedEvent.id) ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'}`}><Bookmark size={18} fill={bookmarks.has(selectedEvent.id) ? "currentColor" : "none"} /></button>
                <button onClick={() => setSelectedEvent(null)} className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"><X size={20} /></button>
              </div>
            </header>

            <div className="px-8 sm:px-12 py-10 space-y-12">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-6xl font-bold heading leading-none text-zinc-900 dark:text-zinc-50">{selectedEvent.title}</h2>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium"><History size={14} /> <span>Primary Theater: {selectedEvent.location}</span></div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4 bg-zinc-100 dark:bg-zinc-800/50 p-3 pr-6 rounded-2xl min-w-[320px] h-16 border border-zinc-200 dark:border-zinc-700/50 transition-colors">
                    <button onClick={handleNarrate} disabled={isAudioLoading} className="w-10 h-10 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-full flex items-center justify-center hover:scale-105 transition-all flex-shrink-0 shadow-lg">
                      {isAudioLoading ? <Loader2 size={16} className="animate-spin" /> : isNarrating ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="ml-1" fill="currentColor" />}
                    </button>
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex justify-between text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] overflow-hidden">
                        <span className="whitespace-nowrap">ARCHIVAL NARRATION</span>
                        <span className="tabular-nums whitespace-nowrap">{formatTime(audioCurrentTime)} / {formatTime(audioDuration)}</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-900 dark:bg-zinc-50 transition-none" style={{ width: `${audioProgress}%` }} />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => toggleReadStatus(selectedEvent.id)} 
                    className={`flex items-center gap-3 h-16 px-6 rounded-2xl border text-[10px] font-bold uppercase tracking-[0.2em] flex-shrink-0 transition-all ${readEvents.has(selectedEvent.id) ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 shadow-md' : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600'}`}
                  >
                    {readEvents.has(selectedEvent.id) ? <CheckCircle2 size={16} /> : <Circle size={16} />} 
                    <span>{readEvents.has(selectedEvent.id) ? 'EXAMINED' : 'MARK EXAMINED'}</span>
                  </button>
                </div>
              </div>

              <div className="prose prose-zinc lg:prose-xl dark:prose-invert max-w-none border-l-4 border-zinc-900 dark:border-zinc-100 pl-8 py-2">
                <p className="leading-relaxed text-zinc-800 dark:text-zinc-200 font-medium">{selectedEvent.fullContent}</p>
              </div>

              {/* Historical Context Section */}
              <div className="p-8 sm:p-10 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-5 text-zinc-900 dark:text-zinc-100">
                  <Quote size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center">
                      <History size={16} />
                    </div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-50">STRATEGIC CONTEXT & LEGACY</h4>
                  </div>
                  <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif italic text-lg lg:text-xl">
                      {selectedEvent.historicalContext}
                    </p>
                  </div>
                </div>
              </div>

              {selectedEvent.coordinates && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">TACTICAL OVERVIEW</h4>
                  <div className="w-full h-96 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-950">
                    <div ref={mapContainerRef} className="w-full h-full" />
                  </div>
                </div>
              )}

              {selectedEvent.sources && selectedEvent.sources.length > 0 && (
                <div className="pt-10 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">ARCHIVAL SOURCES</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {selectedEvent.sources.map((source, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <BookOpen size={12} className="mt-0.5 flex-shrink-0" />
                        <span>{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="flex-shrink-0 py-10 px-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-center text-zinc-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest bg-white dark:bg-zinc-950 gap-4 relative z-[100]">
        <p>© 2024 CHRONICLES OF CONFLICT • SCHOLARLY DIGITAL EDITION</p>
      </footer>
    </div>
  );
};

export default App;
