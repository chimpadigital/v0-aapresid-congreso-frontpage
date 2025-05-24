"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import SwiperCore from "swiper";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import "../../styles/swiper.css";
import Eje1Aprender from "../icons/Eje1Aprender";
import ArrowThin from "../icons/ArrowThin";
import Eje2Desafios from "../icons/Eje2Desafios";
import Eje3Innovacion from "../icons/Eje3Innovacion";
import Eje4Manejo from "../icons/Eje4Manejo";
import Eje5Sistemas from "../icons/Eje5Sistemas";
import Eje6SistemasSustentables from "../icons/Eje6SistemasSustentables";
import Eje7Prospectiva from "../icons/Eje7Prospectiva";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export function ThemesSection() {
  const t = useTranslations("themes");
  const ejesTematicos = t.raw("ejes") as Array<{
    titulo: string;
    descripcion: string;
    clase: string;
  }>;

  const swiperRef = useRef<SwiperCore | null>(null);
  const textoSwiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    const realIndex = swiper.realIndex;

    if (
      textoSwiperRef.current &&
      textoSwiperRef.current.realIndex !== realIndex
    ) {
      textoSwiperRef.current.slideToLoop(realIndex);
    }
  };

  const handleTextoSlideChange = (swiper: SwiperCore) => {
    const realIndex = swiper.realIndex;

    if (swiperRef.current && swiperRef.current.realIndex !== realIndex) {
      swiperRef.current.slideToLoop(realIndex);
    }
  };

  const iconosEjesTematicos = [
    {
      icon: <Eje1Aprender />,
    },
    {
      icon: <Eje2Desafios />,
    },
    {
      icon: <Eje3Innovacion />,
    },
    {
      icon: <Eje4Manejo />,
    },
    {
      icon: <Eje5Sistemas />,
    },
    {
      icon: <Eje6SistemasSustentables />,
    },
    {
      icon: <Eje7Prospectiva />,
    },
    {
      icon: <Eje1Aprender />,
    },
    {
      icon: <Eje2Desafios />,
    },
    {
      icon: <Eje3Innovacion />,
    },
    {
      icon: <Eje4Manejo />,
    },
    {
      icon: <Eje5Sistemas />,
    },
    {
      icon: <Eje6SistemasSustentables />,
    },
    {
      icon: <Eje7Prospectiva />,
    },
  ];

  return (
    <section className="relative mx-4 mt-[27px] overflow-hidden rounded-[20px] bg-[url('/images/trama-background.webp')] bg-cover bg-center p-8 md:mx-[33px] xl:px-[94px] xl:py-[84px]">
      {/* Decorative hexagons */}
      <div className="absolute right-0 top-4 z-0">
        <Image src="/images/home/vector-ejes.svg" alt="" width={200} height={108} />
      </div>
      <div className="mx-auto max-w-[1216px]">
        {/* Content container */}
        <div className="relative flex flex-col gap-8 lg:flex-row">
          <div className="w-fit lg:hidden">
            <h2 className="mb-2 w-fit text-4xl font-medium text-white md:text-5xl">
              {t("ejes_tematicos")}
            </h2>
            <p className="w-fit text-lg font-light tracking-wider text-white">
              {t("conoce_los_ejes")}
            </p>
          </div>
          {/* Left column - cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-1 flex-col"
          >
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
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
            >
              {ejesTematicos
                .concat(ejesTematicos)
                .map((ejesTematico, index) => (
                  <SwiperSlide
                    key={ejesTematico.titulo + index}
                    className={ejesTematico.clase}
                  >
                    <div
                      className={`flex w-full flex-row flex-wrap items-center gap-4 rounded-[20px] md:gap-11 lg:w-[min(100%,446px)] xl:flex-col xl:items-start`}
                    >
                      <div className="scale-75 md:scale-100">
                        {iconosEjesTematicos[index].icon}
                      </div>
                      <h3 className="w-[min(100%,446px)] rounded-[20px] text-4xl font-medium text-white md:text-5xl">
                        {ejesTematico.titulo}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-1 flex-col pl-4 lg:justify-between"
          >
            <div className="hidden w-fit lg:block">
              <h2 className="mb-2 w-fit text-4xl font-medium text-white md:text-5xl">
                {t("ejes_tematicos")}
              </h2>
              <p className="mb-8 w-fit text-lg font-light tracking-wider text-white">
                {t("conoce_los_ejes")}
              </p>
            </div>
            <Swiper
              grabCursor={true}
              modules={[EffectCreative]}
              className="ejes-tematicos-texto-swiper"
              onSwiper={(swiper) => (textoSwiperRef.current = swiper)}
              onSlideChange={handleTextoSlideChange}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
            >
              {ejesTematicos
                .concat(ejesTematicos)
                .map((ejesTematico, index) => (
                  <SwiperSlide key={ejesTematico.titulo + "-texto" + index}>
                    <p className="whitespace-pre-line text-xl font-light tracking-wider text-white">
                      {ejesTematico.descripcion}
                    </p>
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-center gap-6 lg:justify-start">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white/10 disabled:opacity-50"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            aria-label="Anterior / Previous"
          >
            <div className="rotate-180">
              <ArrowThin />
            </div>
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white/10 disabled:opacity-50"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            aria-label="Siguiente / Next"
          >
            <ArrowThin />
          </button>
        </div>
      </div>
    </section>
  );
}
