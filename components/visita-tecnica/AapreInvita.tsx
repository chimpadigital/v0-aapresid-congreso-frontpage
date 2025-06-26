"use client";
import React from "react";
import ArrowRounded from "../icons/ArrowRounded";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AapreInvita = () => {
  const t = useTranslations("visita-tecnica-page.aapre-invita");
  return (
    <section className="relative mx-4 mt-10 overflow-hidden rounded-[20px] bg-[#f0f0f1] px-6 py-14 md:mx-[33px] md:pb-[110px] md:pt-[140px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:gap-5 lg:grid-cols-2">
          {/* Left Content */}
          <div className="pl-5">
            <h1 className="mb-5 text-4xl font-medium leading-none text-primary">
              {t("titulo")}
            </h1>

            <p className="mb-10 text-xl leading-tight text-gray-600">
              {t("descripcion")}
            </p>

            {/* Event Buttons */}
            <div className="flex flex-wrap gap-[50px]">
              <div className="space-y-3">
                <p className="text-xl text-primary">{t("evento1-fecha")}</p>
                <a
                  href={"#dia-tecnico"}
                  className="group flex items-center gap-3 scroll-smooth text-2xl text-accent"
                >
                  <span className="underline underline-offset-4">
                    {t("evento1-titulo")}
                  </span>
                  <ArrowRounded className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="space-y-3">
                <p className="text-xl text-primary">{t("evento2-fecha")}</p>
                <a
                  href={"#gira-tecnica"}
                  className="group flex items-center gap-3 scroll-smooth text-2xl text-accent"
                >
                  <span className="underline underline-offset-4">
                    {t("evento2-titulo")}
                  </span>
                  <ArrowRounded className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Hexagonal Design */}
          <div className="relative flex justify-center">
            {/* Main hexagonal image container */}
            <div className="relative">
              {/* Hexagonal image */}
              <div className="relative aspect-square h-60 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/visita-tecnica/gira-tecnica.webp"
                    alt="Gira técnica Aapresid - Evento de campo con productores y expertos"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 384px, 450px"
                  />

                  <div className="absolute -right-10 bottom-1 h-20 md:h-40 w-20 md:w-40">
                    <figure className="relative h-full w-full">
                      <Image
                        src="/images/hexagono-verde-oscuro.svg"
                        alt="Hexágono decorativo"
                        fill
                      />
                    </figure>
                  </div>
                  <div className="absolute -bottom-5 right-0 h-12 w-12 md:-right-20 md:bottom-5">
                    <figure className="relative h-full w-full">
                      <Image
                        src="/images/hexagono-naranja.svg"
                        alt="Hexágono decorativo"
                        fill
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AapreInvita;
