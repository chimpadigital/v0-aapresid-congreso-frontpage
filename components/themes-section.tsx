import Image from "next/image"
import { ArrowLeft, ArrowRight, Eye } from "lucide-react"

export function ThemesSection() {
  return (
    <section className="relative m-[30px] rounded-[20px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/trama-background.png" alt="" fill className="object-cover" />
      </div>

      {/* Decorative hexagons */}
      <div className="absolute right-0 top-0 z-0">
        <Image src="/images/vector1.svg" alt="" width={97} height={108} className="opacity-40" />
      </div>
      <div className="absolute right-20 bottom-10 z-0">
        <Image src="/images/vector2.svg" alt="" width={72} height={82} />
      </div>
      <div className="absolute right-5 top-40 z-0">
        <Image src="/images/vector3.svg" alt="" width={36} height={85} />
      </div>

      {/* Content container */}
      <div className="relative z-10 p-8 md:p-16 grid md:grid-cols-2 gap-8">
        {/* Left column - Pink card */}
        <div className="flex flex-col">
          <div className="bg-[#ED7F80] rounded-[20px] p-8 md:p-12 flex flex-col items-center md:items-start">
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <Eye className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
              Aprender
              <br />
              produciendo
            </h3>
          </div>

          {/* Navigation buttons */}
          <div className="flex mt-8 gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right column - Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Ejes Temáticos</h2>
          <p className="text-white text-xl mb-8">Conocé los ejes temáticos de esta edición</p>
          <p className="text-white">
            Una sinergia entre la ciencia, los organismos de investigación y los productores, quienes participan
            activamente de los ensayos llevados a cabo en escenarios reales.
          </p>
          <p className="text-white mt-4">
            Pensado para dar respuestas a las demandas del productor a través del desarrollo de tecnologías
            sustentables.
          </p>
        </div>
      </div>
    </section>
  )
}
