import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <nav className="w-full py-4 px-4 md:px-8">
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
