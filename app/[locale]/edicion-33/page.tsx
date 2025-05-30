import CierreSection from "@/components/02-edicion-33/cierre-section";
import { CodigoAbiertoSection } from "@/components/02-edicion-33/codigo-abierto-section";
import { CongresoContentSection } from "@/components/02-edicion-33/congreso-content-section";
import SeccionIntro from "@/components/02-edicion-33/seccion-intro";
import { SloganSection } from "@/components/02-edicion-33/slogan-section";
import { StatsSection } from "@/components/02-edicion-33/stats-section";
import { HeroSection } from "@/components/hero-section";
import React from "react";

const Edicion33 = () => {
  return (
    <section>
      <HeroSection
        backgroundImage="/images/edicion-33/hero.webp"
        title1="Acerca del"
        title2="Congreso"
      />
      <SeccionIntro />
      <StatsSection />
      <CongresoContentSection />
      <SloganSection />
      <CodigoAbiertoSection />
      <CierreSection />
    </section>
  );
};

export default Edicion33;
