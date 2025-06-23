"use client";
import React from "react";
import { HeroSection } from "../hero-section";
import { InscriptionsSection } from "../inscriptions-section";
import Link from "next/link";
import ArrowRounded from "../icons/ArrowRounded";
import CalendarLineal from "../icons/CalendarLineal";
import PensaInscripciones from "./prensa-inscripciones";
import { useLocale } from "next-intl";

const WrapperInscripciones = () => {
  const locale = useLocale();
  return (
    <section>
      <HeroSection
        title1="Inscripciones"
        title2="Adquirí tu entrada"
        compact
        backgroundImage="/images/gacetilla/circuito-prensa.webp"
      />
      <InscriptionsSection />
      <div className="px-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between rounded-[25px] bg-primary bg-[url('/images/inscripciones/banner-cronograma.webp')] bg-cover bg-center px-6 py-[59px] text-white md:px-[84px]">
          <div className="flex flex-wrap gap-4">
            <CalendarLineal />
            <h4 className="text-4xl font-medium">Cronograma completo</h4>
          </div>

          <Link
            href={`${locale}/cronocrama`}
            className="mt-4 flex h-fit border-spacing-5 items-center gap-3 border-b-2 border-white text-lg transition-opacity hover:border-opacity-70 hover:font-medium md:mt-0"
          >
            <p>Ver más</p>
            <ArrowRounded className="w-4" />
          </Link>
        </div>
      </div>
      <PensaInscripciones />
    </section>
  );
};

export default WrapperInscripciones;
