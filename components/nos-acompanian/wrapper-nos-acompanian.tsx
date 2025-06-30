"use client";

import React from "react";
import { HeroSection } from "../hero-section";
import Anfitriones from "./anfitriones";
import { useTranslations } from "next-intl";

const WrapperNosAcompanian = () => {
  const t = useTranslations("nos-acompanian");

  return (
    <>
      <HeroSection
        title1={t("nos")}
        title2={t("acompanian")}
        backgroundImage="/images/nos-acompanian/hero.webp"
      />
      <Anfitriones />
    </>
  );
};

export default WrapperNosAcompanian;
