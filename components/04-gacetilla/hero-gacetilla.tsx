import React from "react";
import { BackButton } from "../GoBackHero";

const HeroGacetilla = ({ showTitle = true }) => {
  return (
    <section
      className={`relative mx-4 mt-4 flex min-h-[378px] flex-col justify-center rounded-[20px] bg-cover bg-center px-8 pb-[70px] pt-[140px] md:m-[33px] md:mb-[100px] md:p-[70px]`}
      style={{
        backgroundImage: `url('/images/gacetilla/circuito-prensa.webp')`,
      }}
    >
      <div className="mx-auto max-w-7xl w-full md:pl-5">
        <BackButton />

        {/* Título */}
        <div className={`${showTitle ? "opacity-100" : "opacity-0"}`}>
          <h1 className="mb-1 text-3xl text-white md:text-5xl">Prensa</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroGacetilla;
