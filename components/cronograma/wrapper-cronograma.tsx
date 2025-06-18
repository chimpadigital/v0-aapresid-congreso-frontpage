import React from "react";
import { HeroSection } from "../hero-section";
import Filtros from "./Filtros";
import Charlas from "./Charlas";

const WrapperCronograma = () => {
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

export default WrapperCronograma;
