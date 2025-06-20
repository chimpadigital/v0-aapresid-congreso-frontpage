import { formatedRooms } from "@/lib/types";
import React from "react";
import LupaIcon from "../icons/LupaIcon";
import DrawerFiltrosMobile from "./DrawerFiltrosMobile";
import { Download } from "lucide-react";

const FiltrosMobile = ({
  searchTerm,
  handleSearchTermChange,
  handleSearch,
  talkOptions,
  speakerOptions,
  themeOptions,
  handleFilterChange,
  formattedDays,
  handleDaySelect,
  formattedRooms,
  selectedRoom,
  handleRoomSelect,
}: {
  searchTerm: string;
  handleSearchTermChange: (value: string) => void;
  handleSearch: () => void;
  talkOptions?: { value: string; label: string }[];
  speakerOptions?: { value: string; label: string }[];
  themeOptions?: { value: string; label: string }[];
  handleFilterChange: (
    filterName: "id" | "speakers" | "theme_id",
    value: string,
  ) => void;
  formattedDays?: {
    id: string;
    label: string;
    isSelected: boolean;
    fecha: string;
    numDia: number;
  }[];
  handleDaySelect: (dayId: string) => void;
  formattedRooms: formatedRooms[];
  selectedRoom?: string;
  handleRoomSelect: (roomId: string) => void;
}) => {
  return (
    <div className="mb-10 px-2 tracking-widest">
      <h4 className="my-3 text-xs font-medium">Búsqueda por palabra clave</h4>
      <div className="flex h-full w-full gap-3">
        <label
          aria-label="buscar palabra clave"
          className="flex w-full overflow-hidden rounded-full border-[0.5px] border-primary focus-within:border-accent"
        >
          <span className="py-2 pl-3 pr-2">
            <LupaIcon />
          </span>
          <input
            placeholder="Escriba aquí..."
            className="w-full outline-none"
          />
        </label>
        <DrawerFiltrosMobile />
      </div>

      <button className="mb-6 mt-10 flex w-full justify-center gap-[10px] rounded-full bg-accent px-3 py-3 text-lg text-white">
        Descargar cronograma
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
                <span>Día {day.numDia}</span>
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
                <span>Día {day.numDia}</span>
              </div>
              <div
                className={`absolute ${day.isSelected ? "opacity-100" : "opacity-0"} -bottom-1 left-0 right-0 mx-auto h-2 w-[55%] rounded-full bg-primary`}
              ></div>
            </button>
          ))}
        </div>

        <div className="relative -left-5 mt-10 w-screen overflow-hidden bg-[#F0F0F1] pl-2">
          <div className="salas-scroll flex snap-mandatory snap-x overflow-x-auto whitespace-nowrap">
            {formattedRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => handleRoomSelect(room.id)}
                className={`relative flex w-full snap-center items-center justify-between rounded-full px-4 py-3 text-sm font-medium ${
                  selectedRoom === room.id ? "text-primary" : "text-accent"
                }`}
              >
                <p className="w-full text-center min-w-[10ch] whitespace-normal">{room.name}</p>
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
