"use client"
import { useEffect, useState } from "react"
import MapPin from "../icons/MapPin"
import Calendar from "../icons/Calendar"
import { useTranslations } from "next-intl"

export function Hero() {
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const t = useTranslations("hero");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-32">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white  my-[1lh] md:mx-0 ">
          <span className="inline-block">
            <span
              className="inline-block transform transition-all duration-700 ease-out font-normal leading-[1] md:leading-tight"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "0.1s",
              }}
            >
              {t("programamos")}
            </span>
          </span>
          <br />
          <span className="inline-block">
            <span
              className="inline-block leading-[1] md:leading-tight transform transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "0.3s",
              }}
            >
              {t("el_futuro_del_agro")}
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
            <Calendar />
            <span className="text-xl ml-[15px]">{t("fecha")}</span>
          </div>

          <div
            className="flex items-center text-white transform transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.9s",
            }}
          >
            <MapPin />
            <span className="text-xl ml-[17px]">{t("lugar")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
