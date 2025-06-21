import React from "react";
import { HeroSection } from "../hero-section";
import AapreInvita from "./AapreInvita";

const WrapperVisitaTecnica = () => {
  return (
    <section>
      <HeroSection
        compact
        backgroundImage="/images/gacetilla/circuito-prensa.webp"
        title1="Visita"
        title2="técnica"
      />
      <AapreInvita/>
    </section>
  );
};

export default WrapperVisitaTecnica;
