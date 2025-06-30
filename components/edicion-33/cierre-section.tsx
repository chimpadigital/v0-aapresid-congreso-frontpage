"use client";
import React from "react";
import { RichText } from "../rich-text";
import { useTranslations } from "next-intl";

const CierreSection = () => {
  const t = useTranslations("edicion-33");
  return (
    <>
      <RichText
        text={t("texto-final")}
        className="mx-auto max-w-[40ch] px-4 py-16 md:py-[100px] text-center text-[40px] leading-none text-primary"
      />
    </>
  );
};

export default CierreSection;
