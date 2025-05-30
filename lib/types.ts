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

export interface EventSpeaker {
  id: number;
  name: string;
  company: string;
  featured: boolean | null;
  description: string; // JSON string, se parsea en runtime
  link: string;
  image: string;
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

export interface EventRoom {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventTheme {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventModerator {
  id: number;
  name: string;
  company: string;
  featured: boolean | null;
  description: string; // JSON string, se parsea en runtime
  link: string;
  image: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CharlaEvent {
  id: number;
  code: string;
  date: string;
  start_time: string;
  end_time: string;
  multilingual_video_link: string; // JSON string
  multilingual_talk: string; // JSON string
  multilingual_title: string; // JSON string
  multilingual_description: string; // JSON string
  languages: string | null;
  createdAt: string;
  updatedAt: string;
  roomId: number;
  themeId: number;
  moderatorId: number;
  Speakers: EventSpeaker[];
  Room: EventRoom;
  Theme: EventTheme;
  Moderator: EventModerator;
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
  pageSize: number;
  data: GacetillaApiItem[];
}
