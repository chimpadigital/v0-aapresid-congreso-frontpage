import Anfitriones from "@/components/06-nos-acompanian/anfitriones";
import { HeroSection } from "@/components/hero-section";
import React from "react";

const NosAcompanian = () => {
  return (
    <section>
      <HeroSection
        title1="Nos"
        title2="acompañan"
        backgroundImage="/images/nos-acompanian/hero.webp"
      />
      <Anfitriones />
    </section>
  );
};

export default NosAcompanian;
