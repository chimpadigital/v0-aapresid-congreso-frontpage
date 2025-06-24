"use client";
import React from "react";
import { HeroSection } from "../hero-section";
import SeccionIntro from "./seccion-intro";
import { StatsSection } from "./stats-section";
import { CongresoContentSection } from "./congreso-content-section";
import { SloganSection } from "./slogan-section";
import { CodigoAbiertoSection } from "./codigo-abierto-section";
import CierreSection from "./cierre-section";
import { useTranslations } from "next-intl";
import BannerCongreso from "./banner-congreso";

const WrapperEdicion33 = () => {
  const t = useTranslations("edicion-33.hero");
  return (
    <>
      <HeroSection
        backgroundImage="/images/edicion-33/hero.webp"
        title1={t("acerca")}
        title2={t("congreso")}
      />
      <SeccionIntro />
      <StatsSection />
      <CongresoContentSection />
      <SloganSection />
      <CodigoAbiertoSection />
      <CierreSection />
      <BannerCongreso/>
    </>
  );
};

export default WrapperEdicion33;
