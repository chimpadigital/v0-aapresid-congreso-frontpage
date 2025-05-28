"use client";

import { useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { Speaker } from "@/lib/types";
import DisertantesDestacadosDesk from "./disertantes-desktop";
import DisertantesMobile from "./disertantes-monile";

// Definimos la interfaz para los datos de los disertantes

// Datos de ejemplo para los disertantes
const speakers: Speaker[] = [
  {
    id: 1,
    name: "Clara Lopez",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    smallImage: "images/disertantes/speaker1.png",
    largeImage: "images/disertantes/speaker1.png",
    position: 1,
  },
  {
    id: 2,
    name: "Martín Rodríguez",
    bio: "Especialista en agricultura regenerativa con más de 15 años de experiencia en el sector. Ha liderado proyectos de innovación agrícola en toda Latinoamérica y es autor de numerosas publicaciones científicas.",
    smallImage: "images/disertantes/speaker2.png",
    largeImage: "images/disertantes/speaker2.png",
    position: 2,
  },
  {
    id: 3,
    name: "Roberto Sánchez",
    bio: "Pionero en sistemas de producción sustentable y referente internacional en tecnologías aplicadas al agro. Ha desarrollado metodologías que han sido implementadas en más de 20 países.",
    smallImage: "images/disertantes/speaker3.png",
    largeImage: "images/disertantes/speaker3.png",
    position: 4,
  },
  {
    id: 4,
    name: "Ana Fernández",
    bio: "Investigadora en biotecnología agrícola y experta en mejoramiento genético de cultivos. Su trabajo ha sido fundamental para el desarrollo de variedades resistentes a condiciones climáticas extremas.",
    smallImage: "images/disertantes/speaker4.png",
    largeImage: "images/disertantes/speaker4.png",
    position: 6,
  },
  {
    id: 5,
    name: "Carlos Méndez",
    bio: "Especialista en políticas agrarias y desarrollo rural sostenible. Ha asesorado a gobiernos y organizaciones internacionales en la implementación de programas que equilibran productividad y conservación.",
    smallImage: "images/disertantes/speaker5.png",
    largeImage: "images/disertantes/speaker5.png",
    position: 7,
  },
  {
    id: 6,
    name: "Laura Gómez",
    bio: "Experta en digitalización del agro y sistemas de información geográfica. Ha desarrollado plataformas tecnológicas que permiten optimizar la toma de decisiones en tiempo real.",
    smallImage: "images/disertantes/speaker6.png",
    largeImage: "images/disertantes/speaker6.png",
    position: 8,
  },
  {
    id: 7,
    name: "Diego Martínez",
    bio: "Referente en manejo integrado de plagas y enfermedades. Su enfoque innovador ha permitido reducir significativamente el uso de agroquímicos mientras se mantienen altos niveles de productividad.",
    smallImage: "images/disertantes/speaker7.png",
    largeImage: "images/disertantes/speaker7.png",
    position: 9,
  },
  {
    id: 8,
    name: "Sofía Ramírez",
    bio: "Especialista en economía agraria y mercados internacionales. Ha desarrollado modelos predictivos que ayudan a los productores a anticipar tendencias y optimizar sus estrategias comerciales.",
    smallImage: "images/disertantes/speaker8.png",
    largeImage: "images/disertantes/speaker8.png",
    position: 11,
  },
];

export function DisertantesDestacados() {
  const isMobile = useIsMobile();

  return (
    <section className="relative m-[30px] overflow-hidden rounded-[20px] bg-white px-0 py-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="mb-16 text-center text-4xl text-primary lg:text-5xl">
          Disertantes
          <span className="font-medium"> destacados</span>
        </h2>

        {/* Contenedor principal */}
        {!isMobile ? (
          <DisertantesDestacadosDesk speakers={speakers} />
        ) : (
          <DisertantesMobile speakers={speakers} />
        )}
      </div>
    </section>
  );
}
