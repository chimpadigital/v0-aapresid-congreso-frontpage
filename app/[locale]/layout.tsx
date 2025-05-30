import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "lenis/dist/lenis.css";
import Providers from "@/components/providers";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Congreso Aapresid",
  description: "Congreso Aapresid",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <GoogleTagManager
        gtmId="GTM-PLJHK8JX"
      />
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            {/* <a
              href="/inscripciones"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 z-[10001] overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] font-medium text-[#fff] transition-colors duration-500 before:absolute before:-left-[145%] before:top-[120%] before:z-[-1] before:h-[190%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-primary hover:before:scale-[3] md:hidden"
            >
              <span>Inscripciones</span>
            </a> */}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
