"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { OriginalNavbar } from "./original-navbar";
import { CompactNavbar } from "./compact-navbar";
import { MobileMenu } from "./mobile-menu";
import { MenuItem } from "@/lib/types";

// Definición de los elementos del menú

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: "Inicio",
      href: `/`,
    },
    {
      label: "Acerca de",
      children: [
        { label: "Edición N° 33", href: `/${locale}/edicion-33` },
        {
          label: "Información turística",
          href: `/${locale}/informacion-turistica`,
        },
        { label: "Nos acompañan", href: `/${locale}/nos-acompanan` },
      ],
    },
    // {
    //   label: "Contenido",
    //   children: [
    //     { label: "Cronograma", href: "/${locale}/cronograma" },
    //     { label: "Disertantes", href: "/${locale}/disertantes" },
    //   ],
    // },
    {
      label: "Prensa",
      children: [
        { label: "Gacetilla", href: `/${locale}/gacetilla` },
        // { label: "Fotos", href: "/${locale}/fotos" },
      ],
    },
    {
      label: "Comercial",
      href: `comercial`,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);

        // Cerrar el menú cuando se llega al tope de la página
        if (!isScrolled && menuOpen) {
          setMenuOpen(false);
        }
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
  }, [scrolled, menuOpen]);

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

  return (
    <>
      <OriginalNavbar
        scrolled={scrolled}
        locale={locale as string}
        menuItems={menuItems}
      />

      <CompactNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        locale={locale as string}
      />

      <MobileMenu
        menuRef={menuRef}
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        menuItems={menuItems}
      />
    </>
  );
}
