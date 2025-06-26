import React from "react";
import { HeroSection } from "../hero-section";
import Filtros from "./Filtros";
import Charlas from "./Charlas";
import { Download } from "lucide-react";

const WrapperCronograma = () => {
  return (
    <section>
      <HeroSection
        compact={true}
        backgroundImage="/images/cronograma/hero.webp"
        title1="Cronograma"
      />
      <div className="px-4 md:px-[33px]">
        <Filtros />
        <Charlas />
        <div className="mx-auto mt-20 flex mb-5 md:mb-[90px] max-w-[1163px] flex-wrap justify-evenly gap-6">
          <a
            href=""
            className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-transparent bg-secondary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border hover:border-transparent hover:border-white hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
          >
            Descargá cronograma Día 1 <Download className="h-4 w-4" />
          </a>
          <a
            href=""
            className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-transparent bg-secondary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border hover:border-transparent hover:border-white hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
          >
            Descargá cronograma Día 2 <Download className="h-4 w-4" />
          </a>
          <a
            href=""
            className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-transparent bg-secondary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border hover:border-transparent hover:border-white hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
          >
            Descargá cronograma Día 3 <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WrapperCronograma;
