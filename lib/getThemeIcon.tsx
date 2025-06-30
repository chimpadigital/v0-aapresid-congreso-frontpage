import React from "react";
import Eje1Aprender from "@/components/icons/Eje1Aprender";
import Eje2Desafios from "@/components/icons/Eje2Desafios";
import Eje3Innovacion from "@/components/icons/Eje3Innovacion";
import Eje4Manejo from "@/components/icons/Eje4Manejo";
import Eje5Sistemas from "@/components/icons/Eje5Sistemas";
import Eje6SistemasSustentables from "@/components/icons/Eje6SistemasSustentables";
import Eje7Perspectiva from "@/components/icons/Eje7Prospectiva";

export function getThemeIcon(theme: string, size: number = 30): {
  icon: any | null;
  color: string;
} {
  if (!theme) return { icon: null, color: "" };

  const normalized = theme.toLowerCase();

  const mapping: { match: (s: string) => boolean; icon: any; color: string }[] =
    [
      {
        match: (s) => s.includes("aprender"),
        icon: <Eje1Aprender size={size} />,
        color: "#EF7B80",
      },
      {
        match: (s) => s.includes("desaf"),
        icon: <Eje2Desafios size={size} />,
        color: "#147DBE",
      },
      {
        match: (s) =>
          s.includes("agtech") ||
          s.includes("innovación") ||
          s.includes("innovacion"),
        icon: <Eje3Innovacion size={size} />,
        color: "#E84615",
      },
      {
        match: (s) => s.includes("plaga"),
        icon: <Eje4Manejo size={size} />,
        color: "#D34240",
      },
      {
        match: (s) => s.includes("integrad"),
        icon: <Eje5Sistemas size={size} />,
        color: "#EAAB21",
      },
      {
        match: (s) => s.includes("sustentable") || s.includes("productivo"),
        icon: <Eje6SistemasSustentables size={size} />,
        color: "#15A884",
      },
      {
        match: (s) => s.includes("sociopol"),
        icon: <Eje7Perspectiva size={size} />,
        color: "#99529B",
      },
    ];

  for (const item of mapping) {
    if (item.match(normalized)) return { icon: item.icon, color: item.color };
  }

  return { icon: null, color: "" };
}
