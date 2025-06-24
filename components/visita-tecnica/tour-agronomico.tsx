import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const TourAgronomico = () => {
  return (
    <section className="mx-4 mt-10 rounded-[20px] bg-[#F0F0F1] px-24 pb-28 pt-[70px] md:mx-[33px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content - Hexagonal Image */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main hexagonal image container */}
            <div className="relative">
              {/* Hexagonal image */}
              <div className="relative h-96 w-96 lg:h-[450px] lg:w-[450px]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/visita-tecnica/tour-hexa.webp"
                    alt="Tour técnico agronómico - Técnicos examinando cultivos en el campo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 384px, 450px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-primary lg:text-5xl">
                Tour técnico agronómico
              </h1>
              <p className="text-2xl font-medium text-gray-600 lg:text-3xl">
                3 al 9 de agosto
              </p>
            </div>

            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Descubrá el campo argentino en la previa del 33° Congreso Aapresid
            </p>

            {/* Download Button */}
            <div className="pt-4">
              <button
                // onClick={onDownloadBrochure}
                className="group flex rounded-full bg-[#ED7F00] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#d67200]"
              >
                Descargá el brochure oficial
                <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourAgronomico;
