"use client";
import { Event, EventsApiResponse } from "@/lib/types";
import { getMultilingualField } from "@/lib/utils";
import React, { useState } from "react";
import DisertanteIconV2 from "../icons/DisertanteIconV2";
import MicrofonoIcon from "../icons/MicrofonoIcon";
import MapPinLineal from "../icons/MapPinLineal";
import CodeIcon from "../icons/CodeIcon";
import PlanetaIcon from "../icons/PlanetaIcon";
import IdiomasIcon from "../icons/IdiomasIcon";
import { getThemeIcon } from "@/lib/getThemeIcon";
import { motion, AnimatePresence } from "framer-motion";
import ModalCharlaMobile from "./ModalCharlaMobile";

const CharlaCardMobile = ({
  charla,
  locale,
}: {
  charla: Event;
  locale: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-[20px] bg-white tracking-widest shadow-lg">
      {/* Header */}
      <div className="rounded-t-[20px] bg-[#2d3d34] p-[20px] pl-[34px] text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">
            {(() => {
              const [year, month, day] = charla.date.split("-");
              return `${day}/${month}`;
            })()}
          </h2>
          <span className="text-lg font-bold">
            {" "}
            {charla.start_time.slice(0, 5)} - {charla.end_time.slice(0, 5)}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#f0f0f1] px-[18px] pb-2 pt-[20px]">
        {/* Title */}
        <h1 className="mb-6 font-bold leading-tight text-primary">
          {getMultilingualField(charla.multilingual_title, locale)}
        </h1>

        {/* Speakers */}
        <div className="mb-4 flex items-center gap-5 text-primary">
          <span className="grid aspect-square h-[29px] place-items-center">
            <DisertanteIconV2 />
          </span>
          <p className="leading-none">
            <span className="text-xs font-semibold">Disertantes: </span>
            <span className="text-xs">
              {charla.Speakers.map((speaker) => speaker.name).join(", ")}
            </span>
          </p>
        </div>

        {/* Moderator */}
        <div className="mb-[30px] flex items-center gap-5 text-primary">
          <span className="grid aspect-square h-[29px] place-items-center">
            <MicrofonoIcon />
          </span>
          <div>
            Moderador:
            <span className="text-xs">{charla.Moderator.name}</span>
          </div>
        </div>

        {/* Watch Video Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            href=""
            className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border bg-primary px-[30px] py-[13.5px] tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
          >
            Ver video
          </a>

          {/* Expand/Collapse Arrow */}
          <button
            onClick={toggleExpanded}
            className="p-2 text-gray-600 transition-colors hover:text-gray-800"
            aria-label={isExpanded ? "Colapsar detalles" : "Expandir detalles"}
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.00006 12.6658L14.0001 12.6658C14.1216 12.6654 14.2406 12.6319 14.3445 12.5688C14.4484 12.5058 14.5331 12.4157 14.5895 12.3081C14.646 12.2005 14.672 12.0795 14.6648 11.9582C14.6576 11.837 14.6175 11.7199 14.5487 11.6198L8.54872 2.95309C8.30006 2.59376 7.70139 2.59376 7.45206 2.95309L1.45206 11.6198C1.38261 11.7197 1.34188 11.8368 1.3343 11.9583C1.32672 12.0798 1.35258 12.201 1.40907 12.3088C1.46555 12.4167 1.55051 12.5069 1.6547 12.5699C1.75889 12.6328 1.87834 12.666 2.00006 12.6658Z"
                  fill="#2D3D34"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M2.00006 12.6658L14.0001 12.6658C14.1216 12.6654 14.2406 12.6319 14.3445 12.5688C14.4484 12.5058 14.5331 12.4157 14.5895 12.3081C14.646 12.2005 14.672 12.0795 14.6648 11.9582C14.6576 11.837 14.6175 11.7199 14.5487 11.6198L8.54872 2.95309C8.30006 2.59376 7.70139 2.59376 7.45206 2.95309L1.45206 11.6198C1.38261 11.7197 1.34188 11.8368 1.3343 11.9583C1.32672 12.0798 1.35258 12.201 1.40907 12.3088C1.46555 12.4167 1.55051 12.5069 1.6547 12.5699C1.75889 12.6328 1.87834 12.666 2.00006 12.6658Z"
                  fill="#2D3D34"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Expandable Details Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-200 bg-white p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="grid aspect-square h-[19px] place-items-center text-primary">
                    <MapPinLineal size="18" />
                  </span>
                  <span className="text-xs">{charla.Room.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CodeIcon />
                  <span className="text-xs"> Cód. {charla.code}</span>
                </div>

                <div className="flex items-center gap-3">
                  {(() => {
                    const { icon, color } = getThemeIcon(charla.Theme.name);
                    return (
                      <div
                        className="grid aspect-square h-[21px] place-items-center"
                        style={{ color }}
                      >
                        {icon}
                      </div>
                    );
                  })()}
                  <div>
                    <span className="text-xs">{charla.Theme.name}</span>
                  </div>
                </div>

                {charla?.multilingual_talk &&
                  charla.multilingual_talk[locale] &&
                  charla.multilingual_talk[locale].length > 1 && (
                    <div className="flex items-center gap-[25px]">
                      <span className="grid aspect-square h-[21px] place-items-center">
                        <PlanetaIcon size="21" />
                      </span>
                      <span className="text-slg leading-none text-paragraph">
                        {getMultilingualField(charla.multilingual_talk, locale)}
                      </span>
                    </div>
                  )}

                <div className="flex items-center gap-3">
                  <IdiomasIcon />
                  <span className="text-xs">
                    {charla.languages.length > 1
                      ? charla.languages
                      : "Sin data"}
                  </span>
                </div>
              </div>
              <ModalCharlaMobile
                title={getMultilingualField(charla.multilingual_title, locale)}
                description={getMultilingualField(
                  charla.multilingual_description,
                  locale,
                )}
              />
                         </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CharlaCardMobile;
