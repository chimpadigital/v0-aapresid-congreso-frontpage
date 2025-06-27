import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "lenis/dist/lenis.css";
import Providers from "@/components/providers";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/index";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Congreso Aapresid",
  description: "Congreso Aapresid",
  openGraph: {
    images: ["/images/bandera-aapre.webp"],
  },
  twitter: {
    images: ["/images/bandera-aapre.webp"],
  },
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
    <html lang={locale} className="scroll-smooth">
      {/* Google tag (gtag.js) */}
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-8GYP49MZ9E"}
      />

      <Script id="" strategy="lazyOnload">
        {`    window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8GYP49MZ9E');
          `}
      </Script>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Link
              href={`/${locale}/inscripciones`}
              className="fixed bottom-4 right-4 z-[40] overflow-hidden rounded-full bg-secondary px-[30px] py-[15.5px] font-medium text-[#fff] transition-colors duration-500 before:absolute before:-left-[145%] before:top-[120%] before:z-[-1] before:h-[190%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-primary hover:before:scale-[3] md:hidden"
            >
              <span>{locale === "en" ? "Registration" : "Inscripciones"}</span>
            </Link>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
