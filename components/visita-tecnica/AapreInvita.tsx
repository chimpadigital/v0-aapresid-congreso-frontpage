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

            <p className="mb-10 text-xl leading-tight text-gray-600">
              Participá en los impactantes side events que realizaremos con el
              objetivo de adentrarte en el corazón de la agricultura argentina y
              tomar contacto con destacados productores y expertos locales:
            </p>

            {/* Event Buttons */}
            <div className="flex flex-wrap gap-[50px]">
              <div className="space-y-3">
                <p className="text-xl text-primary">5 de agosto</p>
                <a
                  href={"#dia-tecnico"}
                  className="group flex items-center gap-3 scroll-smooth text-2xl text-accent"
                >
                  <span className="underline underline-offset-4">
                    Día técnico
                  </span>
                  <ArrowRounded className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="space-y-3">
                <p className="text-xl text-primary">3 al 9 de agosto</p>
                <a
                  href={"#gira-tecnica"}
                  className="group flex items-center gap-3 scroll-smooth text-2xl text-accent"
                >
                  <span className="underline underline-offset-4">
                    Gira técnica
                  </span>
                  <ArrowRounded className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Hexagonal Design */}
          <div className="relative flex justify-center">
            {/* Main hexagonal image container */}
            <div className="relative">
              {/* Hexagonal image */}
              <div className="relative aspect-square h-60 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/visita-tecnica/gira-tecnica.webp"
                    alt="Gira técnica Aapresid - Evento de campo con productores y expertos"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 384px, 450px"
                  />

                  <div className="absolute -right-10 bottom-1 h-20 md:h-40 w-20 md:w-40">
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
