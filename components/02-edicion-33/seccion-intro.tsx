import Image from 'next/image'
import React from 'react'

const SeccionIntro = () => {
  return (
     <section className="py-16 px-4 md:px-8 bg-white max-w-[1415px] mx-auto ">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Columna de texto */}
        <div className="md:w-1/2">
          <p className="text-[20px] text-[#736D6D] max-w-[47ch] mb-8">
            El Congreso Aapresid lleva más de tres décadas conectando innovación, tecnología y conocimiento con el
            propósito de impulsar sistemas productivos cada vez más sustentables, siendo hoy en día un evento de
            referencia internacional para técnicos, investigadores, decisores, productores y referentes de toda la
            cadena agroindustrial de la región.
          </p>
          <p className="text-[20px] text-[#736D6D] max-w-[47ch]">
            Durante cada edición, el Congreso Aapresid congrega a los más importantes referentes nacionales e
            internacionales para discutir y poner en agenda los temas del futuro, vinculando ciencia y producción y así
            transformar nuestra agricultura, ayudando a la mitigación del cambio climático e iluminando los escenarios
            de la innovación.
          </p>
        </div>

        {/* Columna de imagen */}
        <div className="md:w-1/2">
          <div className="relative">
            <Image
              src="/images/edicion-33/gacetilla-intro.webp"
              alt="Asistentes al Congreso Aapresid"
              width={526}
              height={526}
            //   className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionIntro