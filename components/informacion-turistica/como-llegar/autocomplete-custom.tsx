"use client";
import { useAutocompleteSuggestions } from "@/hooks/use-autocomplete";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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

  const { suggestions, resetSession } =
    useAutocompleteSuggestions(debouncedInput);

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

  const t = useTranslations("informacion-turistica");

  return (
    <label className="relative">
      <p className="mb-4 text-lg tracking-wider">{t("de-donde-venis")}</p>

      <input
        value={inputValue}
        onInput={(event) => handleInput(event)}
        placeholder={t("escribi-origen")}
        className="w-full rounded-full py-[14.5px] pl-7 pr-5 text-primary focus-within:outline-primary"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />

      {suggestions.length > 0 && showSuggestions && inputFocused && (
        <ul
          className="custom-list absolute left-0 top-[120%] z-10 mt-2 max-h-[300px] w-full overflow-y-auto rounded-lg bg-white text-primary shadow-lg"
          onMouseDown={(e) => e.preventDefault()}
        >
          {suggestions.map((suggestion, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer px-3 py-2 hover:bg-gray-100"
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
