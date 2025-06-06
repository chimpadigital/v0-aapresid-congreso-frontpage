"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { MenuItem, NavItemProps } from "@/lib/types"
  
interface ExtendedNavItemProps extends NavItemProps {
  menuItems?: MenuItem[]
}

export function NavItem({ label, hasDropdown = false, menuItems }: ExtendedNavItemProps) {
  const pathname = usePathname()
  // Extrae el path sin el locale
  const pathWithoutLocale = pathname.replace(/^\/(es|en)(\/|$)/, "/")

  // Determinar si es un selector de idioma o un menú normal
  const isLanguageSelector = label === "es" || label === "en"

  return (
    <div className="group relative">
      <button className="flex items-center text-lg tracking-wider text-white transition-colors hover:text-gray-200">
        {isLanguageSelector ? label.toLocaleUpperCase() : label}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </button>

      {/* Dropdown para selector de idioma */}
      {hasDropdown && isLanguageSelector && (
        <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[120px] rounded-lg bg-white py-2 opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
          <Link
            href={`/es${pathWithoutLocale}`}
            className="block px-4 py-2 text-primary transition-colors hover:bg-accent/10 hover:text-accent"
          >
            Español
          </Link>
          <Link
            href={`/en${pathWithoutLocale}`}
            className="block px-4 py-2 text-primary transition-colors hover:bg-accent/10 hover:text-accent"
          >
            English
          </Link>
        </div>
      )}

      {/* Dropdown para menús normales */}
      {hasDropdown && !isLanguageSelector && menuItems && (
        <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[200px] rounded-lg bg-white py-2 opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="block px-4 py-2 text-primary transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
