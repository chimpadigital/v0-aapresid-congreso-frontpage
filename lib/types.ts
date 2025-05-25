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