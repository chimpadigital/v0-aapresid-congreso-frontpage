"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export function CodigoAbiertoSection() {
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

  const t = useTranslations("edicion-33.open-code");

  return (
    <section
      ref={sectionRef}
      className="relative mx-4 mt-8 overflow-hidden rounded-[20px] bg-[url('/images/edicion-33/trama-grande.webp')] bg-cover bg-center px-4 py-10 md:pb-28 md:pt-36 md:mx-[33px] md:px-8"
    >
      <div className="relative mx-auto max-w-[1213px]">
        {/* Título */}

        <div className="flex flex-col items-center gap-4 md:gap-12 lg:flex-row leading-tight">
          {/* Columna de texto */}
          <article className="max-w-[63ch] leading-tight break-words text-lg font-light text-white">
            <h2 className="md:text-5xl font-base mb-6 md:mb-[59px] text-4xl text-white tracking-wider ">
              “{t("titulo")}”
            </h2>
            <p className="font-gotham font-light">
              {t("p1")}
            </p>
            <p className="font-gotham font-light">
              {t("p2")}
            </p>
            <p className="font-gotham font-light mb-16">
              {t("p3")}
            </p>
            <p className="font-gotham font-light">
              {t("p4")}
            </p>
            <p className="font-gotham font-light">
              {t("p5")}
            </p>
            <p className="font-gotham font-light">
              {t("p6")}
            </p>
          </article>

          {/* Columna de imagen y hexágonos */}
          <div className="relative hidden md:w-2/5 lg:block">
            <div className="relative h-[500px]">
              {/* Imagen principal hexagonal */}
              <div className="h-full">
                <figure className="relative h-full aspect-[531/468] w-[min(100%,531px)]">
                  <Image
                    src="/images/edicion-33/codigo-abierto.webp"
                    alt="Campo de cultivo"
                    className="h-auto w-full object-contain"
                    fill
                  />
                </figure>
              </div>

              {/* Hexágono verde oscuro decorativo */}
              <motion.div
                className="absolute -bottom-2 -right-2 h-40 w-40"
                style={{
                  y: scrollY * 0.05,
                }}
              >
                <figure className="relative h-full w-full">
                  <Image
                    src="/images/edicion-33/hexagono-verde-oscuro.svg"
                    alt="Hexágono decorativo"
                    fill
                  />
                </figure>
              </motion.div>

              {/* Hexágono verde claro decorativo */}
              <motion.div
                className="absolute -top-10 left-10 h-[70px] w-[70px]"
                style={{
                  y: scrollY * 0.05,
                }}
              >
                <figure className="relative h-full w-full">
                  <Image
                    src="/images/hexagono-verde-claro.svg"
                    alt="Hexágono decorativo"
                    fill
                  />
                </figure>
              </motion.div>

              {/* Hexágono blanco decorativo */}
              <motion.div
                className="absolute -bottom-5 left-[75px] h-[160px] w-[100px]"
                style={{
                  y: scrollY * 0.03,
                }}
              >
                <figure className="relative h-full w-full">
                  <Image
                    src="/images/edicion-33/hexagono-blanco.svg"
                    alt="Hexágono decorativo"
                    fill
                    className="object-contain"
                  />
                </figure>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
