"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import ImgContacto from "@/public/images/comercial/contacto.webp";
import WhatsappIcon from "../icons/WhatsappIcon";
import Emailicon from "../icons/Emailicon";

const BannerContacto = () => {
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
      className="mx-4 mt-7 rounded-[20px] bg-primary px-4 py-[37px] md:mx-[33px]"
    >
      <div className="mx-auto flex max-w-[1415px] gap-20 md:px-16 flex-col md:flex-row">
        <div className="relative flex-1">
          <figure>
            <Image alt="Imagen manos estechando" src={ImgContacto} className="mx-auto md:mx-0" />
          </figure>

          {/* Hexágono naranja decorativo */}
          <motion.div
            className="absolute bottom-[2.5rem] right-[50px] h-[117px] w-[117px] md:right-[50px]"
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
            className="absolute bottom-[9rem] right-[10rem] h-[70px] w-[70px]"
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

        <div className="flex flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
          <div className="mx-auto md:pt-16">
            <h2 className="text-3xl font-bold leading-tight tracking-wider text-white md:text-[40px]">
              Contacto
            </h2>
            <h3 className="mb-[64px] text-3xl tracking-wider text-white md:text-[40px]">
              Área comercial{" "}
            </h3>
            <div className="mb-[46px]">
              <div className="mb-3 flex items-center gap-[28px] tracking-widest text-white">
                <Emailicon />
                <p className="text-2xl">troiano@aapresid.org.ar</p>
              </div>
              <div className="flex items-center gap-[28px] text-white">
                <WhatsappIcon />
                <p className="text-2xl">WhatsApp/Tel: +54 9 3416 01-8111</p>
              </div>
            </div>

            <div className="mb-[46px]">
              <div className="mb-3 flex items-center gap-[28px] tracking-widest text-white">
                <Emailicon />
                <p className="text-2xl">ventas@exponenciar.com.ar</p>
              </div>
              <div className="flex items-center gap-[28px] text-white">
                <WhatsappIcon />
                <p className="text-2xl">WhatsApp/Tel: +54 9 11 5844-2945</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerContacto;
