"use client";
import React from "react";
import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";

import { AutocompleteCustom } from "./autocomplete-custon";
import { AutocompleteMode } from "./como-llegar";

type CustomAutocompleteControlProps = {
  controlPosition: ControlPosition;
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
};

const AutocompleteControl = ({
  controlPosition,
  onPlaceSelect,
}: CustomAutocompleteControlProps) => {

  return (
      <div className="autocomplete-control">
        <AutocompleteCustom onPlaceSelect={onPlaceSelect} />
      </div>
    // <MapControl position={controlPosition}>
    // </MapControl>
  );
};

export default React.memo(AutocompleteControl);
