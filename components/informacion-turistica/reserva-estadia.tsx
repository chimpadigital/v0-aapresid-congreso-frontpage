import React from "react";
import Emailicon from "../icons/Emailicon";
import WhatsappIcon from "../icons/WhatsappIcon";
import Link from "next/link";
import { Download } from "lucide-react";

const ReservaEstadia = () => {
  return (
    <section className="m-4 mt-20 rounded-[20px] bg-[#F0F0F1] bg-[url('/images/circuit-pattern-gray.webp')] bg-cover bg-no-repeat px-8 py-8 md:mx-[33px] md:py-20">
      <div className="mx-auto max-w-[1151px]">
        <div className="rounded-3xl tracking-wider">
          {/* Header */}
          <div className="mb-[71px]">
            <h2 className="mb-4 text-3xl text-primary lg:text-4xl">
              ¡Reservá tu estadía para el
              <br />
              <span className="font-bold">Congreso Aapresid 2025</span>!
            </h2>
            <p className="max-w-[33ch] text-2xl text-paragraph">
              Hospedate en Up America Plaza, Up Tribeca, Up Viamonte o Up
              Congreso
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-wrap justify-between gap-10">
            {/* Left Column - Event Info */}
            <div>
              <p className="max-w-[58ch] leading-snug text-paragraph">
                El Congreso Aapresid es un evento de referencia internacional, que lleva más de tres décadas conectando innovación, tecnología y conocimientos con el propósito de impulsar sistemas productivos cada vez mas sustentables.
              </p>
              <Link
                className="relative z-[1] mt-5 flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-primary bg-transparent px-[30px] py-[15.5px] text-lg tracking-wider text-primary transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:text-white hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
                href={""}
              >
                Descargá el flyer
                <Download />
              </Link>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Reservá tu alojamiento
              </h3>

              <div className="space-y-4 text-primary">
                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Emailicon />
                  </div>
                  <div>
                    <a
                      href="mailto:reservas@uphoteles.com"
                      className="text:lg transition-colors md:text-2xl"
                    >
                      reservas@uphoteles.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="shrink-0">
                      <WhatsappIcon />
                    </div>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/541131498108"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text:lg transition-colors md:text-2xl"
                    >
                      WhatsApp/Tel: 1131498108
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservaEstadia;
