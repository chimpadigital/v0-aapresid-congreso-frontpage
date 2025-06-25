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
      <div className="px-4">
        <div
          className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-[20px] px-4"
          style={{
            position: "relative",
            paddingTop: "max(60%,326px)",
            height: 0,
            width: "100%",
          }}
        >
          <iframe
            allow="clipboard-write"
            sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            style={{
              position: "absolute",
              border: "none",
              width: "100%",
              height: "100%",
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
