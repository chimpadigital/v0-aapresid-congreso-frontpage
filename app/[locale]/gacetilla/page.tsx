import HeroGacetilla from "@/components/04-gacetilla/hero-gacetilla";
import ListaGacetilla from "@/components/04-gacetilla/lista-gacetilla";
import MediosGacetilla from "@/components/04-gacetilla/medios-gacetilla";
import React from "react";

const Gacetilla = () => {
  return (
    <section>
      <HeroGacetilla />
      <ListaGacetilla />
      {/* <MediosGacetilla /> */}
      <div className=" mb-20 "></div>
    </section>
  );
};

export default Gacetilla;
