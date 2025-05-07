"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
  isOpen: boolean
}

export function FaqSection() {
  const [showAll, setShowAll] = useState(false)
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "¿Qué es el Congreso Aapresid?",
      answer:
        "El Congreso Aapresid es un evento de referencia internacional que lleva más de tres décadas conectando innovación, tecnología y conocimiento con el propósito de impulsar sistemas productivos cada vez más sustentables. Durante cada edición, congrega a los más importantes referentes nacionales e internacionales para discutir y posicionar contenido prospectivo de interés para el agro.",
      isOpen: false,
    },
    {
      question: "¿En qué fechas y cómo se llevará a cabo el Congreso?",
      answer:
        "El Congreso se realizará por primera vez, en La Rural de Palermo (Ciudad Autónoma de Buenos Aires) de manera presencial, los días 6, 7 y 8 de agosto de 2025.",
      isOpen: false,
    },
    {
      question: "¿Cómo me inscribo para asistir?",
      answer:
        "Para inscribirte, puedes hacerlo directamente desde nuestra página web en la sección 'Inscripciones'. Los socios de Aapresid cuentan con beneficios especiales y descuentos. También puedes inscribirte presencialmente el día del evento, aunque recomendamos hacerlo con anticipación para asegurar tu lugar.",
      isOpen: false,
    },
    {
      question: "¿Dónde puedo ver el programa del Congreso?",
      answer:
        "El programa completo del Congreso estará disponible en nuestra página web en la sección 'Contenidos > Programa'. Allí encontrarás el cronograma detallado de todas las charlas, talleres y actividades, así como información sobre los oradores y temáticas que se abordarán durante el evento.",
      isOpen: false,
    },
    {
      question: "¿Cuál es la fecha límite de inscripción gratuita como socio Aapresid?",
      answer:
        "La fecha límite para inscripción gratuita como socio Aapresid es el 15 de julio de 2025. Después de esa fecha, los socios también deberán abonar una tarifa, aunque con un descuento significativo respecto al precio general. Te recomendamos inscribirte con anticipación para aprovechar este beneficio.",
      isOpen: false,
    },
    {
      question: "¿Habrá traducción simultánea para las charlas internacionales?",
      answer:
        "Sí, todas las charlas y presentaciones de oradores internacionales contarán con traducción simultánea al español. Además, proporcionaremos auriculares para quienes lo necesiten. También habrá transcripción en tiempo real disponible a través de nuestra aplicación móvil.",
      isOpen: false,
    },
    {
      question: "¿Se entregarán certificados de asistencia?",
      answer:
        "Sí, todos los asistentes recibirán un certificado digital de participación que podrán descargar desde nuestra plataforma después del evento. Para aquellos que participen en talleres específicos, también se emitirán certificados adicionales que acreditan esa formación particular.",
      isOpen: false,
    },
    // Preguntas adicionales que se mostrarán al hacer clic en "Ver más"
    {
      question: "¿Habrá estacionamiento disponible en el lugar del evento?",
      answer:
        "Sí, La Rural de Palermo cuenta con estacionamiento pago disponible para los asistentes. Sin embargo, debido a la alta concurrencia, recomendamos llegar temprano o utilizar transporte público. El predio está bien conectado mediante diversas líneas de colectivo y subte (línea D, estación Plaza Italia).",
      isOpen: false,
    },
    {
      question: "¿Puedo cancelar mi inscripción y obtener un reembolso?",
      answer:
        "Las cancelaciones realizadas hasta 30 días antes del evento recibirán un reembolso del 80% del valor abonado. Las cancelaciones entre 30 y 15 días antes recibirán un reembolso del 50%. No se realizarán reembolsos para cancelaciones con menos de 15 días de anticipación, pero podrás transferir tu inscripción a otra persona sin costo adicional.",
      isOpen: false,
    },
    {
      question: "¿Habrá actividades sociales o networking durante el Congreso?",
      answer:
        "Sí, el Congreso incluye varias actividades de networking, incluyendo coffee breaks, almuerzos y un cóctel de cierre. Estas instancias son excelentes oportunidades para establecer contactos con otros profesionales del sector, intercambiar experiencias y generar nuevas oportunidades de colaboración.",
      isOpen: false,
    },
    {
      question: "¿Cómo puedo participar como expositor o patrocinador?",
      answer:
        "Para participar como expositor o patrocinador, puedes contactar a nuestro equipo comercial a través del correo comercial@aapresid.org.ar o completando el formulario en la sección 'Comercial' de nuestra web. Contamos con diferentes paquetes de patrocinio adaptados a las necesidades de cada empresa y espacios de exposición de diversos tamaños.",
      isOpen: false,
    },
  ])

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        return faq
      }),
    )
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)

    // Opcional: cerrar todos los acordeones adicionales cuando se ocultan
    if (showAll) {
      setFaqs(
        faqs.map((faq, i) => {
          if (i >= 7) {
            return { ...faq, isOpen: false }
          }
          return faq
        }),
      )
    }
  }

  // Determinar cuántas preguntas mostrar
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 7)

  return (
    <section className="relative m-[30px] rounded-[20px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/fondo-preguntas-dark.png" alt="" fill className="object-cover" />
      </div>

      {/* Content container */}
      <div className="relative z-10 p-8 md:p-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
          Preguntas Frecuentes
        </h2>

        {/* FAQ accordion */}
        <div className="w-full max-w-3xl space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] overflow-hidden transition-all duration-500 ease-in-out"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-[#2D3D34]">{faq.question}</span>
                <span className="bg-[#ED7F00] rounded-[16px] p-1 flex-shrink-0 ml-2">
                  {faq.isOpen ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  faq.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle button */}
        <button
          onClick={toggleShowAll}
          className="mt-8 text-white hover:underline focus:outline-none transition-all duration-300"
        >
          {showAll ? "Ver menos preguntas frecuentes" : "Ver más preguntas frecuentes"}
        </button>
      </div>
    </section>
  )
}
