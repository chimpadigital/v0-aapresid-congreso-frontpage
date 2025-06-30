import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMultilingualField(
  multilingual: { es?: string; en?: string } | string,
  locale: string,
): string {
  let value: { es?: string; en?: string } = { es: '', en: '' };

  if (typeof multilingual === 'string') {
    try {
      value = JSON.parse(multilingual);
    } catch {
      // Si no es un JSON válido, devolvemos el string tal cual
      return multilingual;
    }
  } else {
    value = multilingual;
  }

  if (locale === "en") {
    return value.en && value.en.trim() !== ""
      ? value.en
      : value.es || "";
  } else {
    return value.es && value.es.trim() !== ""
      ? value.es
      : value.en || "";
  }
}
