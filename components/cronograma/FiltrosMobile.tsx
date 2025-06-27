import { formatedRooms } from "@/lib/types";
import React, { useEffect, useState } from "react";
import LupaIcon from "../icons/LupaIcon";
import DrawerFiltrosMobile from "./DrawerFiltrosMobile";
import { Download, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const FiltrosMobile = ({
  handleFilterChange,
  handleDaySelect,
  handleRoomSelect,
  talkOptions,
  speakerOptions,
  themeOptions,
  formattedDays,
  formattedRooms,
  selectedRoom,
}: {
  handleSearch: () => void;
  handleFilterChange: (
    filterName: "id" | "speakers" | "theme_id",
    value: string,
  ) => void;
  handleDaySelect: (dayId: string) => void;
  handleRoomSelect: (roomId: string) => void;
  searchTerm: string;
  talkOptions?: { value: string; label: string }[];
  speakerOptions?: { value: string; label: string }[];
  themeOptions?: { value: string; label: string }[];
  formattedDays?: {
    id: string;
    label: string;
    isSelected: boolean;
    fecha: string;
    numDia: number;
  }[];
  formattedRooms: formatedRooms[];
  selectedRoom?: string;
}) => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Debounce para actualizar search param 'search'
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (inputValue) {
        params.set("search", inputValue);
      } else {
        params.delete("search");
      }
      router.replace(`?${params.toString()}`);
    }, 400);
    return () => clearTimeout(handler);
  }, [inputValue]);

  const t = useTranslations("cronograma");

  return (
    <div data-lenis-prevent className="mb-6 px-2 tracking-widest">
      <h4 className="mb-3 mt-4 text-xs font-medium">
        {t("busca-palabra")}
      </h4>
      <div className="flex h-full w-full gap-3">
        <label
          aria-label="buscar palabra clave"
          className="relative flex w-full overflow-hidden rounded-full border-[0.5px] border-primary focus-within:border-accent"
        >
          <span className="py-2 pl-3 pr-2">
            <LupaIcon />
          </span>
          <input
            placeholder={t("escriba-aqui")}
            className="w-full outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue && (
            <button
              onClick={() => setInputValue("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-paragraph"
            >
              <X />
            </button>
          )}
        </label>
        <DrawerFiltrosMobile
          handleFilterChange={handleFilterChange}
          talkOptions={talkOptions}
          speakerOptions={speakerOptions}
          themeOptions={themeOptions}
        />
      </div>

      <button className="mb-6 mt-10 flex w-full justify-center gap-[10px] rounded-full bg-accent px-3 py-3 text-lg text-white">
        {t("descarga-cronograma")}
        <Download />
      </button>
      <div className="relative">
        <div className="flex">
          {formattedDays?.map((day) => (
            <div
              key={day.id}
              className={`pointer-events-none relative rounded-full px-4 py-3 text-sm font-medium opacity-0 ${
                day.isSelected ? "text-primary" : "text-accent"
              }`}
            >
              <div className="z-0 flex flex-col">
                <span>{day.fecha}</span>
                <span>{t("dia")} {day.numDia}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -left-5 top-0 z-10 flex w-screen justify-center gap-4 overflow-hidden bg-[#F0F0F1]">
          {formattedDays?.map((day) => (
            <button
              key={day.id}
              onClick={() => handleDaySelect(day.id)}
              className={`relative flex flex-col items-center rounded-full px-4 py-3 text-sm font-medium ${
                day.isSelected ? "text-primary" : "text-accent"
              }`}
            >
              <div className="z-0 flex flex-col">
                <span>{day.fecha}</span>
                <span>{t("dia")} {day.numDia}</span>
              </div>
              <div
                className={`absolute ${day.isSelected ? "opacity-100" : "opacity-0"} -bottom-1 left-0 right-0 mx-auto h-2 w-[55%] rounded-full bg-primary`}
              ></div>
            </button>
          ))}
        </div>

        <div className="relative -left-5 mt-6 w-screen overflow-hidden bg-[#F0F0F1] pl-2">
          <div className="salas-scroll flex snap-x snap-mandatory overflow-x-auto whitespace-nowrap">
            {formattedRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => handleRoomSelect(room.id)}
                className={`relative flex w-full snap-center items-center justify-between rounded-full px-4 py-4 text-sm  ${
                  selectedRoom === room.id ? "text-primary font-medium" : "text-accent"
                }`}
              >
                <p className="w-full whitespace-nowrap text-center">
                  {room.name}
                </p>
                <div
                  className={`absolute ${selectedRoom === room.id ? "opacity-100" : "opacity-0"} -bottom-1 left-0 right-0 mx-auto h-2 w-[90%] rounded-full bg-primary`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltrosMobile;
