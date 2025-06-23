"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FiltrosData } from "@/lib/types";
import { useLocale } from "next-intl";
import { getMultilingualField } from "@/lib/utils";
import FiltrosDesk from "./FiltrosDesk";
import { useIsMobile } from "@/hooks/use-mobile";
import FiltrosMobile from "./FiltrosMobile";

export default function Filtros() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("1");
  const [filters, setFilters] = useState({
    id: "",
    speakers: "",
    theme_id: "",
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
          days: data.days,
          events: data.events.data,
        });
        setLoading(false);
        console.log("Filtros data:", data);
      })
      .catch(() => setLoading(false));

    fetch("/api/filtro-speakers")
      .then((res) => res.json())
      .then((dataSpeakers) => {
        setData((prev) =>
          prev
            ? {
                speakers: dataSpeakers.speakers.data,
                themes: prev.themes,
                rooms: prev.rooms,
                days: prev.days,
                events: prev.events,
              }
            : {
                speakers: dataSpeakers.speakers.data,
                themes: [],
                rooms: [],
                days: [],
                events: [],
              }
        );
        setLoading(false);
        console.log("Speakers data:", dataSpeakers);
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

  const talkOptions = data?.events.map((event) => ({
    value: String(event.id),
    label: getMultilingualField(event.multilingual_title, locale),
  }));

  const formattedDays = (data?.days as string[])?.map(
    (date: string, idx: number) => {
      const [year, month, day] = date?.split("-");
      const id = `${day}/${month}`;
      return {
        id: date + " 00:00:00",
        label: `${id} Día ${idx + 1}`,
        fecha: id,
        numDia: idx + 1,
        isSelected: selectedDay === date + " 00:00:00",
      };
    },
  );

  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize state from URL parameters only once
  useEffect(() => {
    if (!isInitialized) {
      const search = searchParams.get("search") || "";
      const date = searchParams.get("date") || "";
      const room_id = searchParams.get("room_id") || "";
      const charla = searchParams.get("charla") || "";
      const speakers = searchParams.get("speakers") || "";
      const theme_id = searchParams.get("theme_id") || "";

      setSearchTerm(search);
      setSelectedDay(date);
      setSelectedRoom(room_id);
      setFilters({
        id: charla,
        speakers,
        theme_id: theme_id,
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

  const isMobile = useIsMobile(500);

  return isMobile ? (
    <FiltrosMobile
      searchTerm={searchTerm}
      handleSearchTermChange={handleSearchTermChange}
      handleSearch={handleSearch}
      talkOptions={talkOptions}
      speakerOptions={speakerOptions}
      themeOptions={themeOptions}
      handleFilterChange={handleFilterChange}
      formattedDays={formattedDays}
      handleDaySelect={handleDaySelect}
      formattedRooms={formattedRooms}
      selectedRoom={selectedRoom}
      handleRoomSelect={handleRoomSelect}
    />
  ) : (
    <FiltrosDesk
      searchTerm={searchTerm}
      handleSearchTermChange={handleSearchTermChange}
      handleSearch={handleSearch}
      talkOptions={talkOptions}
      speakerOptions={speakerOptions}
      themeOptions={themeOptions}
      formattedDays={formattedDays}
      handleFilterChange={handleFilterChange}
      handleDaySelect={handleDaySelect}
      formattedRooms={formattedRooms}
      selectedRoom={selectedRoom}
      handleRoomSelect={handleRoomSelect}
    />
  );
}
