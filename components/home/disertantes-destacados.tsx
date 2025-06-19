"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { Speaker } from "@/lib/types";
import DisertantesDestacadosDesk from "./disertantes-desktop";
import DisertantesMobile from "./disertantes-mobile";
import { useLocale, useTranslations } from "next-intl";

export function DisertantesDestacados() {
  const isMobile = useIsMobile();

  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  const locale = useLocale();

  useEffect(() => {
    fetch("/api/speakers")
      .then((res) => res.json())
      .then((data) => {
        setSpeakers(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale]);

  const t = useTranslations("speakers");

  return (
    <section className="relative m-0 overflow-hidden rounded-[20px] bg-white px-0 pb-8 pt-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="m-[30px] mb-8 text-center text-4xl text-primary md:mb-28 lg:text-5xl">
          {t("title1")}
          <span className="font-medium"> {t("title2")}</span>
        </h2>

        {/* Contenedor principal */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center text-xl text-primary">
            Cargando disertantes...
          </div>
        ) : !isMobile ? (
          <DisertantesDestacadosDesk speakers={speakers} locale={locale} />
        ) : (
          <DisertantesMobile speakers={speakers} locale={locale} />
        )}
      </div>
    </section>
  );
}
