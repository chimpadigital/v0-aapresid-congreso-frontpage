import Image from "next/image";
import ComillasIcon from "../icons/ComillasIcon";

export function SloganSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[1415px]">
        <div className="flex flex-col items-center">
          {/* Logos */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <figure className="relative aspect-[214/69] h-[69px]">
              <Image
                src="/images/edicion-33/logo-congresoaapre-color.svg"
                alt="Logo Congreso Aapresid"
                fill
                className="h-auto"
              />
            </figure>
            <div className="hidden h-12 w-px bg-primary md:block"></div>
            <figure className="relative top-1 aspect-[70/51] h-[50px]">
              <Image
                src="/images/edicion-33/logo-expoagro-color.svg"
                alt="Logo Expoagro"
                className="h-auto"
                fill
              />
            </figure>
            <div className="hidden h-12 w-px bg-primary md:block"></div>
            <figure className="relative -top-1 aspect-[203/58] h-[58px]">
              <Image
                src="/images/edicion-33/logo-codigoabierto-color.svg"
                alt="Logo Código Abierto"
                fill
                className="h-auto"
              />
            </figure>
          </div>

          {/* Eslogan */}
          <div className="flex text-center">
            <span className="relative -top-8 mr-3 rotate-180">
              <ComillasIcon />
            </span>
            <h2 className="text-3xl font-normal text-primary md:text-5xl">
              Programamos
              <span className="ml-2 font-medium text-accent">
                el futuro del agro
              </span>
            </h2>
            <span className="relative -top-0 ml-2">
              <ComillasIcon />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
