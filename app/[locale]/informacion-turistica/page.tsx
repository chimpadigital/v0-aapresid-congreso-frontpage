import { DelCampoCiudadSection } from "@/components/03-informacion-turistica/del-campo";
import SliderBsAs from "@/components/03-informacion-turistica/slider-bsas";
import { HeroSection } from "@/components/hero-section";
import React from "react";

const InformcionTuristica = () => {
  return (
    <section>
      <HeroSection
        backgroundImage="/images/informacion-turistica/hero.webp"
        title1="Información"
        title2="Turística"
      />
      <DelCampoCiudadSection />
      <SliderBsAs />
    </section>
  );
};

export default InformcionTuristica;
