"use client";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AutocompleteCustom } from "./autocomplete-custom";
import { RouteAlternatives } from "./route-alternatives";
import { Directions } from "./directions";
import AutoIcon from "@/components/icons/AutoIcon";
import TransportePublicoIcon from "@/components/icons/TransportePublicoicon";
import ModalCompartir from "./modal-compartir";
import ArrowBack from "@/components/icons/ArrowBack";

export type AutocompleteMode = { id: string; label: string };

export function ComoLlegarSection() {
  const t = useTranslations("informacion-turistica");
  const locale = useLocale();

  const [activeTab, setActiveTab] = useState<"transporte" | "auto">(
    "transporte",
  );
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.Place | null>(null);
  const [showIncompatible, setShowIncompatible] = useState(false);
  const [route, setRoute] = useState<google.maps.DirectionsRoute[]>([]);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number | null>(
    null,
  );

  // Mover la lógica de incompatibilidad a un useEffect
  useEffect(() => {
    const incompatible =
      globalThis &&
      globalThis.google?.maps?.version &&
      !(
        globalThis.google?.maps?.version.endsWith("-alpha") ||
        globalThis.google?.maps?.version.endsWith("-beta")
      );
    if (incompatible) {
      setShowIncompatible(true);
      location.reload();
    }
  }, []);

  if (showIncompatible) {
    return <div>Recargando por incompatibilidad de Google Maps...</div>;
  }

  // Determinar travelMode según la tab activa
  const [travelMode, setTravelMode] = useState<google.maps.TravelMode>(
    typeof window !== "undefined" && window.google?.maps?.TravelMode
      ? window.google.maps.TravelMode.TRANSIT
      : ("TRANSIT" as any),
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.google?.maps?.TravelMode)
      return;
    setTravelMode(
      activeTab === "auto"
        ? window.google.maps.TravelMode.DRIVING
        : window.google.maps.TravelMode.TRANSIT,
    );
  }, [activeTab]);

  // Utilidad para obtener el string de origen para Google Maps
  function getOriginString(place: google.maps.places.Place | null) {
    if (!place) return "";
    if (place.formattedAddress) return place.formattedAddress;
    // Algunos objetos Place pueden tener .displayName?.text
    if ((place as any).displayName?.text)
      return (place as any).displayName.text;
    // Si tiene location, usar lat,lng
    if (
      place.location &&
      typeof place.location.lat === "function" &&
      typeof place.location.lng === "function"
    ) {
      return `${place.location.lat()},${place.location.lng()}`;
    }
    return "";
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP ?? ""} language={locale} region="AR">
      <section data-lenis-prevent className="bg-white px-4 pt-[50px] md:px-8">
        <div className="mx-auto max-w-[1415px]">
          <div className="flex min-h-[500px] flex-col shadow-lg lg:flex-row">
            {/* Panel verde izquierdo */}
            <div className="flex w-full flex-col rounded-b-none rounded-t-[10px] bg-accent bg-cover bg-center bg-no-repeat p-8 text-white lg:min-h-[750px] lg:w-[65%] lg:rounded-l-[20px] lg:rounded-r-none lg:px-14 lg:py-[50px]">
              <h2 className="mb-8 max-w-[18ch] text-3xl font-normal leading-none md:text-[40px]">
                {t("como-llegar")}
                <span className="font-bold"> {t("evento")}</span>
              </h2>

              <div className="mb-11 w-full space-y-6 tracking-wider text-white">
                <AutocompleteCustom onPlaceSelect={setSelectedPlace} />
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-medium tracking-wider">
                    {t("recorrido-sugerido")}
                  </h1>
                  <div className="flex w-full">
                    <button
                      className={`flex flex-1 items-center justify-center gap-4 ${activeTab === "transporte" ? "bg-white text-primary" : "bg-primary text-white"} rounded-t-[10px] pb-2 pt-[10px] transition-colors`}
                      onClick={() => setActiveTab("transporte")}
                      type="button"
                    >
                      <TransportePublicoIcon />
                      {t("transporte")}
                    </button>
                    <button
                      className={`flex flex-1 items-center justify-center gap-4 ${activeTab === "auto" ? "bg-white text-primary" : "bg-primary text-white"} rounded-t-[10px] pb-2 pt-[10px] transition-colors`}
                      onClick={() => setActiveTab("auto")}
                      type="button"
                    >
                      <AutoIcon /> {t("auto")}
                    </button>
                  </div>
                  <div className="bg-white">
                    {activeTab === "transporte" && (
                      <RouteAlternatives
                        route={route}
                        selectedRouteIndex={selectedRouteIndex}
                        setSelectedRouteIndex={setSelectedRouteIndex}
                        mode="transporte"
                      />
                    )}
                    {activeTab === "auto" && (
                      <RouteAlternatives
                        route={route}
                        selectedRouteIndex={selectedRouteIndex}
                        setSelectedRouteIndex={setSelectedRouteIndex}
                        mode="auto"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-auto flex w-full flex-col">
                <span className="mb-6 text-center font-bold tracking-wider">
                  {t("explora-todos")}
                </span>
                <div className="flex w-full flex-col gap-3 px-2 md:flex-row">
                  <ModalCompartir
                    texto={t("compartir")}
                    disabled={!selectedPlace || route.length === 0}
                    link={
                      selectedPlace && route.length > 0
                        ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(getOriginString(selectedPlace))}&destination=${encodeURIComponent("La rural, buenos aires, argentina")}&travelmode=${encodeURIComponent(activeTab === "auto" ? "driving" : "transit")}`
                        : "#"
                    }
                  />
                  <a
                    href={
                      selectedPlace && route.length > 0
                        ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(getOriginString(selectedPlace))}&destination=La rural, buenos aires, argentina&travelmode=${activeTab === "auto" ? "driving" : "transit"}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-[1] flex w-full flex-1 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[15px] py-[15.5px] text-center text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[6] md:w-fit md:before:-left-[145%] md:before:top-[160%] md:hover:before:scale-[3] ${!selectedPlace || route.length === 0 ? "pointer-events-none opacity-50" : ""}`}
                  >
                    {t("ver-mas")}
                    <span className="rotate-180">
                      <ArrowBack />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa derecho */}
            <div className="relative h-96 w-full overflow-hidden rounded-b-[10px] rounded-t-none bg-gray-100 lg:h-auto lg:rounded-l-none lg:rounded-r-[10px]">
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
                <Directions
                  originPlace={selectedPlace}
                  travelMode={travelMode}
                  onRoutes={(routes: google.maps.DirectionsRoute[]) => {
                    setRoute(routes);
                    setSelectedRouteIndex(null); // reset selection on new search
                  }}
                  selectedRouteIndex={selectedRouteIndex}
                />
              </Map>
            </div>
          </div>
        </div>
      </section>
    </APIProvider>
  );
}
