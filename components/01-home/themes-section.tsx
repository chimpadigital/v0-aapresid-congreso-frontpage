"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import SwiperCore from "swiper";
import { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import "../../styles/swiper.css";
import ArrowThin from "../icons/ArrowThin";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

const iconosEjesTematicos = [
  {
    path: "/images/home/eje-aprender.webp",
  },
  {
    path: "/images/home/eje-desafios.webp",
  },
  {
    path: "/images/home/eje-innovacion.webp",
  },
  {
    path: "/images/home/eje-plagas.webp",
  },
  {
    path: "/images/home/eje-sistemas.webp",
  },
  {
    path: "/images/home/eje-sustentable.webp",
  },
  {
    path: "/images/home/eje-perspectiva.webp",
  },
  {
    path: "/images/home/eje-aprender.webp",
  },
  {
    path: "/images/home/eje-desafios.webp",
  },
  {
    path: "/images/home/eje-innovacion.webp",
  },
  {
    path: "/images/home/eje-plagas.webp",
  },
  {
    path: "/images/home/eje-sistemas.webp",
  },
  {
    path: "/images/home/eje-sustentable.webp",
  },
  {
    path: "/images/home/eje-perspectiva.webp",
  },
];

export function ThemesSection() {
  const t = useTranslations("themes");
  const ejesTematicos = t.raw("ejes") as Array<{
    titulo: string;
    descripcion: string;
    clase: string;
    color: string;
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

  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const offsetTop = rect.top + scrollPosition;
        const relativeScroll = scrollPosition - offsetTop;
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-4 mt-[27px] overflow-hidden rounded-[20px] bg-[url('/images/home/vector-ejes.webp')] bg-cover bg-center p-4 md:mx-[33px] xl:px-[94px] xl:py-[84px]"
    >
      <div className="mx-auto max-w-[1216px]">
        {/* Content container */}
        <div className="relative flex flex-col lg:flex-row lg:gap-8">
          {/* DECORATIVE HEXACON - START*/}
          <>
            <motion.div
              style={{
                y: scrollY * 0.05,
              }}
              className="absolute left-[7rem] top-[-7em] z-0"
            >
              <figure className="relative aspect-square h-[170px]">
                <Image
                  src="/images/home/hexa-verde-resplandor.svg"
                  alt=""
                  fill
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.03,
              }}
              className="absolute left-[17rem] top-[16rem] z-0"
            >
              <figure className="relative aspect-square h-[200px]">
                <Image
                  src="/images/home/hexa-verde-resplandor.svg"
                  alt=""
                  fill
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.08,
              }}
              className="absolute left-[2rem] top-[23rem] z-0"
            >
              <figure className="relative aspect-square h-[100px]">
                <Image
                  src="/images/home/hexa-blurry.png"
                  alt=""
                  fill
                  className="translate-y-1 scale-125 opacity-20"
                />
                <Image
                  src="/images/home/hexa-blanco.svg"
                  alt=""
                  fill
                  className="opacity-40"
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.1,
              }}
              className="absolute left-[22rem] top-[-1.5rem] z-0"
            >
              <figure className="relative aspect-square h-[100px]">
                <Image
                  src="/images/home/hexa-blurry.png"
                  alt=""
                  fill
                  className="translate-y-1 scale-125 opacity-20"
                />
                <Image
                  src="/images/home/hexa-blanco.svg"
                  alt=""
                  fill
                  className="opacity-40"
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.15,
              }}
              className="absolute bottom-[-6.5rem] left-[24rem] z-0"
            >
              <figure className="relative aspect-square h-[100px]">
                <Image
                  src="/images/home/hexa-blurry.png"
                  alt=""
                  fill
                  className="translate-y-1 scale-125 opacity-20"
                />
                <Image
                  src="/images/home/hexa-blanco.svg"
                  alt=""
                  fill
                  className="opacity-70"
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.03,
              }}
              className="absolute left-[-7rem] top-[8rem] z-0"
            >
              <figure className="relative aspect-square h-[200px]">
                <Image src="/images/home/hexa-shine.svg" alt="" fill />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.02,
              }}
              className="absolute bottom-[-7rem] left-[-9.25rem] z-0"
            >
              <figure className="relative aspect-square h-[100px]">
                <Image
                  src="/images/home/hexa-verde-opaco.svg"
                  alt=""
                  fill
                  className="opacity-70"
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.08,
              }}
              className="absolute left-[-10.5rem] top-[0] z-0"
            >
              <figure className="relative aspect-square h-[100px]">
                <Image
                  src="/images/home/hexa-verde-opaco.svg"
                  alt=""
                  fill
                  className="opacity-65"
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.03,
              }}
              className="absolute bottom-[-15rem] left-[6rem] z-0"
            >
              <figure className="relative aspect-square h-[200px]">
                <Image
                  src="/images/home/hexa-verde-blanco-brillante.svg"
                  alt=""
                  fill
                />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.09,
              }}
              className="absolute left-[-7.75rem] top-[-4rem] z-0"
            >
              <figure className="relative aspect-square h-[110px]">
                <Image src="/images/home/hexa-borde.svg" alt="" fill />
              </figure>
            </motion.div>

            <motion.div
              style={{
                y: scrollY * 0.04,
              }}
              className="absolute left-[23rem] top-[-10rem] z-0"
            >
              <figure className="relative aspect-square h-[110px]">
                <Image src="/images/home/hexa-borde.svg" alt="" fill />
              </figure>
            </motion.div>
          </>
          {/* DECORATIVE HEXACON - END*/}

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
                      className={`flex w-full flex-row flex-wrap items-center justify-center gap-4 rounded-[20px] md:gap-11 lg:w-[min(100%,446px)] lg:justify-start xl:flex-col xl:items-start`}
                    >
                      <figure className="relative inline-block aspect-square h-[350px] lg:ml-auto">
                        <Image
                          src={iconosEjesTematicos[index].path}
                          alt={ejesTematico.titulo}
                          fill
                          className="object-contain object-center"
                        />
                      </figure>
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
              <p className="mb-20 w-fit text-lg font-light tracking-wider text-white">
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
                    <h3
                      className="mx-auto mb-4 w-fit rounded-full px-9 py-2 text-center text-[20px] font-medium leading-none tracking-wider text-white lg:mx-0 lg:text-left lg:text-[25px]"
                      style={{ backgroundColor: ejesTematico.color }}
                    >
                      {ejesTematico.titulo}
                    </h3>
                    <p className="whitespace-pre-line text-xl font-light tracking-wider text-white">
                      {ejesTematico.descripcion}
                    </p>
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <div className="relative z-10 mt-8 flex justify-center gap-6 lg:mr-5 lg:justify-end xl:mr-[75px]">
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
