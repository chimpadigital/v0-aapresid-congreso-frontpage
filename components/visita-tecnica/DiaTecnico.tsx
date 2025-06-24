"use client"
import React from "react";
import { motion } from "framer-motion";

const DiaTecnico = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="tracking-wider">
        <h2 className="text-[40px] font-bold text-primary">Día técnico</h2>
        <h3 className="text-4xl text-paragraph">Itinerario 5 de agosto</h3>
      </div>
      <div
        id="dia-tecnico-desktop"
        className="relative mt-36 hidden h-[600px] items-center sm:flex"
      >
        <div className="left-5 mx-auto flex w-[90%] items-center justify-around 2xl:w-full">
          <div
            className="absolute h-1 bg-primary"
            style={{
              width: "calc(100dvw - 2rem)",
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
                    <span className="font-bold text-primary">8:30 HS</span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      Salida desde Ciudad Autónoma de Buenos Aires (CABA) hacia
                      Salto (Provincia de Buenos Aires) en bus.
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
                    <span className="font-bold text-primary">11:00 HS</span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      Recepción de la delegación: Presentación sobre Aapresid,
                      introducción sobre sistemas de producción que regeneran
                      suelos con menor impacto ambiental, innovación en redes.
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
                    <span className="font-bold text-primary">13:00 HS</span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      Almuerzo en el campo
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
                    <span className="font-bold text-primary">15:00 HS</span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      Recorrida a campo: sistemas de producción sustentables,
                      intensos y diversos. Indicadores de materia orgánica,
                      carbono y biología del suelo. Integración ganadera.
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
                    <span className="font-bold text-primary">16:00 HS</span>
                    <p className="pt-[13px] leading-tight tracking-wider text-paragraph">
                      Regreso a CABA
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
        className="mt-20 flex flex-col  gap-8 sm:hidden relative"
      >
        <div className="h-full border-2 border-primary absolute left-[11px]" />

        {/* HITO 1 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />
          <div className="top-[130px] z-10 rounded-[20px] border-2 border-primary w-full bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">8:30 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                Salida desde Ciudad Autónoma de Buenos Aires (CABA) hacia Salto
                (Provincia de Buenos Aires) en bus.
              </p>
            </article>
          </div>
        </div>

        {/* HITO 2 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 rounded-[20px] border-2 border-primary w-full bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">11:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                Recepción de la delegación: Presentación sobre Aapresid,
                introducción sobre sistemas de producción que regeneran suelos
                con menor impacto ambiental, innovación en redes.
              </p>
            </article>
          </div>
        </div>

        {/* HITO 3 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 rounded-[20px] border-2 border-primary w-full bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">13:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                Almuerzo en el campo
              </p>
            </article>
          </div>
        </div>

        {/* HITO 4 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 rounded-[20px] border-2 border-primary w-full bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">15:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                Recorrida a campo: sistemas de producción sustentables, intensos
                y diversos. Indicadores de materia orgánica, carbono y biología
                del suelo. Integración ganadera.
              </p>
            </article>
          </div>
        </div>

        {/* HITO 4 */}
        <div className="flex items-center">
          <div className="z-10 aspect-square h-[27px] rounded-full bg-accent" />
          <div className="w-5 border-2 border-dotted border-primary" />

          <div className="top-[130px] z-10 rounded-[20px] border-2 border-primary w-full bg-white p-[18px]">
            <article className="relative">
              <span className="font-medium text-primary">16:00 HS</span>
              <p className="pt-[13px] text-xs leading-tight tracking-wider text-paragraph">
                Regreso a CABA
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaTecnico;
