"use client";
import React from "react";
import { HeroSection } from "../hero-section";
import { DelCampoCiudadSection } from "./del-campo";
import SliderBsAs from "./slider-bsas";
import { ComoLlegarSection } from "./como-llegar";
import { useTranslations } from "next-intl";

const WrapperInfoTuristica = () => {
  const t = useTranslations("informacion-turistica");

  return (
    <>
      <HeroSection
        backgroundImage="/images/informacion-turistica/hero.webp"
        title1={t("informacion")}
        title2={t("turistica")}
      />
      <DelCampoCiudadSection />
      <SliderBsAs />
      <ComoLlegarSection />
    </>
  );
};

export default WrapperInfoTuristica;
