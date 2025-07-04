"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const SeccionIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

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

  const t = useTranslations("edicion-33.intro-text");
  
  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1113px] bg-white px-4 pt-10 md:px-0 md:pt-[2px]"
    >
      <div className="mx-4 flex flex-col items-center gap-[72px] tracking-wider sm:mx-[33px] md:gap-16 lg:flex-row xl:mx-0">
        {/* Columna de texto */}
        <div className="lg:1/2">
          <p className="mb-8 text-lg text-[#736D6D] lg:max-w-[47ch]">
            {t("p1")}
          </p>
          <p className="max-w-[47ch] text-lg text-[#736D6D]">{t("p2")}</p>
        </div>

        {/* Columna de imagen */}
        <div className="relative">
          <div className="relative flex justify-end">
            <Image
              src="/images/edicion-33/gacetilla-intro.webp"
              alt="Asistentes al Congreso Aapresid"
              width={526}
              height={526}
              //   className="w-full h-auto"
            />
          </div>

          {/* Hexágono naranja decorativo */}
          <motion.div
            className="absolute -right-5 bottom-14 h-[117px] w-[117px] md:-right-[50px]"
            style={{
              y: scrollY * 0.03,
            }}
          >
            <figure className="relative h-full w-full">
              <Image
                src="/images/hexagono-naranja.svg"
                alt="Hexágono decorativo"
                quality={100}
                fill
              />
            </figure>
          </motion.div>

          {/* Hexágono verde claro */}
          <motion.div
            className="absolute bottom-36 right-16 h-[70px] w-[70px]"
            style={{
              y: scrollY * 0.08,
            }}
          >
            <figure className="relative h-full w-full">
              <Image
                src="/images/hexagono-verde-claro.svg"
                alt="Hexágono decorativo"
                quality={100}
                fill
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeccionIntro;
