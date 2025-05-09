import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative mx-4 overflow-hidden rounded-[20px] md:mx-[30px] mt-8 md:mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/campo-background.png"
          alt="Campo agrícola"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-blend-multiply" />
      </div>

      {/* Content container */}
      <div className="relative w-full gap-8 p-6 md:grid md:grid-cols-2 md:px-24 md:py-28">
        {/* Left column */}
        <div className="flex w-full flex-col justify-center">
          <h2 className="mb-6 text-4xl font-light leading-tight text-white md:text-5xl lg:text-5xl">
            ¿Qué es el
            <br />
            <span className="font-medium">Congreso Aapresid?</span>
          </h2>
          <p className="w-full max-w-[45ch] text-base text-white">
            El Congreso Aapresid es un evento de referencia internacional, que
            lleva más de tres décadas conectando innovación, tecnología y
            conocimiento con el propósito de impulsar sistemas productivos cada
            vez más sustentables. Durante cada edición, congrega a los más
            importantes referentes nacionales e internacionales para discutir y
            posicionar contenido prospectivo de interés para el agro.
          </p>
        </div>

        {/* Right column */}
        <div className="mt-8 flex flex-col items-start md:mt-0 md:px-20">
          <h3 className="mb-6 max-w-[20ch] text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            <span className="font-light">Conocé el </span>
            <br className="hidden md:block" />
            cronograma <br className="hidden md:block" />
            completo <br className="hidden md:block" />
            <span className="font-light">de charlas</span>
          </h3>
          <button className="pointer-events-none relative overflow-hidden rounded-full border border-white bg-white/10 px-[30px] py-[12px] font-medium text-white transition-colors duration-500 before:absolute before:-left-[147%] before:top-[125%] before:z-[1] before:h-[290%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:before:scale-[3]">
            <span className="relative z-10 text-lg">Próximamente</span>
          </button>
        </div>
      </div>

      {/* Decorative hexagons */}
      <Image
        src="/images/decorative-hexa.svg"
        alt="Hexagon"
        width={200}
        height={200}
        className="absolute -right-1 -top-10"
      />

      <Image
        src="/images/decorative-hexa2.svg"
        alt="Hexagon"
        width={150}
        height={150}
        className="absolute -left-7 bottom-10 opacity-50"
      />
    </section>
  );
}
