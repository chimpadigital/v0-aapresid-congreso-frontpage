"use client"
import Image from "next/image";
import LogoClarin from "./icons/LogoClarin";
import LogoLaNacion from "./icons/LogoLaNacion";
import TextoApoyan from "./icons/TextoApoyan";
import TextoOrganizan from "./icons/TextoOrganizan";
import LogoAapresid from "./icons/LogoAapresid";
import LogoExponenciar from "./icons/LogoExponenciar";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import axios from "axios";


interface categoryProps {
  category1: SponsorPropsItem[];
  category2: SponsorPropsItem[];
  category3: SponsorPropsItem[];
  category4: SponsorPropsItem[];
  institucion: SponsorPropsItem[];
  medios: SponsorPropsItem[];
}

interface SponsorPropsItem {
  imagePath: string;
  title: string;
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
          <h2 className="mb-16 text-center text-4xl font-medium text-[#2D3D34] md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          {/* Sponsors A */}
          <div className="mb-16">
            <h3 className="mb-4 text-2xl text-[#2D3D34]">
              {t("patrocinios_a")}
            </h3>
            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsors?.category1.map((sponsor: SponsorPropsItem, i) => (
                <div
                  key={sponsor.imagePath + "-" + i}
                  className="flex w-fit justify-center"
                >
                  <SponsorLogo imagePath={sponsor.imagePath} title={sponsor.title} height={135} />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors B */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">
              {t("patrocinios_b")}
            </h3>

            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsors?.category2.map((sponsor: SponsorPropsItem, i) => (
                <div
                  key={sponsor.imagePath + "-" + i}
                  className="flex w-fit justify-center "
                >
                  <SponsorLogo imagePath={sponsor.imagePath} title={sponsor.title}height={125} />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors C */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">
              {t("patrocinios_c")}
            </h3>

            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsors?.category3.map((sponsor: SponsorPropsItem, i) => (
                <div
                  key={sponsor.imagePath + "-" + i}
                  className="flex w-fit justify-center "
                >
                  <SponsorLogo imagePath={sponsor.imagePath} title={sponsor.title} height={115} />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors D */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">
              {t("patrocinios_d")}
            </h3>

            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsors?.category4.map((sponsor: SponsorPropsItem, i) => (
                <div
                  key={sponsor.imagePath + "-" + i}
                  className="flex w-fit justify-center "
                >
                  <SponsorLogo imagePath={sponsor.imagePath} title={sponsor.title} height={105} />
                </div>
              ))}
            </div>
          </div>

          {/* institucionales */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">
              {t("institucionales")}
            </h3>

            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsors?.institucion.map((sponsor: SponsorPropsItem, i) => (
                <div
                  key={sponsor.imagePath + "-" + i}
                  className="flex w-fit justify-center "
                >
                  <SponsorLogo imagePath={sponsor.imagePath} title={sponsor.title} />
                </div>
              ))}
            </div>
          </div>

          {/* MEDIOS */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">{t("medios")}</h3>

            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsors?.medios.map((sponsor: SponsorPropsItem, i) => (
                <div
                  key={sponsor.imagePath + "-" + i}
                  className="flex w-fit justify-center "
                >
                  <SponsorLogo imagePath={sponsor.imagePath} title={sponsor.title} />
                </div>
              ))}
            </div>
          </div>
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

function SponsorLogo({
  imagePath,
  title,
  height = 74,
}: SponsorPropsItem & { height?: number }) {
  return (
    <a
      href={imagePath}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-20 items-center justify-center p-2 transition-opacity hover:opacity-80"
    >
      <div className="relative aspect-[260/135]" style={{ height }}>
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 250px, 300px"
        />
      </div>
    </a>
  );
}
