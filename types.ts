
export type WarPeriod = 'PRE_WWI' | 'WWI' | 'INTERWAR' | 'WWII' | 'POST_WWII';

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  period: WarPeriod;
  location?: string;
  image?: string;
  coordinates?: [number, number]; // [latitude, longitude]
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
