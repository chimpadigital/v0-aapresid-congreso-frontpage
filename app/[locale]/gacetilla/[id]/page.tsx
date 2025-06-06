import { Suspense } from "react";
import { BackButton } from "@/components/GoBackHero";
import DetalleGacetillaContent, {
  getField,
} from "@/components/04-gacetilla/gacetilla-detalle";
import GacetillasSimilares from "@/components/04-gacetilla/gacetillas-similares";
import HeroGacetilla from "@/components/04-gacetilla/hero-gacetilla";
import { GacetillaDetalle } from "@/lib/types";
import { Metadata } from "next";

interface Props {
  params: { id: string; locale: string };
}

interface PropsMeta {
  id: string;
  locale: string;
  detalle: GacetillaDetalle;
}

async function getDetalle(id: string): Promise<GacetillaDetalle | null> {
  const res = await fetch(
    `${process.env.API_BASE_URL || "https://api.congreso.v1.franco.in.net"}/api/press-release/${id}`,
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
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
      <HeroGacetilla />
      <Suspense fallback={<div className="py-10 text-center">Cargando...</div>}>
        <DetalleGacetillaContent id={id} locale={locale} detalle={detalle} />
      </Suspense>
      <GacetillasSimilares />
    </>
  );
}
