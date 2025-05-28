import type React from "react"
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
  bio: string;
  smallImage: string;
  largeImage: string;
  position: number; // Posición en la grilla (1-12)
}