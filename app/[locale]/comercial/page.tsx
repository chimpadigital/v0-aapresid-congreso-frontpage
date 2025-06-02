import BannerContacto from "@/components/05-comercial/banner-contacto";
import DescargaComercialV2 from "@/components/05-comercial/descarga-comercial-v2";
import Anfitriones from "@/components/06-nos-acompanian/anfitriones";
import { HeroSection } from "@/components/hero-section";
import React from "react";

const Comercial = () => {
  return (
    <section>
      <HeroSection
        title1="Comercial"
        backgroundImage="/images/comercial/hero.webp"
      />
      <DescargaComercialV2/>
      <BannerContacto/>
    </section>
  );
};

export default Comercial;
