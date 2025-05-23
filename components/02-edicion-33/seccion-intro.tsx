"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

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

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1113px] bg-white px-4 py-16 md:px-0"
    >
      <div className="mx-4 flex flex-col items-center gap-[72px] sm:mx-[33px] md:gap-16 lg:flex-row xl:mx-0">
        {/* Columna de texto */}
        <div className="lg:1/2">
          <p className="mb-8 text-[20px] text-[#736D6D] lg:max-w-[47ch]">
            El Congreso Aapresid lleva más de tres décadas conectando
            innovación, tecnología y conocimiento con el propósito de impulsar
            sistemas productivos cada vez más sustentables, siendo hoy en día un
            evento de referencia internacional para técnicos, investigadores,
            decisores, productores y referentes de toda la cadena agroindustrial
            de la región.
          </p>
          <p className="max-w-[47ch] text-[20px] text-[#736D6D]">
            Durante cada edición, el Congreso Aapresid congrega a los más
            importantes referentes nacionales e internacionales para discutir y
            poner en agenda los temas del futuro, vinculando ciencia y
            producción y así transformar nuestra agricultura, ayudando a la
            mitigación del cambio climático e iluminando los escenarios de la
            innovación.
          </p>
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
                src="/images/edicion-33/hexagono-naranja.svg"
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
                src="/images/edicion-33/hexagono-verde-claro.svg"
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
