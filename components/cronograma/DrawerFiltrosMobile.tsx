"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/modal";
import { SelectFilter } from "./CharlasFilterSelect";
import { useRouter, useSearchParams } from "next/navigation";

const DrawerFiltrosMobile = ({
  handleFilterChange,
  talkOptions,
  speakerOptions,
  themeOptions,
}: {
  handleFilterChange: (
    filterName: "id" | "speakers" | "theme_id",
    value: string,
  ) => void;
  talkOptions?: { value: string; label: string }[];
  speakerOptions?: { value: string; label: string }[];
  themeOptions?: { value: string; label: string }[];
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("id");
    params.delete("speakers");
    params.delete("theme_id");
    router.replace(`?${params.toString()}`);
  //   // Opcional: notificar a los selects para que se reseteen visualmente
  //   handleFilterChange("theme_id", "");
  //   handleFilterChange("id", "");
  //   handleFilterChange("speakers", "");
  };

  return (
    <div data-lenis-prevent>
      <button
        onClick={onOpen}
        className="grid aspect-square h-[40px] place-items-center rounded-full bg-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.0287 17.5C10.8162 17.5 10.6382 17.4281 10.4945 17.2843C10.3507 17.1404 10.2787 16.9622 10.2787 16.7498C10.2787 16.5371 10.3507 16.359 10.4945 16.2155C10.6382 16.0718 10.8162 16 11.0287 16H12.9615C13.174 16 13.3522 16.0719 13.496 16.2158C13.6397 16.3596 13.7115 16.5378 13.7115 16.7503C13.7115 16.9629 13.6397 17.141 13.496 17.2845C13.3522 17.4282 13.174 17.5 12.9615 17.5H11.0287ZM7.15375 12.75C6.94125 12.75 6.76317 12.6781 6.6195 12.5342C6.47583 12.3904 6.404 12.2122 6.404 11.9997C6.404 11.7871 6.47583 11.609 6.6195 11.4655C6.76317 11.3218 6.94125 11.25 7.15375 11.25H16.8365C17.049 11.25 17.2272 11.3219 17.371 11.4658C17.5147 11.6096 17.5865 11.7878 17.5865 12.0003C17.5865 12.2129 17.5147 12.391 17.371 12.5345C17.2272 12.6782 17.049 12.75 16.8365 12.75H7.15375ZM4.25 8C4.0375 8 3.85942 7.92808 3.71575 7.78425C3.57192 7.64042 3.5 7.46225 3.5 7.24975C3.5 7.03708 3.57192 6.859 3.71575 6.7155C3.85942 6.57183 4.0375 6.5 4.25 6.5H19.75C19.9625 6.5 20.1406 6.57192 20.2843 6.71575C20.4281 6.85958 20.5 7.03775 20.5 7.25025C20.5 7.46292 20.4281 7.641 20.2843 7.7845C20.1406 7.92817 19.9625 8 19.75 8H4.25Z"
            fill="white"
          />
        </svg>
      </button>
      <Drawer
        data-lenis-prevent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        hideCloseButton
      >
        <DrawerContent className="rounded-none">
          {(onClose) => (
            <>
              <DrawerHeader className="flex w-full flex-col items-center gap-3 font-medium tracking-wider text-primary">
                <button
                  onClick={onClose}
                  className="h-[3px] w-10 rounded-full bg-primary"
                />
                <div className="flex w-full justify-between text-lg">
                  <h4>Filtrar por</h4>
                  <button aria-label="delete filter" onClick={handleClearFilters}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.2143 9.33333V18.2222H8.78571V9.33333H16.2143ZM14.8214 4H10.1786L9.25 4.88889H6V6.66667H19V4.88889H15.75L14.8214 4ZM18.0714 7.55556H6.92857V18.2222C6.92857 19.2 7.76429 20 8.78571 20H16.2143C17.2357 20 18.0714 19.2 18.0714 18.2222V7.55556Z"
                        fill="#ED7F00"
                      />
                    </svg>
                  </button>
                </div>
              </DrawerHeader>
              <DrawerBody className="gap-[15px]">
                <div className="flex w-full flex-col md:w-[min(100%,325px)]">
                  <span className="block text-primary">Charla</span>
                  <SelectFilter
                    onChange={(e) => handleFilterChange("id", e?.value || "")}
                    options={talkOptions || []}
                    name="id"
                    menuPosition="fixed"
                  />
                </div>

                <div className="flex w-full flex-col md:w-[min(100%,325px)]">
                  <span className="block text-primary">Disertantes</span>
                  <SelectFilter
                    onChange={(e) =>
                      handleFilterChange("speakers", e?.value || "")
                    }
                    options={speakerOptions || []}
                    name="speakers"
                    menuPosition="fixed"
                  />
                </div>

                <div className="flex w-full flex-col md:w-[min(100%,325px)]">
                  <span className="block text-primary">Eje temático</span>
                  <SelectFilter
                    onChange={(e) =>
                      handleFilterChange("theme_id", e?.value || "")
                    }
                    options={themeOptions || []}
                    name="theme_id"
                    menuPosition="fixed"
                  />
                </div>
                <button
                  onClick={onClose}
                  className="mt-6 flex w-full justify-center gap-[10px] rounded-full bg-accent px-3 py-3 text-lg tracking-widest text-white"
                >
                  Aplicar filtros
                </button>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerFiltrosMobile;
