"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LogoCategory } from "@/lib/types";
import { useLocale } from "next-intl";

function getField(jsonStr: string, lang: string, fallback = "") {
  try {
    const obj = JSON.parse(jsonStr);
    if (obj[lang] && obj[lang].trim() !== "") return obj[lang];
    const otherLang = lang === "en" ? "es" : "en";
    if (obj[otherLang] && obj[otherLang].trim() !== "") return obj[otherLang];
    return fallback;
  } catch {
    return jsonStr || fallback;
  }
}

const Anfitriones = () => {
  const locale = useLocale();
  const [categories, setCategories] = useState<LogoCategory[]>([]);

  useEffect(() => {
    fetch("/api/sponsors")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="mx-4 mt-[26px] rounded-[20px] px-4 py-16 md:mx-[33px]">
      <div className="mx-auto mb-16 max-w-[1049px]">
        {categories.map((cat) => (
          <div key={cat.id} className="mb-28">
            <h3 className="mb-12 w-full border-b border-b-primary pb-[20px] text-left text-3xl text-primary md:mb-[109px]">
              {getField(cat.name, locale)}
            </h3>
            {cat.Logos.map((logo) => (
              <div className="mb-16 flex flex-col md:flex-row" key={logo.id}>
                <div className="flex-1 pb-10 md:pb-0">
                  <figure className="relative inline-block h-24 w-full md:h-full">
                    <Image
                      src={logo.imagePath}
                      fill
                      alt={getField(logo.title, locale)}
                      className="object-contain xs:pr-20 md:pl-7"
                    />
                  </figure>
                </div>
                <article className="flex flex-[1.2] flex-col">
                  <h3 className="w-full pb-[20px] text-left text-3xl font-medium text-primary">
                    {getField(logo.title, locale)}
                  </h3>
                  {/* DESCRIPTION: solo mostrar si hay info en algún idioma */}
                  {(() => {
                    const descEs = getField(logo.description || "", "es");
                    const descEn = getField(logo.description || "", "en");
                    if (descEs || descEn) {
                      return (
                        <p className="leading-tight tracking-wider text-paragraph">
                          {getField(logo.description || "", locale)}
                        </p>
                      );
                    }
                    return null;
                  })()}
                  {/* LINK: solo mostrar si hay info en algún idioma */}
                  {(() => {
                    const linkEs = getField(logo.link || "", "es");
                    const linkEn = getField(logo.link || "", "en");
                    if (linkEs || linkEn) {
                      return (
                        <a
                          href={getField(logo.link, locale)}
                          className="relative ml-auto mt-[41px] inline-block w-full min-w-[225px] rounded-full border border-primary px-4 py-1 text-center text-lg text-primary md:w-auto"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getField(logo.link, locale)}
                        </a>
                      );
                    }
                    return null;
                  })()}
                </article>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anfitriones;
