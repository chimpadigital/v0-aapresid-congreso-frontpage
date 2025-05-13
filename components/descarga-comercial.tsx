"use client";
import React from "react";
import DownloadIcon from "./icons/DownloadIcon";
import { useTranslations } from "next-intl";

const DescargaComercial = () => {
  const t = useTranslations("commercial");
  return (
    <section className="mx-4 pb-6 pt-14 xl:pb-36 xl:pt-44">
      <div className="mx-auto flex w-full max-w-[1052px] flex-col flex-wrap items-center justify-center gap-4 text-center md:flex-row min-[935px]:text-left lg:justify-between">
        <header className="text-4xl text-primary lg:text-5xl">
          <h2>
            {t("titulo")} <br />{" "}
            <span className="font-bold">{t("congreso")}</span>
          </h2>
        </header>
        <div>
          <a
            download
            href="/TARIFARIO_CONGRESO_2025.pdf"
            className="relative z-[1] ml-4 inline-block overflow-hidden rounded-full bg-accent fill-white px-[30px] py-[15.5px] text-lg text-[#fff] transition-colors duration-500 before:absolute before:-left-[145%] before:top-[160%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:fill-primary hover:text-primary hover:before:scale-[3]"
          >
            <div className="flex items-center gap-2">
              {t("descarga")}
              <DownloadIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DescargaComercial;
