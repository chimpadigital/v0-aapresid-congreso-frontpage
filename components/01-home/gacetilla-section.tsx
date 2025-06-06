"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GacetillaCard } from "../gacetilla-card";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { GacetillaApiItem } from "@/lib/types";

export function GacetillasSection() {
  const [gacetillas, setGacetillas] = useState<GacetillaApiItem[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    fetch(`/api/gacetilla3?lang=${locale}`)
      .then((res) => res.json())
      .then((data) => {
        setGacetillas(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale]);

  const t = useTranslations("gacetilla");
  return (
    <section className="mx-auto max-w-[1415px] bg-white px-4 pb-12 pt-[86px] md:px-8">
      <div>
        <h2 className="mb-10 text-center text-4xl text-primary md:text-5xl">
          <span className="font-medium">{t("titulo1")}</span>
        </h2>
        {/* Grid de tarjetas */}
        <div className="mb-16 mt-16 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full text-center">Cargando...</div>
          ) : gacetillas.length === 0 ? (
            <div className="col-span-full text-center">
              No hay gacetillas disponibles.
            </div>
          ) : (
            gacetillas.map((gacetilla) => {
  let title = "";
  let description = "";

  // Permite que title/excerpt sean string JSON o ya objeto
  let titleObj =
    typeof gacetilla.title === "string"
      ? (() => {
          try {
            return JSON.parse(gacetilla.title);
          } catch {
            return {};
          }
        })()
      : gacetilla.title || {};

  let descObj =
    typeof gacetilla.excerpt === "string"
      ? (() => {
          try {
            return JSON.parse(gacetilla.excerpt);
          } catch {
            return {};
          }
        })()
      : gacetilla.excerpt || {};

  // Mostrar el otro idioma si el campo está vacío
  title =
    titleObj[locale] && titleObj[locale].trim() !== ""
      ? titleObj[locale]
      : (locale === "en" ? titleObj.es : titleObj.en) || "";

  description =
    descObj[locale] && descObj[locale].trim() !== ""
      ? descObj[locale]
      : (locale === "en" ? descObj.es : descObj.en) || "";

  return (
    <GacetillaCard
      key={gacetilla.id}
      date={gacetilla.date}
      title={title}
      description={description}
      imageUrl={gacetilla.image}
      href={`${locale}/gacetilla/` + gacetilla.id}
    />
  );
}))}
        </div>
        {/* Botón centrado */}
        <div className="flex justify-center">
          <Link
            href={`${locale}/gacetilla`}
            className="inline-flex items-center border-b-2 border-primary pb-0 text-lg tracking-wider text-primary transition-colors hover:border-accent hover:text-accent"
          >
            {t("ver-todas")} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
