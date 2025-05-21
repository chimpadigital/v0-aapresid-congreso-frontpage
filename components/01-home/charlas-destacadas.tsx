"use client"
 import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import CharlaDestacadaCard from "./charla-destacad-card"

const featuredTalks = [
  {
    id: 1,
    title: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
    speakers: "Clara Lopez, Hugo del Carril",
    dateTime: "6/8 10:30 hs.",
    location: "Sala Lorem Ipsum",
    theme: "Eje 01: Aprender produciendo",
    section: "Sección Internacional junto a IICA",
  },
  {
    id: 2,
    title: "Sistemas integrados de producción agrícola sostenible",
    speakers: "Martín Rodríguez, Ana Fernández",
    dateTime: "6/8 14:00 hs.",
    location: "Sala Principal",
    theme: "Eje 02: Sistemas Productivos Sustentables",
    section: "Sección Nacional",
  },
  {
    id: 3,
    title: "Innovación tecnológica en el manejo de cultivos",
    speakers: "Roberto Sánchez, Sofía Ramírez",
    dateTime: "7/8 09:15 hs.",
    location: "Auditorio Verde",
    theme: "Eje 03: Innovación y AgTech",
    section: "Sección Tecnología",
  },
  {
    id: 4,
    title: "Desafíos globales en la agricultura moderna",
    speakers: "Carlos Méndez, Laura Gómez",
    dateTime: "7/8 11:45 hs.",
    location: "Sala Conferencias",
    theme: "Eje 04: Desafíos Globales",
    section: "Sección Internacional",
  },
  {
    id: 5,
    title: "Manejo integrado de plagas en cultivos extensivos",
    speakers: "Diego Martínez, Sofía Ramírez",
    dateTime: "7/8 15:30 hs.",
    location: "Sala Técnica",
    theme: "Eje 05: Manejo de Plagas",
    section: "Sección Técnica",
  },
  {
    id: 6,
    title: "Perspectivas sociopolíticas del agro en Latinoamérica",
    speakers: "Ana Fernández, Hugo del Carril",
    dateTime: "8/8 09:00 hs.",
    location: "Auditorio Principal",
    theme: "Eje 06: Perspectivas Sociopolíticas",
    section: "Sección Política",
  },
  {
    id: 7,
    title: "Sistemas de información y toma de decisiones",
    speakers: "Martín Rodríguez, Clara Lopez",
    dateTime: "8/8 11:30 hs.",
    location: "Sala Digital",
    theme: "Eje 03: Innovación y AgTech",
    section: "Sección Tecnología",
  },
  {
    id: 8,
    title: "Agricultura regenerativa: casos de éxito",
    speakers: "Roberto Sánchez, Carlos Méndez",
    dateTime: "8/8 14:45 hs.",
    location: "Sala Verde",
    theme: "Eje 02: Sistemas Productivos Sustentables",
    section: "Sección Nacional",
  },
]

 export function FeaturedTalksSection() {
  return (
    <section className="relative m-4 md:m-[30px] bg-[#F0F0F1] rounded-[20px] overflow-hidden py-16 px-4 xs:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3D34] text-center mb-16">
          Charlas destacadas
        </h2>

        {/* Slider de tarjetas */}
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            // slidesPerView={1}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 1,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //   },
            //   1024: {
            //     slidesPerView: 'auto',
            //   },
            // }}
            slidesPerView= 'auto'
            pagination={{ clickable: true }}
            className="swiper-charlas-destacadas"
          >
            {featuredTalks.map((talk) => (
              <SwiperSlide key={talk.id} className="pb-12 w-full md:!w-fit">
                <CharlaDestacadaCard
                  title={talk.title}
                  speakers={talk.speakers}
                  dateTime={talk.dateTime}
                  location={talk.location}
                  theme={talk.theme}
                  section={talk.section}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
