"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CharlaDestacadaCard from "./charla-destacad-card";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { CharlaEvent } from "@/lib/types";
import Calendar from "../icons/Calendar";
import CalendarDense from "../icons/CalendarDense";

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
        <h2 className="mb-20 text-center text-4xl font-medium text-primary lg:text-5xl">
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
              <div className="col-span-full py-12 text-center">Cargando...</div>
            ) : charlas.length === 0 ? (
              <div className="col-span-full py-12 text-center">
                No hay charlas destacadas.
              </div>
            ) : (
              charlas.map((charla) => {
                let title = "";
                let section = "";
                let theme = "";
                let speakers =
                  charla.Speakers?.map((s) => s.name).join(", ") || "";
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
                  const d = new Date(charla.date + "T" + charla.start_time);
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
                  <SwiperSlide
                    key={charla.id}
                    className="w-full pb-12 md:!w-fit"
                  >
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
        <div className="mx-auto mt-12 max-w-[400px] text-center">

        <button className="relative z-[1] mx-auto overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-lg font-normal text-white transition-colors duration-500 before:absolute before:-left-[145%] before:top-[190%] before:z-[-1] before:h-[350%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:text-white hover:before:scale-[3] flex gap-[9px] items-center justify-center">
          Ver cronograma completo <CalendarDense />
        </button>
        </div>
      </div>
    </section>
  );
}
