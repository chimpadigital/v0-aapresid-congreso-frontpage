"use client"
import React from "react";
import Emailicon from "../icons/Emailicon";
import { useTranslations } from "next-intl";

const QuienesParticipan = () => {
  const t = useTranslations("visita-tecnica-page.quienes-participan");
  const participants = t.raw("lista");
  return (
    <section className="px-4 md:px-[33px]">
      <div className="rounded-[20px] bg-primary bg-[url('/images/trama-background.webp')] bg-cover px-10 pb-20 pt-20 lg:px-20 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Who can participate */}
            <div className="space-y-6">
              <h2 className="mb-4 text-4xl font-medium text-white lg:text-4xl">
                {t("titulo")}
              </h2>

              <ul className="space-y-1">
                {participants.map((participant: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <div className="mt-3 shrink-0">
                      <div className="aspect-square h-2 rounded-full bg-white" />
                    </div>
                    <p className="max-w-[40ch] text-xl leading-relaxed tracking-wider">
                      {participant}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xl tracking-wider text-white">
                {t("nota")}
              </p>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-wider text-white">
                {t("contacto-titulo")}
              </h3>

              <div className="flex items-center gap-4">
                <div className="text-white">
                  <Emailicon />
                </div>
                <a
                  href={`mailto:${t("contacto-email")}`}
                  className="text-lg tracking-wider text-white transition-colors hover:text-white/80 hover:decoration-white/80 md:text-2xl"
                >
                  {t("contacto-email")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesParticipan;
