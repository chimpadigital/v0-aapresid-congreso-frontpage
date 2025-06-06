"use client"
import React from "react";
import DownloadIcon from "../icons/DownloadIcon";
import { useTranslations } from "next-intl";

const DescargaGacetilla = ({ file }: { file: any }) => {
  const t = useTranslations("gacetilla-page");
  return (
    <a
      href={file || "#"}
      download
      target="_blank"
      className="relative z-[1] flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-primary bg-white px-[30px] py-[15.5px] text-lg tracking-wider text-primary transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:text-white hover:before:scale-[6] md:min-w-[255px] md:w-fit md:before:-left-[145%] md:before:top-[160%] md:hover:before:scale-[3]"
    >
      <span>{t("descargar-gacetilla")}</span>
      <DownloadIcon />
    </a>
  );
};

export default DescargaGacetilla;
