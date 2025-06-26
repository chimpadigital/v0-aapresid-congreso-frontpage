"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import Emailicon from "../icons/Emailicon";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const DescubraAprenda = () => {
  const t = useTranslations("visita-tecnica-page.descubra-aprenda");
  const locale = useLocale();
  return (
    <section className="relative mx-4 mt-10 overflow-hidden rounded-[20px] bg-primary px-0 py-6 md:mx-[33px] md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-primary p-8 lg:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="w-fit mx-auto">
              <h1 className="mb-11 max-w-[18ch] text-3xl font-bold leading-none text-white md:text-[40px]">
                {t("titulo")}
              </h1>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl tracking-wider text-white">
                  {t("contacto-titulo")}
                </p>
                <a
                  href={`mailto:${t("contacto-email")}`}
                  className="flex items-center gap-2 text-white transition-all hover:text-accent md:gap-8"
                >
                  <div className="">
                    <Emailicon />
                  </div>
                  <span className="text-lg tracking-wider md:text-2xl">
                    {t("contacto-email")}
                  </span>
                </a>
              </div>
              {/* Download Button */}
              <div className="mt-7 pt-4">
                <a
                  href={
                    locale === "en"
                      ? "https://drive.google.com/file/d/1T1yQ4UyFQf3_ynzBTeXyRd9E4TpgTw43/view?usp=sharing"
                      : "https://drive.google.com/file/d/1Jb2mM2OLuKLJtX8OgQpbPXKqvpNeWS42/view?usp=sharing"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-[1] flex w-fit items-center justify-center gap-1 overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:text-lg md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
                >
                  {t("boton", { default: "Descargá el brochure oficial" })}
                  <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
              {/* Logos */}
              <div className="flex flex-wrap items-center gap-4 pt-14 md:gap-8 md:pl-2">
                <Image
                  src={"/images/visita-tecnica/logo-aapre-internacional.webp"}
                  alt="Logo Aapresid Internacional"
                  width={140}
                  height={50}
                  className="h-auto w-[120px] object-contain md:w-[140px]"
                />
                <Image
                  src={"/images/visita-tecnica/logo-coovaeco.webp"}
                  alt="Logo coovaeco"
                  width={150}
                  height={50}
                  className="h-auto w-[120px] object-contain md:w-[150px]"
                />
              </div>
            </div>
            {/* Right Content - Hexagonal Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main hexagonal image container */}
              <div className="relative">
                {/* Hexagonal image */}
                <div className="relative aspect-square h-60 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
                  <figure className="relative h-full w-full">
                    <Image
                      src="/images/visita-tecnica/descubra-hexa.webp"
                      alt="Experiencia inolvidable - Grupo de profesionales y agricultores en gira técnica"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 384px, 450px"
                    />
                    <div className="absolute -right-1 bottom-8 w-14 md:h-28 h-14 md:w-28">
                      <figure className="relative h-full w-full">
                        <Image
                          src="/images/hexagono-verde-oscuro.svg"
                          alt="Hexágono decorativo"
                          fill
                        />
                      </figure>
                    </div>
                    <div className="absolute -bottom-5 right-0 w-6 md:h-12 h-6 md:w-12 md:-right-11 md:bottom-4">
                      <figure className="relative h-full w-full">
                        <Image
                          src="/images/hexagono-naranja.svg"
                          alt="Hexágono decorativo"
                          fill
                        />
                      </figure>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescubraAprenda;
