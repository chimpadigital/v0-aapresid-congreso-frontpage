"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [scrolled])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Original navbar - visible when not scrolled */}
      <nav
        className={`w-full py-4 px-4 md:px-8 transition-all duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F0F0F1]/80 backdrop-blur-sm rounded-full py-3 px-4 md:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/images/logo-navbar.svg" alt="Congreso Aapresid Logo" className="h-10 w-auto" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6 text-white">
              <NavItem label="Acerca de" hasDropdown />
              <NavItem label="Contenidos" hasDropdown />
              <NavItem label="Prensa" hasDropdown />
              <NavItem label="Comercial" />
              <NavItem label="ES" hasDropdown />

              <Link
                href="/inscripciones"
                className="ml-4 bg-white text-[#2D3D34] font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Inscripciones
              </Link>
            </div>

            <button className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Compact navbar - visible when scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-4 my-4">
          <div className="bg-transparent rounded-full py-3 px-4 md:px-6 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-[#D9D9D9]/80 backdrop-blur-sm rounded-full py-2 px-4">
                  <Image src="/images/logos-juntos.svg" alt="Congreso Aapresid" width={200} height={40} />
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/inscripciones"
                className="bg-[#ED7F00] text-white font-medium px-6 py-2 rounded-full hover:bg-[#ED7F00]/90 transition-colors"
              >
                Inscripciones
              </Link>

              <button
                className="w-10 h-10 bg-[#D9D9D9]/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6 text-[#2D3D34]" /> : <Menu className="w-6 h-6 text-[#2D3D34]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          className={`fixed inset-0 z-[10000] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute right-0 top-0 h-screen w-full max-w-sm bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="text-[#2D3D34] hover:text-[#64B33D] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                <MobileNavItem label="Acerca de" onClick={closeMenu}>
                  <MobileSubItem label="¿Qué es el Congreso?" href="/acerca-de" onClick={closeMenu} />
                  <MobileSubItem label="Historia" href="/historia" onClick={closeMenu} />
                  <MobileSubItem label="Ediciones anteriores" href="/ediciones" onClick={closeMenu} />
                </MobileNavItem>

                <MobileNavItem label="Contenidos" onClick={closeMenu}>
                  <MobileSubItem label="Programa" href="/programa" onClick={closeMenu} />
                  <MobileSubItem label="Oradores" href="/oradores" onClick={closeMenu} />
                  <MobileSubItem label="Ejes temáticos" href="/ejes-tematicos" onClick={closeMenu} />
                </MobileNavItem>

                <MobileNavItem label="Prensa" onClick={closeMenu}>
                  <MobileSubItem label="Noticias" href="/noticias" onClick={closeMenu} />
                  <MobileSubItem label="Contacto" href="/contacto-prensa" onClick={closeMenu} />
                </MobileNavItem>

                <MobileNavItem label="Comercial" href="/comercial" onClick={closeMenu} />

                <MobileNavItem label="ES" onClick={closeMenu}>
                  <MobileSubItem label="Español" href="/es" onClick={closeMenu} />
                  <MobileSubItem label="English" href="/en" onClick={closeMenu} />
                </MobileNavItem>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/inscripciones"
                  className="block w-full bg-[#ED7F00] text-white font-medium px-6 py-3 rounded-full text-center hover:bg-[#ED7F00]/90 transition-colors"
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
  )
}

function NavItem({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) {
  return (
    <div className="relative group">
      <button className="flex items-center text-[#2D3D34] font-medium hover:text-[#64B33D] transition-colors">
        {label}
        {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
      </button>
    </div>
  )
}

interface MobileNavItemProps {
  label: string
  href?: string
  onClick?: () => void
  children?: React.ReactNode
}

function MobileNavItem({ label, href, onClick, children }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  if (href) {
    return (
      <Link
        href={href}
        className="text-[#2D3D34] text-xl font-medium hover:text-[#64B33D] transition-colors"
        onClick={onClick}
      >
        {label}
      </Link>
    )
  }

  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-[#2D3D34] text-xl font-medium hover:text-[#64B33D] transition-colors"
        onClick={toggleOpen}
      >
        <span>{label}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && children && <div className="mt-2 ml-4 space-y-2">{children}</div>}
    </div>
  )
}

function MobileSubItem({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <Link href={href} className="block text-[#2D3D34]/80 hover:text-[#64B33D] transition-colors py-1" onClick={onClick}>
      {label}
    </Link>
  )
}
