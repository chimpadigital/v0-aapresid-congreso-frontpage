import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative m-[30px] rounded-[20px] overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/video-footer.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="absolute inset-0 bg-[#2D3D34]/70" />
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Logos */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <Image src="/images/logo-congreso.svg" alt="Congreso Aapresid" width={180} height={60} />
            <div className="h-12 w-px bg-white/30 mx-2"></div>
            <div className="flex items-center">
              <Image src="/images/logo-codigo.svg" alt="Código Abierto" width={180} height={60} />
            </div>
          </div>

          {/* Right - Date and button */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-white text-center md:text-right">
              <div className="text-lg">6 al 8 de agosto</div>
              <div className="text-lg">La Rural de Palermo, Buenos Aires</div>
            </div>
            <Link
              href="/inscripciones"
              className="bg-[#ED7F00] text-white px-8 py-3 rounded-full hover:bg-[#ED7F00]/90 transition-colors"
            >
              Inscripciones
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-8"></div>

        {/* Bottom section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Aapresid */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo-congreso.svg" alt="Aapresid" width={150} height={50} />
            </div>

            <div className="text-white text-xl mb-4">aapresid.org.ar</div>

            <div className="text-white mb-4">
              <div>Tel: +54 (341) 4260745/46</div>
              <div>Dorrego 1639, S2000 Rosario,</div>
              <div>Santa Fe.</div>
            </div>

            <div className="text-white mb-6">
              <div>Sumate a nuestra comunidad de</div>
              <div>conocimiento e innovación en Red.</div>
              <div className="font-bold">¡Juntos sabemos más!</div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>

          {/* Right - Expoagro */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex flex-col items-start md:items-end mb-4">
              <Image src="/images/logo-expoagro.svg" alt="Expoagro" width={150} height={50} />
            </div>

            <div className="text-white text-xl mb-4 md:text-right">expoagro.com.ar</div>

            <div className="text-white mb-6 md:text-right">
              <div>Tel: 011 5128 9800/05</div>
              <div>Av. Corrientes 1302 5 Piso</div>
              <div>(C1043ABN) CABA</div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} />
              <SocialIcon icon={<Tiktok className="w-5 h-5" />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D3D34] hover:bg-white/90 transition-colors"
    >
      {icon}
    </Link>
  )
}

function Tiktok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.306 5.124 5.124 0 0 1-1.516-3.6h-3.446v13.6c0 1.14-.93 2.064-2.071 2.064a2.068 2.068 0 0 1-2.07-2.064 2.068 2.068 0 0 1 2.07-2.064c.115 0 .227.01.336.027V8.756a5.498 5.498 0 0 0-.336-.01c-3.037 0-5.5 2.463-5.5 5.5s2.463 5.5 5.5 5.5 5.5-2.463 5.5-5.5V9.074a8.566 8.566 0 0 0 4.947 1.562V7.182c0 .001 0 .001 0 0 0-1.14.93-2.064 2.071-2.064h-2.071V5.562z"
        fill="currentColor"
      />
    </svg>
  )
}
