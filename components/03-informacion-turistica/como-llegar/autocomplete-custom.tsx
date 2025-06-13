"use client";
import { useAutocompleteSuggestions } from "@/hooks/use-autocomplete";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import React, { FormEvent, useCallback, useState } from "react";

interface Props {
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
}

export const AutocompleteCustom = ({ onPlaceSelect }: Props) => {
  const places = useMapsLibrary("places");

  const [inputValue, setInputValue] = useState<string>("");
  const { suggestions, resetSession } = useAutocompleteSuggestions(inputValue);

  const handleInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  }, []);

  const handleSuggestionClick = useCallback(
    async (suggestion: google.maps.places.AutocompleteSuggestion) => {
      if (!places) return;
      if (!suggestion.placePrediction) return;

      const place = suggestion.placePrediction.toPlace();

      await place.fetchFields({
        fields: [
          "viewport",
          "location",
          "svgIconMaskURI",
          "iconBackgroundColor",
        ],
      });

      // Llama primero a onPlaceSelect
      onPlaceSelect(place);

      // Luego limpia el input después de un pequeño delay
      setTimeout(() => {
        setInputValue("");
        resetSession();
      }, 0);
    },
    [places, onPlaceSelect],
  );

  return (
    <label className="relative">
      <p className="mb-4 text-lg tracking-wider">¿Desde dónde venís?</p>

      <input
        value={inputValue}
        onInput={(event) => handleInput(event)}
        placeholder="Escribí acá tu dirección de origen"
        className="w-full rounded-full py-[14.5px] pl-7 pr-5 text-primary focus-within:outline-primary"
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 top-[120%] z-10 mt-2 w-full max-h-[300px] overflow-y-auto rounded-lg bg-white shadow-lg custom-list text-primary">
          {suggestions.map((suggestion, index) => {
            return (
              <li
                key={index}
                className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.placePrediction?.text.text}
              </li>
            );
          })}
        </ul>
      )}
    </label>
  );
};
