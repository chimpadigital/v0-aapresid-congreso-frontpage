"use client";
import React from "react";
import CalendarLineal from "../icons/CalendarLineal";
import MapPinLineal from "../icons/MapPinLineal";
import { useTranslations } from "next-intl";

const BannerCongreso = () => {
  const t = useTranslations("edicion-33.banner-congreso");
  return (
    <div
      className="container-banne-edicion33 mx-4 rounded-[20px] bg-[#F0F0F1] px-10 py-10 xs:px-20 xs:py-[100px] md:mx-[33px]"
      style={{
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10">
        <article className="text-primary">
          <h3 className="text-[40px] leading-none">{t("congreso")}</h3>
          <h3 className="text-[40px] font-bold leading-none">
            {t("aapresid")}
          </h3>
          <p className="mt-5 max-w-[35ch] text-xl tracking-wider">{t("p")}</p>
        </article>
        <div className="text-xl text-primary">
          <div className="mb-7 flex items-center gap-2">
            <CalendarLineal /> {t("fecha")}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative -top-[5px]">
              <MapPinLineal />
            </div>
            {t("lugar")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCongreso;
