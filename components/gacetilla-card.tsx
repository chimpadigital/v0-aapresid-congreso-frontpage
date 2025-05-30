import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface GacetillaCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export function GacetillaCard({
  date,
  title,
  description,
  imageUrl,
  href,
}: GacetillaCardProps) {
  const locale = useLocale();

  // Formatea la fecha a '15 MAY 2025' o '15 MAY 2025' en inglés
  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    // Forzar a tratar la fecha como UTC para evitar desfase por zona horaria local
    const d = new Date(dateStr + "T00:00:00Z");
    if (isNaN(d.getTime())) return dateStr;
    const day = d.getUTCDate().toString().padStart(2, "0");
    const month = d
      .toLocaleString(locale === "en" ? "en-US" : "es-AR", {
        month: "short",
        timeZone: "UTC",
      })
      .toUpperCase();
    const year = d.getUTCFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <div className="flex h-full w-[min(100%,413px)] flex-col overflow-hidden rounded-[20px] bg-white pt-[26px] px-[26px] shadow-[0px_4px_4px_0px_#0000001A] transition-shadow hover:shadow-md">
      <div className="relative h-[240px] overflow-hidden rounded-2xl py-[29px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col pb-[33px] pt-[28px]">
        <div className="mb-4 inline-block w-fit rounded-[5px] bg-[#64B33D1A] px-3 py-1 text-xs text-primary">
          {formatDate(date)}
        </div>
        <h3 className="mb-[16px] text-[18px] font-bold leading-tight tracking-wider text-primary">
          {title}
        </h3>
        <p className="truncate-4 mb-6 leading-tight tracking-wider text-parabraph">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            href={href}
            className="my-auto inline-flex w-fit items-center border-b-2 border-primary text-primary transition-colors hover:font-medium"
          >
            {locale === "en" ? "Read more" : "Leer más"}{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
