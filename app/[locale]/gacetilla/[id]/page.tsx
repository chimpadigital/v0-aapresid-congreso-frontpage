import { Suspense } from "react";
import { BackButton } from "@/components/GoBackHero";
import DetalleGacetillaContent, {
  getField,
} from "@/components/gacetilla/gacetilla-detalle";
import GacetillasSimilares from "@/components/gacetilla/gacetillas-similares";
import { GacetillaDetalle } from "@/lib/types";
import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";

interface Props {
  params: { id: string; locale: string };
}

async function getDetalle(id: string): Promise<GacetillaDetalle | null> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://api-congreso.aapresid.org.ar"}/api/press-release/${id}`,
  );
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const { id, locale } = params;
  const detalle = await getDetalle(id);
  if (!detalle) return {};

  const title = getField(detalle.title, locale);
  const description = getField(detalle.excerpt, locale);
  const image = detalle.image || "/images/bandera-aapre.webp";
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://congreso.aapresid.org.ar";
  const url = `${baseUrl}/${locale}/gacetilla/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function DetalleGacetilla({ params }: Props) {
  const { id, locale } = params;

  const detalle = await getDetalle(id);
  return (
    <>
      <HeroSection
        backgroundImage="/images/gacetilla/circuito-prensa.webp"
        title1={locale === "es" ? "Gacetillas" : "Press releases"}
        compact
      />
      <Suspense fallback={<div className="py-10 text-center">Cargando...</div>}>
        <DetalleGacetillaContent id={id} locale={locale} detalle={detalle} />
      </Suspense>
      <GacetillasSimilares currentId={id} />
    </>
  );
}
