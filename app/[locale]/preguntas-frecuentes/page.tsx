"use client";
import Accordion from "@/components/faq-accordion";
import { HeroSection } from "@/components/hero-section";
import { FaqItem } from "@/lib/types";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const PreguntasFrecuentes = () => {
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
    <section>
      <HeroSection
        title1="Preguntas"
        title2="Frecuentes"
        backgroundImage="/images/preguntas-frecuentes/hero.webp"
      />
      <div className="mx-auto max-w-[820px] px-4 py-8">
        <Accordion items={faqs} addShadow={true} />
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
