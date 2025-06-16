import React from "react";
import Emailicon from "../icons/Emailicon";
import WhatsappIcon from "../icons/WhatsappIcon";

const ReservaEstadia = () => {
  return (
    <section className="m-4 mt-20 rounded-[20px] bg-[#F0F0F1] bg-[url('/images/circuit-pattern-gray.webp')] bg-cover bg-no-repeat px-8 py-8 md:py-20 md:mx-[33px]">
      <div className="mx-auto max-w-[1151px]">
        <div className="rounded-3xl tracking-wider">
          {/* Header */}
          <div className="mb-[71px]">
            <h2 className="mb-4 text-3xl text-primary lg:text-4xl">
              ¡Reservá tu estadía para el
              <br />
              <span className="font-bold">Congreso Aapresid 2025</span>!
            </h2>
            <p className="text-2xl text-paragraph">
              Hospedate en Up Argentina o Up Tribeca.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex justify-between gap-10 flex-wrap">
            {/* Left Column - Event Info */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-secondary">
                Del 7 al 9 de Agosto
              </h3>
              <p className="max-w-[53ch] leading-snug text-paragraph">
                El Congreso Aapresid es un evento de referencia internacional,
                que lleva más de tres décadas conectando innovación, tecnología
                y conocimientos con el propósito de impulsar sistemas
                productivos cada vez más sustentables.
              </p>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="mb-8 text-2xl font-bold text-primary">
                Reservá tu alojamiento
              </h3>

              <div className="space-y-6 text-primary">
                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Emailicon />
                  </div>
                  <div>
                    <a
                      href="mailto:reservas@uphoteles.com"
                      className="text:lg md:text-2xl transition-colors"
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
                      className="text:lg md:text-2xl transition-colors"
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
