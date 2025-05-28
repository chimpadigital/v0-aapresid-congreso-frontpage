"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GacetillaCard } from "../gacetilla-card";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

interface GacetillaApiItem {
  id: number;
  title: string;
  excerpt: string;
  content_es: string;
  content_en: string;
  date: string;
  image: string;
}

export function GacetillasSection() {
  const [gacetillas, setGacetillas] = useState<GacetillaApiItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gacetilla3")
      .then((res) => res.json())
      .then((data) => {
        setGacetillas(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const locale = useLocale();

  return (
    <section className="mx-auto max-w-[1415px] bg-white px-4 pt-[86px] pb-12 md:px-8">
      <div>
        <h2 className="text-54xl mb-10 text-center text-primary md:text-5xl">
          Gacetillas <span className="font-medium">Prensa</span>
        </h2>
        {/* Grid de tarjetas */}
        <div className="mb-16 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              try {
                const titleObj = JSON.parse(gacetilla.title);
                const descObj = JSON.parse(gacetilla.excerpt);
                title = titleObj[locale] || titleObj.es || "";
                description = descObj[locale] || descObj.es || "";
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
                  href={`${locale}/gacetilla/` + gacetilla.id}
                />
              );
            })
          )}
        </div>
        {/* Botón centrado */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center border-b-2 border-primary pb-0 text-lg text-primary transition-colors hover:border-accent hover:text-accent tracking-wider"
          >
            Ver todas las gacetillas <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
