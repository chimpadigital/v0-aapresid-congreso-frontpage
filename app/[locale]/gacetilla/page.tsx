import HeroGacetilla from "@/components/gacetilla/hero-gacetilla";
import ListaGacetilla from "@/components/gacetilla/lista-gacetilla";
import MediosGacetilla from "@/components/gacetilla/medios-gacetilla";
import React from "react";

const Gacetilla = () => {
  return (
    <section>
      <HeroGacetilla />
      <ListaGacetilla />
      <MediosGacetilla />
      <div className="mb-20"></div>
    </section>
  );
};

export default Gacetilla;
