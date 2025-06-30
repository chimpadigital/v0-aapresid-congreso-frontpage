"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Card1Mano from "../icons/Card1Mano";
import Card2Manos from "../icons/Card2Manos";
import PlanetaIcon from "../icons/PlanetaIcon";
import Card4tiempo from "../icons/Card4tiempo";
import { useLocale, useTranslations } from "next-intl";

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
      [0.9, 1, 1],
    );
    const opacity = useTransform(
      scrollYProgress,
      [start, center, 1],
      [0.9, 1, 1],
    );
    return { scale, opacity };
  };

  const t = useTranslations("visita-tecnica-page.tour-agronomico");
  const locale = useLocale();

  // Card icons remain in the same order as the translation array
  const cardIcons = [
    <Card1Mano key="icon1" />, // 0
    <Card2Manos key="icon2" />, // 1
    <PlanetaIcon key="icon3" size="49" />, // 2
    <Card4tiempo key="icon4" /> // 3
  ];

  // Cards: texts from translation, icons and bg colors as before
  const cards = t.raw("cards").map((text: string, i: number) => ({
    bg: ["bg-accent", "bg-[#4D9A28]", "bg-[#458B23]", "bg-primary"][i],
    icon: cardIcons[i],
    text,
  }));

  return (
    <section
      id="gira-tecnica"
      className="mx-4 mt-10 rounded-[20px] bg-[#F0F0F1] px-8 pb-10 md:pb-28 pt-[70px] sm:px-14 md:mx-[33px] lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content - Hexagonal Image */}
          <div className="relative flex justify-center lg:justify-start gap-5">
            {/* Main hexagonal image container */}
            <div className="relative">
              {/* Hexagonal image */}
              <div className="relative aspect-square h-60 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/visita-tecnica/tour-hexa.webp"
                    alt={t("titulo") + " - Técnicos examinando cultivos en el campo"}
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
            <div>
              <h2 className="text-3xl font-bold leading-none tracking-wide text-primary md:text-[40px]">
                {t("titulo")}
              </h2>
              <p className="text-[40px] leading-none text-primary">
                {t("fecha")}
              </p>
            </div>

            <p className="max-w-[23ch] text-xl leading-none tracking-wide text-paragraph md:text-4xl">
              {t("descripcion")}
            </p>

            {/* Download Button */}
            <div className="pt-4">
              <a
                href={
                  locale === "en"
                    ? "https://drive.google.com/file/d/1T1yQ4UyFQf3_ynzBTeXyRd9E4TpgTw43/view?usp=sharing"
                    : "https://drive.google.com/file/d/1Jb2mM2OLuKLJtX8OgQpbPXKqvpNeWS42/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-[1] flex w-fit items-center justify-center gap-1 overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] md:text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
              >
                {t("boton", { default: "Descargá el brochure oficial" })}
                <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="main-container-embarquese"
        className="mx-auto mt-10 flex min-h-[1200px] max-w-7xl flex-col justify-between gap-3 md:mt-36 md:flex-row"
      >
        {/* Sticky headline: queda fija mientras las cards suben */}
        <div className="top-1/2 flex h-fit flex-1 items-center self-start md:sticky">
          <h3
            id="title-embarquese"
            className="max-w-[10ch] text-3xl leading-[1.15] text-primary lg:text-[60px]"
          >
            <span className="font-medium">{t("embarquese")} </span>
            {t("en-un-viaje")}
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative">
            <motion.div
              id="container-cards"
              ref={cardsRef}
              className="flex flex-col gap-5 md::gap-10"
            >
              {cards.map((card: any, i: number) => {
                const { scale, opacity } = getCardTransforms(
                  i,
                  cards.length + 0.8,
                );
                return (
                  <motion.div
                    key={i}
                    className={`min-h-[280px] max-w-[544px] rounded-[20px] p-8 text-white ${card.bg}`}
                    style={{ scale, opacity }}
                  >
                    {card.icon}
                    <p className="mt-5 text-lg tracking-wider md:text-2xl">
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
