import { useEffect, useState } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";

interface DirectionsProps {
  originPlace: google.maps.places.Place | null;
  travelMode: google.maps.TravelMode;
  onRoutes: (routes: google.maps.DirectionsRoute[]) => void;
  selectedRouteIndex: number | null;
}

export function Directions({
  originPlace,
  travelMode,
  onRoutes,
  selectedRouteIndex,
}: DirectionsProps) {
  const map = useMap();
  const routelibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();

  useEffect(() => {
    if (!routelibrary || !map) return;
    setDirectionsService(new routelibrary.DirectionsService());
    setDirectionsRenderer(new routelibrary.DirectionsRenderer({ map }));
  }, [map, routelibrary]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    if (!originPlace) return;
    // Usar lat/lng si no hay formattedAddress
    let origin: string | google.maps.LatLngLiteral | undefined = undefined;
    if (originPlace.formattedAddress) {
      origin = originPlace.formattedAddress;
    } else if (
      originPlace.location &&
      typeof originPlace.location.lat === "function" &&
      typeof originPlace.location.lng === "function"
    ) {
      origin = {
        lat: originPlace.location.lat(),
        lng: originPlace.location.lng(),
      };
    }
    if (!origin) return;
    directionsService
      .route({
        destination: "La rural, buenos aires, argentina",
        origin,
        travelMode,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        onRoutes(response.routes);
      });
    // Solo setRouteIndex cuando selectedRouteIndex cambie y ya hay rutas
    // Esto evita que se sobrescriba por el render inicial
  }, [directionsRenderer, directionsService, originPlace, travelMode]);

  useEffect(() => {
    if (!directionsRenderer) return;
    if (typeof selectedRouteIndex === "number") {
      directionsRenderer.setRouteIndex(selectedRouteIndex);
    }
  }, [directionsRenderer, selectedRouteIndex]);

  return null;
}
