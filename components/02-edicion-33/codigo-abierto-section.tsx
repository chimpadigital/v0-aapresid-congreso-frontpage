"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

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

  return (
    <section
      ref={sectionRef}
      className="relative mx-4 my-8 overflow-hidden rounded-[20px] bg-[url('/images/edicion-33/trama-grande.webp')] bg-cover bg-center px-4 pb-16 pt-28 md:mx-[33px] md:px-8"
    >
      <div className="relative mx-auto max-w-[1113px]">
        {/* Título */}

        <div className="flex flex-col items-center gap-8 lg:flex-row md:gap-16">
          {/* Columna de texto */}
          <article className="max-w-[55ch] break-words text-lg font-light leading-[1.05] tracking-wider text-white">
            <h2 className="md:text-5x font-base mb-14 text-4xl text-white">
              “Código Abierto”
            </h2>
            <p>Estamos escribiendo el diálogo con el futuro.</p>
            <p className="">
              Cada idea, cada avance, cada conversación en el Congreso Aapresid
              es una línea de código en un programa colectivo. Uno que no solo
              resuelve los problemas de hoy, sino que anticipa los desafíos de
              mañana.
            </p>
            <p className="mb-16">
              Vivimos en un mundo que no deja de cambiar. Y frente a esa
              transformación, entendemos que no basta con adaptarse: hay que
              crear. Crear nuevas sintaxis, nuevas conexiones, nuevas
              respuestas. Porque el conocimiento crece cuando se comparte y se
              multiplica cuando se conecta.
            </p>
            <p className="">
              En el XXXIII Congreso Aapresid, abrimos las puertas de la
              innovación. Aquí, los límites se diluyen y las especializaciones
              se encuentran.
            </p>
            <p>
              Cada productor, técnico, investigador y visionario que participa
              no trae solo preguntas o respuestas: trae piezas que encajan en un
              sistema mayor.
            </p>
            <p className="">
              Somos más que testigos del cambio: somos programadores del futuro.
              Cada año, este Congreso compila y actualiza en un solo cuerpo los
              saberes de una comunidad que hace de la innovación su modo de
              vida. No se trata solo de mejorar lo que ya existe, sino de
              imaginar y rediseñar a cada momento para acompañar las
              transformaciones del mundo. Porque el futuro no se predice: se
              programa. Y el código que escribimos juntos está abierto para
              todos.
            </p>
          </article>

          {/* Columna de imagen y hexágonos */}
          <div className="relative md:w-2/5 hidden lg:block">
            <div className="relative">
              {/* Imagen principal hexagonal */}
              <div className="">
                <figure className="relative aspect-[531/468] w-[min(100%,531px)]">
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
                    src="/images/edicion-33/hexagono-verde-claro.svg"
                    alt="Hexágono decorativo"
                    fill
                  />
                </figure>
              </motion.div>

              {/* Hexágono blanco decorativo */}
              <motion.div
                className="absolute -bottom-5 left-[75px] h-[100px] w-[100px]"
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
