"use client";
import React from "react";
import { HeroSection } from "../hero-section";
import ListaGacetilla from "./lista-gacetilla";
import MediosGacetilla from "./medios-gacetilla";
import { useTranslations } from "next-intl";

const WrapperGacetilla = () => {
  const t = useTranslations("gacetilla-page");
  return (
    <section>
      <HeroSection
        backgroundImage="/images/gacetilla/circuito-prensa.webp"
        title1={t("hero-title")}
        compact
      />
      <ListaGacetilla />
      <MediosGacetilla />
      <div className="mb-20"></div>
    </section>
  );
};

export default WrapperGacetilla;
