import BusIcon from "@/components/icons/BusIcon";
import CaminarIcon from "@/components/icons/CaminarIcon";
import TransportePublicoIcon from "@/components/icons/TransportePublicoicon";
import AutoIcon from "@/components/icons/AutoIcon";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RouteAlternativesProps {
  route: google.maps.DirectionsRoute[];
  selectedRouteIndex: number | null;
  setSelectedRouteIndex: (idx: number | null) => void;
  mode: "transporte" | "auto";
}

export const RouteAlternatives: React.FC<RouteAlternativesProps> = ({
  route,
  selectedRouteIndex,
  setSelectedRouteIndex,
  mode,
}) => {
  if (route.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">
        {mode === "transporte"
          ? "Ingrese su dirección de origen para ver las alternativas de colectivo"
          : "Ingrese su dirección de origen para ver las alternativas en auto"}
      </p>
    );
  }
  return (
    <div className="space-y-4">
      {route.map((r, idx) => {
        // Buscar el número de colectivo, subte o duración
        let busNumber = null;
        let isSubte = false;
        let subteLine = null;
        let duration = r.legs[0]?.duration?.text || "";
        let steps = r.legs[0]?.steps || [];
        // Buscar el primer step que sea BUS o SUBWAY
        for (const step of steps) {
          if (
            step.travel_mode === "TRANSIT" &&
            step.transit?.line?.vehicle?.type === "BUS"
          ) {
            busNumber = step.transit.line.short_name || step.transit.line.name;
            break;
          }
          if (
            step.travel_mode === "TRANSIT" &&
            step.transit?.line?.vehicle?.type === "SUBWAY"
          ) {
            isSubte = true;
            subteLine = step.transit.line.short_name || step.transit.line.name;
            break;
          }
        }
        return (
          <div
            key={idx}
            className={`cursor-pointer rounded-lg bg-white/80 p-0 text-primary shadow transition-all`}
            onClick={() =>
              setSelectedRouteIndex(idx === selectedRouteIndex ? null : idx)
            }
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                {busNumber && mode === "transporte" && !isSubte && (
                  <span className="inline-block rounded bg-secondary px-4 py-2 text-sm tracking-widest text-white">
                    {busNumber}
                  </span>
                )}
                {isSubte && mode === "transporte" && (
                  <span className="flex items-center gap-2 rounded px-2 py-2">
                    <img
                      src="/images/informacion-turistica/logo-subte.webp"
                      alt="Subte"
                      className="h-7 w-7 object-contain"
                    />
                    {subteLine && (
                      <span className="text-lg font-semibold text-secondary">{subteLine}</span>
                    )}
                  </span>
                )}
                {mode === "auto" && (
                  <span className="inline-block rounded px-2 py-2">
                    <AutoIcon />
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-paragraph">{duration}</span>
                <span className="ml-2 inline-block h-5 w-5 rounded-full border-2 border-orange-400">
                  {selectedRouteIndex === idx && (
                    <span className="m-auto mt-0.5 block h-3 w-3 rounded-full bg-orange-400"></span>
                  )}
                </span>
              </div>
            </div>
            {/* Acordeón de steps */}
            <AnimatePresence initial={false}>
              {selectedRouteIndex === idx && (
                <motion.div
                  key="steps-accordion"
                  initial={{
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-gray-200 bg-white px-4 overflow-hidden"
                  style={{ maxHeight: 260, overflowY: "auto" }}
                >
                  <ol className="space-y-2">
                    {steps.map((step, sidx) => {
                      // Detectar tipo de step
                      const isBus =
                        step.travel_mode === "TRANSIT" &&
                        step.transit?.line?.vehicle?.type === "BUS";
                      const isSubteStep =
                        step.travel_mode === "TRANSIT" &&
                        step.transit?.line?.vehicle?.type === "SUBWAY";
                      return (
                        <li key={sidx} className="flex min-h-[40px]">
                          {/* Icono */}
                          {isBus ? (
                            <span className="grid h-auto w-12 place-items-center items-center justify-center rounded-l-full bg-secondary pl-4 text-white">
                              <BusIcon />
                            </span>
                          ) : isSubteStep ? (
                            <span className="grid h-auto w-12 place-items-center items-center justify-center rounded-l-full bg-secondary pl-4 text-white">
                              <TransportePublicoIcon height="19" />
                            </span>
                          ) : mode === "auto" ? (
                            <span className="grid h-auto w-12 place-items-center items-center justify-center rounded-l-full pl-4">
                              <AutoIcon />
                            </span>
                          ) : (
                            <span className="grid h-auto w-12 place-items-center items-center justify-center rounded-l-full pl-4">
                              <CaminarIcon />
                            </span>
                          )}
                          {/* Texto step */}
                          <span
                            className={`w-full text-xs ${
                              (isBus && mode === "transporte") ||
                              (isSubteStep && mode === "transporte")
                                ? "rounded-r-full bg-secondary px-4 py-2 text-white"
                                : "px-4 text-paragraph"
                            }`}
                          >
                            <p
                              className="my-auto h-full"
                              style={{
                                display: "table-cell",
                                verticalAlign: "middle",
                                height: "40px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: step.instructions,
                              }}
                            ></p>
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
