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

const DisertantesMobile = ({ speakers }: { speakers: Speaker[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="disertantes-main mb-[5px]"
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <figure className="relative inline-block h-full w-full">
              <Image
                src={speaker.largeImage}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </figure>
            <article className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{speaker.name}</h3>
              <p className="text-sm">{speaker.bio}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
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
            <figure className="relative inline-block h-full w-full">
              <Image
                src={speaker.smallImage}
                alt={speaker.name}
                fill
                className="object-cover object-top"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DisertantesMobile;
