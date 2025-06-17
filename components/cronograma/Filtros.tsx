"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  Download,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Room {
  id: string;
  name: string;
  sponsor: string;
  isSelected: boolean;
}

const mockRooms: Room[] = [
  { id: "1", name: "Banco Macro", sponsor: "Banco Macro", isSelected: true },
  { id: "2", name: "Coca-Cola", sponsor: "Coca-Cola", isSelected: false },
  { id: "3", name: "ICBC", sponsor: "ICBC", isSelected: false },
  { id: "4", name: "Pepsi", sponsor: "Pepsi", isSelected: false },
  { id: "5", name: "Samsung", sponsor: "Samsung", isSelected: false },
  { id: "6", name: "Microsoft", sponsor: "Microsoft", isSelected: false },
  { id: "7", name: "Toyota", sponsor: "Toyota", isSelected: false },
  { id: "8", name: "Nike", sponsor: "Nike", isSelected: false },
  { id: "9", name: "Apple", sponsor: "Apple", isSelected: false },
  { id: "10", name: "Google", sponsor: "Google", isSelected: false },
];

export default function Filtros() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("06/08");
  const [selectedRoom, setSelectedRoom] = useState("1");
  const [filters, setFilters] = useState({
    charla: "",
    disertante: "",
    ejeTemático: "",
  });
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize state from URL parameters only once
  useEffect(() => {
    if (!isInitialized) {
      const search = searchParams.get("search") || "";
      const day = searchParams.get("day") || "06/08";
      const room = searchParams.get("room") || "1";
      const charla = searchParams.get("charla") || "";
      const disertante = searchParams.get("disertante") || "";
      const ejeTemático = searchParams.get("ejeTemático") || "";

      setSearchTerm(search);
      setSelectedDay(day);
      setSelectedRoom(room);
      setFilters({
        charla,
        disertante,
        ejeTemático,
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

  const handleDownloadSchedule = useCallback(() => {
    console.log("Downloading schedule with filters:", {
      search: searchTerm,
      day: selectedDay,
      room: selectedRoom,
      ...filters,
    });
  }, [searchTerm, selectedDay, selectedRoom, filters]);

  const handleRoomSelect = useCallback(
    (roomId: string) => {
      setSelectedRoom(roomId);
      updateURL({ room: roomId });
    },
    [updateURL],
  );

  const handleDaySelect = useCallback(
    (dayId: string) => {
      setSelectedDay(dayId);
      updateURL({ day: dayId });
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

  const days = [
    { id: "06/08", label: "06/08 Día 1", isSelected: selectedDay === "06/08" },
    { id: "07/08", label: "07/08 Día 2", isSelected: selectedDay === "07/08" },
    { id: "08/08", label: "08/08 Día 3", isSelected: selectedDay === "08/08" },
  ];

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Search by keyword */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-primary">
            Búsqueda por palabra clave
          </h3>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              <div className="relative max-w-md flex-1">
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
              </div>
              <button
                onClick={handleSearch}
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Buscar
              </button>
            </div>
            <button
              onClick={handleDownloadSchedule}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent/90"
            >
              <Download className="h-4 w-4" />
              Descarga cronograma
            </button>
          </div>
        </div>

        {/* Search by filters */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-primary">
            Búsqueda por filtro
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* CHARLA */}
            <div>
              <label className="mb-2 block text-primary">
                Charla
              </label>
              <div className="relative">
                <select
                  value={filters.charla}
                  onChange={(e) => handleFilterChange("charla", e.target.value)}
                  className="w-[min(100%,325px)] appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Escriba aquí o seleccione</option>
                  <option value="sistemas-integrados">
                    Sistemas Integrados
                  </option>
                  <option value="innovacion-agtech">Innovación y AgTech</option>
                  <option value="sustentabilidad">Sustentabilidad</option>
                  <option value="manejo-plagas">Manejo de Plagas</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* DISERTANTE */}
            <div>
              <label className="mb-2 block text-primary">
                Disertante
              </label>
              <div className="relative">
                <select
                  value={filters.disertante}
                  onChange={(e) =>
                    handleFilterChange("disertante", e.target.value)
                  }
                  className="w-[min(100%,325px)] appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Escriba aquí o seleccione</option>
                  <option value="juan-perez">Juan Pérez</option>
                  <option value="maria-gonzalez">María González</option>
                  <option value="carlos-rodriguez">Carlos Rodríguez</option>
                  <option value="ana-martinez">Ana Martínez</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* EJE TEMÁTICO */}
            <div>
              <label className="mb-2 block text-primary">
                Eje temático
              </label>
              <div className="relative">
                <select
                  value={filters.ejeTemático}
                  onChange={(e) =>
                    handleFilterChange("ejeTemático", e.target.value)
                  }
                  className="w-[min(100%,325px)] appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Escriba aquí o seleccione</option>
                  <option value="sistemas-productivos">
                    Sistemas Productivos Sustentables
                  </option>
                  <option value="desafios-globales">Desafíos Globales</option>
                  <option value="perspectivas-sociopoliticas">
                    Perspectivas Sociopolíticas
                  </option>
                  <option value="aapresid-id">Aapresid I+D</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Day selection */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-[10px]">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => handleDaySelect(day.id)}
                className={`rounded-[10px] border border-gray-300 px-4 py-4 text-center font-medium transition-colors ${
                  day.isSelected
                    ? "border-primary bg-primary text-white"
                    : "bg-accent/50 text-white hover:bg-accent/60"
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
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              className="room-swiper"
            >
              {mockRooms.map((room) => (
                <SwiperSlide key={room.id} className="!w-auto">
                  <button
                    onClick={() => handleRoomSelect(room.id)}
                    className={`flex min-w-[200px] items-center gap-3 rounded-full border-2 px-6 py-4 transition-all ${
                      selectedRoom === room.id
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-gray-300 bg-white text-gray-700 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      <span className="text-xs font-bold">
                        {room.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{room.name}</span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-50">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
