"use client";
import { SponsorPropsItem } from "@/lib/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { SponsorLogo } from "../sponsor-logo";

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

  return (
    <div className="mx-auto mb-16 max-w-[1204px] mt-10">
      <h3 className="mb-4 text-2xl text-primary">Medios</h3>
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
