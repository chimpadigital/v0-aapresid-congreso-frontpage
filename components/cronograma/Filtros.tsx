"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SelectFilter } from "./CharlasFilterSelect";
import { FiltrosData } from "@/lib/types";
import SliderRooms from "./SliderRooms";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
export const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export default function Filtros() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("06/08");
  const [selectedRoom, setSelectedRoom] = useState("1");
  const [filters, setFilters] = useState({
    charla: "",
    speakers: "",
    themes: "",
  });

  const [data, setData] = useState<FiltrosData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/filtros")
      .then((res) => res.json())
      .then((data) => {
        setData({
          speakers: data.speakers.data,
          themes: data.themes,
          rooms: data.rooms.data,
          days: data.days, // <-- solo guarda el array original
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []); // <-- solo al montar

  const speakerOptions = data?.speakers.map((speaker) => ({
    value: String(speaker.id),
    label: speaker.name,
  }));

  const themeOptions = data?.themes.map((theme) => ({
    value: String(theme.id),
    label: theme.name,
  }));

  const formattedDays = (data?.days as string[])?.map(
    (date: string, idx: number) => {
      const [year, month, day] = date?.split("-");
      const id = `${day}/${month}`;
      return {
        id: date,
        label: `${id} Día ${idx + 1}`,
        isSelected: selectedDay === date,
      };
    },
  );

  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize state from URL parameters only once
  useEffect(() => {
    if (!isInitialized) {
      const search = searchParams.get("search") || "";
      const date = searchParams.get("date") || "06/08";
      const room_id = searchParams.get("room_id") || "1";
      const charla = searchParams.get("charla") || "";
      const speakers = searchParams.get("speakers") || "";
      const themes = searchParams.get("themes") || "";

      setSearchTerm(search);
      setSelectedDay(date);
      setSelectedRoom(room_id);
      setFilters({
        charla,
        speakers,
        themes,
      });
      setIsInitialized(true);
    }
  }, [searchParams, isInitialized]);

  // Update URL with current filters
  const updateURL = useCallback(
    (newParams: Record<string, string>) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      // Update or remove parameters
      Object.entries(newParams).forEach(([key, value]) => {
        if (value && value.trim() !== "") {
          current.set(key, value);
        } else {
          current.delete(key);
        }
      });

      // Push to URL
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.push(`${window.location.pathname}${query}`, { scroll: false });
    },
    [router, searchParams],
  );

  const handleSearch = useCallback(() => {
    updateURL({ search: searchTerm });
    console.log("Searching for:", searchTerm);
  }, [searchTerm, updateURL]);

  const handleSearchTermChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleRoomSelect = useCallback(
    (roomId: string) => {
      setSelectedRoom(roomId);
      updateURL({ room_id: roomId });
    },
    [updateURL],
  );

  const handleDaySelect = useCallback(
    (dayId: string) => {
      setSelectedDay(dayId);
      updateURL({ date: dayId });
    },
    [updateURL],
  );

  const handleFilterChange = useCallback(
    (filterType: keyof typeof filters, value: string) => {
      setFilters((prev) => ({ ...prev, [filterType]: value }));
      updateURL({ [filterType]: value });
    },
    [updateURL],
  );

  // Formatear rooms para que tengan la estructura de mockRooms
  const formattedRooms = (data?.rooms || []).map((room) => ({
    id: String(room.id),
    name: room.name,
    image: room.image || null, 
    sponsor: room.name,
    isSelected: selectedRoom === String(room.id),
  }));

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-[1163px]">
        {/* Search by keyword */}
        <div className="mb-11">
          <h3 className="mb-4 text-lg font-medium text-primary">
            Búsqueda por palabra clave
          </h3>
          <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-[22px] sm:flex-row">
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
          <div className="flex gap-[74px]">
            {/* CHARLA */}
            <div className="flex w-[min(100%,325px)] flex-col">
              <span className="mb-2 block text-primary">Charla</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("charla", e?.value || "")}
                options={colourOptions}
                name="charla"
              />
            </div>

            {/* DISERTANTE */}
            <div className="flex w-[min(100%,325px)] flex-col">
              <span className="mb-2 block text-primary">Disertantes</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("speakers", e?.value || "")}
                options={speakerOptions || []}
                name="speakers"
              />
            </div>

            {/* EJE TEMÁTICO */}
            <div className="flex w-[min(100%,325px)] flex-col">
              <span className="mb-2 block text-primary">Eje temático</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("themes", e?.value || "")}
                options={themeOptions || []}
                name="themes"
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
            selectedRoom={selectedRoom}
            onRoomSelect={handleRoomSelect}
          />
        </div>
      </div>
    </section>
  );
}
