"use client";
import Link from "next/link";
import ArrowRounded from "./icons/ArrowRounded";
import { useLocale, useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

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
                {t("card1.titulo")}
              </h2>
              <p className="text-xl tracking-wider text-white md:text-2xl">
                {t("card1.subtitulo")}
              </p>
            </div>
            <a
              aria-label="Inscripción para socios Aapresid"
              target="_blank"
              rel="noopener noreferrer"
              href="https://soluciones.qreventos.com/aapresid/preacreditacion_socios_borde.asp"
              className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:before:scale-x-[2] md:w-fit md:min-w-[374px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
            >
              {t("card1.boton")}
              <div className="relative top-[2px]">
                <ArrowRounded />
              </div>
            </a>
          </div>
        </div>

        {/* Non-member panel */}
        <div className="precios-inscripciones rounded-3xl bg-[#F0F0F1] px-6 py-[36px] text-primary md:px-[60px]">
          <h2 className="mb-2 text-4xl font-medium tracking-wider">
            {t("card2.titulo")}
          </h2>
          <p className="mb-10 text-xl font-medium">{t("card2.subtitulo")}</p>

          <div className="space-y-6 xl:max-w-[453px]">
            <div className="flex justify-between border-b border-primary pb-4">
              <p className="flex-1 text-lg font-bold uppercase">
                {t("card2.no-socio")}
              </p>
              <p className="flex-1 text-lg">
                500.000 <span className="font-medium">ARS</span>
              </p>
            </div>

            <div className="flex justify-between border-b border-primary pb-4">
              <div className="flex flex-1 items-start">
                <p className="mr-2 flex items-center gap-2 text-lg font-bold uppercase">
                  {t("card2.estudiante")}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    data-tooltip-id="tooltip-estudiante"
                    data-tooltip-place="top"
                  >
                    <path
                      d="M8.70837 13.959H10.2917V9.20898H8.70837V13.959ZM9.50004 7.62565C9.72435 7.62565 9.9125 7.54965 10.0645 7.39765C10.2165 7.24565 10.2922 7.05776 10.2917 6.83398C10.2912 6.61021 10.2152 6.42232 10.0637 6.27032C9.91224 6.11832 9.72435 6.04232 9.50004 6.04232C9.27574 6.04232 9.08785 6.11832 8.93637 6.27032C8.7849 6.42232 8.7089 6.61021 8.70837 6.83398C8.70785 7.05776 8.78385 7.24592 8.93637 7.39844C9.0889 7.55097 9.27679 7.62671 9.50004 7.62565ZM9.50004 17.9173C8.4049 17.9173 7.37574 17.7094 6.41254 17.2935C5.44935 16.8776 4.6115 16.3137 3.899 15.6017C3.1865 14.8897 2.62257 14.0519 2.20721 13.0882C1.79185 12.1244 1.5839 11.0953 1.58338 10.0007C1.58285 8.90604 1.79079 7.87687 2.20721 6.91315C2.62363 5.94943 3.18756 5.11158 3.899 4.39961C4.61044 3.68764 5.44829 3.12371 6.41254 2.70782C7.37679 2.29193 8.40596 2.08398 9.50004 2.08398C10.5941 2.08398 11.6233 2.29193 12.5875 2.70782C13.5518 3.12371 14.3896 3.68764 15.1011 4.39961C15.8125 5.11158 16.3767 5.94943 16.7937 6.91315C17.2106 7.87687 17.4183 8.90604 17.4167 10.0007C17.4151 11.0953 17.2072 12.1244 16.7929 13.0882C16.3786 14.0519 15.8146 14.8897 15.1011 15.6017C14.3875 16.3137 13.5497 16.8779 12.5875 17.2943C11.6254 17.7107 10.5962 17.9184 9.50004 17.9173Z"
                      fill="#2D3D34"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-lg">
                  100.000 <span className="font-medium">ARS</span>
                </p>
                <p>80% {t("card2.de-descuento")}</p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <div className="flex flex-1 items-start">
                <p className="mr-2 flex items-center gap-2 text-lg font-bold uppercase">
                  {t("card2.adherente")}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    data-tooltip-id="tooltip-adherente"
                    data-tooltip-place="top"
                  >
                    <path
                      d="M8.70837 13.959H10.2917V9.20898H8.70837V13.959ZM9.50004 7.62565C9.72435 7.62565 9.9125 7.54965 10.0645 7.39765C10.2165 7.24565 10.2922 7.05776 10.2917 6.83398C10.2912 6.61021 10.2152 6.42232 10.0637 6.27032C9.91224 6.11832 9.72435 6.04232 9.50004 6.04232C9.27574 6.04232 9.08785 6.11832 8.93637 6.27032C8.7849 6.42232 8.7089 6.61021 8.70837 6.83398C8.70785 7.05776 8.78385 7.24592 8.93637 7.39844C9.0889 7.55097 9.27679 7.62671 9.50004 7.62565ZM9.50004 17.9173C8.4049 17.9173 7.37574 17.7094 6.41254 17.2935C5.44935 16.8776 4.6115 16.3137 3.899 15.6017C3.1865 14.8897 2.62257 14.0519 2.20721 13.0882C1.79185 12.1244 1.5839 11.0953 1.58338 10.0007C1.58285 8.90604 1.79079 7.87687 2.20721 6.91315C2.62363 5.94943 3.18756 5.11158 3.899 4.39961C4.61044 3.68764 5.44829 3.12371 6.41254 2.70782C7.37679 2.29193 8.40596 2.08398 9.50004 2.08398C10.5941 2.08398 11.6233 2.29193 12.5875 2.70782C13.5518 3.12371 14.3896 3.68764 15.1011 4.39961C15.8125 5.11158 16.3767 5.94943 16.7937 6.91315C17.2106 7.87687 17.4183 8.90604 17.4167 10.0007C17.4151 11.0953 17.2072 12.1244 16.7929 13.0882C16.3786 14.0519 15.8146 14.8897 15.1011 15.6017C14.3875 16.3137 13.5497 16.8779 12.5875 17.2943C11.6254 17.7107 10.5962 17.9184 9.50004 17.9173Z"
                      fill="#2D3D34"
                    />
                  </svg>
                </p>
                <button
                  aria-label="Información para adherentes"
                  className="hover: transition-colors"
                >
                  {/* <Info className="h-5 w-5" /> */}
                </button>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-lg">
                  300.000 <span className="font-medium">ARS</span>
                </p>
                <p>40% {t("card2.de-descuento")}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/comprar-entrada"
              className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-2xl tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[374px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
            >
              {t("card2.boton")}
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
              {t("card3.titulo")}
            </h2>
          </div>
          <a
            aria-label="Preacreditación invitados"
            target="_blank"
            rel="noopener noreferrer"
            href="https://soluciones.qreventos.com/aapresid/preacreditacion_invitados_borde.asp"
            className="mt-4 flex items-center gap-3 border-b-2 border-white text-lg text-white transition-opacity hover:border-opacity-70 hover:font-medium md:mt-0"
          >
            <p className="tracking-wide">{t("card3.ingresa")}</p>
            <ArrowRounded className="w-4" />
          </a>
        </div>

        {/* Help desk panel */}
        <div className="consultas-inscripciones flex flex-col items-start justify-between rounded-3xl bg-primary bg-[url('/images/circuit-pattern-v2.png')] bg-cover bg-center py-8 pl-6 pr-6 text-white md:flex-row md:items-center md:pl-[60px] md:pr-[45px]">
          <div>
            <h2 className="mb-2 max-w-[15ch] text-4xl font-medium tracking-wider">
              {t("card4.titulo")}
            </h2>
            <p className="max-w-[25ch] text-xl tracking-wider">
              {t("card4.subtitulo")}
            </p>
          </div>
          <Link
            href={`/${locale}/inscripciones#tenes-dudas`}
            className="mt-4 flex items-center gap-3 border-b-2 border-white text-lg transition-opacity hover:border-opacity-70 hover:font-medium md:mt-0"
          >
            <p className="tracking-wide">{t("card4.ingresa")}</p>
            <ArrowRounded className="w-4" />
          </Link>
        </div>
      </section>
      <Tooltip clickable id="tooltip-estudiante">
        <h4 className="mb-4 text-base font-semibold tracking-wider">
          {t("card2.estudiante")}
        </h4>
        <p className="text-base tracking-wider">
          {t("card2.tooltip-estudiante")}
        </p>
      </Tooltip>
      <Tooltip clickable id="tooltip-adherente">
        <h4 className="mb-4 text-base font-semibold tracking-wider">
          {t("card2.adherente")}
        </h4>
        <p className="text-base tracking-wider">
          {t("card2.tooltip-adherente")}
        </p>
      </Tooltip>
    </div>
  );
}
