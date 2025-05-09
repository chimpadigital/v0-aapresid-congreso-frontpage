import Image from "next/image";
import Link from "next/link";
import LogoClarin from "./icons/LogoClarin";
import LogoLaNacion from "./icons/LogoLaNacion";
import TextoApoyan from "./icons/TextoApoyan";
import TextoOrganizan from "./icons/TextoOrganizan";
import LogoAapresid from "./icons/LogoAapresid";
import LogoExponenciar from "./icons/LogoExponenciar";

interface SponsorProps {
  name: string;
  logo: string;
  url: string;
}

const sponsorsA: SponsorProps[] = [
  {
    name: "ATANOR",
    logo: "/images/sponsors/atanor.png",
    url: "#",
  },
  {
    name: "Buenos Aires Ciudad",
    logo: "/images/sponsors/buenos-aires-ciudad.png",
    url: "#",
  },
  {
    name: "Bayer",
    logo: "/images/sponsors/bayer.png",
    url: "#",
  },
  {
    name: "Banco Macro",
    logo: "/images/sponsors/banco-macro.png",
    url: "#",
  },
  {
    name: "Bunge",
    logo: "/images/sponsors/bunge.png",
    url: "#",
  },
  {
    name: "Chacraservicios",
    logo: "/images/sponsors/chacraservicios.png",
    url: "#",
  },
  {
    name: "ATANOR",
    logo: "/images/sponsors/atanor.png",
    url: "#",
  },
  {
    name: "Buenos Aires Ciudad",
    logo: "/images/sponsors/buenos-aires-ciudad.png",
    url: "#",
  },
  {
    name: "Bayer",
    logo: "/images/sponsors/bayer.png",
    url: "#",
  },
  {
    name: "Banco Macro",
    logo: "/images/sponsors/banco-macro.png",
    url: "#",
  },
  {
    name: "Bunge",
    logo: "/images/sponsors/bunge.png",
    url: "#",
  },
  {
    name: "Chacraservicios",
    logo: "/images/sponsors/chacraservicios.png",
    url: "#",
  },
];

const sponsorsB: SponsorProps[] = [
  {
    name: "Chacraservicios",
    logo: "/images/sponsors/chacraservicios.png",
    url: "#",
  },
  {
    name: "Banco Macro",
    logo: "/images/sponsors/banco-macro.png",
    url: "#",
  },
  {
    name: "Bunge",
    logo: "/images/sponsors/bunge.png",
    url: "#",
  },
  {
    name: "ATANOR",
    logo: "/images/sponsors/atanor.png",
    url: "#",
  },
  {
    name: "Bayer",
    logo: "/images/sponsors/bayer.png",
    url: "#",
  },
  {
    name: "Buenos Aires Ciudad",
    logo: "/images/sponsors/buenos-aires-ciudad.png",
    url: "#",
  },
  {
    name: "Chacraservicios",
    logo: "/images/sponsors/chacraservicios.png",
    url: "#",
  },
  {
    name: "Banco Macro",
    logo: "/images/sponsors/banco-macro.png",
    url: "#",
  },
  {
    name: "Bunge",
    logo: "/images/sponsors/bunge.png",
    url: "#",
  },
  {
    name: "ATANOR",
    logo: "/images/sponsors/atanor.png",
    url: "#",
  },
  {
    name: "Bayer",
    logo: "/images/sponsors/bayer.png",
    url: "#",
  },
  {
    name: "Buenos Aires Ciudad",
    logo: "/images/sponsors/buenos-aires-ciudad.png",
    url: "#",
  },
];

export function SponsorsSection() {
  return (
    <>
      <section className="relative mx-4 overflow-hidden rounded-[20px] bg-white px-4 py-16 md:m-[30px] md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="mb-16 text-center text-4xl font-medium text-[#2D3D34] md:text-5xl lg:text-6xl">
            Nos acompañan
          </h2>

          {/* Sponsors A */}
          <div className="mb-16">
            <h3 className="mb-4 text-2xl text-[#2D3D34]">PATROCINIOS A</h3>
            <div className="mb-12 h-px w-full bg-gray-300"></div>

            <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {sponsorsA.map((sponsor, i) => (
                <SponsorLogo key={sponsor.name + "-" + i} {...sponsor} />
              ))}
            </div>
          </div>

          {/* Sponsors B */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">PATROCINIOS B</h3>

            <div className="mb-12 h-px w-full bg-gray-300"></div>

            <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {sponsorsB.map((sponsor, i) => (
                <SponsorLogo key={sponsor.name + "-" + i} {...sponsor} />
              ))}
            </div>
          </div>

          {/* Sponsors C */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">PATROCINIOS C</h3>

            <div className="mb-12 h-px w-full bg-gray-300"></div>

            <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {sponsorsB.map((sponsor, i) => (
                <SponsorLogo key={sponsor.name + "-" + i} {...sponsor} />
              ))}
            </div>
          </div>

          {/* Sponsors D */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">PATROCINIOS D</h3>

            <div className="mb-12 h-px w-full bg-gray-300"></div>

            <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {sponsorsB.map((sponsor, i) => (
                <SponsorLogo key={sponsor.name + "-" + i} {...sponsor} />
              ))}
            </div>
          </div>

          {/* institucionales */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">INSTITUCIONALES</h3>

            <div className="mb-12 h-px w-full bg-gray-300"></div>

            <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {sponsorsB.map((sponsor, i) => (
                <SponsorLogo key={sponsor.name + "-" + i} {...sponsor} />
              ))}
            </div>
          </div>

          {/* MEDIOS */}
          <div>
            <h3 className="mb-4 text-2xl text-[#2D3D34]">MEDIOS</h3>

            <div className="mb-12 h-px w-full bg-gray-300"></div>

            <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {sponsorsB.map((sponsor, i) => (
                <SponsorLogo key={sponsor.name + "-" + i} {...sponsor} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mx-4 rounded-[20px] bg-[#3C3C3B] px-6 py-6 xl:px-[58px] xl:py-[27.5px] md:mx-[30px]">
        <div className="mx-auto max-w-[1200px] justify-between gap-[25px] flex flex-col xl:flex-row">
          <div className="flex items-center justify-between gap-4">
            <TextoApoyan />
            <LogoClarin />
            <LogoLaNacion />
          </div>
          <div className="h-12 w-[2.5px] bg-white hidden xl:block shrink-0"></div>
          <hr className="xl:hidden" />
          <div className="flex items-center justify-between gap-4">
            <TextoOrganizan />
            <LogoAapresid />
            <LogoExponenciar />
          </div>
        </div>
      </div>
    </>
  );
}

function SponsorLogo({ name, logo, url }: SponsorProps) {
  return (
    <Link
      href={url}
      className="flex h-20 items-center justify-center p-2 transition-opacity hover:opacity-80"
    >
      <div className="relative h-full w-full">
        <Image
          src={logo || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 250px, 300px"
        />
      </div>
    </Link>
  );
}
