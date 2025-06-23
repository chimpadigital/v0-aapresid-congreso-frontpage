import React from "react";
import { HeroSection } from "../hero-section";
import AapreInvita from "./AapreInvita";
import DiaTecnico from "./DiaTecnico";

const WrapperVisitaTecnica = () => {
  return (
    <section>
      <HeroSection
        compact
        backgroundImage="/images/gacetilla/circuito-prensa.webp"
        title1="Visita"
        title2="técnica"
      />
      <AapreInvita />
      <div className="mx-4 mt-8 rounded-[20px] bg-accent bg-[url('/images/visita-tecnica/bg-banner.png')] bg-cover bg-right bg-no-repeat px-8 pb-14 pt-14 sm:bg-auto md:mx-[33px] md:pb-[80px] md:pt-[104px]">
        <div className="mx-auto max-w-7xl md:pl-14">
          <p className="max-w-[45ch] text-2xl font-light tracking-wider text-white">
            Explore el corazón de la agricultura argentina, sus modelos
            productivos de vanguardia, líderes en cuidado del suelo, tecnología
            y sustentabilidad. Intercambie con productores pioneros y expertos
            locales.
          </p>
        </div>
      </div>
      <DiaTecnico />
    </section>
  );
};

export default WrapperVisitaTecnica;
