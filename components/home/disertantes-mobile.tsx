"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Speaker } from "@/lib/types";
import Image from "next/image";
import ArrowThin from "../icons/ArrowThin";

const DisertantesMobile = ({
  speakers,
  locale,
}: {
  speakers: Speaker[];
  locale: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section>
      {/* Custom navigation buttons fuera del Swiper */}
      <div className="relative">
        <button
          className="disertantes-prev absolute left-2 top-1/2 z-10 aspect-square h-6 -translate-y-1/2 rounded-full bg-white/80 shadow transition-colors hover:bg-primary hover:text-white"
          aria-label="Anterior"
        >
          <div className="grid rotate-180 scale-75 place-items-center">
            <ArrowThin />
          </div>
        </button>
        <button
          className="disertantes-next absolute right-2 top-1/2 z-10 grid aspect-square h-6 -translate-y-1/2 place-items-center rounded-full bg-white/80 shadow transition-colors hover:bg-primary hover:text-white"
          aria-label="Siguiente"
        >
          <div className="grid scale-75 place-items-center">
            <ArrowThin />
          </div>
        </button>

        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: ".disertantes-next",
            prevEl: ".disertantes-prev",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="disertantes-main mb-[5px]"
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <figure className="relative inline-block h-full w-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                />
              </figure>
              <div className="absolute left-0 right-0 top-0 h-full w-full bg-black/40" />
              <article className="absolute bottom-0 left-0 right-0 px-[32px] pb-[48px] text-white">
                <h3 className="mb-2 text-xl font-semibold tracking-widest">
                  {speaker.name}
                </h3>
                <p className="text-xs tracking-wider">
                  {(() => {
                    try {
                      const descObj = JSON.parse(speaker.description);
                      return descObj[locale] || descObj.es || descObj.en || "";
                    } catch {
                      return speaker.description;
                    }
                  })()}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={3.4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="disertantes-thumbs"
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <figure className="relative inline-block h-full w-full grayscale transition-all duration-300 hover:grayscale-0">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover object-top"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DisertantesMobile;
