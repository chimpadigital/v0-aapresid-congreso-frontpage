"use client"

import { Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-32">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight overflow-hidden">
          <span className="inline-block">
            <span
              className="inline-block transform transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "0.1s",
              }}
            >
              Programamos
            </span>
          </span>
          <br />
          <span className="inline-block">
            <span
              className="inline-block transform transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "0.3s",
              }}
            >
              el futuro
            </span>
          </span>
          <br />
          <span className="inline-block">
            <span
              className="inline-block transform transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "0.5s",
              }}
            >
              del agro
            </span>
          </span>
        </h1>

        <div className="mt-12 space-y-4">
          <div
            className="flex items-center text-white transform transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.7s",
            }}
          >
            <Calendar className="w-6 h-6 mr-3" />
            <span className="text-xl">6, 7 y 8 de Agosto</span>
          </div>

          <div
            className="flex items-center text-white transform transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.9s",
            }}
          >
            <MapPin className="w-6 h-6 mr-3" />
            <span className="text-xl">La Rural de Palermo, Buenos Aires</span>
          </div>
        </div>
      </div>
    </div>
  )
}
