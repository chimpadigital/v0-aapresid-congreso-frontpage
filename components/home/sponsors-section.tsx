"use client";
import LogoClarin from "../icons/LogoClarin";
import LogoLaNacion from "../icons/LogoLaNacion";
import TextoApoyan from "../icons/TextoApoyan";
import TextoOrganizan from "../icons/TextoOrganizan";
import LogoAapresid from "../icons/LogoAapresid";
import LogoExponenciar from "../icons/LogoExponenciar";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import axios from "axios";
import * as motion from "motion/react-client";
import { SponsorLogo } from "../sponsor-logo";
import { LogoCategory } from "@/lib/types";

export function SponsorsSection() {
  const t = useTranslations("sponsors");
  const [categories, setCategories] = useState<LogoCategory[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const res = await axios.get("/api/sponsors");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching sponsors", err);
      }
    };
    fetchSponsors();
  }, []);

  // Utilidad para obtener campo multilenguaje
  function getField(jsonOrObj: any, lang: string, fallback = "") {
    let obj: any = {};
    if (typeof jsonOrObj === "string") {
      try {
        obj = JSON.parse(jsonOrObj);
      } catch {
        return jsonOrObj || fallback;
      }
    } else if (typeof jsonOrObj === "object" && jsonOrObj !== null) {
      obj = jsonOrObj;
    } else {
      return fallback;
    }
    if (obj[lang] && obj[lang].trim() !== "") return obj[lang];
    const otherLang = lang === "en" ? "es" : "en";
    if (obj[otherLang] && obj[otherLang].trim() !== "") return obj[otherLang];
    return fallback;
  }

  // Buscar categorías por order en vez de por nombre

  const anfitriones = categories.find((cat) => cat.order === 1);
  const patA = categories.find((cat) => cat.order === 2);
  const patB = categories.find((cat) => cat.order === 3);
  const patC = categories.find((cat) => cat.order === 4);
  const patD = categories.find((cat) => cat.order === 5);
  const consignatarias = categories.find((cat) => cat.order === 6);
  const instit = categories.find((cat) => cat.order === 9);
  const medios = categories.find((cat) => cat.order === 8);
  const agenciaPrensa = categories.find((cat) => cat.order === 7);

  return (
    <>
      <section className="relative mx-4 overflow-hidden rounded-[20px] bg-white px-4 pb-6 pt-[88px] md:mx-[33px] md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="mb-16 text-center text-4xl font-medium text-primary md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          {/* Sponsors A */}
          {patA && patA.Logos.length !== 0 && (
            <div className="mb-16">
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_a")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {(anfitriones?.Logos || [])
                  .concat(patA?.Logos || [])
                  .map((sponsor, i) => (
                    <motion.div
                      key={sponsor.imagePath + "-" + i}
                      className="flex w-fit justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.5,
                        easing: "ease-out",
                      }}
                    >
                      <SponsorLogo
                        imagePath={sponsor.imagePath}
                        title={getField(sponsor.title, "es")}
                        height={135}
                        link={getField(sponsor.link, "es")}
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          )}
          {/* Sponsors B */}
          {patB && patB.Logos.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_b")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {patB.Logos.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.imagePath + "-" + i}
                    className="flex w-fit justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      easing: "ease-out",
                    }}
                  >
                    <SponsorLogo
                      imagePath={sponsor.imagePath}
                      title={getField(sponsor.title, "es")}
                      height={115}
                      link={getField(sponsor.link, "es")}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {/* Sponsors C */}
          {patC && patC.Logos.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_c")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {patC.Logos.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.imagePath + "-" + i}
                    className="flex w-fit justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      easing: "ease-out",
                    }}
                  >
                    <SponsorLogo
                      imagePath={sponsor.imagePath}
                      title={getField(sponsor.title, "es")}
                      height={95}
                      link={getField(sponsor.link, "es")}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {/* Sponsors D */}
          {patD && patD.Logos.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_d")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {patD.Logos.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.imagePath + "-" + i}
                    className="flex w-fit justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      easing: "ease-out",
                    }}
                  >
                    <SponsorLogo
                      imagePath={sponsor.imagePath}
                      title={getField(sponsor.title, "es")}
                      height={75}
                      link={getField(sponsor.link, "es")}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {/* Consignatarias */}
          {consignatarias && consignatarias.Logos.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl uppercase text-primary">
                {getField(consignatarias.name, "es")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {consignatarias.Logos.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.imagePath + "-" + i}
                    className="flex w-fit justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      easing: "ease-out",
                    }}
                  >
                    <SponsorLogo
                      imagePath={sponsor.imagePath}
                      title={getField(sponsor.title, "es")}
                      height={75}
                      link={getField(sponsor.link, "es")}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* MEDIOS */}
          {medios && medios.Logos.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl uppercase text-primary">
                {getField(medios.name, "es")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {medios.Logos.concat(agenciaPrensa?.Logos || []).map(
                  (sponsor, i) => (
                    <motion.div
                      key={sponsor.imagePath + "-" + i}
                      className="flex w-fit justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.5,
                        easing: "ease-out",
                      }}
                    >
                      <SponsorLogo
                        imagePath={sponsor.imagePath}
                        title={getField(sponsor.title, "es")}
                        height={115}
                        link={getField(sponsor.link, "es")}
                      />
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          )}

          {/* institucionales */}
          {instit && instit.Logos.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("institucionales")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]" />
              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {instit.Logos.map((sponsor, i) => (
                  <motion.div
                    key={sponsor.imagePath + "-" + i}
                    className="flex w-fit justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      easing: "ease-out",
                    }}
                  >
                    <SponsorLogo
                      imagePath={sponsor.imagePath}
                      title={getField(sponsor.title, "es")}
                      height={105}
                      link={getField(sponsor.link, "es")}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="mx-4 rounded-[20px] bg-[#3C3C3B] px-6 py-6 md:mx-[33px] xl:px-[58px] xl:py-[27.5px]">
        <div className="xsgap-[25px] mx-auto flex max-w-[1400px] flex-col gap-4 xl:flex-row">
          <div className="flex flex-1 items-center justify-between gap-4">
            <TextoApoyan />
            <LogoClarin />
            <LogoLaNacion />
          </div>
          <div className="hidden h-12 w-[2.5px] shrink-0 bg-white xl:block"></div>
          <hr className="xl:hidden" />
          <div className="flex flex-1 items-center justify-between gap-4">
            <TextoOrganizan />
            <LogoAapresid />
            <LogoExponenciar />
          </div>
        </div>
      </div>
    </>
  );
}
