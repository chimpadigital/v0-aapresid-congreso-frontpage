"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CharlaDestacadaCard from "./charla-destacad-card";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { CharlaEvent } from "@/lib/types";

export function FeaturedTalksSection() {
  const [charlas, setCharlas] = useState<CharlaEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const locale = useLocale();

  useEffect(() => {
    fetch("/api/charlas-destacadas")
      .then((res) => res.json())
      .then((data) => {
        setCharlas(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale]);

  return (
    <section className="relative m-4 mb-9 overflow-hidden rounded-[20px] bg-[#F0F0F1] px-4 py-16 xs:px-8 md:mx-[33px] md:mt-[100px] md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="mb-16 text-center text-4xl font-medium text-primary lg:text-5xl">
          Charlas
          <span className="font-normal"> destacadas</span>
        </h2>

        {/* Slider de tarjetas */}
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            className="swiper-charlas-destacadas"
          >
            {loading ? (
              <div className="col-span-full text-center py-12">Cargando...</div>
            ) : charlas.length === 0 ? (
              <div className="col-span-full text-center py-12">No hay charlas destacadas.</div>
            ) : (
              charlas.map((charla) => {
                let title = "";
                let section = "";
                let theme = "";
                let speakers = charla.Speakers?.map(s => s.name).join(", ") || "";
                let dateTime = "";
                let location = charla.Room?.name || "";
                try {
                  title = JSON.parse(charla.multilingual_title)[locale] || "";
                  section = JSON.parse(charla.multilingual_talk)[locale] || "";
                  theme = charla.Theme?.name || "";
                } catch {
                  title = charla.multilingual_title;
                  section = charla.multilingual_talk;
                  theme = charla.Theme?.name || "";
                }
                // Formato fecha y hora
                if (charla.date && charla.start_time) {
                  const d = new Date(charla.date + 'T' + charla.start_time);
                  const day = d.getDate().toString();
                  const month = (d.getMonth() + 1).toString();
                  const hour = d.getHours().toString().padStart(2, "0");
                  const min = d.getMinutes().toString().padStart(2, "0");
                  if (locale === "en") {
                    dateTime = `${month}/${day} ${hour}:${min} hs.`;
                  } else {
                    dateTime = `${day}/${month} ${hour}:${min} hs.`;
                  }
                }
                return (
                  <SwiperSlide key={charla.id} className="w-full pb-12 md:!w-fit">
                    <CharlaDestacadaCard
                      title={title}
                      speakers={speakers}
                      dateTime={dateTime}
                      location={location}
                      theme={theme}
                      section={section}
                    />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
