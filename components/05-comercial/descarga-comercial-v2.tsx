"use client"
import React from "react";
import DownloadIcon from "../icons/DownloadIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const DescargaComercialV2 =  () => {
  const t = useTranslations("commercial");

  return (
    <section className="relative mx-4 mt-6 overflow-hidden rounded-[28px] bg-[url('/images/comercial/bg-formaparte.webp')] bg-cover bg-left bg-no-repeat md:mx-[33px] md:mt-0 md:bg-center">
      {/* Contenido */}
      <div className="relative mx-auto flex max-w-[1415px] flex-col items-center justify-between px-8 py-16 md:flex-row md:px-16 md:py-16">
        {/* Columna izquierda - Texto */}
        <div className="z-10 mb-10 md:mb-0 md:max-w-[54ch]">
          <h2 className="text-4xl font-normal leading-none tracking-wider text-primary md:text-[40px]">
            {t("forma-parte")}{" "}
            <span className="font-bold">{t("de-la-33")}</span>{" "}
          </h2>
          <p className="mb-[28px] mt-[20px] text-xl tracking-wider text-primary">
            {t("descripcion1")} {' '}
            {t("descripcion2")}
          </p>
          <a
            href="/TARIFARIO_CONGRESO_2025.pdf"
            download
            target="_blank"
            className="relative z-[1] flex w-fit items-center gap-3 overflow-hidden rounded-full bg-accent fill-white px-[30px] py-[15.5px] md:text-lg text-[#fff] transition-all duration-500 before:absolute before:-left-[145%] before:top-[160%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[3]"
          >
            <span>{t("descarga")}</span>
            <DownloadIcon />
          </a>
        </div>

        {/* Columna derecha - Imagen del folleto */}
        <div className="z-10 flex justify-center md:w-1/2 md:justify-end">
          <div className="relative h-[300px] w-[400px] md:h-[450px] md:w-[600px]">
            <Image
              src="/images/home/mockup-folleto.webp"
              alt="Carpeta comercial Aapresid"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescargaComercialV2;
