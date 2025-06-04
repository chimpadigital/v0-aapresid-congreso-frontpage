"use client";
import { mapStyles } from "@/lib/map-style";
import {
  AdvancedMarker,
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RichText } from "../rich-text";

export function ComoLlegarSection() {
  const t = useTranslations("informacion-turistica");

  return (
    <section data-lenis-prevent className="bg-white px-4 pt-[100px] md:px-8">
      <div className="mx-auto max-w-[1415px]">
        <div className="flex min-h-[500px] flex-col overflow-hidden rounded-[20px] shadow-lg lg:flex-row">
          {/* Panel verde izquierdo */}
          <div className="bg-accent bg-[url('/images/informacion-turistica/circuito-transparente.png')] bg-cover bg-center bg-no-repeat p-8 text-white lg:w-max lg:px-14 lg:py-40">
            <h2 className="mb-8 text-3xl font-normal leading-none md:text-[40px]">
              {t("como-llegar")}
              <span className="font-bold"> {t("evento")}</span>
            </h2>

            <div className="w-auto max-w-full space-y-6 tracking-wider text-white lg:w-max lg:max-w-[46ch]">
              <p className="text-base leading-tight">
                {t("transporte-publico")}
              </p>
              <RichText
                text={t("colectivo")}
                className="text-base leading-tight"
              />
              <RichText text={t("tren")} className="text-base leading-tight" />
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
