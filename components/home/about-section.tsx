"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { RichText } from "../rich-text";
import * as motion from "motion/react-client";

export function AboutSection() {
  const t = useTranslations("about");
  return (
    <section className="relative mx-4 mt-0 overflow-hidden rounded-[20px] p-6 md:mx-[33px] md:mt-20 md:px-12 md:py-28 lg:px-24">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/home/campo-background-mobile.webp')] bg-cover bg-fixed sm:bg-[url('/images/home/campo-background.webp')]">
        <div className="absolute inset-0 bg-black/30 bg-blend-multiply" />
      </div>

      {/* Content container */}
      <div className="mx-auto max-w-[1216px]">
        <div className="relative w-full gap-8 md:grid md:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex w-full flex-col justify-center"
          >
            <h2 className="mb-6 text-4xl font-light leading-tight text-white md:text-5xl lg:text-5xl">
              {t("que_es")}
              <br />
              <span className="font-medium">{t("congreso")}</span>
            </h2>
            <p className="w-full max-w-[45ch] text-base text-white">
              {t("descripcion")}
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col items-start md:mt-0 md:px-20"
          >
            <div className="max-w-[25ch]">
              <RichText
                text={t("conoce_el_programa")}
                className="mb-6 max-w-[20ch] text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl"
              />
            </div>
            {/* <Link
              href={locale + "/cronograma"}
              className="relative overflow-hidden rounded-full border border-white bg-white/10 px-[30px] py-[12px] font-medium text-white transition-colors duration-500 before:absolute before:-left-[147%] before:top-[125%] before:z-[1] before:h-[290%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:before:scale-[3]"
            >
              <span className="relative z-10 text-lg">{t("cronograma")}</span>
            </Link> */}
            <button
              disabled
              className="relative overflow-hidden rounded-full border pointer-events-none border-white bg-white/10 px-[30px] py-[12px] font-medium text-white transition-colors duration-500 before:absolute before:-left-[147%] before:top-[125%] before:z-[1] before:h-[290%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:before:scale-[3]"
            >
              <span className="relative z-10 text-lg">{t("proximamente")}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative hexagons */}
      <Image
        src="/images/home/decorative-hexa.svg"
        alt="Hexagon"
        width={200}
        height={200}
        className="absolute -right-1 -top-10 opacity-50"
      />

      <Image
        src="/images/home/decorative-hexa2.svg"
        alt="Hexagon"
        width={150}
        height={150}
        className="absolute -left-7 bottom-10 opacity-50"
      />
    </section>
  );
}
