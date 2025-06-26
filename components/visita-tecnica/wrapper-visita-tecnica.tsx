"use client"
import React from "react";
import { HeroSection } from "../hero-section";
import AapreInvita from "./AapreInvita";
import DiaTecnico from "./DiaTecnico";
import QuienesParticipan from "./QuienesParticipan";
import TourAgronomico from "./tour-agronomico";
import DescubraAprenda from "./descubra-aprenda";
import { useTranslations } from "next-intl";

const WrapperVisitaTecnica = () => {
  const t = useTranslations("visita-tecnica-page.visita-tecnica");
  return (
    <section className="scroll-smooth">
      <HeroSection
        compact
        backgroundImage="/images/gacetilla/circuito-prensa.webp"
        title1="Visita"
        title2="técnica"
        titleIsInline
      />
      <AapreInvita />
      <div className="mx-4 mt-8 rounded-[20px] bg-accent bg-[url('/images/visita-tecnica/bg-banner.png')] bg-cover bg-right bg-no-repeat px-8 pb-14 pt-14 sm:bg-auto md:mx-[33px] md:pb-[80px] md:pt-[104px]">
        <div className="mx-auto max-w-7xl md:pl-14">
          <p className="max-w-[45ch] text-2xl font-light tracking-wider text-white">
            {t("descripcion")}
          </p>
        </div>
      </div>
      <DiaTecnico />
      <QuienesParticipan />
      <TourAgronomico />
      <DescubraAprenda />
    </section>
  );
};

export default WrapperVisitaTecnica;
