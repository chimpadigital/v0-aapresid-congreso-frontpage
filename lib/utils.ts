import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMultilingualField(
  multilingual: { es?: string; en?: string },
  locale: string,
): string {
  if (locale === "en") {
    return multilingual.en && multilingual.en.trim() !== ""
      ? multilingual.en
      : multilingual.es || "";
  } else {
    return multilingual.es && multilingual.es.trim() !== ""
      ? multilingual.es
      : multilingual.en || "";
  }
}