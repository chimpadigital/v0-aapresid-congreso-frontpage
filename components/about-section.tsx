import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="relative m-[30px] rounded-[20px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/campo-background.png" alt="Campo agrícola" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content container */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Qué es el
            <br />
            Congreso Aapresid?
          </h2>
          <p className="text-white text-lg">
            El Congreso Aapresid es un evento de referencia internacional, que lleva más de tres décadas conectando
            innovación, tecnología y conocimiento con el propósito de impulsar sistemas productivos cada vez más
            sustentables. Durante cada edición, congrega a los más importantes referentes nacionales e internacionales
            para discutir y posicionar contenido prospectivo de interés para el agro.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center items-start md:items-end">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Conocé el
            <br />
            cronograma
            <br />
            completo
            <br />
            de charlas
          </h3>
          <Link
            href="/cronograma"
            className="inline-flex items-center justify-center text-white border-2 border-white rounded-full py-3 px-8 hover:bg-white/10 transition-colors w-[250px]"
          >
            <span className="text-lg">Próximamente</span>
          </Link>
        </div>
      </div>

      {/* Decorative hexagons */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl rotate-45 z-5"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-2xl rotate-45 z-5"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-white/10 rounded-2xl rotate-45 z-5"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-white/10 rounded-2xl rotate-45 z-5"></div>
    </section>
  )
}
