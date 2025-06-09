"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LogoCategory } from "@/lib/types";
import { useLocale } from "next-intl";

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
  if (obj[lang] && obj[lang].trim() !== "") return obj[lang];
  const otherLang = lang === "en" ? "es" : "en";
  if (obj[otherLang] && obj[otherLang].trim() !== "") return obj[otherLang];
  return fallback;
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
        {categories.map(
          (cat) =>
            cat.Logos &&
            cat.Logos.length > 0 && (
              <div key={cat.id} className="mb-28">
                <h3 className="mb-12 w-full border-b border-b-primary pb-[20px] text-left text-3xl text-primary md:mb-[109px]">
                  {getField(cat.name, locale)}
                </h3>
                {cat.Logos.map((logo) => {
                  let descEs = getField(logo.description || "", "es");
                  let descEn = getField(logo.description || "", "en");
                  const hasDesc =
                    (descEs && descEs.trim().length > 2) ||
                    (descEn && descEn.trim().length > 2);
                  if (!hasDesc) return null;

                  return (
                    <div
                      className="mb-16 flex flex-col md:flex-row"
                      key={logo.id}
                    >
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
                          let desc = getField(logo.description || "", locale);
                          if (
                            desc.length < 2 &&
                            locale.toLocaleLowerCase() !== "es"
                          ) {
                            desc = getField(logo.description || "", "es");
                          }
                          if (desc) {
                            return (
                              <p className="leading-tight tracking-wider text-paragraph">
                                {desc}
                              </p>
                            );
                          }
                          return null;
                        })()}
                        {/* LINK: solo mostrar si hay info en algún idioma */}
                        {(() => {
                          let link = getField(logo.link || "", locale);
                          if (link.length < 2 && locale !== "es") {
                            link = getField(logo.link || "", "es");
                          }
                          if (link.length > 2) {
                            return (
                              <a
                                href={link}
                                className="relative ml-auto mt-[41px] inline-block w-full min-w-[225px] rounded-full border border-primary px-4 py-1 text-center text-lg text-primary md:w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link}
                              </a>
                            );
                          }
                          return null;
                        })()}
                      </article>
                    </div>
                  );
                })}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Anfitriones;
