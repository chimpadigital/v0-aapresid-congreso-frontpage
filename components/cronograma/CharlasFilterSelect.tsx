"use client";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Select, { SingleValue, ActionMeta } from "react-select";

type OptionType = { value: string; label: string };

interface CronogramaSelectProps {
  options: OptionType[];
  onChange: (option: OptionType | null) => void;
  name: string;
  menuPlacement?: "top" | "bottom" | "auto";
  menuPosition?: "absolute" | "fixed";
}

export function SelectFilter({
  options,
  onChange,
  name,
  menuPlacement = "auto",
  menuPosition = "absolute",
}: CronogramaSelectProps) {
  const [defaultValue, setDefaultValue] = useState<OptionType | null>(null);
  const searchParams = useSearchParams();

  // Obtener el valor del search param al montar el componente
  useEffect(() => {
    const paramValue = searchParams.get(name);
    if (paramValue) {
      const found = options.find((opt) => opt.value === paramValue);
      setDefaultValue(found ?? null);
    } else {
      setDefaultValue(null); // Muy importante: resetear si se borra el filtro
    }
  }, [searchParams, name, options]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const t = useTranslations("cronograma");

  // Agregar opción "Ver todos" al principio
  const optionsWithAll = [{ value: "", label: t("ver-todos") }, ...options];
  if (!isClient) return null;

  return (
    <Select
      menuPlacement={menuPlacement}
      menuPosition={menuPosition}
      options={optionsWithAll}
      onChange={(
        newValue: SingleValue<OptionType>,
        _action: ActionMeta<OptionType>,
      ) => onChange(newValue ?? null)}
      className="basic-single"
      classNamePrefix="select"
      value={defaultValue}
      placeholder={t("escriba-o-seleccion")}
      isSearchable={true}
      styles={{
        container: (base) => ({
          ...base,
        }),
        control: (base) => ({
          ...base,
          borderRadius: "9999px",
          borderColor: "#2d3d34",
          boxShadow: "none",
          padding: "11.5px 12px",
          cursor: "pointer",
          "&:hover": {
            borderColor: "#64b33d",
          },
        }),
        menu: (base) => ({
          ...base,
          zIndex: 9999,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "#2d3d34",
          "&:hover": {
            color: "#64b33d",
          },
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? "#64b33d" : "#fff",
          color: state.isSelected ? "#fff" : "#2d3d34",
          "&:hover": {
            backgroundColor: "#64b33d",
            color: "#fff",
          },
        }),
      }}
    />
  );
}
