"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavItem } from "./nav-item";

interface CompactNavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
  locale: string;
}

export function CompactNavbar({
  scrolled,
  menuOpen,
  toggleMenu,
  locale,
}: CompactNavbarProps) {
  return (
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
            <div
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
              }}
              className="grid h-[56px] place-items-center rounded-full bg-[#7D7777B2] px-5 text-white backdrop-blur-sm"
            >
              <NavItem label={locale} hasDropdown />
            </div>

            {/* INSCRIPCIONES */}
            <Link
              href={`/${locale}/inscripciones`}
              className="relative z-[1] ml-4 overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] font-medium text-[#fff] transition-colors duration-500 before:absolute before:-left-[145%] before:top-[120%] before:z-[-1] before:h-[190%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-primary hover:before:scale-[3]"
            >
              Inscripciones
            </Link>

            <button
              className="-z-[1] flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#7D7777B2]/70 backdrop-blur-sm"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              style={{ opacity: menuOpen ? 0 : 1 }}
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
