"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoNavbar from "@/public/images/logo-navbar.svg";
import { useLocale, useTranslations } from "next-intl";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const t = useTranslations("navbar");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const locale = useLocale();

  return (
    <>
      {/* Original navbar - visible when not scrolled */}
      <nav
        className={`fixed left-0 right-0 z-[9999] mx-8 transition-all duration-300 xs:py-[19px] md:static md:top-0 md:mx-0 md:w-full md:px-[14px] ${
          scrolled
            ? "top-2 md:pointer-events-none md:opacity-0"
            : "top-6 md:opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-3 rounded-full bg-[#A6A6A6]/50 px-[19px] py-[14px] backdrop-blur-[10px] md:gap-4">
            <div className="flex h-full w-full items-center">
              <Link href="/" className="flex h-full items-center">
                <div className="relative flex h-10 w-full items-center">
                  <Image
                    src={LogoNavbar}
                    alt="Congreso Aapresid Logo"
                    className="h-10 max-h-full w-auto max-w-full object-contain"
                  />
                </div>
              </Link>
            </div>
            <div className="md:hidden">
              <NavItem label={locale} hasDropdown />
            </div>

            <div className="hidden items-center space-x-6 text-white md:flex">
              {/* <NavItem label="Acerca de" hasDropdown />
              <NavItem label="Contenidos" hasDropdown />
              <NavItem label="Prensa" hasDropdown />
              <NavItem label="Comercial" /> */}
              <NavItem label={locale} hasDropdown />

              <Link
                href="/inscripciones"
                className="relative z-[1] ml-4 overflow-hidden rounded-full bg-white px-[30px] py-[15.5px] font-medium text-[#2D3D34] transition-colors duration-500 before:absolute before:-left-[145%] before:top-[120%] before:z-[-1] before:h-[190%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-white hover:before:scale-[3]"
              >
                {t("inscripciones")}
              </Link>
            </div>

            {/* DESACTIVADO ENTREGA 1 - Menu Hamburguesa */}
            <button className="bottom-4 right-4 z-[10001] hidden text-white">
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
        </div>
      </nav>

      {/* Compact navbar - visible when scrolled */}
      <nav
        className={`fixed left-0 right-0 top-0 z-[9999] hidden transition-all duration-300 md:block ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="z-[9999999] mx-auto my-4 max-w-7xl">
          <div className="flex items-center justify-between rounded-full bg-transparent px-4 py-3 md:px-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="rounded-full bg-[#7D7777]/70 px-4 py-[13.6px] backdrop-blur-sm">
                  <Image
                    src="/images/logos-juntos.svg"
                    alt="Congreso Aapresid"
                    width={220}
                    height={40}
                  />
                </div>
              </Link>
            </div>

            <div className="z-[9999999] flex items-center gap-3">
              <NavItem label="ES" hasDropdown />
              <Link
                href="/inscripciones"
                className="relative z-[1] ml-4 overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] font-medium text-[#fff] transition-colors duration-500 before:absolute before:-left-[145%] before:top-[120%] before:z-[-1] before:h-[190%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-primary hover:before:scale-[3]"
              >
                Inscripciones
              </Link>

              {/* DESACTIVADO ENTREGA 1 */}
              {/* <button
                className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#D9D9D9]/80 backdrop-blur-sm"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="h-6 w-6 text-[#2D3D34]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#2D3D34]" />
                )}
              </button> */}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          className={`fixed inset-0 z-[10000] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className={`absolute right-0 top-0 h-screen w-full max-w-sm bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col">
              <div className="mb-8 flex justify-end">
                <button
                  onClick={closeMenu}
                  className="text-[#2D3D34] transition-colors hover:text-[#64B33D]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                <MobileNavItem label="Acerca de" onClick={closeMenu}>
                  <MobileSubItem
                    label="¿Qué es el Congreso?"
                    href="/acerca-de"
                    onClick={closeMenu}
                  />
                  <MobileSubItem
                    label="Historia"
                    href="/historia"
                    onClick={closeMenu}
                  />
                  <MobileSubItem
                    label="Ediciones anteriores"
                    href="/ediciones"
                    onClick={closeMenu}
                  />
                </MobileNavItem>

                <MobileNavItem label="Contenidos" onClick={closeMenu}>
                  <MobileSubItem
                    label="Programa"
                    href="/programa"
                    onClick={closeMenu}
                  />
                  <MobileSubItem
                    label="Oradores"
                    href="/oradores"
                    onClick={closeMenu}
                  />
                  <MobileSubItem
                    label="Ejes temáticos"
                    href="/ejes-tematicos"
                    onClick={closeMenu}
                  />
                </MobileNavItem>

                <MobileNavItem label="Prensa" onClick={closeMenu}>
                  <MobileSubItem
                    label="Noticias"
                    href="/noticias"
                    onClick={closeMenu}
                  />
                  <MobileSubItem
                    label="Contacto"
                    href="/contacto-prensa"
                    onClick={closeMenu}
                  />
                </MobileNavItem>

                <MobileNavItem
                  label="Comercial"
                  href="/comercial"
                  onClick={closeMenu}
                />

                <MobileNavItem label="ES">
                  <MobileSubItem
                    label="Español"
                    href="/es"
                    onClick={closeMenu}
                  />
                  <MobileSubItem
                    label="English"
                    href="/en"
                    onClick={closeMenu}
                  />
                </MobileNavItem>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/inscripciones"
                  className="block w-full rounded-full bg-[#ED7F00] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#ED7F00]/90"
                  onClick={closeMenu}
                >
                  Inscripciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavItem({
  label,
  hasDropdown = false,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <div className="group relative">
      <button className="flex items-center font-medium text-white transition-colors hover:text-[#64B33D]">
        {label.toLocaleUpperCase()}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </button>
      {hasDropdown && (label === "es" || label === "en") && (
        <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[120px] rounded-lg bg-white py-2 opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
          <Link
            href="/es"
            className="block px-4 py-2 text-[#2D3D34] transition-colors hover:bg-[#64B33D]/10 hover:text-[#64B33D]"
          >
            Español
          </Link>
          <Link
            href="/en"
            className="block px-4 py-2 text-[#2D3D34] transition-colors hover:bg-[#64B33D]/10 hover:text-[#64B33D]"
          >
            English
          </Link>
        </div>
      )}
    </div>
  );
}

interface MobileNavItemProps {
  label: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

function MobileNavItem({ label, href, onClick, children }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (href) {
    return (
      <Link
        href={href}
        className="text-xl font-medium text-white transition-colors hover:text-[#64B33D]"
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="flex w-full items-center justify-between text-xl font-medium text-white transition-colors hover:text-[#64B33D]"
        onClick={toggleOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && children && (
        <div className="ml-4 mt-2 space-y-2">{children}</div>
      )}
    </div>
  );
}

function MobileSubItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="block py-1 text-[#2D3D34]/80 transition-colors hover:text-[#64B33D]"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
