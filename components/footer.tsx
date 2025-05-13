"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import RedLinkedin from "./icons/RedLinkedin";
import RedFacebook from "./icons/RedFacebook";
import RedX from "./icons/RedX";
import RedYoutube from "./icons/RedYoutube";
import { useEffect, useRef } from "react";
import LogoAapresid from "@/public/images/logo-congreso.svg";
import LogoExpoagro from "@/public/images/logo-expoagro.svg";
import LogoCodigo from "@/public/images/logo-codigo.svg";
import RedInstagram from "./icons/RedInstagram";
import { useTranslations } from "next-intl";
import RedTikTok from "./icons/RedTikTok";

export function Footer() {
  const t = useTranslations("footer");

  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video plays on iOS and other mobile devices
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to attempt playing the video
    const attemptPlay = () => {
      video.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
        // We'll try again when user interacts with the page
        document.addEventListener("touchstart", handleUserInteraction, {
          once: true,
        });
        document.addEventListener("click", handleUserInteraction, {
          once: true,
        });
      });
    };

    // Handle user interaction to play video
    const handleUserInteraction = () => {
      video
        .play()
        .catch((error) => console.log("Still couldn't play video:", error));
    };

    // Try to play immediately
    attemptPlay();

    // Clean up event listeners
    return () => {
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <footer className="relative mx-4 mb-8 mt-6 overflow-hidden rounded-[20px] bg-[url('/images/trama-background.png')] bg-cover bg-center md:mx-[33px] md:mt-[48px]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {/* Video element with multiple sources for better compatibility */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/trama-background.png"
        >
          {/* Local source */}
          <source src="/videos/video-footer.mp4" type="video/mp4" />

          {/* External CDN source as backup */}
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-footer-GWevhFIRBjrSUaUN9tzNZJvdMX3aEN.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#2D3D34]/70" />
      </div>

      <div className="relative p-8 md:px-12 md:pb-12 md:pt-[85px]">
        {/* Top section */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          {/* Left - Logos */}
          <div className="flex-[2]">
            <div className="flex w-fit flex-wrap gap-4">
              <Image
                src={LogoAapresid}
                alt="Congreso Aapresid"
                className="h-full w-auto object-contain"
              />
              <div className="my-auto hidden h-12 w-px translate-y-[5px] bg-white xs:block"></div>
              <div className="flex items-center">
                <Image
                  src={LogoExpoagro}
                  alt="Código Abierto"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="my-auto hidden h-12 w-px translate-y-[5px] bg-white xs:block"></div>
              <div className="flex items-center">
                <Image
                  src={LogoCodigo}
                  alt="Código Abierto"
                  className="relative bottom-[6px] mx-auto h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right - Date and button */}
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="text-white">
              <div className="text-xl font-medium leading-[1.30rem]">
                {t("fecha")}
              </div>
              <div className="text-xl font-light">{t("lugar")}</div>
            </div>

            {/* INSCRIPCIONES */}
            {/* <Link
              href="/inscripciones"
              className="relative z-[1] overflow-hidden rounded-full bg-secondary px-[60.5px] py-[16px] text-lg font-light text-white transition-colors duration-500 before:absolute before:-left-[150%] before:top-[120%] before:z-[-1] before:h-[250%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:text-primary hover:before:scale-[3] tracking-wider"
            >
              {t("inscripciones")}
            </Link> */}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 mt-12 h-px w-full bg-white"></div>

        {/* Bottom section */}
        <div className="flex h-full flex-col items-start justify-between gap-6 md:flex-row">
          {/* Left - Aapresid */}
          <div className="flex min-h-[340px] flex-[2] flex-col items-stretch justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/images/logo-aapresid.svg"
                  alt="Aapresid"
                  height={51}
                  width={248}
                />
              </div>

              <a
                href="https://aapresid.org.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-table pl-3 text-4xl font-medium text-white"
              >
                aapresid.org.ar
              </a>

              <div className="mb-4 pl-3 text-lg font-light leading-[1.30rem] tracking-widest text-white">
                <div>Tel: +54 (341) 4260745/46</div>
                <div>Dorrego 1639, S2000 Rosario,</div>
                <div>Santa Fe.</div>
              </div>

              <div className="pl-3 text-lg font-light leading-[1.30rem] tracking-widest text-white">
                <div>{t("aapresid_comunidad1")}</div>
                <div>{t("aapresid_comunidad2")}</div>
                <div className="font-normal">{t("aapresid_comunidad3")}</div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-auto flex gap-4">
              <SocialIcon
                icon={<RedLinkedin />}
                href="https://www.linkedin.com/company/aapresid/"
              />
              <SocialIcon
                icon={<RedInstagram />}
                href="https://www.instagram.com/aapresid/"
              />
              <SocialIcon
                icon={<RedFacebook />}
                href="https://www.facebook.com/aapresidargentina/?ref=br_rs"
              />
              <SocialIcon icon={<RedX />} href="https://x.com/aapresid" />
              <SocialIcon
                icon={<RedYoutube />}
                href="https://www.youtube.com/@aapresid"
              />
            </div>
          </div>

          {/* Right - Expoagro */}
          <div className="flex min-h-[340px] flex-1 flex-col items-stretch justify-between">
            {" "}
            <div>
              <div className="mb-4 flex flex-col items-start">
                <Image
                  src="/images/logo-expoagro.svg"
                  alt="Expoagro"
                  width={126}
                  height={97}
                />
              </div>

              <a
                href="https://expoagro.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 inline-table text-4xl font-medium text-white"
              >
                expoagro.com.ar
              </a>

              <div className="mb-6 font-light leading-[1.30rem] tracking-widest text-white">
                <div>Tel: 011 5128 9800/05</div>
                <div>Av. Corrientes 1302 5 Piso</div>
                <div>(C1043ABN) CABA</div>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex gap-4 text-lg tracking-wider">
              <SocialIcon
                icon={<RedInstagram />}
                href="https://www.instagram.com/expoagrocom/"
              />
              <SocialIcon
                icon={<RedLinkedin />}
                href="https://www.linkedin.com/company/expoagroargentina/"
              />
              <SocialIcon
                icon={<RedFacebook />}
                href="https://www.facebook.com/ExpoagroArgentina/"
              />
              <SocialIcon icon={<RedX />} href="https://x.com/Expoagrocom" />
              <SocialIcon
                icon={<RedYoutube />}
                href="https://www.youtube.com/channel/UCL7FxmRKzatPxn4YIYNuN6Q"
              />
              {/* <SocialIcon icon={<RedTikTok />} href="https://www.tiktok.com" /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full tracking-wider text-[#2D3D34] transition-colors"
    >
      {icon}
    </a>
  );
}
