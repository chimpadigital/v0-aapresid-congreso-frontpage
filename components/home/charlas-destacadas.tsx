"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CharlaDestacadaCard from "./charla-destacad-card";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Event, EventSpeaker } from "@/lib/types";

export function FeaturedTalksSection() {
  const [charlas, setCharlas] = useState<Event[]>([]);
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

  const t = useTranslations("charlas");

  function getField(jsonOrObj: any, lang: string, fallback = "") {
    let obj: any = {};
    if (typeof jsonOrObj === "string") {
      try {
        obj = JSON.parse(jsonOrObj);
      } catch {
        return jsonOrObj || fallback;
      }
    } else if (typeof jsonOrObj === "object" && jsonOrObj !== null) {
      obj = jsonOrObj;
    } else {
      return fallback;
    }
    if (typeof obj[lang] === "string" && obj[lang].trim() !== "") return obj[lang];
    const otherLang = lang === "en" ? "es" : "en";
    if (typeof obj[otherLang] === "string" && obj[otherLang].trim() !== "") return obj[otherLang];
    return fallback;
  }

  return (
    <section className="relative m-4 mb-9 overflow-hidden rounded-[20px] bg-[#F0F0F1] px-4 py-16 xs:px-8 md:mx-[33px] md:mt-[100px] md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="mb-20 text-center text-4xl font-medium text-primary lg:text-5xl">
          {t("title1")}
          <span className="font-normal"> {t("title2")}</span>
        </h2>
        {/* Slider de tarjetas */}
        <div className="relative">
          {!loading && charlas.length === 0 ? (
            <div className="col-span-full py-12 text-center">
              No hay charlas destacadas.
            </div>
          ) : (
            <Swiper
              modules={[Pagination]}
              spaceBetween={25}
              slidesPerView="auto"
              pagination={{ clickable: true }}
              className="swiper-charlas-destacadas"
            >
              {loading ? (
                <div className="col-span-full py-12 text-center">
                  Cargando...
                </div>
              ) : (
                charlas.map((charla) => {
                  let title = getField(charla.multilingual_title, locale);
                  let section = getField(charla.multilingual_talk, locale);

                  let theme = "";
                  let speakers =
                    charla.Speakers?.map((s: EventSpeaker) => s.name).join(", ") || "";
                  let dateTime = "";
                  let location = charla.Room?.name || "";
                  try {
                    theme = charla.Theme?.name || "";
                  } catch {
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
          )}
        </div>
        <div className="mx-auto mt-12 max-w-[400px] text-center">
          {/* <button className="relative z-[1] mx-auto flex items-center justify-center gap-[9px] overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-lg font-normal tracking-wider text-white transition-colors duration-500 before:absolute before:-left-[145%] before:top-[190%] before:z-[-1] before:h-[350%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:text-white hover:before:scale-[3]">
            {t("ver-cronograma")} <CalendarDense />
          </button> */}
        </div>
      </div>
    </section>
  );
}
