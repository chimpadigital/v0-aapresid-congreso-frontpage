"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
  isOpen: boolean
}

export function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "¿Qué es el Congreso Aapresid?",
      answer: "",
      isOpen: false,
    },
    {
      question: "¿En qué fechas y cómo se llevará a cabo el Congreso?",
      answer:
        "El Congreso se realizará por primera vez, en La Rural de Palermo (Ciudad Autónoma de Buenos Aires) de manera presencial, los días 6, 7 y 8 de agosto.",
      isOpen: true,
    },
    {
      question: "¿Cómo me inscribo para asistir?",
      answer: "",
      isOpen: false,
    },
    {
      question: "¿Dónde puedo ver el programa del Congreso?",
      answer: "",
      isOpen: false,
    },
    {
      question: "¿Cuál es la fecha límite de inscripción gratuita como socio Aapresid?",
      answer: "",
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
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-full overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-[#2D3D34]">{faq.question}</span>
                <span className="bg-[#ED7F00] rounded-full p-1">
                  {faq.isOpen ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </span>
              </button>
              {faq.isOpen && faq.answer && (
                <div className="px-4 pb-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See more button */}
        <Link href="/preguntas-frecuentes" className="mt-8 text-white hover:underline focus:outline-none">
          Ver más preguntas frecuentes
        </Link>
      </div>
    </section>
  )
}
