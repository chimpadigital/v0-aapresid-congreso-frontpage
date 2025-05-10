"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "¿Qué es el Congreso Aapresid?",
      answer: [
        "Es un evento de 3 días vinculado al agro. Consolidado como el evento de conocimiento agropecuario más destacado en nuestro país y un referente a nivel mundial. El mismo es un congreso multitemático y cuenta con diversas salas que funcionan en simultáneo.",
      ],
      isOpen: false,
    },
    {
      question: "¿En qué fechas y cómo se llevará a cabo el Congreso?",
      answer: [
        "El Congreso se realizará por primera vez, en La Rural de Palermo (Ciudad Autónoma de Buenos Aires) de manera presencial, los días 6, 7 y 8 de agosto.",
      ],
      isOpen: false,
    },
    {
      question: "¿Cómo me inscribo para asistir?",
      answer: ["Próximamente dentro de esta misma página."],
      isOpen: false,
    },
    {
      question: "¿Dónde puedo ver el programa del Congreso?",
      answer: [
        "El cronograma estará disponible en la sección Congreso de la web de Aapresid y usted podrá descargarlo, el mismo se irá actualizando periódicamente con disertantes y títulos.",
      ],
      isOpen: false,
    },
    {
      question:
        "¿Cuál es la fecha límite de inscripción gratuita como socio Aapresid?",
      answer: [
        "El socio Aapresid podrá inscribirse de manera gratuita siempre y cuando tenga la cuota abonada a la fecha.",
        "La fecha límite de inscripción del socio Aapresid para asistir de forma gratuita al congreso es el **5 de agosto de 2025**. Una vez pasada esa fecha el socio deberá inscribirse pagando el costo de la entrada.",
        "**Soy socio de Aapresid, ¿cómo debo registrarme al Congreso Aapresid?** \n **1er paso**: asegúrese de estar al día con la cuota societaria. El día previo al lanzamiento de las inscripciones Aapresid pre-cargará un listado de correos electrónicos correspondientes a socios con cuota al día. \n **2do paso**: ingrese a la sección web de congreso y haga click en el espacio ¿Sos socio Aapresid?, en el botón “QUIERO MI ENTRADA”. Se le solicitará que cargué su email y DNI y complete el formulario de inscripción. Esto mismo puede hacerlo desde el botón en el e-mail sobre Congreso que se le enviará a su casilla registrada en la base de socios de Aapresid. \n **3er paso**: una vez completados estos datos su inscripción estará lista. Solo debe presentarse al congreso presencial con su entrada que le llegará a su casilla de correo electrónico o ingresar al congreso en formato virtual utilizando estos mismos datos (email, DNI Y n° de socio). ",
        "**Soy socio y no puedo completar mi inscripción gratuita, ¿a qué se debe?** \n Para poder registrarse de manera gratuita cómo socio ustede debe tener su cuota al día Chequee que el correo que está utilizando es el mismo con el cual usted está registrado en Aapresid como socio",
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
        <h2 className="mb-10 md:mb-20 text-center text-[40px] text-white">
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
