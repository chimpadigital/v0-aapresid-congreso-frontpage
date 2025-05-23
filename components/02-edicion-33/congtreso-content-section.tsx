"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

export function CongresoContentSection() {
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
      className="relative overflow-hidden bg-white px-4 py-16 md:px-8"
    >
      <div className="relative mx-auto max-w-[1113px]">
        <div className="flex flex-col items-center gap-8 lg:flex-row md:gap-16">
          {/* Columna izquierda - Imagen con hexágonos */}
          <div className="relative lg:w-1/2">
            {/* Imagen principal ya en formato hexagonal */}
            <div className="relative mr-auto h-[400px] w-[400px]">
              <Image
                src="/images/edicion-33/charla-foto.webp"
                alt="Orador del Congreso Aapresid"
                className="h-auto w-full"
                quality={100}
                fill
              />

              {/* Hexágono verde decorativo */}
              <motion.div
                className="absolute -bottom-10 -right-10 h-40 w-40"
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

              {/* Hexágono verde claro */}
              <motion.div
                className="absolute left-14 top-[75px] h-[70px] w-[70px]"
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

              {/* Hexágono naranja decorativo */}
              <motion.div
                className="absolute -bottom-4 -right-[85px] h-[55px] w-[50px]"
                style={{
                  y: scrollY * 0.03,
                }}
              >
                <Image
                  src="/images/edicion-33/hexagono-naranja.svg"
                  alt="Hexágono decorativo"
                  width={50}
                  height={55}
                  quality={100}
                />
              </motion.div>
            </div>
          </div>

          {/* Columna derecha - Textos */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <p className="text-lg text-[#736D6D]">
                El contenido del Congreso Aapresid es elaborado y pensado por
                grupos interdisciplinarios conformados por referentes
                académicos, institucionales, socios Aapresid y productores que a
                través de una metodología específica logran posicionar contenido
                prospectivo y que este año se reunirán en 7 ejes de: Aprender
                Produciendo, Desafíos Globales, Innovación y Agtech, Manejo de
                Plagas, Sistemas Integrados, Sistemas Productivos Sustentables,
                Perspectivas Sociopolíticas.
              </p>
              <p className="text-lg text-[#736D6D]">
                Luego del gran éxito de la última edición, el Congreso Aapresid
                se llevará a cabo nuevamente en la Ciudad Autónoma de Buenos
                Aires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
