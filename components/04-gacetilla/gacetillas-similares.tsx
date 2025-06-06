"use client";
import { GacetillaApiItem } from "@/lib/types";
import { GacetillaCard } from "../gacetilla-card";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function GacetillasSimilares({
  currentId,
}: {
  currentId: string;
}) {
  const [gacetillas, setGacetillas] = useState<GacetillaApiItem[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    fetch(`/api/gacetilla3?lang=${locale}&exclude=${currentId}`)
      .then((res) => res.json())
      .then((data) => {
        setGacetillas(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale]);

  const t = useTranslations("gacetilla-page");

  return (
    <section className="mx-auto max-w-[1415px] bg-white px-4 pb-12 pt-[86px] md:px-8">
      <div>
        <h2 className="mb-10 text-left text-4xl text-primary md:ml-16 md:text-5xl">
          {t("similares")}
        </h2>
        {/* Grid de tarjetas */}
        <div className="mb-16 mt-16 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gacetillas.length === 0 ? (
            <div className="col-span-full text-center">
              No hay gacetillas disponibles.
            </div>
          ) : (
            gacetillas.map((gacetilla) => {
              let title = "";
              let description = "";
              try {
                const titleObj = JSON.parse(gacetilla.title);
                const descObj = JSON.parse(gacetilla.excerpt);
                // Mostrar el otro idioma si el campo está vacío
                title =
                  titleObj[locale] && titleObj[locale].trim() !== ""
                    ? titleObj[locale]
                    : locale === "en"
                      ? titleObj.es
                      : titleObj.en || "";
                description =
                  descObj[locale] && descObj[locale].trim() !== ""
                    ? descObj[locale]
                    : locale === "en"
                      ? descObj.es
                      : descObj.en || "";
              } catch {
                title = gacetilla.title;
                description = gacetilla.excerpt;
              }
              return (
                <GacetillaCard
                  key={gacetilla.id}
                  date={gacetilla.date}
                  title={title}
                  description={description}
                  imageUrl={gacetilla.image}
                  href={`/${locale}/gacetilla/` + gacetilla.id}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
