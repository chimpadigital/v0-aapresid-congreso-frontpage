import Charlas from "@/components/cronograma/Charlas";
import Filtros from "@/components/cronograma/Filtros";
import { HeroSection } from "@/components/hero-section";
import React from "react";

const Cronograma = () => {
  return (
    <section>
      <HeroSection
        compact={true}
        backgroundImage="/images/cronograma/hero.webp"
        title1="Cronograma"
      />
      <Filtros />
      <Charlas />
    </section>
  );
};

export default Cronograma;
