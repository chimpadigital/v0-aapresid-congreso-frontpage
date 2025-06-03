import { Suspense } from "react";
import { BackButton } from "@/components/GoBackHero";
import DetalleGacetillaContent from "@/components/04-gacetilla/gacetilla-detalle";
import GacetillasSimilares from "@/components/04-gacetilla/gacetillas-similares";

interface Props {
  params: { id: string; locale: string };
}

export default async function DetalleGacetilla({ params }: Props) {
  const { id, locale } = params;
  return (
    <>
      <section
        className={`relative mx-4 mt-4 flex min-h-[378px] rounded-[20px] bg-cover bg-center px-8 pb-[70px] pt-[140px] md:m-[33px] md:mb-10 md:p-[70px]`}
        style={{
          backgroundImage: `url('/images/gacetilla/circuito-prensa.webp')`,
        }}
      >
        <BackButton />
      </section>
      <Suspense fallback={<div className="py-10 text-center">Cargando...</div>}>
        <DetalleGacetillaContent id={id} locale={locale} />
      </Suspense>
      <GacetillasSimilares params={params} />
    </>
  );
}
