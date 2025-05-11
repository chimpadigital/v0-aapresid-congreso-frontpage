"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";

interface FaqItem {
  question: string;
  answer: string | string[];
  isOpen: boolean;
}

// Componente para renderizar texto con **bold** y saltos de línea
function RichText({ text }: { text: string | string[] }) {
  const lines = Array.isArray(text) ? text : [text];
  return (
    <>
      {lines.map((line, idx) => (
        <p
          key={idx}
          className="mb-3 whitespace-pre-line text-[#736D6D] last:mb-0"
        >
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={i} className="font-medium">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            ),
          )}
        </p>
      ))}
    </>
  );
}

export function FaqSection() {
  const t = useTranslations("faq");
  const preguntas = t.raw("items") as Array<{
    pregunta: string;
    respuesta: string | string[];
  }>;
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: preguntas[0].pregunta,
      answer: preguntas[0].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[1].pregunta,
      answer: preguntas[1].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[2].pregunta,
      answer: preguntas[2].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[3].pregunta,
      answer: preguntas[3].respuesta,
      isOpen: false,
    },
    {
      question: preguntas[4].pregunta,
      answer: [
        preguntas[4].respuesta[0],
        preguntas[4].respuesta[1],
        preguntas[4].respuesta[2],
        preguntas[4].respuesta[3],
      ],
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

  // Determinar cuántas preguntas mostrar
  const visibleFaqs = faqs;

  return (
    <section className="relative mx-4 mt-[44px] overflow-hidden rounded-[20px] bg-[url('/images/fondo-preguntas-dark.png')] bg-cover bg-bottom md:mx-[33px]">
      {/* Content container */}
      <div className="relative flex flex-col items-center p-8 md:px-16 md:py-24">
        <h2 className="mb-10 text-center text-[40px] text-white md:mb-20">
          Preguntas <span className="font-medium">Frecuentes</span>
        </h2>

        {/* FAQ accordion */}
        <div className="w-full max-w-3xl space-y-[40px]">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[16px] bg-white transition-all duration-[1500ms] ease-in-out"
            >
              <button
                className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-[#2D3D34]">
                  {faq.question}
                </span>
                <span className="ml-2 flex-shrink-0 rounded-[16px] bg-[#ED7F00] p-1">
                  {faq.isOpen ? (
                    <ChevronUp className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white" />
                  )}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  faq.isOpen
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-gray-700">
                  <RichText text={faq.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
