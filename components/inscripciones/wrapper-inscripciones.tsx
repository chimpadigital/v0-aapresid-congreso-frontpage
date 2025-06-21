import React from "react";
import { HeroSection } from "../hero-section";
import { InscriptionsSection } from "../inscriptions-section";
import Link from "next/link";
import ArrowRounded from "../icons/ArrowRounded";
import CalendarLineal from "../icons/CalendarLineal";
import PensaInscripciones from "./prensa-inscripciones";

const WrapperInscripciones = () => {
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
        <div className="mx-auto flex max-w-7xl justify-between rounded-[25px] text-white bg-primary bg-cover bg-[url('/images/inscripciones/banner-cronograma.webp')] px-6 md:px-[84px] bg-center py-[59px] flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <CalendarLineal />
            <h4 className="text-4xl font-medium">Cronograma completo</h4>
          </div>

          <Link
            href="/codigo-invitacion"
            className="mt-4 flex items-center gap-3 border-b-2 border-white text-lg transition-opacity border-spacing-5 hover:border-opacity-70 hover:font-medium md:mt-0 h-fit"
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
