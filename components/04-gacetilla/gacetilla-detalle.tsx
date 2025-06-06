import { GacetillaDetalle } from "@/lib/types";
import DownloadIcon from "@/components/icons/DownloadIcon";
import ModalCompartir from "./modal-compartir";
import { getTranslations } from "next-intl/server";
import DescargaGacetilla from "./descarga-gacetilla";

interface Props {
  id: string;
  locale: string;
  detalle: GacetillaDetalle | null;
}

export function getField(jsonOrObj: any, lang: string, fallback = "") {
  let obj: any = {};
  if (typeof jsonOrObj === "string") {
    try {
      obj = JSON.parse(jsonOrObj);
    } catch {
      return jsonOrObj || fallback;
    }
  } else if (typeof jsonOrObj === "object" && jsonOrObj !== null) {
    obj = jsonOrObj;
  } else {
    return fallback;
  }
  if (obj[lang] && obj[lang].trim() !== "") return obj[lang];
  const otherLang = lang === "en" ? "es" : "en";
  if (obj[otherLang] && obj[otherLang].trim() !== "") return obj[otherLang];
  return fallback;
}

function formatDate(dateStr: string, locale: string) {
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

export default async function DetalleGacetillaContent(props: Props) {
  // Esperar props.params si es Promise (por compatibilidad con Next.js)
  const { id, locale, detalle } = props;

  if (!detalle) {
    return (
      <div className="py-10 text-center">No se encontró la gacetilla.</div>
    );
  }

  // Obtener la URL absoluta actual (solo server-side)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const link = `${baseUrl}/${locale}/gacetilla/${id}`;

  const t = await getTranslations("gacetilla-page");

  return (
    <section className="">
      <article className="mx-auto max-w-[904px] px-4 py-8">
        <h1 className="mb-10 text-3xl font-bold text-primary md:mb-[69px] md:text-5xl">
          {getField(detalle.title, locale)}
        </h1>
        <div className="mb-4 w-fit rounded-[5px] bg-[#64B33D40] px-[10px] py-1 text-sm text-primary">
          {formatDate(detalle.date, locale)}
        </div>
        <div className="pb-10 text-2xl tracking-wider text-[#736D6D]">
          {getField(detalle.excerpt, locale)}
        </div>
        <figure className="relative mb-8 inline-block w-full md:mb-20">
          <img
            src={detalle.image || "/images/gacetilla/default-image.webp"}
            alt={getField(detalle.title, locale)}
            className="mb-6 w-full rounded-[10px] object-contain object-left"
          />
        </figure>
        <div
          className="prose gacetilla-detalle"
          dangerouslySetInnerHTML={{
            __html:
              (locale === "en"
                ? detalle.content_en && detalle.content_en.trim() !== ""
                  ? detalle.content_en
                  : detalle.content_es
                : detalle.content_es && detalle.content_es.trim() !== ""
                  ? detalle.content_es
                  : detalle.content_en) || getField(detalle.excerpt, locale),
          }}
        />
      </article>
      <div className="mx-auto flex max-w-5xl flex-wrap justify-end gap-5 px-4 py-8">
        {detalle.file ? <DescargaGacetilla file={detalle.file} /> : ""}

        <ModalCompartir link={link} />
      </div>
    </section>
  );
}
