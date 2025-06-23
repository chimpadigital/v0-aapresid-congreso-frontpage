import type React from "react";
import DisertanteIcon from "../icons/DisertanteIcon";
import PlanetaIcon from "../icons/PlanetaIcon";
import CalendarLineal from "../icons/CalendarLineal";
import MapPinLineal from "../icons/MapPinLineal";
import { getThemeIcon } from "@/lib/getThemeIcon";

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
  // Función para elegir el icono y color según el eje temático

  return (
    <div className="h-full w-fit rounded-[20px] bg-white px-6 py-[46px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] md:w-[381px] md:px-[41px]">
      <h3 className="mb-6 text-[20px] font-medium leading-tight text-primary">
        {title}
      </h3>

      <div className="space-y-4">
        {speakers.length > 0 && (
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-primary">
              <DisertanteIcon />
            </div>
            <span className="text-[18px] text-paragraph">{speakers}</span>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 text-primary">
            <CalendarLineal />
          </div>
          <span className="text-[18px] text-paragraph">{dateTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 text-primary">
            <MapPinLineal />
          </div>
          <span className="text-[18px] text-paragraph">{location}</span>
        </div>

        <div className="flex items-center gap-4">
          {(() => {
            const { icon, color } = getThemeIcon(theme);
            return (
              <div className="flex-shrink-0 text-primary h-[33px] aspect-square grid place-items-center" style={{ color }}>
                {icon}
              </div>
            );
          })()}
          <span className="text-[18px] text-paragraph">{theme}</span>
        </div>

        {section.length > 1 && (
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 text-primary">
              <PlanetaIcon />
            </div>
            <span className="text-[18px] text-paragraph">{section}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharlaDestacadaCard;
