"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NavItem } from "./nav-item";
import LogoNavbar from "@/public/images/logo-navbar.svg";
import { MenuItem } from "@/lib/types";

interface OriginalNavbarProps {
  scrolled: boolean;
  locale: string;
  menuItems: MenuItem[];
  toggleMenu: () => void;
  menuOpen: boolean;
}

// Definición de los elementos del menú principal

export function OriginalNavbar({
  scrolled,
  locale,
  menuItems,
  toggleMenu,
  menuOpen,
}: OriginalNavbarProps) {
  const t = useTranslations("navbar");

  return (
    <nav
      className={`fixed left-0 right-0 z-[9999] mx-8 transition-all duration-300 xs:pt-14 md:fixed md:top-0 md:mx-0 md:w-full md:px-[14px] ${
        scrolled
          ? "top-2 md:pointer-events-none md:opacity-0"
          : "top-6 md:opacity-100"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-3 rounded-full bg-[#A6A6A6]/50 px-[19px] py-[14px] backdrop-blur-[10px] md:gap-4">
          <div className="flex h-full items-center">
            <Link href="/" className="flex h-full items-center">
              <div className="relative flex h-10 w-full items-center">
                <Image
                  src={LogoNavbar || "/placeholder.svg"}
                  alt="Congreso Aapresid Logo"
                  className="h-10 max-h-full w-auto max-w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Menú de idioma en móvil */}
          <div className="lg:hidden flex items-center justify-end gap-3">
            <NavItem label={locale} hasDropdown />
            <button
              className="bottom-4 right-4 z-[10001] text-white"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              style={{ opacity: menuOpen ? 0 : 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menú principal en desktop */}
          <div className="hidden items-center justify-end space-x-6 text-white lg:flex">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  item.href.includes("https") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg tracking-wider text-white transition-colors hover:text-gray-200"
                    >
                     {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-lg tracking-wider text-white transition-colors hover:text-gray-200"
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <NavItem
                    label={item.label}
                    hasDropdown
                    menuItems={item.children}
                  />
                )}
              </div>
            ))}

            {/* Selector de idioma */}
            <NavItem label={locale} hasDropdown />

            {/* INSCRIPCIONES - Comentado por ahora */}
            <Link
              href={`/${locale}/inscripciones`}
              className="relative z-[1] ml-4 overflow-hidden rounded-full bg-white px-[30px] py-[15.5px] font-medium text-primary transition-colors duration-500 before:absolute before:-left-[145%] before:top-[120%] before:z-[-1] before:h-[190%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-white hover:before:scale-[3]"
              >
              {t("inscripciones")}
              </Link>
          </div>

          {/* DESACTIVADO ENTREGA 1 - Menu Hamburguesa */}
        </div>
      </div>
    </nav>
  );
}
