import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GacetillaCard } from "./gacetilla-card";

// Datos de ejemplo para las gacetillas
const gacetillas = [
  {
    id: 1,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 2,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 3,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
     imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
];

export function GacetillasSection() {
  return (
    <section className="mx-auto max-w-[1415px] bg-white px-4 py-16 md:px-8">
      <div>
        <h2 className="mb-4 text-center text-4xl font-bold text-[#2D3D34] md:text-5xl">
          Gacetillas <span className="font-normal">Prensa</span>
        </h2>

        {/* Grid de tarjetas */}
        <div className="mb-16 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gacetillas.map((gacetilla) => (
            <GacetillaCard
              key={gacetilla.id}
              date={gacetilla.date}
              title={gacetilla.title}
              description={gacetilla.description}
              imageUrl={gacetilla.imageUrl}
              href={gacetilla.href}
            />
          ))}
        </div>

        {/* Botón centrado */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center border-b border-[#2D3D34] pb-1 text-xl font-medium text-[#2D3D34] transition-colors hover:border-[#64B33D] hover:text-[#64B33D]"
          >
            Ver todas las gacetillas <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
