"use client"
import React from "react";
import ArrowRounded from "../icons/ArrowRounded";
import { useTranslations } from "next-intl";

const RondaDeNegocios = () => {
  const t = useTranslations("ronda_negocios");

  return (
    <div className="mx-4 mt-8 rounded-[20px] bg-[#F0F0F1] bg-[url('/images/home/bg-ronda-negocio.png')] bg-right bg-no-repeat px-8 pb-14 pt-14 text-primary bg-cover lg:bg-contain md:mx-[33px] md:pb-[80px] md:pt-[104px]">
      <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row gap-10">
        <article className="flex-1 tracking-wider">
          <h3 className="mb-5 text-4xl">
            {t('ronda-de')} <span className="font-bold">{t('negocios')}</span>
          </h3>
          <h4 className="mb-3 max-w-[22ch] text-2xl">
            {t('pundo-de-encuentro')}
          </h4>
          <p className="max-w-[50ch]">
            {t('descripcion')}
          </p>
        </article>
        <div className="flex flex-1 items-center lg:justify-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://mbmapp.com/forms/wizard/setup"}
            className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[374px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
          >
            {t('inscribite-aca')}
            <div className="w-fit">
              <ArrowRounded />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RondaDeNegocios;
