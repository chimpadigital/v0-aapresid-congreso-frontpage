import Anfitriones from "@/components/06-nos-acompanian/anfitriones";
import { HeroSection } from "@/components/hero-section";
import { getTranslations } from "next-intl/server";
import React from "react";

const NosAcompanian = async () => {
  const t = await getTranslations("nos-acompanian");

  return (
    <section>
      <HeroSection
        title1={t("nos")}
        title2={t("acompanian")}
        backgroundImage="/images/nos-acompanian/hero.webp"
      />
      <Anfitriones />
    </section>
  );
};

export default NosAcompanian;
