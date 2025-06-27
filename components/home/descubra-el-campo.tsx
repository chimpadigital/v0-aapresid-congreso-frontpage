"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ArrowRounded from "../icons/ArrowRounded";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useLocale, useTranslations } from "next-intl";

const DescubraElCampo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const locale = useLocale()
  const t = useTranslations("descubra-campo");

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const offsetTop = rect.top + scrollPosition;
        const relativeScroll = scrollPosition - offsetTop;
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="m-4 rounded-[20px] bg-primary bg-[url('/images/home/vector-conoce.webp')] bg-cover bg-no-repeat px-8 py-11 md:mx-[33px]"
    >
      <div className="mx-auto flex max-w-[1168px] flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Left side - Image with pre-cut shape */}
        <div className="relative flex flex-1">
          <figure className="relative mr-auto w-fit">
            {/* Use the image as-is since it already has the correct shape */}
            <Image
              src="/images/home/conoce.webp"
              alt="Grupo de participantes en visita técnica al campo argentino con silos de granos"
              width={450}
              height={450}
              className="h-auto w-full max-w-md"
              priority
            />
            {/* Decorative hexagon */}
            <motion.div
              className="absolute right-0 md:-right-14 bottom-10 h-[100px] w-[100px]"
              style={{
                y: scrollY * 0.03,
              }}
            >
              <Image
                src="/images/hexagono-naranja.svg"
                alt="Hexágono decorativo"
                width={100}
                height={100}
                quality={100}
              />
            </motion.div>
          </figure>
        </div>

        {/* Right side - Content */}
        <div className="tracking-wider text-white">
          <h2 className="mb-8 text-4xl lg:text-[40px]">
            {t("titulo1")}
            <br />
            <span className="font-bold">{t("titulo2")}</span>
          </h2>

          {/* Event dates */}
          <div className="mb-11 flex flex-wrap w-fit gap-8">
            <div>
              <div className="text-xl font-bold text-secondary">
                {t("5-agosto")}
              </div>
              <div className="text-lg text-white">{t("dia-tecnico")}</div>
            </div>
            <div>
              <div className="text-xl font-bold text-secondary">
                {t("3-9-agosto")}
              </div>
              <div className="text-lg text-white">{t("gira-tecnica")}</div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 max-w-[45ch] text-lg leading-relaxed text-white">
            {t("descripcion1")}
          </p>

          {/* Read more link */}
          <Link
            href={`/${locale}/visita-tecnica`}
            className="group flex w-fit items-center gap-2 whitespace-nowrap border-b-2 border-white font-medium text-white transition-opacity hover:border-opacity-70"
          >
            <p className="flex">{t("leer-mas")}</p>
            <ArrowRounded className="h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DescubraElCampo;
