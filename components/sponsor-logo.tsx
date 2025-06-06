import Image from "next/image";

export function SponsorLogo({
  imagePath,
  title,
  height = 74,
  link,
}: {
  title: string | Record<string, string>;
  imagePath: string;
  height?: number;
  link: string | Record<string, string>;
}) {
  // Si el link es un string que parece un JSON, parsear, si no, devolver como string plano
  let parsedLink: any = link;
  if (typeof link === "string") {
    try {
      // Si empieza con { y termina con }, intentamos parsear
      if (link.trim().startsWith("{") && link.trim().endsWith("}")) {
        parsedLink = JSON.parse(link);
      }
    } catch {
      parsedLink = link;
    }
  }

  // Solo parsear si parece un JSON válido
  let parsedTitle: any = title;
  if (typeof title === "string") {
    try {
      if (title.trim().startsWith("{") && title.trim().endsWith("}")) {
        parsedTitle = JSON.parse(title);
      }
    } catch {
      parsedTitle = title;
    }
  }

  const url = parsedLink["es"]?.startsWith("http")
    ? parsedLink["es"]
    : `https://${parsedLink["es"]}`;

  return (
    <div
      // href={url}
      // target="_blank"
      // rel="noopener noreferrer"
      className="flex items-center justify-center p-2 transition-opacity"
    >
      <div className="relative aspect-[260/135]" style={{ height }}>
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={parsedTitle["es"] || ""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 250px, 300px"
        />
      </div>
    </div>
  );
}
