import { getTranslations } from "next-intl/server";
import React from "react";
import { RichText } from "../rich-text";

const CierreSection = async () => {
  const t = await getTranslations("edicion-33");
  return (
    <>
      <RichText
        text={t("texto-final")}
        className="mx-auto max-w-[40ch] px-4 py-[100px] text-center text-[40px] leading-none text-primary"
      />
    </>
  );
};

export default CierreSection;
