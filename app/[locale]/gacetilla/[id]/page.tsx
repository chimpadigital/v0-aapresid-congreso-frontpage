"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/GoBackHero";
import { GacetillaDetalle } from "@/lib/types";
import Image from "next/image";
import DownloadIcon from "@/components/icons/DownloadIcon";
import CompartirIcon from "@/components/icons/CompartirIcon";

const DetalleGacetilla = () => {
  const { id, locale } = useParams();
  const [detalle, setDetalle] = useState<GacetillaDetalle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/gacetilla-detalle?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // Utilidades para multilenguaje
  function getField(jsonStr: string, lang: string, fallback = "") {
    try {
      const obj = JSON.parse(jsonStr);
      return obj[lang] || fallback;
    } catch {
      return jsonStr || fallback;
    }
  }

  // Formatear fecha a '15 Feb 2025' (solo la primera letra del mes en mayúscula)
  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const day = d.getDate().toString().padStart(2, "0");
    let month = d.toLocaleString(locale === "en" ? "en-US" : "es-AR", {
      month: "short",
    });
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <section>
      <section
        className={`relative mx-4 mt-4 flex min-h-[378px] rounded-[20px] bg-cover bg-center px-8 pb-[70px] pt-[140px] md:m-[33px] md:mb-[100px] md:p-[70px]`}
        style={{
          backgroundImage: `url('/images/gacetilla/circuito-prensa.webp')`,
        }}
      >
        <BackButton />
      </section>
      {loading ? (
        <div className="py-10 text-center">Cargando...</div>
      ) : detalle ? (
        <article className="mx-auto max-w-[904px] px-4 py-8">
          <figure className="relative mb-8 inline-block w-full md:mb-20">
            <img
              src={detalle.image || "/images/gacetilla/default-image.webp"}
              alt={getField(detalle.title, locale as string)}
              className="mb-6 w-full rounded-[10px] object-contain object-left"
            />
          </figure>
          <h1 className="mb-10 text-3xl font-bold text-primary md:mb-[69px] md:text-5xl">
            {getField(detalle.title, locale as string)}
          </h1>
          <div className="mb-4 w-fit rounded-[5px] bg-[#64B33D40] px-[10px] py-1 text-sm text-primary">
            {formatDate(detalle.date)}
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html:
                (locale === "en" ? detalle.content_en : detalle.content_es) ||
                getField(detalle.excerpt, locale as string),
            }}
          />
        </article>
      ) : (
        <div className="py-10 text-center">No se encontró la gacetilla.</div>
      )}
      <div className="mx-auto flex max-w-5xl justify-end gap-5 px-4 py-8">
        <a
          href="/TARIFARIO_CONGRESO_2025.pdf"
          download
          target="_blank"
          className="relative z-[1] flex w-[min(235px,100%)] items-center gap-3 overflow-hidden rounded-full border border-primary bg-white fill-primary px-[15px] py-[15.5px] text-lg tracking-wider text-primary transition-all duration-500 before:absolute before:-left-[145%] before:top-[160%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent justify-center hover:text-white hover:before:scale-[3]"
        >
          <span>Descargar gacetilla</span>
          <DownloadIcon />
        </a>
        <button className="relative z-[1] flex w-[min(235px,100%)] items-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[145%] before:top-[160%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[3] justify-center">
          <span>Compartir</span>
          <CompartirIcon />
        </button>
      </div>
    </section>
  );
};

export default DetalleGacetilla;
