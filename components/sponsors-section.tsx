"use client";
import Image from "next/image";
import LogoClarin from "./icons/LogoClarin";
import LogoLaNacion from "./icons/LogoLaNacion";
import TextoApoyan from "./icons/TextoApoyan";
import TextoOrganizan from "./icons/TextoOrganizan";
import LogoAapresid from "./icons/LogoAapresid";
import LogoExponenciar from "./icons/LogoExponenciar";
import { useTranslations } from "next-intl";

interface SponsorProps {
  name: string;
  logo: string;
  url: string;
}

const sponsorsA: SponsorProps[] = [
  {
    name: "ATANOR",
    logo: "/images/sponsors/logo.png",
    url: "#",
  },
  {
    name: "Buenos Aires Ciudad",
    logo: "/images/sponsors/logo2.png",
    url: "#",
  },
  {
    name: "Bayer",
    logo: "/images/sponsors/logo3.png",
    url: "#",
  },
  {
    name: "Banco Macro",
    logo: "/images/sponsors/logo4.png",
    url: "#",
  },
  {
    name: "Bunge",
    logo: "/images/sponsors/logo5.png",
    url: "#",
  },
  {
    name: "Chacraservicios",
    logo: "/images/sponsors/logo6.png",
    url: "#",
  },
  {
    name: "Chacraswwervicios",
    logo: "/images/sponsors/logo6.png",
    url: "#",
  },
  {
    name: "Bunertge",
    logo: "/images/sponsors/logo5.png",
    url: "#",
  },
  {
    name: "Buenttos Aires Ciudad",
    logo: "/images/sponsors/logo2.png",
    url: "#",
  },
  {
    name: "ATAtytNOR",
    logo: "/images/sponsors/logo.png",
    url: "#",
  },
  {
    name: "Bancoet Macro",
    logo: "/images/sponsors/logo4.png",
    url: "#",
  },
  {
    name: "Bayeeetr",
    logo: "/images/sponsors/logo3.png",
    url: "#",
  },
];

export function SponsorsSection() {
  const t = useTranslations("sponsors");
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
              {sponsorsA.map((sponsor, i) => (
                <div
                  key={sponsor.name + "-" + i}
                  className="flex w-full justify-center 2xs:basis-1/2 xs:basis-1/3 lg:basis-1/6"
                >
                  <SponsorLogo {...sponsor} height={75} />
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
              {sponsorsA.map((sponsor, i) => (
                <div
                  key={sponsor.name + "-" + i}
                  className="flex w-full justify-center 2xs:basis-1/2 xs:basis-1/3 lg:basis-1/6"
                >
                  <SponsorLogo {...sponsor} height={65} />
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
              {sponsorsA.map((sponsor, i) => (
                <div
                  key={sponsor.name + "-" + i}
                  className="flex w-full justify-center 2xs:basis-1/2 xs:basis-1/3 lg:basis-1/6"
                >
                  <SponsorLogo {...sponsor} height={55} />
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
              {sponsorsA.map((sponsor, i) => (
                <div
                  key={sponsor.name + "-" + i}
                  className="flex w-full justify-center 2xs:basis-1/2 xs:basis-1/3 lg:basis-1/6"
                >
                  <SponsorLogo {...sponsor} height={45} />
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
              {sponsorsA.map((sponsor, i) => (
                <div
                  key={sponsor.name + "-" + i}
                  className="flex w-full justify-center 2xs:basis-1/2 xs:basis-1/3 lg:basis-1/6"
                >
                  <SponsorLogo {...sponsor} />
                </div>
              ))}
            </div>
          </div>

          {/* MEDIOS */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">{t("medios")}</h3>

            <div className="mb-12 h-px w-full bg-[#2C2C2C]"></div>

            <div className="mb-12 flex flex-wrap justify-center xs:gap-y-8">
              {sponsorsA.map((sponsor, i) => (
                <div
                  key={sponsor.name + "-" + i}
                  className="flex w-full justify-center 2xs:basis-1/2 xs:basis-1/3 lg:basis-1/6"
                >
                  <SponsorLogo {...sponsor} />
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
  name,
  logo,
  url,
  height = 74,
}: SponsorProps & { height?: number }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-20 items-center justify-center p-2 transition-opacity hover:opacity-80"
    >
      <div className="relative w-32" style={{ height }}>
        <Image
          src={logo || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 250px, 300px"
        />
      </div>
    </a>
  );
}
