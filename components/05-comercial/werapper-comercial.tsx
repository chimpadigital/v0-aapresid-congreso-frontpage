'use client'
import React from "react";
import { HeroSection } from "../hero-section";
import DescargaComercialV2 from "./descarga-comercial-v2";
import BannerContacto from "./banner-contacto";
import { useTranslations } from "next-intl";

const WrapperComercial = () => {
  const t = useTranslations("navbar");
  return (
    <>
      <HeroSection
        title1={t('comercial')}
        backgroundImage="/images/comercial/hero.webp"
      />
      <DescargaComercialV2 />
      <BannerContacto />
    </>
  );
};

export default WrapperComercial;
