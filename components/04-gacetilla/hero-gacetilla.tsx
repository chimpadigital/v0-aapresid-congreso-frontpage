import React from "react";
import { BackButton } from "../GoBackHero";

const HeroGacetilla = () => {
  return (
    <section
      className={`relative mx-4 mt-4 flex flex-col justify-center rounded-[20px] bg-cover bg-center px-8 md:p-[70px] pb-[70px] pt-[140px] md:m-[33px] md:mb-[100px]`}
      style={{
        backgroundImage: `url('/images/gacetilla/circuito-prensa.webp')`,
      }}
    >
      <div>
        <BackButton />

        {/* Título */}
        <div className="">
          <h1 className="mb-1 text-3xl text-white md:text-5xl">Prensa</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroGacetilla;
