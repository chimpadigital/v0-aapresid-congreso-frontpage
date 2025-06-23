"use client";
import Link from "next/link";
import Image from "next/image";
import ArrowRounded from "./icons/ArrowRounded";
import { useLocale, useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import ArrowBack from "./icons/ArrowBack";

export function InscriptionsSection() {
  const t = useTranslations("inscriptions");
  const locale = useLocale();
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <div className="px-4 md:px-8">
      <section className="container-inscripciones mx-auto my-8 max-w-7xl">
        {/* Member banner */}
        <div className="banner-inscripciones relative w-full overflow-hidden rounded-3xl bg-[url('/images/home/registrate.webp')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10 flex flex-col items-start justify-between gap-10 p-8 md:items-center md:px-[80px] md:py-[70px] lg:flex-row">
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-wider text-white md:text-[40px]">
                ¿Sos Socio Aapresid?
              </h2>
              <p className="text-xl tracking-wider text-white md:text-2xl">
                ¡Accedé de manera gratuita al Congreso!
              </p>
            </div>
            <Link
              href="/registro-socios"
              className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:before:scale-x-[2] md:w-fit md:min-w-[374px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
            >
              Inscribite acá
              <div className="relative top-[2px]">
                <ArrowRounded />
              </div>
            </Link>
          </div>
        </div>

        {/* Non-member panel */}
        <div className="precios-inscripciones rounded-3xl bg-[#F0F0F1] px-6 py-[36px] text-primary md:px-[60px]">
          <h2 className="mb-2 text-4xl font-medium tracking-wider">
            ¿No sos socio Aapresid?
          </h2>
          <p className="mb-10 text-xl font-medium">Comprá tu ticket</p>

          <div className="space-y-6 xl:max-w-[453px]">
            <div className="flex justify-between border-b border-primary pb-4">
              <p className="flex-1 text-lg font-bold">NO SOCIO</p>
              <p className="flex-1 text-lg">
                2000 <span className="font-medium">ARS</span>{" "}
                <span className="mx-2">|</span> 200{" "}
                <span className="font-medium"> USD</span>
              </p>
            </div>

            <div className="flex justify-between border-b border-primary pb-4">
              <div className="flex flex-1 items-start">
                <p className="mr-2 text-lg font-bold">ESTUDIANTE</p>
                <button
                  aria-label="Información para estudiantes"
                  className="hover: transition-colors"
                >
                  {/* <Info className="h-5 w-5" /> */}
                </button>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-lg">
                  400 <span className="font-medium">ARS</span>
                </p>
                <p>80% de descuento</p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <div className="flex flex-1">
                <p className="mr-2 text-lg font-bold">ADHERENTE</p>
                <button
                  aria-label="Información para adherentes"
                  className="hover: transition-colors"
                >
                  {/* <Info className="h-5 w-5" /> */}
                </button>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-lg">
                  800 <span className="font-medium">ARS</span>
                </p>
                <p>40% de descuento</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/comprar-entrada"
              className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[374px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
            >
              Comprá tu entrada
              <div className="relative top-[2px]">
                <ArrowRounded />
              </div>
            </Link>
          </div>
        </div>

        {/* Invitation code panel */}
        <div className="invitaciones flex flex-col items-start justify-between rounded-3xl bg-accent bg-[url('/images/circuit-pattern-v2.png')] bg-cover bg-center px-6 py-8 md:flex-row md:items-center md:pl-[60px] md:pr-[45px]">
          <div>
            <h2 className="mb-2 max-w-[15ch] text-4xl font-medium tracking-wider text-white">
              ¿Tenés un código de invitación?
            </h2>
          </div>
          <Link
            href="/codigo-invitacion"
            className="mt-4 flex items-center gap-3 border-b-2 border-white text-lg text-white transition-opacity hover:border-opacity-70 hover:font-medium md:mt-0"
          >
            <p className="w-[8ch]">Ingresá acá</p>
            <ArrowRounded className="w-4" />
          </Link>
        </div>

        {/* Help desk panel */}
        <div className="consultas-inscripciones flex flex-col items-start justify-between rounded-3xl bg-primary bg-[url('/images/circuit-pattern-v2.png')] bg-cover bg-center py-8 pl-6 pr-6 text-white md:flex-row md:items-center md:pl-[60px] md:pr-[45px]">
          <div>
            <h2 className="mb-2 max-w-[15ch] text-4xl font-medium tracking-wider">
              ¿Tenés consultas?
            </h2>
            <p className="max-w-[25ch] text-xl tracking-wider">
              Ingresá a nuestra mesa de ayuda para resolverlas
            </p>
          </div>
          <Link
            href={`/${locale}/preguntas-prefuentes`}
            className="mt-4 flex items-center gap-3 border-b-2 border-white text-lg transition-opacity hover:border-opacity-70 hover:font-medium md:mt-0"
          >
            <p>Ingresá</p>
            <ArrowRounded className="w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
