import React from "react";
import { SelectFilter } from "./CharlasFilterSelect";
import SliderRooms from "./SliderRooms";
import { Download, X } from "lucide-react";
import { formatedRooms } from "@/lib/types";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import path from "path";

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
  const router = useRouter();
  const pathname = usePathname();

  const handleClearSearch = () => {
    handleSearchTermChange("");
    // Eliminar el parámetro 'search' de la URL
    const current = new URLSearchParams(window.location.search);
    current.delete("search");
    const search = current.toString();
    const query = search ? `?${search}` : "";
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${query}`,
    );
  };
  const searchParams = useSearchParams();
  const handleClearAllFilters = () => {
    router.push(pathname, { scroll: false });
    const params = new URLSearchParams(searchParams.toString());
    params.delete("id");
    params.delete("speakers");
    params.delete("theme_id");
    params.delete("date");
    params.delete("room_id");
    params.delete("search");
    router.replace(`?${params.toString()}`);
  };

  const t = useTranslations("cronograma");

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-[1163px]">
        {/* Search by keyword */}
        <div className="mb-11">
          <h3 className="mb-4 text-lg font-medium text-primary">
            {t("busca-palabra")}
          </h3>
          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-[22px] xs:flex-row">
              <label className="relative w-[min(100%,325px)] rounded-full border border-primary px-5 py-[17.5px] placeholder:text-paragraph focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary">
                <input
                  type="text"
                  placeholder={t("escriba-aqui")}
                  className="w-full outline-none"
                  value={searchTerm}
                  onChange={(e) => handleSearchTermChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                {searchTerm?.length > 1 && (
                  <button
                    aria-label="Limpiar búsqueda"
                    onClick={handleClearSearch}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-paragraph"
                  >
                    <X />
                  </button>
                )}
              </label>
              <button
                onClick={handleSearch}
                className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
              >
                {t("buscar")}
              </button>
            </div>
            <div className="flex flex-1 justify-end">
              <button className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]">
                {t("descarga-cronograma")}
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search by filters */}
        <div className="mb-8" data-lenis-prevent>
          <div className="flex w-full justify-between">
            <h3 className="mb-4 text-lg font-medium text-primary">
              {t("filtrar-por")}
            </h3>
            <button
              onClick={handleClearAllFilters}
              className="flex gap-px tracking-wider text-primary underline underline-offset-[3px] transition-colors hover:text-secondary"
            >
              {t("borrar-filtros")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.2143 9.33333V18.2222H8.78571V9.33333H16.2143ZM14.8214 4H10.1786L9.25 4.88889H6V6.66667H19V4.88889H15.75L14.8214 4ZM18.0714 7.55556H6.92857V18.2222C6.92857 19.2 7.76429 20 8.78571 20H16.2143C17.2357 20 18.0714 19.2 18.0714 18.2222V7.55556Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap gap-5 md:gap-[74px]">
            {/* CHARLA */}
            <div className="flex w-full flex-col md:w-[min(100%,325px)]">
              <span className="mb-2 block text-primary">{t("charla")}</span>
              <SelectFilter
                onChange={(e) => handleFilterChange("id", e?.value || "")}
                options={talkOptions || []}
                name="id"
              />
            </div>

            {/* DISERTANTE */}
            <div className="flex w-full flex-col md:w-[min(100%,325px)]">
              <span className="mb-2 block text-primary">
                {t("disertantes")}
              </span>
              <SelectFilter
                onChange={(e) => handleFilterChange("speakers", e?.value || "")}
                options={speakerOptions || []}
                name="speakers"
              />
            </div>

            {/* EJE TEMÁTICO */}
            <div className="flex w-full flex-col md:w-[min(100%,325px)]">
              <span className="mb-2 block text-primary">
                {t("eje-tamtico")}
              </span>
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
          <h3 className="mb-4 text-lg text-primary">{t("dia")}</h3>
          <div className="grid grid-cols-3 gap-[10px]">
            {formattedDays?.map((day) => (
              <button
                key={day.id}
                onClick={() => handleDaySelect(day.id)}
                className={`relative rounded-[10px] border border-gray-300 px-4 py-4 text-center font-medium transition-colors ${
                  day.isSelected
                    ? "border-primary bg-primary text-white"
                    : "bg-accent/50 text-primary hover:bg-accent/60"
                }`}
              >
                {day.isSelected && (
                  <div className="absolute -right-3 -top-[10px] grid aspect-auto h-6 place-items-center rounded-full bg-primary">
                    <X className="h-4 text-white" />
                  </div>
                )}
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room slider */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg text-primary">{t("sala")}</h3>
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
