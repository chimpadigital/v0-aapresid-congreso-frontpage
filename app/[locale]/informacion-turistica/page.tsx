import { ComoLlegarSection } from "@/components/03-informacion-turistica/como-llegar";
import { DelCampoCiudadSection } from "@/components/03-informacion-turistica/del-campo";
import SliderBsAs from "@/components/03-informacion-turistica/slider-bsas";
import { HeroSection } from "@/components/hero-section";
import { getTranslations } from "next-intl/server";
import React from "react";

const InformcionTuristica = async () => {
  const t = await getTranslations("informacion-turistica");

  return (
    <section>
      <HeroSection
        backgroundImage="/images/informacion-turistica/hero.webp"
        title1={t("informacion")}
        title2={t("turistica")}
      />
      <DelCampoCiudadSection />
      <SliderBsAs />
      <ComoLlegarSection />
    </section>
  );
};

export default InformcionTuristica;
