"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "../styles/swiper.css";
import { ejesTematicos } from "@/data/ejesTematicos";

export function ThemesSection() {
  return (
    <section className="relative m-[30px] overflow-hidden rounded-[20px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/trama-background.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative hexagons */}
      <div className="absolute right-0 top-0 z-0">
        <Image
          src="/images/vector1.svg"
          alt=""
          width={97}
          height={108}
          className="opacity-40"
        />
      </div>
      <div className="absolute bottom-10 right-20 z-0">
        <Image src="/images/vector2.svg" alt="" width={72} height={82} />
      </div>
      <div className="absolute right-5 top-40 z-0">
        <Image src="/images/vector3.svg" alt="" width={36} height={85} />
      </div>

      {/* Content container */}
      <div className="relative z-10 grid gap-8 p-8 md:grid-cols-2 md:px-[94px] md:py-[84px]">
        {/* Left column - Pink card */}
        <div className="flex flex-col">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="ejes-tematicos-swiper"
          >
            {ejesTematicos.map((ejesTematico) => (
              <SwiperSlide key={ejesTematico.titulo}>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white">
                    {ejesTematico.titulo}
                  </h3>
                  {/* <p className="text-white text-xl">{ejesTematico.descripcion}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right column - Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Ejes Temáticos
          </h2>
          <p className="mb-8 text-xl text-white">
            Conocé los ejes temáticos de esta edición
          </p>
          <p className="text-white">
            Una sinergia entre la ciencia, los organismos de investigación y los
            productores, quienes participan activamente de los ensayos llevados
            a cabo en escenarios reales.
          </p>
          <p className="mt-4 text-white">
            Pensado para dar respuestas a las demandas del productor a través
            del desarrollo de tecnologías sustentables.
          </p>
        </div>
      </div>
    </section>
  );
}
