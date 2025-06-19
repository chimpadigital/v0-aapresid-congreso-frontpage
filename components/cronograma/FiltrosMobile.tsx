import { formatedRooms } from "@/lib/types";
import React from "react";

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
  formattedDays?: { id: string; label: string; isSelected: boolean }[];
  handleDaySelect: (dayId: string) => void;
  formattedRooms: formatedRooms[];
  selectedRoom?: string;
  handleRoomSelect: (roomId: string) => void;
}) => {
  return <div className="px-2">
    <h4 className="font-medium text-xs my-3">Búsqueda por palabra clave</h4>
    <div>
      <input />
    </div>
  </div>;
};

export default FiltrosMobile;
