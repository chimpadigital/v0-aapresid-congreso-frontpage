"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import Image from "next/image";

const fotosBsAs = [
  {
    path: "/images/informacion-turistica/bsas-1.webp",
    alt: "Buenos Aires - Caminito",
  },
  {
    path: "/images/informacion-turistica/bsas-2.webp",
    alt: "Buenos Aires - Plaza de Mayo",
  },
  {
    path: "/images/informacion-turistica/bsas-3.webp",
    alt: "Buenos Aires - Puente de la Mujer",
  },
  {
    path: "/images/informacion-turistica/bsas-4.webp",
    alt: "Buenos Aires - Cabildo",
  },
  {
    path: "/images/informacion-turistica/bsas-5.webp",
    alt: "Buenos Aires - planetario",
  },
  {
    path: "/images/informacion-turistica/bsas-6.webp",
    alt: "Buenos Aires - obelsico",
  },
];

const SliderBsAs = () => {
  return (
    <section className="px-4 xl:pl-28 xl:pr-0">
      <Swiper
        modules={[Pagination]}
        spaceBetween={45}
        slidesPerView="auto"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="swiper-fotos-bsas"
      >
        {fotosBsAs.map((foto) => (
          <SwiperSlide key={foto.alt} className="w-full pb-12 md:!w-fit">
            <figure className="relative mx-auto aspect-[615/696] w-full sm:w-[370px]">
              <Image
                src={foto.path}
                alt={foto.alt}
                fill
                className="object-contain"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderBsAs;
