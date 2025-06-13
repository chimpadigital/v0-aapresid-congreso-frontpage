"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { LenisRef, ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const lenisRef = React.useRef<LenisRef | null>(null);

  React.useEffect(() => {
    let raf: number;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
      raf = requestAnimationFrame(update);
    }

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef}>
      <HeroUIProvider>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </HeroUIProvider>
    </ReactLenis>
  );
}
