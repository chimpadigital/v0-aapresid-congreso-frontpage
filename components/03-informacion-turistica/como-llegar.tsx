"use client";
import { mapStyles } from "@/lib/map-style";
import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
} from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RichText } from "../rich-text";
import { useState } from "react";
import AutocompleteControl from "./autocomplete-control";

export type AutocompleteMode = { id: string; label: string };


export function ComoLlegarSection() {
  const t = useTranslations("informacion-turistica");
  const [activeTab, setActiveTab] = useState<"transporte" | "auto">(
    "transporte",
  );


  const incompatibleVersionLoaded = Boolean(
    globalThis &&
      globalThis.google?.maps?.version &&
      !(
        globalThis.google?.maps?.version.endsWith("-alpha") ||
        globalThis.google?.maps?.version.endsWith("-beta")
      ),
  );

  if (incompatibleVersionLoaded) {
    location.reload();
    return;
  }

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.Place | null>(null);

  return (
    <section data-lenis-prevent className="bg-white px-4 pt-[100px] md:px-8">
      <div className="mx-auto max-w-[1415px]">
        <div className="flex min-h-[500px] flex-col overflow-hidden rounded-[20px] shadow-lg lg:flex-row">
          {/* Panel verde izquierdo */}
          <div className="bg-accent bg-cover bg-center bg-no-repeat p-8 text-white lg:w-max lg:px-14 lg:py-40">
            <h2 className="mb-8 text-3xl font-normal leading-none md:text-[40px]">
              {t("como-llegar")}
              <span className="font-bold"> {t("evento")}</span>
            </h2>

            <div className="w-full space-y-6 tracking-wider text-white">
              <form className="mb-6 mt-6">
                <label className="mb-2" htmlFor="de-donde">
                  ¿Desde dónde venís?
                </label>
                <input
                  id="de-donde"
                  type="text"
                  placeholder="Escribí acá tu dirección de origen"
                  className="w-full rounded-full p-3 pr-10 text-gray-800"
                />
              </form>
              <AutocompleteControl
                controlPosition={ControlPosition.TOP_LEFT}
                onPlaceSelect={setSelectedPlace}
              />
              <div className="w-full">
                <h1>Recorrido sugerido</h1>
                <div className="flex w-full">
                  <button
                    className={`flex-1 ${activeTab === "transporte" ? "bg-primary text-white" : "bg-white text-primary"} rounded-l-full py-2 transition-colors`}
                    onClick={() => setActiveTab("transporte")}
                    type="button"
                  >
                    En transporte
                  </button>
                  <button
                    className={`flex-1 ${activeTab === "auto" ? "bg-primary text-white" : "bg-white text-primary"} rounded-r-full py-2 transition-colors`}
                    onClick={() => setActiveTab("auto")}
                    type="button"
                  >
                    En auto
                  </button>
                </div>
                <div className="mt-6">
                  {activeTab === "transporte" && (
                    <div>
                      {/* Contenido para transporte público */}
                      <p>
                        Aquí irá la información para llegar en transporte
                        público.
                      </p>
                    </div>
                  )}
                  {activeTab === "auto" && (
                    <div>
                      {/* Contenido para llegar en auto */}
                      <p>Aquí irá la información para llegar en auto.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mapa derecho */}
          <div className="relative h-72 w-full bg-gray-100 lg:h-auto">
            <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP ?? ""}>
              <Map
                defaultCenter={{
                  lat: -34.57957730343763,
                  lng: -58.42092733833911,
                }}
                defaultZoom={15}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                mapId={
                  process.env.NEXT_PUBLIC_MAP_STYLE ??
                  "7386c23b9c17eda2716c8a4d "
                }
                styles={mapStyles}
              >
                <AdvancedMarker
                  className="custom-marker"
                  position={{
                    lat: -34.57957730343763,
                    lng: -58.42092733833911,
                  }}
                >
                  <Image
                    alt="Pin de mapa"
                    height={100}
                    width={100}
                    src={"/images/informacion-turistica/map-custom-pin.png"}
                  />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
