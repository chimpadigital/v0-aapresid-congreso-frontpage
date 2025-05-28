"use client";
import { Speaker } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

const DisertantesDestacadosDesk = ({ speakers }: { speakers: Speaker[] }) => {
  // Estado para el disertante actualmente seleccionado
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker>(speakers[0]);

  // Función para manejar el hover sobre una imagen
  const handleSpeakerHover = (speaker: Speaker) => {
    setActiveSpeaker(speaker);
  };

  // Función para renderizar un elemento de la grilla según su posición
  const renderGridItem = (position: number) => {
    // Si la posición debe estar vacía, retornamos un div vacío
    if ([3, 5, 10, 12].includes(position)) {
      return (
        <div
          key={`empty-${position}`}
          className="aspect-[181/231] h-[180px] lg:h-[231px]"
        ></div>
      );
    }

    // Buscamos el disertante para esta posición
    const speaker = speakers.find((s) => s.position === position);

    // Si no hay disertante para esta posición, mostramos un placeholder
    if (!speaker) {
      return (
        <div
          key={`missing-${position}`}
          className="aspect-[181/231] h-[180px] rounded-[20px] bg-gray-200 lg:h-[231px]"
        >
          <div className="flex h-full items-center justify-center text-gray-500">
            {position}
          </div>
        </div>
      );
    }

    // Si hay disertante, mostramos su imagen
    return (
      <div
        key={`speaker-${speaker.id}`}
        className="relative aspect-[181/231] h-[180px] cursor-pointer overflow-hidden rounded-[20px] transition-all duration-300 lg:h-[231px]"
        onMouseEnter={() => handleSpeakerHover(speaker)}
        onFocus={() => handleSpeakerHover(speaker)}
      >
        <Image
          src={speaker.smallImage || "/placeholder.svg"}
          alt={speaker.name}
          fill
          className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
    );
  };
  return (
    <div className="flex flex-col items-start justify-between gap-2 md:flex-row lg:gap-8">
      {/* Columna izquierda - Grid de imágenes pequeñas */}
      <div className="w-fit">
        <div className="flex max-w-[775px] flex-wrap gap-[17px]">
          {/* Primera fila */}
          {renderGridItem(1)}
          {renderGridItem(2)}
          {renderGridItem(3)}
          {renderGridItem(4)}

          {/* Segunda fila */}
          {renderGridItem(5)}
          {renderGridItem(6)}
          {renderGridItem(7)}
          {renderGridItem(8)}

          {/* Tercera fila */}
          {renderGridItem(9)}
          {renderGridItem(10)}
          {renderGridItem(11)}
          {renderGridItem(12)}
        </div>
      </div>

      {/* Columna derecha - Información del disertante activo */}
      <div className="flex w-[200px] shrink-0 flex-col items-start lg:w-[274px]">
        <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-2xl lg:h-[409px]">
          <Image
            src={activeSpeaker.largeImage || "/placeholder.svg"}
            alt={activeSpeaker.name}
            fill
            className="object-cover grayscale"
          />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
          {activeSpeaker.name}
        </h3>
        <p className="text-gray-600">{activeSpeaker.bio}</p>
      </div>
    </div>
  );
};

export default DisertantesDestacadosDesk;
