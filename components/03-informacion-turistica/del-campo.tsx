"use client";

import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

export function DelCampoCiudadSection() {
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
    <section ref={sectionRef} className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[1230px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-16">
          {/* Columna izquierda - Texto */}
          <div className="flex-[2]">
            <h2 className="mb-10 text-5xl font-normal text-primary md:text-5xl">
              Del campo a la <span className="font-medium">ciudad</span>
            </h2>

            <h3 className="mb-10 text-xl font-medium text-secondary">
              Conectá con la Ciudad de Buenos Aires.
            </h3>

            <div className="text-parabraph max-w-[62ch] text-lg leading-none tracking-wider">
              <p className="mb-8">
                La ciudad de Buenos Aires es una ciudad llena de cultura y
                espacios turísticos, que además de alojar el Congreso, ofrece
                una basta cantidad de restaurantes, teatros, cines, parques
                naturales y monumentos históricos.
              </p>

              <p className="mb-8">
                Dentro de la ciudad podés encontrar: el Teatro Colón; uno de los
                teatros más prestigiosos del mundo, el Museo Nacional de Bellas
                Artes, con una vasta colección de arte argentino e
                internacional, el Jardín Japonés y el Jardín Botánico, lugares
                para disfrutar de un ambiente natural.
              </p>

              <p>
                Además, por la Avenida Corrientes, podés disfrutar de la
                gastronomía de las mejores pizzerías del país, como Guerrin y
                Las Cuartetas.
              </p>

              <p>
                Para salir a pasear, los barrios La Boca y Caminito, únicos por
                sus colores y arquitectura, son especiales para recorrer en una
                caminata.
              </p>
            </div>
          </div>

          {/* Columna derecha - Video con máscara y elementos decorativos */}
          <div className="relative flex-1">
            <div className="relative flex w-full items-center justify-center">
              {/* Video con máscara de la silueta */}
              <div className="relative z-10 h-[580px] w-full">
                <div
                  className="h-full w-full"
                  style={{
                    position: "relative",
                    backgroundImage: "url('/video-placeholder.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maskImage:
                      "url('/images/informacion-turistica/silueta-provincia.png')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage:
                      "url('/images/informacion-turistica/silueta-provincia.png')",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                >
                  <video
                    className="h-full w-full object-cover"
                    poster="/images/trama-background.webp"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      maskImage:
                        "url('/images/informacion-turistica/silueta-provincia.png')",
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage:
                        "url('/images/informacion-turistica/silueta-provincia.png')",
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="/videos/video-circuitos.mp4"
                      type="video/mp4"
                    />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </div>

              {/* Hexágono verde claro */}
              <motion.div
                className="absolute left-0 md:-left-8 top-14 z-10 h-[70px] w-[70px]"
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

              {/* Hexágono verde claro */}
              <motion.div
                className="absolute right-0 bottom-32 md:-right-12 md:bottom-32 z-10 h-[50px] w-[50px]"
                style={{
                  y: scrollY * 0.15,
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

              {/* Hexágono verde claro */}
              <motion.div
                className="absolute bottom-14 -right-4 z-10 h-[175px] w-[175px]"
                style={{
                  y: scrollY * 0.03,
                }}
              >
                <figure className="relative h-full w-full">
                  <Image
                    src="/images/informacion-turistica/hexagon-pin.png"
                    alt="Hexágono decorativo"
                    quality={100}
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
