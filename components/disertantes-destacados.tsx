"use client"

import { useState } from "react"
import Image from "next/image"

// Definimos la interfaz para los datos de los disertantes
interface Speaker {
  id: number
  name: string
  bio: string
  smallImage: string
  largeImage: string
  position: number // Posición en la grilla (1-12)
}

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
]

export function DisertantesDestacados() {
  // Estado para el disertante actualmente seleccionado
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker>(speakers[0])

  // Función para manejar el hover sobre una imagen
  const handleSpeakerHover = (speaker: Speaker) => {
    setActiveSpeaker(speaker)
  }

  // Función para renderizar un elemento de la grilla según su posición
  const renderGridItem = (position: number) => {
    // Si la posición debe estar vacía, retornamos un div vacío
    if ([3, 5, 10, 12].includes(position)) {
      return <div key={`empty-${position}`} className="w-[181px] h-[231px]"></div>
    }

    // Buscamos el disertante para esta posición
    const speaker = speakers.find((s) => s.position === position)

    // Si no hay disertante para esta posición, mostramos un placeholder
    if (!speaker) {
      return (
        <div key={`missing-${position}`} className="w-[181px] h-[231px] bg-gray-200 rounded-[20px]">
          <div className="h-full flex items-center justify-center text-gray-500">{position}</div>
        </div>
      )
    }

    // Si hay disertante, mostramos su imagen
    return (
      <div
        key={`speaker-${speaker.id}`}
        className="relative w-[181px] h-[231px] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300"
        onMouseEnter={() => handleSpeakerHover(speaker)}
        onFocus={() => handleSpeakerHover(speaker)}
      >
        <Image
          src={speaker.smallImage || "/placeholder.svg"}
          alt={speaker.name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    )
  }

  return (
    <section className="relative m-[30px] bg-white rounded-[20px] overflow-hidden py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3D34] text-center mb-16">
          Disertantes destacados
        </h2>

        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Columna izquierda - Grid de imágenes pequeñas */}
          <div className="w-fit">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 181px)",
                gridTemplateRows: "repeat(3, 231px)",
                gap: "17px",
              }}
            >
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
          <div className="flex flex-col items-start" style={{ width: "274px", flexShrink: 0 }}>
            <div className="relative w-full h-[409px] rounded-2xl overflow-hidden mb-6">
              <Image
                src={activeSpeaker.largeImage || "/placeholder.svg"}
                alt={activeSpeaker.name}
                fill
                className="object-cover grayscale"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2D3D34] mb-4">{activeSpeaker.name}</h3>
            <p className="text-gray-600">{activeSpeaker.bio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
