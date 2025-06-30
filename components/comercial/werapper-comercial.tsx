"use client";
import React from "react";
import { HeroSection } from "../hero-section";
import DescargaComercialV2 from "./descarga-comercial-v2";
import BannerContacto from "./banner-contacto";
import { useTranslations } from "next-intl";

const WrapperComercial = () => {
  const t = useTranslations("navbar");
  return (
    <>
      <HeroSection
        title1={t("comercial")}
        backgroundImage="/images/comercial/hero.webp"
      />
      <DescargaComercialV2 />
      <div className="px-4  md:px-[33px] mb-10">
        <div
          className="mx-auto mt-10 max-w-7xl overflow-hidden h-[40vh] md:pt-0 md:h-[80vh] rounded-[20px] px-4"
          style={{
            position: "relative",
            // paddingTop: "max(70%,226px)",
            width: "100%",
          }}
        >
          <iframe
            allow="clipboard-write"
            sandbox="allow-top-navigation  allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            className="h-[40vh] md:h-[80vh]"
            style={{
              position: "absolute",
              border: "none",
              width: "100%",
              // height: "90%",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            src="https://e.issuu.com/embed.html?d=tarifario_congreso_aapresid_2025&u=aapresid"
          ></iframe>
        </div>
      </div>
      <BannerContacto />
    </>
  );
};

export default WrapperComercial;
