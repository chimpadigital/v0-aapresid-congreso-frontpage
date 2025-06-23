import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/home/hero";
import { Countdown } from "@/components/home/countdown";
import { InscriptionsSection } from "@/components/inscriptions-section";
import { AboutSection } from "@/components/home/about-section";
import { ThemesSection } from "@/components/home/themes-section";
import { FaqSection } from "@/components/home/faq-section";
import { SponsorsSection } from "@/components/home/sponsors-section";
import { Footer } from "@/components/footer";
import DescargaComercial from "@/components/home/descarga-comercial";
import { DisertantesDestacados } from "@/components/home/disertantes-destacados";
import { FeaturedTalksSection } from "@/components/home/charlas-destacadas";
import { GacetillasSection } from "@/components/home/gacetilla-section";
import ConoceElCampo from "@/components/home/descubra-el-campo";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <main>
      {/* Header section with video background */}
      <header className="relative mx-4 mt-4 min-h-screen overflow-hidden rounded-[20px] md:mx-[30px] md:mt-[33px]">
        <div className="absolute inset-0 z-0">
          {/* Fallback image while video loads */}
          <div className="absolute inset-0">
            <img
              src="/images/home/poster-hero.webp"
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
            poster="/images/home/poster-hero.webp" // Fallback image while video loads
          >
            <source src="/videos/video_home_nuevov3.mp4" type="video/mp4" />
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
      {/* Descarga comercial */}
      <DescargaComercial />

      {/* Inscriptions section */}
      <InscriptionsSection />

      {/* About section */}
      <AboutSection />

      {/* Themes section */}
      <ThemesSection />

      {/* Disertantes destacados section */}
      {/* <DisertantesDestacados /> */}

      {/* Featured talks section */}
      <FeaturedTalksSection />

      {/* Descubra el campo - banner */}
      <ConoceElCampo />

      {/* Gacetillas section */}
      <GacetillasSection />

      {/* FAQ section */}
      <FaqSection />

      {/* Sponsors section */}
      <SponsorsSection />
    </main>
  );
}
