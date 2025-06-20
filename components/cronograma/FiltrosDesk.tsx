import React from "react";
import { SelectFilter } from "./CharlasFilterSelect";
import SliderRooms from "./SliderRooms";
import { Download } from "lucide-react";
import { formatedRooms, Room } from "@/lib/types";

const FiltrosDesk = ({
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
  formattedDays?: { id: string; label: string; isSelected: boolean }[];
  handleDaySelect: (dayId: string) => void;
  formattedRooms: formatedRooms[];
  selectedRoom?: string;
  handleRoomSelect: (roomId: string) => void;
}) => {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-[1163px]">
        {/* Search by keyword */}
        <div className="mb-11">
          <h3 className="mb-4 text-lg font-medium text-primary">
            Búsqueda por palabra clave
          </h3>
          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-[22px] xs:flex-row">
              <input
                type="text"
                placeholder="Escriba aquí..."
                value={searchTerm}
                onChange={(e) => handleSearchTermChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="w-[min(100%,325px)] rounded-full border border-primary px-5 py-[17.5px] placeholder:text-paragraph focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSearch}
                className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
              >
                Buscar
              </button>
            </div>
            <div className="flex flex-1 justify-end">
              <button className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]">
                Descarga cronograma
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search by filters */}
        <div className="mb-8" data-lenis-prevent>
          <h3 className="mb-4 text-lg font-medium text-primary">Filtrar por</h3>
          <div className="flex flex-wrap gap-5 md:gap-[74px]">
            {/* CHARLA */}
            <div className="flex w-full md:w-[min(100%,325px)] flex-col">
              <span className="mb-2 block text-primary">Charla</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("id", e?.value || "")}
                options={talkOptions || []}
                name="id"
              />
            </div>

            {/* DISERTANTE */}
            <div className="flex w-full md:w-[min(100%,325px)] flex-col">
              <span className="mb-2 block text-primary">Disertantes</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("speakers", e?.value || "")}
                options={speakerOptions || []}
                name="speakers"
              />
            </div>

            {/* EJE TEMÁTICO */}
            <div className="flex w-full md:w-[min(100%,325px)] flex-col">
              <span className="mb-2 block text-primary">Eje temático</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("theme_id", e?.value || "")}
                options={themeOptions || []}
                name="theme_id"
              />
            </div>
          </div>
        </div>

        {/* Day selection */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-[10px]">
            {formattedDays?.map((day) => (
              <button
                key={day.id}
                onClick={() => handleDaySelect(day.id)}
                className={`rounded-[10px] border border-gray-300 px-4 py-4 text-center font-medium transition-colors ${
                  day.isSelected
                    ? "border-primary bg-primary text-white"
                    : "bg-accent/50 text-primary hover:bg-accent/60"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room slider */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-primary">Sala</h3>
          <SliderRooms
            rooms={formattedRooms}
            selectedRoom={selectedRoom || ""}
            onRoomSelect={handleRoomSelect}
          />
        </div>
      </div>
    </section>
  );
};

export default FiltrosDesk;
