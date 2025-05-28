"use client";
import Image from "next/image";
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
import { SponsorPropsItem } from "@/lib/types";



interface categoryProps {
  category1: SponsorPropsItem[];
  category2: SponsorPropsItem[];
  category3: SponsorPropsItem[];
  category4: SponsorPropsItem[];
  institucion: SponsorPropsItem[];
  medios: SponsorPropsItem[];
}

export function SponsorsSection() {
  const t = useTranslations("sponsors");

  const [sponsors, setSponsors] = useState<categoryProps>();

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const res = await axios.get("/api/sponsors");
        setSponsors(res.data);
      } catch (err) {
        console.error("Error fetching sponsors", err);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <>
      <section className="relative mx-4 overflow-hidden rounded-[20px] bg-white px-4 pb-6 pt-[88px] md:mx-[33px] md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="mb-16 text-center text-4xl font-medium text-primary md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          {/* Sponsors A */}
          {sponsors?.category1.length !== 0 && (
            <div className="mb-16">
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_a")}
              </h3>
              <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {sponsors?.category1.map((sponsor, i) => {
                  return (
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
                        title={sponsor.title}
                        height={135}
                        link={sponsor.link}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
          {/* Sponsors B */}
          {sponsors?.category2.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_b")}
              </h3>

              <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {sponsors?.category2.map((sponsor: SponsorPropsItem, i) => {
                  return (
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
                        title={sponsor.title}
                        height={125}
                        link={sponsor.link}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sponsors C */}
          {sponsors?.category3.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_c")}
              </h3>

              <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {sponsors?.category3.map((sponsor: SponsorPropsItem, i) => {
                  return (
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
                        title={sponsor.title}
                        height={115}
                        link={sponsor.link}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sponsors D */}
          {sponsors?.category4.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("patrocinios_d")}
              </h3>

              <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {sponsors?.category4.map((sponsor: SponsorPropsItem, i) => {
                  return (
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
                        title={sponsor.title}
                        height={105}
                        link={sponsor.link}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* institucionales */}
          {sponsors?.institucion.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">
                {t("institucionales")}
              </h3>

              <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {sponsors?.institucion.map((sponsor: SponsorPropsItem, i) => {
                  return (
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
                        title={sponsor.title}
                        height={105}
                        link={sponsor.link}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MEDIOS */}
          {sponsors?.medios.length !== 0 && (
            <div>
              <h3 className="mb-4 text-2xl text-primary">{t("medios")}</h3>

              <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

              <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
                {sponsors?.medios.map((sponsor: SponsorPropsItem, i) => {
                  return (
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
                        title={sponsor.title}
                        height={115}
                        link={sponsor.link}
                      />
                    </motion.div>
                  );
                })}
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

