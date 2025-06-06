"use client";
import React from "react";
import { BackButton } from "../GoBackHero";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const HeroGacetilla = () => {
  const t = useTranslations("gacetilla-page");
  return (
    <section
      className={`relative mx-4 mt-4 flex min-h-[378px] flex-col justify-center rounded-[20px] bg-cover bg-center px-8 pb-[70px] pt-[140px] md:m-[33px] md:mb-[100px] md:p-[70px]`}
      style={{
        backgroundImage: `url('/images/gacetilla/circuito-prensa.webp')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <BackButton />

        {/* Título */}
        <div>
          <h1 className="mb-1 text-3xl text-white md:text-5xl">
            {t("hero-title")}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroGacetilla;
