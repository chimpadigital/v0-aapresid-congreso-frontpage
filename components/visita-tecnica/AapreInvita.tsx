import React from "react";
import ArrowRounded from "../icons/ArrowRounded";
import Image from "next/image";
import Link from "next/link";

const AapreInvita = () => {
  return (
    <section className="relative mx-4 mt-10 overflow-hidden rounded-[20px] bg-[#f0f0f1] px-6 py-14 md:mx-[33px] md:pb-[110px] md:pt-[140px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:gap-5 lg:grid-cols-2">
          {/* Left Content */}
          <div className="pl-5">
            <h1 className="mb-5 text-4xl font-medium leading-none text-primary">
              Aapresid te invita a conocer el campo argentino en la previa del
              Congreso
            </h1>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Participá en los impactantes side events que realizaremos con el
              objetivo de adentrarte en el corazón de la agricultura argentina y
              tomar contacto con destacados productores y expertos locales:
            </p>

            {/* Event Buttons */}
            <div className="flex flex-wrap gap-[50px]">
              <div className="space-y-3">
                <p className="text-xl text-primary">5 de agosto</p>
                <Link
                  href={"#dia-tecnico"}
                  className="relative z-[1] flex w-fit items-center justify-center gap-1 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
                >
                  Día técnico
                  <ArrowRounded className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-3">
                <p className="text-xl text-primary">3 al 9 de agosto</p>
                <Link
                  href={"#gira-tecnica"}
                  className="relative z-[1] flex w-fit items-center justify-center gap-1 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
                >
                  Gira técnica
                  <ArrowRounded className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Hexagonal Design */}
          <div className="relative flex justify-center">
            {/* Main hexagonal image container */}
            <div className="relative">
              {/* Hexagonal image */}
              <div className="relative h-96 w-96 lg:top-5 lg:h-[450px] lg:w-[450px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/visita-tecnica/gira-tecnica.webp"
                    alt="Gira técnica Aapresid - Evento de campo con productores y expertos"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 384px, 450px"
                  />

                  <div className="absolute -right-10 bottom-1 h-40 w-40">
                    <figure className="relative h-full w-full">
                      <Image
                        src="/images/hexagono-verde-oscuro.svg"
                        alt="Hexágono decorativo"
                        fill
                      />
                    </figure>
                  </div>
                  <div className="absolute -bottom-5 right-0 h-12 w-12 md:-right-20 md:bottom-5">
                    <figure className="relative h-full w-full">
                      <Image
                        src="/images/hexagono-naranja.svg"
                        alt="Hexágono decorativo"
                        fill
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AapreInvita;
