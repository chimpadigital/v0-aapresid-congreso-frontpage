import type React from "react";
import DisertanteIcon from "../icons/DisertanteIcon";
import Calendar from "../icons/Calendar";
import MapPin from "../icons/MapPin";
import Eje1Aprender from "../icons/Eje1Aprender";
import Eje1Desafios from "../icons/Eje2Desafios";
import EjeInnovacion from "../icons/Eje3Innovacion";
import Eje1Manejo from "../icons/Eje4Manejo";
import Eje1Sistemas from "../icons/Eje5Sistemas";
import Eje1Sustentable from "../icons/Eje6SistemasSustentables";
import Eje1Perspectiva from "../icons/Eje7Prospectiva";
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
  // Función para elegir el icono y color según el eje temático
  function getThemeIconAndColor(theme: string) {
    if (!theme) return { icon: null, color: "" };
    const normalized = theme.toLowerCase();
    if (normalized.includes("aprender"))
      return { icon: <Eje1Aprender size={30} />, color: "#EF7B80" };
    if (normalized.includes("desaf"))
      return { icon: <Eje1Desafios size={30} />, color: "#147DBE" };
    if (
      normalized.includes("agtech") ||
      normalized.includes("innovación") ||
      normalized.includes("innovacion")
    )
      return { icon: <EjeInnovacion size={30} />, color: "#E84615" };
    if (normalized.includes("plaga"))
      return { icon: <Eje1Manejo size={30} />, color: "#D34240" };
    if (normalized.includes("integrad"))
      return { icon: <Eje1Sistemas size={30} />, color: "#EAAB21" };
    if (
      normalized.includes("sustentable") ||
      normalized.includes("productivo")
    )
      return { icon: <Eje1Sustentable size={30} />, color: "#15A884" };
    if (normalized.includes("sociopol"))
      return { icon: <Eje1Perspectiva size={30} />, color: "#99529B" };
    return { icon: null, color: "" };
  }

  return (
    <div className="h-full w-fit rounded-[20px] bg-white px-6 py-[46px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] md:w-[381px] md:px-[41px]">
      <h3 className="mb-6 text-[20px] font-medium leading-tight text-primary">
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
          {(() => {
            const { icon, color } = getThemeIconAndColor(theme);
            return (
              <div className="flex-shrink-0" style={{ color }}>
                {icon}
              </div>
            );
          })()}
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
