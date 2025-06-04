import { GacetillaDetalle } from "@/lib/types";
import DownloadIcon from "@/components/icons/DownloadIcon";
import ModalCompartir from "./modal-compartir";

interface Props {
  id: string;
  locale: string;
}

async function getDetalle(id: string): Promise<GacetillaDetalle | null> {
  const res = await fetch(
    `${process.env.API_BASE_URL || "https://api.congreso.v1.franco.in.net"}/api/press-release/${id}`,
  );
  if (!res.ok) return null;
  return res.json();
}

function getField(jsonStr: string, lang: string, fallback = "") {
  try {
    const obj = JSON.parse(jsonStr);
    // Si el idioma pedido existe y no está vacío, lo devolvemos
    if (obj[lang] && obj[lang].trim() !== "") return obj[lang];
    // Si no, devolvemos el otro idioma si existe y no está vacío
    const otherLang = lang === "en" ? "es" : "en";
    if (obj[otherLang] && obj[otherLang].trim() !== "") return obj[otherLang];
    // Si no, devolvemos el fallback
    return fallback;
  } catch {
    return jsonStr || fallback;
  }
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
  const { id, locale } = props;

  const detalle = await getDetalle(id);
  if (!detalle) {
    return (
      <div className="py-10 text-center">No se encontró la gacetilla.</div>
    );
  }

  // Obtener la URL absoluta actual (solo server-side)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const link = `${baseUrl}/${locale}/gacetilla/${id}`;

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
        <a
          href={detalle.file || "#"}
          download
          target="_blank"
          // className="relative z-[1] flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-primary bg-white fill-primary px-[15px] py-[15.5px] text-lg tracking-wider text-primary transition-all duration-500 before:absolute before:-left-[160%] before:top-[600%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:text-white hover:before:scale-[5] md:w-[min(235px,100%)]"
          className="relative z-[1] flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-primary bg-white px-[30px] py-[15.5px] text-lg tracking-wider text-primary transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-primary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[6] md:w-[min(235px,100%)] md:before:-left-[145%] md:before:top-[160%] hover:text-white md:hover:before:scale-[3]"
        >
          <span>Descargar gacetilla</span>
          <DownloadIcon />
        </a>
        <ModalCompartir link={link} />
      </div>
    </section>
  );
}
