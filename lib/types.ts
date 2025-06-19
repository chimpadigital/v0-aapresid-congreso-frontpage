import type React from "react"

export interface EjeIconSize {
  size?: number;
}

export interface MenuItem {
  label: string
  href?: string
  children?: MenuItem[]
}

export interface NavItemProps {
  label: string
  hasDropdown?: boolean
}

export interface MobileNavItemProps {
  label: string
  href?: string
  onClick?: () => void
  children?: React.ReactNode
}


export type FaqItem = {
  question: string;
  answer: string | string[];
  isOpen?: boolean;
};

export interface SponsorPropsItem {
  imagePath: string;
  title: string;
  link: string;
}


export interface Speaker {
  id: number;
  name: string;
  company: string;
  description: string; // JSON string, se parsea en runtime
  link: string;
  image: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface MultilingualField {
  en: string;
  es: string;
  [key: string]: string | undefined;
}

export interface EventSpeaker {
  id: number;
  name: string;
  company: string | null;
  featured: boolean | null;
  description: string | null;
  link: string | null;
  image: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  EventSpeakers: {
    createdAt: string;
    updatedAt: string;
    eventId: number;
    SpeakerId: number;
  };
}

export interface Room {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Theme {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Moderator {
  id: number;
  name: string;
  company: string | null;
  featured: boolean | null;
  description: string | null;
  link: string | null;
  image: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: number;
  code: string;
  date: string;
  start_time: string;
  end_time: string;
  multilingual_video_link: MultilingualField;
  multilingual_talk: MultilingualField;
  multilingual_title: MultilingualField;
  multilingual_description: MultilingualField;
  languages: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  roomId: number;
  themeId: number;
  moderatorId: number;
  Speakers: EventSpeaker[];
  Room: Room;
  Theme: Theme;
  Moderator: Moderator;
}

export interface EventsApiResponse {
  data: Event[];
  total: number;
  page: number;
  totalPages: number;
}

export interface GacetillaApiItem {
  id: number;
  title: string; // JSON string: {"en":"...","es":"..."}
  excerpt: string; // JSON string: {"en":"...","es":"..."}
  content_es: string;
  content_en: string;
  date: string;
  image: string;
  file: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface GacetillaApiResponse {
  total: number;
  page: number;
  limit: number;
  data: GacetillaApiItem[];
}

export interface GacetillaDetalle {
  id: number;
  title: string; // JSON string: {"en":"...","es":"..."}
  excerpt: string; // JSON string: {"en":"...","es":"..."}
  content_es: string;
  content_en: string;
  date: string;
  image: string;
  file: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface LogoItem {
  id: number;
  description: string | null; // JSON string: {"en":"...","es":"..."} o null
  link: string; // JSON string: {"en":"...","es":"..."}
  title: string; // JSON string: {"en":"...","es":"..."}
  imagePath: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}

export interface LogoCategory {
  id: number;
  name: string; // JSON string: {"en":"...","es":"..."}
  description: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
  Logos: LogoItem[];
}


export interface FiltrosData {
  speakers: EventSpeaker[];
  themes: Theme[];
  rooms: Room[];
  days: string[];
  events: Event[];
}
