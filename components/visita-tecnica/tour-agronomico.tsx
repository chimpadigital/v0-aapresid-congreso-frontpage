"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Card1Mano from "../icons/Card1Mano";

const TourAgronomico = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });
  // Desplazamiento de las cards: de 0px a -120px (ajustable)
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Helper para calcular el centro de cada card
  const getCardTransforms = (index: number, total: number) => {
    const offsetPerCard = 1 / total;
    const center = (index + 0.5) * offsetPerCard;
    const range = offsetPerCard * 1.2;
    const start = Math.max(0, center - range / 2);
    const end = Math.min(1, center + range / 2);

    // Para la última card, que no se "estire" el rango final
    if (index === total - 1) {
      const lastStart = Math.max(0, 1 - range);
      return {
        scale: useTransform(scrollYProgress, [lastStart, 1], [0.9, 1]),
        opacity: useTransform(scrollYProgress, [lastStart, 1], [0.9, 1]),
      };
    }

    // Para las demás: una vez que llegan a 1, se quedan en 1
    const scale = useTransform(
      scrollYProgress,
      [start, center, 1],
      [0.9, 1, 1]
    );
    const opacity = useTransform(
      scrollYProgress,
      [start, center, 1],
      [0.9, 1, 1]
    );
    return { scale, opacity };
  };

  const cards = [
    {
      bg: "bg-accent",
      text: "Explore modelos productivos de vanguardia, reconocidos por la innovación, el cuidado del suelo y la sustentabilidad.",
    },
    {
      bg: "bg-[#4D9A28]",
      text: "Participe en interesantes intercambios técnicos con agricultores y expertos locales, mientras explora el corazón de la agricultura argentina con visitas a destacados establecimientos agrícolas.",
    },
    {
      bg: "bg-[#458B23]",
      text: "Descubra el pulso de la industria conectándose con las principales empresas e instituciones de Argentina.",
    },
    {
      bg: "bg-primary",
      text: "Participe en el 33° Congreso Aapresid, el evento de agricultura más destacado en Argentina y la región, momento clave de actualización, debate y exhibición de los últimos avances tecnológicos del sector.",
    },
  ];

  return (
    <section className="mx-4 mt-10 h-[230vh] rounded-[20px] bg-[#F0F0F1] px-24 pb-28 pt-[70px] md:mx-[33px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content - Hexagonal Image */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main hexagonal image container */}
            <div className="relative">
              {/* Hexagonal image */}
              <div className="relative h-96 w-96 lg:h-[450px] lg:w-[450px]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/visita-tecnica/tour-hexa.webp"
                    alt="Tour técnico agronómico - Técnicos examinando cultivos en el campo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 384px, 450px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-primary lg:text-5xl">
                Tour técnico agronómico
              </h1>
              <p className="text-2xl font-medium text-gray-600 lg:text-3xl">
                3 al 9 de agosto
              </p>
            </div>

            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Descubrá el campo argentino en la previa del 33° Congreso Aapresid
            </p>

            {/* Download Button */}
            <div className="pt-4">
              <button
                // onClick={onDownloadBrochure}
                className="group flex rounded-full bg-[#ED7F00] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#d67200]"
              >
                Descargá el brochure oficial
                <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="main-container-embarquese"
        className="mx-auto mt-36 flex max-w-7xl justify-between min-h-[1200px]"
      >
        {/* Sticky headline: queda fija mientras las cards suben */}
        <div className="sticky top-1/2  flex-1 h-fit self-start flex items-center">
          <h3 id="title-embarquese" className="max-w-[10ch] text-[60px] leading-none text-primary">
            <span className="font-medium">Embárquese </span>
            en un viaje extraordinario
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative ">
            <motion.div
              id="container-cards"
              ref={cardsRef}
              className="flex flex-col gap-10"
            >
              {cards.map((card, i) => {
                const { scale, opacity } = getCardTransforms(i , cards.length + 0.8);
                return (
                  <motion.div
                    key={i}
                    className={`min-h-[280px] max-w-[544px] rounded-[20px] p-8 ${card.bg}`}
                    style={{ scale, opacity }}
                  >
                    <Card1Mano />
                    <p className="mt-5 text-2xl tracking-wider text-white">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourAgronomico;
