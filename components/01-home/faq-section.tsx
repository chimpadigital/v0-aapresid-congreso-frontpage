"use client";
import * as motion from "motion/react-client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { RichText } from "../rich-text";
import Link from "next/link";
import Accordion from "../faq-accordion";

interface FaqItem {
  question: string;
  answer: string | string[];
  isOpen: boolean;
}

const list = {
  visible: {
    opacity: 1,
    duration: 0.2,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 1,
  },
};

const item = {
  visible: { y: 0 },
  hidden: { y: 100 },
};

export function FaqSection() {
  const t = useTranslations("faq");

  const preguntas = t.raw("items") as Array<{
    pregunta: string;
    respuesta: string | string[];
  }>;
  
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: preguntas[1].pregunta,
      answer: preguntas[1].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[5].pregunta,
      answer: preguntas[5].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[3].pregunta,
      answer: preguntas[3].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[13].pregunta,
      answer: preguntas[13].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[9].pregunta,
      answer: [preguntas[9].respuesta[0], preguntas[9].respuesta[1]],
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      }),
    );
  };

  const locale = useLocale();

  // Determinar cuántas preguntas mostrar
  const visibleFaqs = faqs;

  return (
    <section className="relative mx-4 mt-[44px] overflow-hidden rounded-[20px] bg-primary bg-cover bg-bottom md:mx-[33px]">
      {/* Content container */}
      <div className="relative flex flex-col items-center p-8 md:px-16 md:py-24">
        <h2 className="mb-10 text-center text-[40px] text-white md:mb-20">
          {t("titulo1")} <span className="font-medium">{t("titulo2")}</span>
        </h2>

        {/* FAQ accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={list}
          className="w-full max-w-3xl space-y-[40px]"
        >
          <Accordion items={faqs} />
        </motion.div>

        <Link
          href={`${locale}/preguntas-frecuentes`}
          className="mx-auto mt-10 text-center text-lg text-white underline"
        >
          Ver más preguntas frecuentes
        </Link>
      </div>
    </section>
  );
}
