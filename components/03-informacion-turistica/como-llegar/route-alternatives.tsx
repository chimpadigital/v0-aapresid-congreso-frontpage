import React from "react";

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
                  <span className="inline-block rounded bg-[#F39200] px-4 py-2 text-lg font-semibold text-white">
                    {busNumber}
                  </span>
                )}
                {isSubte && mode === "transporte" && (
                  <span className="inline-block rounded px-2 py-2">
                    <img
                      src="/images/informacion-turistica/logo-subte.webp"
                      alt="Subte"
                      className="h-7 w-7 object-contain"
                    />
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-700">{duration}</span>
                <span className="ml-2 inline-block h-5 w-5 rounded-full border-2 border-orange-400">
                  <span className="m-auto mt-0.5 block h-3 w-3 rounded-full bg-orange-400"></span>
                </span>
              </div>
            </div>
            {/* Acordeón de steps */}
            {selectedRouteIndex === idx && (
              <div className="border-t border-gray-200 bg-white px-4 py-3">
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
                      <li key={sidx} className="flex items-center gap-3">
                        {/* Icono */}
                        {isBus ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F39200]">
                            <svg
                              width="20"
                              height="20"
                              fill="white"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17 1H7C4.24 1 2 3.24 2 6v11c0 1.1.9 2 2 2v2c0 .55.45 1 1 1s1-.45 1-1v-2h10v2c0 .55.45 1 1 1s1-.45 1-1v-2c1.1 0 2-.9 2-2V6c0-2.76-2.24-5-5-5zm3 17c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v12z" />
                            </svg>
                          </span>
                        ) : isSubteStep ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F39200]">
                            <img
                              src="/images/informacion-turistica/logo-subte.webp"
                              alt="Subte"
                              className="h-5 w-5 object-contain"
                            />
                          </span>
                        ) : (
                          <span className="inline-flex h-7 w-7 items-center justify-center">
                            <svg
                              width="20"
                              height="20"
                              fill="#888"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.49 5.48C13.49 7.43 11.94 9 10 9S6.51 7.43 6.51 5.48C6.51 3.53 8.06 2 10 2s3.49 1.53 3.49 3.48zM20.94 19.06l-2.83-2.83C18.36 14.13 19 12.13 19 10c0-4.42-3.58-8-8-8S3 5.58 3 10c0 2.13.64 4.13 1.89 5.89l-2.83 2.83c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.83-2.83C9.87 18.36 11.87 19 14 19c4.42 0 8-3.58 8-8 0-2.13-.64-4.13-1.89-5.89l2.83-2.83c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0z" />
                            </svg>
                          </span>
                        )}
                        {/* Texto step */}
                        <span
                          className={`text-sm ${
                            (isBus && mode === "transporte") ||
                            (isSubteStep && mode === "transporte")
                              ? "rounded-full bg-[#F39200] px-4 py-2 font-medium text-white"
                              : "text-gray-700"
                          }`}
                          dangerouslySetInnerHTML={{ __html: step.instructions }}
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
