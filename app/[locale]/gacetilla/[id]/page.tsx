import { Suspense } from "react";
import { BackButton } from "@/components/GoBackHero";
import DetalleGacetillaContent from "@/components/04-gacetilla/gacetilla-detalle";
import GacetillasSimilares from "@/components/04-gacetilla/gacetillas-similares";
import HeroGacetilla from "@/components/04-gacetilla/hero-gacetilla";

interface Props {
  params: { id: string; locale: string };
}

export default async function DetalleGacetilla({ params }: Props) {
  const { id, locale } = params;
  return (
    <>
      <HeroGacetilla showTitle={false} />
      <Suspense fallback={<div className="py-10 text-center">Cargando...</div>}>
        <DetalleGacetillaContent id={id} locale={locale} />
      </Suspense>
      <GacetillasSimilares params={params} />
    </>
  );
}
