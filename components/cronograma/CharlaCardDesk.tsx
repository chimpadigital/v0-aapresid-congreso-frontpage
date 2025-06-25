"use client";
import { Event } from "@/lib/types";
import React from "react";
import MapPinLineal from "../icons/MapPinLineal";
import CodeIcon from "../icons/CodeIcon";
import { getMultilingualField } from "@/lib/utils";
import DisertanteIconV2 from "../icons/DisertanteIconV2";
import MicrofonoIcon from "../icons/MicrofonoIcon";
import ModalCharlaDesc from "./ModalCharlaDesc";
import IdiomasIcon from "../icons/IdiomasIcon";
import PlanetaIcon from "../icons/PlanetaIcon";
import { getThemeIcon } from "@/lib/getThemeIcon";

const CharlaCardDesk = ({
  charla,
  locale,
}: {
  charla: Event;
  locale: string;
}) => {
  return (
    <div
      className="mx-auto flex w-full flex-col rounded-[20px] bg-white tracking-wider lg:flex-row lg:gap-2.5"
      key={charla.id + "charla"}
    >
      {/* Left Section - Program Details */}
      <div className="flex flex-col rounded-l-[20px] lg:w-1/3">
        {/* Date and Time Header */}
        <div className="rounded-tl-[20px] rounded-tr-[20px] bg-[#2d3d34] py-[18px] pl-[34px] pr-[55px] text-white lg:rounded-tr-none">
          <div className="flex items-center justify-between tracking-wider">
            <h2 className="text-2xl font-bold">
              {(() => {
                const [year, month, day] = charla.date.split("-");
                return `${day}/${month}`;
              })()}
            </h2>
            <span className="text-xl">
              {charla.start_time.slice(0, 5)} - {charla.end_time.slice(0, 5)}
            </span>
          </div>
        </div>

        {/* Program Details with white background */}
        <div className="flex-1 space-y-4 bg-white px-[34px] py-6 shadow-lg lg:rounded-bl-[20px]">
          <div className="flex items-center gap-[25px]">
            <span className="grid aspect-square h-[21px] place-items-center text-primary">
              <MapPinLineal size="18" />
            </span>
            <span className="text-lg leading-none text-paragraph">
              {charla.Room.name}
            </span>
          </div>

          <div className="flex items-center gap-[25px]">
            <span className="grid aspect-square h-[21px] place-items-center">
              <CodeIcon />
            </span>
            <span className="text-slg leading-none text-paragraph">
              Cód. {charla.code}
            </span>
          </div>

          <div className="flex items-center gap-[25px]">
            {(() => {
              const { icon, color } = getThemeIcon(charla.Theme.name, 21);
              return (
                <div
                  className="grid aspect-square h-[21px] place-items-center"
                  style={{ color }}
                >
                  {icon}
                </div>
              );
            })()}
            <span className="text-slg leading-none text-paragraph">
              {charla.Theme.name}
            </span>
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

          <div className="flex items-center gap-[25px]">
            <span className="grid aspect-square h-[21px] place-items-center">
              <IdiomasIcon />
            </span>
            <span className="text-slg leading-none text-paragraph">
              {charla.languages.length > 1 ? charla.languages : "Sin data"}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section - Session Details */}
      <div className="flex flex-col justify-between overflow-hidden rounded-b-[20px] bg-[#2d3d34] p-6 text-white lg:w-2/3 lg:rounded-r-[20px] lg:rounded-bl-none">
        {/* Title */}
        <div className="mb-8">
          <h1 className="max-w-[40ch] text-xl font-bold">
            {getMultilingualField(charla.multilingual_title, locale)}
          </h1>
        </div>

        {/* Speakers and Moderator */}
        <div className="mb-6 flex-1 space-y-4 tracking-widest">
          <div className="flex items-center gap-[14px]">
            <DisertanteIconV2 />
            <div>
              <span className="text-lg font-medium">Disertantes: </span>
              <span className="text-lg">
                {charla.Speakers.map((speaker) => speaker.name).join(", ")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[14px]">
            <span className="grid aspect-square h-[29px] place-items-center text-white">
              <MicrofonoIcon />
            </span>
            <div>
              <span className="text-lg font-medium">Moderador: </span>
              <span className="text-lg">{charla.Moderator.name}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col justify-end gap-3 sm:flex-row">
          <a
            href=""
            className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-white bg-transparent px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-accent before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
          >
            Ver video
          </a>

          <ModalCharlaDesc
            title={getMultilingualField(charla.multilingual_title, locale)}
            description={getMultilingualField(
              charla.multilingual_description,
              locale,
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CharlaCardDesk;
