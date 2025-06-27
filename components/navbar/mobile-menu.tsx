"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { MenuItem } from "@/lib/types";
import ChevronArrow from "../icons/ChevronArrow";
import CloseIcon from "../icons/CloseIcon";
import ArrowBack from "../icons/ArrowBack";
import { useLocale, useTranslations } from "next-intl";

interface MobileMenuProps {
  menuRef: React.RefObject<HTMLDivElement | null>;
  menuOpen: boolean;
  closeMenu: () => void;
  menuItems: MenuItem[];
}

export function MobileMenu({
  menuRef,
  menuOpen,
  closeMenu,
  menuItems,
}: MobileMenuProps) {
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>(menuItems);
  const [menuHistory, setMenuHistory] = useState<MenuItem[][]>([]);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const locale = useLocale()
  const t = useTranslations("navbar");

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.children) {
      // Si el item tiene hijos, navegar al submenu
      setMenuHistory([...menuHistory, currentMenu]);
      setCurrentMenu(item.children);
      setCurrentTitle(item.label);
    } else if (item.href) {
      // Si es un enlace, navegar y cerrar el menu
      closeMenu();
      resetMenu();
    }
  };

  const goBack = () => {
    if (menuHistory.length > 0) {
      const previousMenu = menuHistory[menuHistory.length - 1];
      setCurrentMenu(previousMenu);
      setMenuHistory(menuHistory.slice(0, -1));

      if (menuHistory.length === 1) {
        setCurrentTitle("");
      }
    }
  };

  const resetMenu = () => {
    setCurrentMenu(menuItems);
    setMenuHistory([]);
    setCurrentTitle("");
  };

  const handleClose = () => {
    closeMenu();
    resetMenu();
  };

  const isSubMenu = menuHistory.length > 0;

  return (
    <div
      className={`fixed inset-0 z-[10000] transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        ref={menuRef}
        className={`absolute right-0 top-0 h-screen w-full max-w-md bg-[#5F5F5FB2] px-16 py-14 shadow-xl backdrop-blur-[10px] transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex-1"></div>
            <button
              onClick={handleClose}
              className="text-white transition-colors hover:text-white/70"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          {/* Botón GoBack animado */}
          <AnimatePresence mode="wait">
            {isSubMenu && (
              <motion.button
                key={"goback-" + menuHistory.length}
                onClick={goBack}
                className="mb-10 w-fit text-white"
                aria-label="Go back"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <span className="inline-block rounded-full border border-white px-[22px] py-[10px]">
                  <ArrowBack />
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Título del submenu animado */}
          <AnimatePresence mode="wait">
            {isSubMenu && currentTitle && (
              <motion.div
                key={"title-" + currentTitle + menuHistory.length}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="mb-[75px]"
              >
                <h2 className="text-2xl text-[40px] text-white">
                  {currentTitle}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTitle + menuHistory.length}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={`flex flex-col ${isSubMenu ? "space-y-1" : "space-y-6"}`}
            >
              {currentMenu.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    item.href.includes("https") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between tracking-wider ${isSubMenu ? "text-[28px] font-light" : "text-[40px]"} text-white transition-colors hover:text-white/70`}
                        onClick={handleClose}
                      >
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between tracking-wider ${isSubMenu ? "text-[28px] font-light" : "text-[40px]"} text-white transition-colors hover:text-white/70`}
                        onClick={handleClose}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )
                  ) : (
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      className="flex items-baseline justify-between gap-5 text-[40px] tracking-wider text-white transition-colors hover:text-white/70"
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <div className="relative top-1">
                          <ChevronArrow />
                        </div>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Botón de Inscripciones */}
          <div className="mt-auto pt-8">
            <Link
              href={`/${locale}/inscripciones`}
              className="block w-full rounded-full bg-[#ED7F00] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#ED7F00]/90"
              onClick={handleClose}
            >
              {t('inscripciones')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
