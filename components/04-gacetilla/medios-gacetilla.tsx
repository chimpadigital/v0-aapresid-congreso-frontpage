"use client";
import { SponsorPropsItem } from "@/lib/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { SponsorLogo } from "../sponsor-logo";
import { useTranslations } from "next-intl";

interface categoryProps {
  medios: SponsorPropsItem[];
}

const MediosGacetilla = () => {
  const [sponsors, setSponsors] = useState<categoryProps>();

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const res = await axios.get("/api/medios");
        setSponsors(res.data);
      } catch (err) {
        console.error("Error fetching sponsors", err);
      }
    };

    fetchSponsors();
  }, []);

  const t = useTranslations("gacetilla-page");

  if (!sponsors || !sponsors.medios || sponsors.medios.length === 0)
    return null;

  return (
    <div className="mx-4 mb-16 mt-10 max-w-[1204px] md:mx-auto md:mt-16">
      <h3 className="mb-4 text-2xl text-primary">{t("medios")}</h3>
      <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

      <div className="mb-12 flex flex-wrap justify-center gap-x-2 xs:gap-y-8">
        {sponsors?.medios.map((sponsor, i) => {
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
  );
};

export default MediosGacetilla;
