
export type WarPeriod = 'PRE_WWI' | 'WWI' | 'INTERWAR' | 'WWII' | 'POST_WWII';

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  historicalContext: string; // Broader narrative and long-term impact
  period: WarPeriod;
  location?: string;
  image?: string;
  coordinates?: [number, number]; // [latitude, longitude]
  sources?: string[];
}

export interface DecisionPoint {
  id: string;
  title: string;
  eventContext: string;
  whatIfQuestion: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface User {
  name: string;
  email: string;
  photoUrl: string;
}
