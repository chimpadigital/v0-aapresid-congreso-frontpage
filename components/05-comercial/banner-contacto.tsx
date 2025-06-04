"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import ImgContacto from "@/public/images/comercial/contacto.webp";
import WhatsappIcon from "../icons/WhatsappIcon";
import Emailicon from "../icons/Emailicon";
import { useTranslations } from "next-intl";

const BannerContacto = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations("contacto");
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
      <div className="mx-auto flex max-w-[1415px] flex-col gap-20 md:flex-row md:px-16">
        <div className="relative flex-1">
          <figure>
            <Image
              alt="Imagen manos estechando"
              src={ImgContacto}
              className="mx-auto md:mx-0"
            />
          </figure>

          {/* Hexágono naranja decorativo */}
          <motion.div
            className="absolute -bottom-2 right-[50px] h-[117px] w-[117px] md:bottom-[2.5rem] md:right-[50px]"
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
            className="absolute -bottom-6 right-[10rem] h-[70px] w-[70px] md:bottom-[9rem]"
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
          <div className="mx-auto w-full md:w-auto md:pt-16">
            <h2 className="text-3xl font-bold leading-tight tracking-wider text-white md:text-[40px]">
              {t("contacto")}
            </h2>
            <h3 className="mb-[64px] text-3xl tracking-wider text-white md:text-[40px]">
              {t("area-comercial")}{" "}
            </h3>
            <div className="mb-[46px]">
              <div className="mb-3 flex items-center gap-3 tracking-widest text-white md:gap-[28px]">
                <div className="shrink-0">
                  <Emailicon />
                </div>
                <p className="w-full hyphens-auto break-all text-2xl">
                  <a
                    href="mailto:troiano@aapresid.org.ar"
                    className="hover:text-accent"
                  >
                    troiano@aapresid.org.ar
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 text-white md:gap-[28px]">
                <div className="shrink-0">
                  <WhatsappIcon />
                </div>
                <p className="w-full hyphens-auto break-all text-2xl">
                  <a
                    href="https://wa.me/5493416018111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    WhatsApp/Tel: +54 9 3416 01-8111
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-[46px]">
              <div className="mb-3 flex items-center gap-3 tracking-widest text-white md:gap-[28px]">
                <div className="shrink-0">
                  <Emailicon />
                </div>
                <p className="w-full hyphens-auto break-all text-2xl">
                  <a
                    href="mailto:ventas@exponenciar.com.ar"
                    className="hover:text-accent"
                  >
                    ventas@exponenciar.com.ar
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 text-white md:gap-[28px]">
                <div className="shrink-0">
                  <WhatsappIcon />
                </div>
                <p className="w-full hyphens-auto break-all text-2xl">
                  <a
                    href="https://wa.me/5491158442945"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    WhatsApp/Tel: +54 9 11 5844-2945
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerContacto;
