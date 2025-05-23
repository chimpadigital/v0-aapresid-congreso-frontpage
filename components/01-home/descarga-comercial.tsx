"use client";
import React from "react";
import DownloadIcon from "../icons/DownloadIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";

const DescargaComercial = () => {
  const t = useTranslations("commercial");

  return (
    <section className="relative mx-4 overflow-hidden rounded-[28px] bg-[url('/images/home/bg-formaparte.webp')] bg-cover bg-left md:bg-center bg-no-repeat md:mx-[33px]">
      {/* Contenido */}
      <div className="relative mx-auto flex max-w-[1415px] flex-col items-center justify-between px-8 py-16 md:py-28 md:flex-row md:px-16">
        {/* Columna izquierda - Texto */}
        <div className="z-10 mb-10 md:mb-0 md:max-w-[50ch]">
          <h2 className="text-4xl font-normal leading-none text-white md:text-[40px] tracking-wider">
            Formá parte de la <span className="font-bold">33° edición del</span>{" "}
            <span className="font-bold block">Congreso</span>
          </h2>
          <p className="mb-[28px] mt-[20px] text-xl tracking-wider text-white">
            Descargá la carpeta comercial y conocé
            <br />
            las oportunidades que ofrecemos.
          </p>
          <a
            href="/TARIFARIO_CONGRESO_2025.pdf"
            download
            target="_blank"
            className="relative z-[1] flex items-center gap-3 w-fit overflow-hidden rounded-full bg-accent fill-white px-[30px] py-[15.5px] text-lg text-[#fff] transition-all duration-500 before:absolute before:-left-[145%] before:top-[160%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[3]"
          >
            <span>Descargar carpeta comercial</span>
            <DownloadIcon />
          </a>
        </div>

        {/* Columna derecha - Imagen del folleto */}
        <div className="z-10 flex justify-center md:w-1/2 md:justify-end">
          <div className="relative h-[300px] w-[400px] md:h-[350px] md:w-[500px]">
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

export default DescargaComercial;
