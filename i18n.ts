import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Lista de idiomas permitidos
const locales = ['es', 'en'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale: locale as Locale, // ✅ garantizamos que ya es válido
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
