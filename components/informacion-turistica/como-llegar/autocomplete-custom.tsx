"use client";
import { useAutocompleteSuggestions } from "@/hooks/use-autocomplete";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import React, { FormEvent, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
}

export const AutocompleteCustom = ({ onPlaceSelect }: Props) => {
  const places = useMapsLibrary("places");

  const [inputValue, setInputValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);
  const [debouncedInput, setDebouncedInput] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 400); // 400ms debounce
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [inputValue]);

  const { suggestions, resetSession } = useAutocompleteSuggestions(debouncedInput);

  const handleInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
    setShowSuggestions(true);
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

      onPlaceSelect(place);
      setInputValue(suggestion.placePrediction.text.text);
      setShowSuggestions(false);
      resetSession();
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
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />

      {suggestions.length > 0 && showSuggestions && inputFocused && (
        <ul
          className="absolute left-0 top-[120%] z-10 mt-2 w-full max-h-[300px] overflow-y-auto rounded-lg bg-white shadow-lg custom-list text-primary"
          onMouseDown={(e) => e.preventDefault()}
        >
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
