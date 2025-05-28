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
  const parsedLink = typeof link === "string" ? JSON.parse(link || "{}") : link;
  const parsedTitle =
    typeof title === "string" ? JSON.parse(title || "{}") : title;

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
