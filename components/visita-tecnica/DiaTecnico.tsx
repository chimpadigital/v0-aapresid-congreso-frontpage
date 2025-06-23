import React from "react";

const DiaTecnico = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="tracking-wider">
        <h2 className="text-[40px] font-bold text-primary">Día técnico</h2>
        <h3 className="text-4xl text-paragraph">Itinerario 5 de agosto</h3>
      </div>
      <div
        id="dia-tecnico"
        className="relative mt-36 flex h-[600px] items-center"
      >
        <div className="relative flex w-full items-center justify-around">
          <div
            className="absolute h-1 bg-primary"
            style={{
              width: "calc(100dvw - 1rem)",
            }}
          />
          {/* PRIMER HITO */}
          <div className="relative flex w-fit justify-center">
            <div className="absolute">
              <div className="relative flex flex-col items-center">
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
                <div className="top-[130px] z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary p-[18px]">
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
          </div>

          {/* SEGUNDO HITO */}
          <div className="relative flex justify-center">
            <div className="absolute bottom-0">
              <div className="relative flex flex-col items-center">
                <div className="z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary p-[18px]">
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
          </div>

          {/* TERCER HITO */}
          <div className="relative flex justify-center">
            <div className="absolute">
              <div className="relative flex flex-col items-center">
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
                <div className="top-[130px] z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary p-[18px]">
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
          </div>

          {/* CUARTO HITO */}
          <div className="relative flex justify-center">
            <div className="absolute bottom-0">
              <div className="relative flex flex-col items-center">
                <div className="z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary p-[18px]">
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
          </div>

          {/* QUINTO HITO */}
          <div className="relative flex justify-center">
            <div className="absolute">
              <div className="relative flex flex-col items-center">
                <div className="relative flex w-full justify-center">
                  <div className="h-[98px] border border-dashed border-primary" />
                </div>
                <div className="top-[130px] z-10 w-max max-w-[369px] rounded-[20px] border-2 border-primary p-[18px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaTecnico;
