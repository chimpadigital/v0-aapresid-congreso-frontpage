import React from "react";
import WhatsappIcon from "../icons/WhatsappIcon";
import Emailicon from "../icons/Emailicon";
import { ContactoCard } from "../ContactoCard";
import Image from "next/image";
import { ContactInfo } from "@/lib/types";
import TenesDuddas from "../TenesDudas";

const pressContacts: ContactInfo[] = [
  {
    name: "Prensa Aapresid",
    email: "prensa@aapresid.org.ar",
    whatsapp: "+54 9 341 702-9698",
  },
  {
    name: "Eliana Esnaola",
    email: "eesnaola@exponenciar.com.ar",
    whatsapp: "+54 9 11 2783-4471",
  },
];

const PensaInscripciones = () => {
  return (
    <section className="mx-4 mt-[60px] rounded-[28px] bg-[#f0f0f1] px-4 pb-2 pt-[80px] md:mx-[33px] lg:px-8">
      <div className="mx-auto max-w-7xl tracking-wider text-primary md:px-5 lg:px-10">
        {/* Header with decorative elements */}
        <div className="relative mb-12">
          <h1 className="mb-2 text-5xl font-medium text-primary">Prensa</h1>

          {/* Decorative hexagons */}
          <div className="m:top-0 absolute -top-5 right-0 md:-right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="129"
              height="155"
              viewBox="0 0 129 155"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M78.9956 1.42478L44.4617 19.6989C40.4801 21.8003 38 25.9099 38 30.392V68.9352C38 73.0448 40.1047 76.8752 43.5769 79.1096L76.2071 100.057C80.0412 102.517 84.9478 102.65 88.916 100.403L122.86 81.1046C126.654 78.95 129 74.9334 129 70.5977V31.0703C129 26.801 126.734 22.8376 123.034 20.6565L90.9806 1.70408C87.3073 -0.46381 82.7627 -0.570209 78.9822 1.42478H78.9956Z"
                fill="#64B33D"
              />
              <path
                opacity="0.3"
                d="M26.5796 89.9219L4.18945 101.746C1.60798 103.106 0 105.765 0 108.665V133.605C0 136.264 1.36461 138.743 3.61579 140.189L24.7717 153.743C27.2575 155.335 30.4387 155.421 33.0115 153.966L55.0191 141.479C57.4789 140.085 59 137.486 59 134.681V109.104C59 106.342 57.5311 103.777 55.1321 102.366L34.35 90.1026C31.9685 88.6999 29.0219 88.631 26.5709 89.9219H26.5796Z"
                fill="#ED7F00"
              />
            </svg>
          </div>
        </div>

        {/* Press Accreditation Section */}
        <div className="mb-[84px] relative z-40">
          <h2 className="mb-2 text-4xl text-primary">
            ¿Necesitas acreditarte como prensa?
          </h2>
          <p className="mb-6 text-2xl">Datos de contacto</p>

          <div className="flex flex-wrap gap-2 lg:gap-20">
            {pressContacts.map((contact, index) => (
              <ContactoCard key={index} contact={contact} nameAs="h3" />
            ))}
          </div>
        </div>

        {/* Support Section */}
        <TenesDuddas />
      </div>
    </section>
  );
};

export default PensaInscripciones;
