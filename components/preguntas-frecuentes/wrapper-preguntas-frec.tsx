"use client";
import React, { useState } from "react";
import { HeroSection } from "../hero-section";
import Accordion from "../faq-accordion";
import { useTranslations } from "next-intl";
import { FaqItem } from "@/lib/types";
import TenesDuddas from "../TenesDuddas";

const WrapperPreguntasFrecuentes = () => {
  const t = useTranslations("faq");

  const preguntas = t.raw("items") as Array<{
    pregunta: string;
    respuesta: string | string[];
  }>;

  const [faqs, setFaqs] = useState<FaqItem[]>(
    Array.isArray(preguntas)
      ? preguntas.map((item) => ({
          question: item.pregunta,
          answer: item.respuesta,
          isOpen: false,
        }))
      : [],
  );

  return (
    <div>
      <HeroSection
        title1={t("preguntas")}
        title2={t("frecuentes")}
        backgroundImage="/images/preguntas-frecuentes/hero.webp"
      />
      <div className="mx-auto max-w-[820px] px-4 py-8">
        <Accordion items={faqs} addShadow={true} />
      </div>
      <section className="mx-4 mt-[60px] rounded-[28px] bg-[#f0f0f1] px-4 pb-2 pt-[80px] md:mx-[33px] lg:px-8">
        <div className="mx-auto max-w-7xl tracking-wider text-primary md:px-5 lg:px-10">
          <TenesDuddas />
        </div>
      </section>
    </div>
  );
};

export default WrapperPreguntasFrecuentes;
