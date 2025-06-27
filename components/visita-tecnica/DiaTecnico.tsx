"use client";
import React, { use } from "react";
import { motion } from "framer-motion";
import RelojIcon from "../icons/RelojIcon";
import { useTranslations } from "next-intl";

const DiaTecnico = () => {
  const t = useTranslations("visita-tecnica-page.dia-tecnico");

  const schedule = t.raw("hitos");

  return (
    <section
      id="dia-tecnico"
      className="mx-auto mt-14 max-w-7xl px-4 py-8 sm:px-6 md:mt-24 lg:px-8"
    >
      <div className="tracking-wider">
        <h2 className="text-[40px] font-bold text-primary">{t('titulo')}</h2>
        <h3 className="text-4xl text-paragraph">{t('subtitulo')}</h3>
      </div>
      <div
        id="dia-tecnico-desktop"
        className="relative mt-36 hidden h-[600px] items-center sm:flex"
      >
        <div className="left-5 mx-auto flex w-[90%] items-center justify-around 2xl:w-full">
          <div
            className="absolute h-1 bg-primary"
            style={{
              width: "min(95dvw, 1280px) ",
            }}
          />
          {/* PRIMER HITO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative ml-10 flex w-fit justify-center"
          >
            <div className="absolute">
              <div className="relative flex flex-col items-center">
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
                <div className="top-[130px] z-10 w-max max-w-[200px] rounded-[20px] border-2 border-primary bg-white p-[18px] md:max-w-[300px] lg:max-w-[369px]">
                  <article className="relative">
                    <span className="flex items-center gap-3 font-bold text-primary">
                      <RelojIcon /> 8:30 HS
                    </span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      {schedule[0].descripcion}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="z-10 aspect-square h-[27px] rounded-full bg-accent"></div>
          </motion.div>

          {/* SEGUNDO HITO */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute bottom-0">
              <div className="relative flex flex-col items-center">
                <div className="z-10 w-max max-w-[200px] rounded-[20px] border-2 border-primary bg-white p-[18px] md:max-w-[300px] lg:max-w-[369px]">
                  <article className="relative">
                    <span className="flex items-center gap-3 font-bold text-primary">
                      <RelojIcon /> 11:00 HS
                    </span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      {schedule[1].descripcion}
                    </p>
                  </article>
                </div>
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
              </div>
            </div>

            <div className="z-10 aspect-square h-[27px] rounded-full bg-accent"></div>
          </motion.div>

          {/* TERCER HITO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute">
              <div className="relative flex flex-col items-center">
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
                <div className="top-[130px] z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary bg-white p-[18px]">
                  <article className="relative">
                    <span className="flex items-center gap-3 font-bold text-primary">
                      <RelojIcon /> 13:00 HS
                    </span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      {schedule[2].descripcion}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="z-10 aspect-square h-[27px] rounded-full bg-accent"></div>
          </motion.div>

          {/* CUARTO HITO */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute bottom-0">
              <div className="relative flex flex-col items-center">
                <div className="z-10 w-max max-w-[200px] rounded-[20px] border-2 border-primary bg-white p-[18px] md:max-w-[300px] lg:max-w-[369px]">
                  <article className="relative">
                    <span className="flex items-center gap-3 font-bold text-primary">
                      <RelojIcon /> 15:00 HS
                    </span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      {schedule[3].descripcion}
                    </p>
                  </article>
                </div>
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
              </div>
            </div>

            <div className="z-10 aspect-square h-[27px] rounded-full bg-accent"></div>
          </motion.div>

          {/* QUINTO HITO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute">
              <div className="relative flex flex-col items-center">
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
                <div className="top-[130px] z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary bg-white p-[18px]">
                  <article className="relative">
                    <span className="flex items-center gap-3 font-bold text-primary">
                      <RelojIcon /> 16:00 HS
                    </span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      {schedule[4].descripcion}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="z-10 aspect-square h-[27px] rounded-full bg-accent"></div>
          </motion.div>
        </div>
      </div>

      {/* VERSION MOBILE */}
      <div
        id="dia-tecnico-mobile"
        className="relative mt-20 flex flex-col gap-8 sm:hidden"
      >
        <div className="absolute left-[11px] h-full border-2 border-primary" />

        {/* HITO 1 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />
          <div className="top-[130px] z-10 w-full rounded-[20px] border-2 border-primary bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">8:30 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                {schedule[0].descripcion}
              </p>
            </article>
          </div>
        </div>

        {/* HITO 2 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 w-full rounded-[20px] border-2 border-primary bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">11:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                {schedule[1].descripcion}
              </p>
            </article>
          </div>
        </div>

        {/* HITO 3 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 w-full rounded-[20px] border-2 border-primary bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">13:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                {schedule[2].descripcion}
              </p>
            </article>
          </div>
        </div>

        {/* HITO 4 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 w-full rounded-[20px] border-2 border-primary bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">15:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                {schedule[3].descripcion}
              </p>
            </article>
          </div>
        </div>

        {/* HITO 5 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 w-full rounded-[20px] border-2 border-primary bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">16:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                {schedule[4].descripcion}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaTecnico;
