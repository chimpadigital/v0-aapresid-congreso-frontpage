"use client";
import { Speaker } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

const DisertantesDestacadosDesk = ({
  speakers,
  locale,
}: {
  speakers: Speaker[];
  locale: string;
}) => {
  // Estado para el disertante actualmente seleccionado
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | undefined>(
    speakers[0]
  );

  React.useEffect(() => {
    if (speakers.length > 0 && !activeSpeaker) {
      setActiveSpeaker(speakers[0]);
    }
  }, [speakers]);

  // Función para manejar el hover sobre una imagen
  const handleSpeakerHover = (speaker: Speaker) => {
    setActiveSpeaker(speaker);
  };

  // Calcula las posiciones válidas para disertantes (excluyendo los espacios vacíos)
  const speakerPositions = [1, 2, 4, 6, 7, 8, 9, 11];

  // Mapea cada posición a un disertante (en orden)
  const speakerByPosition: Record<number, Speaker | undefined> = {};
  speakers.forEach((speaker, idx) => {
    if (speakerPositions[idx] !== undefined) {
      speakerByPosition[speakerPositions[idx]] = speaker;
    }
  });

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
    const speaker = speakerByPosition[position];

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
        className="relative aspect-[181/231]  h-[180px] cursor-pointer overflow-hidden rounded-[20px] transition-all duration-300 lg:h-[231px]"
        onMouseEnter={() => handleSpeakerHover(speaker)}
        onFocus={() => handleSpeakerHover(speaker)}
      >
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          fill
          className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-start justify-between gap-2 md:flex-row lg:gap-8 px-[33px]">
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
        {activeSpeaker ? (
          <>
            <div className="relative mb-5 h-[300px] w-full overflow-hidden rounded-[20px] lg:h-[409px]">
              <Image
                src={activeSpeaker.image || "/placeholder.svg"}
                alt={activeSpeaker.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-primary">
              {activeSpeaker.name}
            </h3>
            <p className="text-[#736D6D]">
              {(() => {
                try {
                  const descObj = JSON.parse(activeSpeaker.description);
                  return descObj[locale] || descObj.es || descObj.en || "";
                } catch {
                  return activeSpeaker.description;
                }
              })()}
            </p>
          </>
        ) : (
          <div className="text-gray-400">Selecciona un disertante</div>
        )}
      </div>
    </div>
  );
};

export default DisertantesDestacadosDesk;
