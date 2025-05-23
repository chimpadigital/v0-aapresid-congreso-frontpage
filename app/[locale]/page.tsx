import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/01-home/hero";
import { Countdown } from "@/components/01-home/countdown";
import { InscriptionsSection } from "@/components/01-home/inscriptions-section";
import { AboutSection } from "@/components/01-home/about-section";
import { ThemesSection } from "@/components/01-home/themes-section";
import { FaqSection } from "@/components/01-home/faq-section";
import { SponsorsSection } from "@/components/01-home/sponsors-section";
import { Footer } from "@/components/footer";
import DescargaComercial from "@/components/01-home/descarga-comercial";
import { DisertantesDestacados } from "@/components/01-home/disertantes-destacados";
import { FeaturedTalksSection } from "@/components/01-home/charlas-destacadas";
import { GacetillasSection } from "@/components/01-home/gacetilla-section";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <main>
      {/* Header section with video background */}
      <header className="relative mx-4 mt-4 min-h-screen overflow-hidden rounded-[20px] md:mx-[30px] md:mt-[33px]">
        <div className="absolute inset-0 z-0">
          {/* Fallback image while video loads */}
          <div className="absolute inset-0">
            <img
              src="/images/congreso-background.png"
              alt="Background"
              className="h-full w-full object-cover"
            />
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            poster="/images/congreso-background.png" // Fallback image while video loads
          >
            <source src="/videos/congreso-background.mp4" type="video/mp4" />
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fondo%20web%20de%20Congreso%20%281%29-DqCiHxKtI6kwse5662CnUAeFFb51Ui.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta videos HTML5.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 p-4">
          <Hero />
          <Countdown />
        </div>
      </header>

      {/* Inscriptions section */}
      <InscriptionsSection />

      {/* About section */}
      <AboutSection />

      {/* Themes section */}
      <ThemesSection />

      {/* Disertantes destacados section */}
      <DisertantesDestacados />

      {/* Featured talks section */}
      <FeaturedTalksSection />

      {/* Descarga comercial */}
      <DescargaComercial />

      {/* Gacetillas section */}
      <GacetillasSection />

      {/* FAQ section */}
      <FaqSection />

      {/* Sponsors section */}
      <SponsorsSection />

    </main>
  );
}
