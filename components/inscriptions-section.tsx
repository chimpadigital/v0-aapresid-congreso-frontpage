import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ArrowRounded from "./icons/ArrowRounded";

export function InscriptionsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 md:pt-[68px] md:px-8">
      <div className="relative flex flex-col md:flex-row">
        {/* Left side - Dark green with circuit pattern */}
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-t-[30px] bg-[#2D3D34] px-8 py-16 md:w-[calc(50%+20px)] md:rounded-l-[30px] md:rounded-tr-none md:px-16 md:py-20">
          {/* Circuit pattern background */}
          <div className="absolute inset-0">
            <Image
              src="/images/circuit-pattern.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="relative text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Inscripciones
          </h2>
        </div>

        {/* Right side - Light green */}
        <div className="flex w-full flex-col items-center justify-center rounded-[30px] bg-[#64B33D] px-8 py-16  md:-ml-[40px] md:w-[calc(50%+20px)] md:px-16 md:py-20 -top-6 md:top-auto relative">
          <h3 className="mb-6 text-center text-2xl font-light text-white md:text-3xl lg:text-4xl">
            ¿Sos socio Aapresid?
          </h3>

          <Link
            href="/inscripciones"
            className="relative z-[1] ml-4 flex w-[min(374px,100%)] items-center justify-center gap-[10px] overflow-hidden rounded-full border border-white bg-transparent px-[30px] py-[15.5px] font-medium text-white transition-colors duration-[1s] before:absolute before:-left-[10%] before:top-[100%] before:z-[-1] before:h-[390%] before:w-[10%] before:origin-left before:-rotate-[30deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-primary hover:before:scale-x-[20] hover:before:scale-y-[2]"
          >
            <span className="text-2xl">Inscribite acá</span>
            <ArrowRounded />
          </Link>
        </div>
      </div>
    </section>
  );
}
