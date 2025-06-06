"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function SloganSection() {
  const t = useTranslations("edicion-33");

  return (
    <section className="bg-white px-4 py-8 md:px-8 md:pb-[82px] md:pt-16">
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
          <div className="relative text-center">
            <h2 className="slogan text-3xl font-normal text-primary md:text-5xl">
              <span className="text-5xl leading-none text-secondary md:text-7xl">
                “{" "}
              </span>
              {t("programamos")}
              <span className="ml-2 font-medium text-accent">
                {t("el-futuro")}
              </span>
              <span className="relative left-1 top-2 text-5xl leading-none text-secondary md:text-7xl">
                ”
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
