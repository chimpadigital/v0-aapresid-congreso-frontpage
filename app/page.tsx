import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { InscriptionsSection } from "@/components/inscriptions-section";
import { AboutSection } from "@/components/about-section";
import { ThemesSection } from "@/components/themes-section";
import { FaqSection } from "@/components/faq-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      {/* Header section with video background */}
      <header className="relative mx-4 mt-4 min-h-screen overflow-hidden rounded-[20px] md:mx-[30px] md:mt-[30px]">
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
          <Navbar />
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

      {/* FAQ section */}
      <FaqSection />

      {/* Sponsors section */}
      <SponsorsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
