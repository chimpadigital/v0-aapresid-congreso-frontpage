import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function InscriptionsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row relative">
        {/* Left side - Dark green with circuit pattern */}
        <div className="w-full md:w-[calc(50%+20px)] bg-[#2D3D34] relative py-16 px-8 md:py-20 md:px-16 rounded-l-[30px]">
          {/* Circuit pattern background */}
          <div className="absolute inset-0">
            <Image src="/images/circuit-pattern.png" alt="" fill className="object-cover" />
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative z-10">Inscripciones</h2>
        </div>

        {/* Right side - Light green */}
        <div className="w-full md:w-[calc(50%+20px)] md:-ml-[40px] md:z-20 bg-[#64B33D] py-16 px-8 md:py-20 md:px-16 flex flex-col items-center justify-center rounded-[30px]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            ¿Sos socio Aapresid?
          </h3>

          <Link
            href="/inscripciones"
            className="inline-flex items-center justify-center gap-2 text-white border-2 border-white rounded-full py-3 px-8 hover:bg-white/10 transition-colors w-[374px]"
          >
            <span className="text-lg">Inscribite acá</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
