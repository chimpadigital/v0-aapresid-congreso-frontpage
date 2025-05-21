import type React from "react";
import DisertanteIcon from "../icons/DisertanteIcon";
import Calendar from "../icons/Calendar";
import MapPin from "../icons/MapPin";
import Eje1Aprender from "../icons/Eje1Aprender";
import PlanetaIcon from "../icons/PlanetaIcon";
import CalendarLineal from "../icons/CalendarLineal";
import MapPinLineal from "../icons/MapPinLineal";

interface CharlaDestacadaCardProps {
  title: string;
  speakers: string;
  dateTime: string;
  location: string;
  theme: string;
  section: string;
}

const CharlaDestacadaCard: React.FC<CharlaDestacadaCardProps> = ({
  title,
  speakers,
  dateTime,
  location,
  theme,
  section,
}) => {
  return (
    <div className="h-full w-[381px] rounded-[20px] bg-white px-[41px] py-[46px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
      <h3 className="mb-6 text-[20px] font-medium leading-tight text-[#2D3D34]">
        {title}
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <DisertanteIcon />
          </div>
          <span className="text-[18px] text-[#736D6D]">{speakers}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <CalendarLineal />
          </div>
          <span className="text-[18px] text-[#736D6D]">{dateTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <MapPinLineal />
          </div>
          <span className="text-[18px] text-[#736D6D]">{location}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 text-red-400">
            <Eje1Aprender size={30} />
          </div>
          <span className="text-[18px] text-[#736D6D]">{theme}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <PlanetaIcon />
          </div>
          <span className="text-[18px] text-[#736D6D]">{section}</span>
        </div>
      </div>
    </div>
  );
};

export default CharlaDestacadaCard;
