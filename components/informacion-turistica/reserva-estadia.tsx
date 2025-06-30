"use client";
import React from "react";
import Emailicon from "../icons/Emailicon";
import WhatsappIcon from "../icons/WhatsappIcon";
import Link from "next/link";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

const ReservaEstadia = () => {
  const t = useTranslations("informacion-turistica.reserva-estadia");

  return (
    <section className="m-4 mt-20 rounded-[20px] bg-[#F0F0F1] bg-[url('/images/circuit-pattern-gray.webp')] bg-cover bg-no-repeat px-8 py-8 md:mx-[33px] md:py-20">
      <div className="mx-auto max-w-[1151px]">
        <div className="rounded-3xl tracking-wider">
          {/* Header */}
          <div className="mb-[71px]">
            <h2 className="mb-4 text-3xl text-primary lg:text-4xl">
              {t("titulo1")} {' '}
              <br className="hidden xs:block"/>
              <span className="font-bold">{t("titulo2")}</span>!
            </h2>
            <p className="max-w-[33ch] text-2xl text-paragraph">
              {t("subtitulo")}
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-wrap justify-between gap-10">
            {/* Left Column - Event Info */}
            <div>
              <p className="max-w-[58ch] leading-snug text-paragraph">
                {t("p1")}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-[1] mt-5 flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-primary bg-transparent px-[30px] py-[15.5px] text-lg tracking-wider text-primary transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:text-white hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
                href={
                  "https://drive.google.com/file/d/1abdVIzEsotDx1er_uadb_UZ2ABCA0nBs/view"
                }
              >
                {t("descarga")}
                <Download />
              </a>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                {t("reserva-alojamiento")}
              </h3>

              <div className="space-y-4 text-primary">
                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Emailicon />
                  </div>
                  <div>
                    <a
                      href="mailto:reservas@uphoteles.com"
                      className="text:lg transition-colors md:text-2xl"
                    >
                      reservas@uphoteles.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="shrink-0">
                      <WhatsappIcon />
                    </div>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/541131498108"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text:lg transition-colors md:text-2xl"
                    >
                      WhatsApp/Tel: 1131498108
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservaEstadia;
