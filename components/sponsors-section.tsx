import Image from "next/image"
import Link from "next/link"

interface SponsorProps {
  name: string
  logo: string
  url: string
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
]

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
]

export function SponsorsSection() {
  return (
    <section className="relative m-[30px] bg-white rounded-[20px] overflow-hidden py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3D34] text-center mb-16">Nos acompañan</h2>

        {/* Sponsors A */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-[#2D3D34] mb-4">PATROCINIOS A</h3>
          <div className="h-px w-full bg-gray-300 mb-12"></div>

          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {sponsorsA.map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>

          {/* Mobile layout - two rows */}
          <div className="md:hidden grid grid-cols-2 gap-8 mb-8">
            {sponsorsA.slice(0, 4).map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-8 mb-12">
            {sponsorsA.slice(4).map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>

          {/* Second row for desktop */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8">
            {sponsorsA.map((sponsor) => (
              <SponsorLogo key={`second-${sponsor.name}`} {...sponsor} />
            ))}
          </div>
        </div>

        {/* Sponsors B */}
        <div>
          <h3 className="text-xl font-medium text-[#2D3D34] mb-4">PATROCINIOS B</h3>
          <div className="h-px w-full bg-gray-300 mb-12"></div>

          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {sponsorsB.map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>

          {/* Mobile layout - two rows */}
          <div className="md:hidden grid grid-cols-2 gap-8 mb-8">
            {sponsorsB.slice(0, 4).map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-8 mb-12">
            {sponsorsB.slice(4).map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} />
            ))}
          </div>

          {/* Second row for desktop */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8">
            {sponsorsB.map((sponsor) => (
              <SponsorLogo key={`second-${sponsor.name}`} {...sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SponsorLogo({ name, logo, url }: SponsorProps) {
  return (
    <Link href={url} className="flex items-center justify-center h-20 p-2 hover:opacity-80 transition-opacity">
      <div className="relative w-full h-full">
        <Image
          src={logo || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 150px, 200px"
        />
      </div>
    </Link>
  )
}
