"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { LenisRef, ReactLenis, useLenis } from "lenis/react";
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
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ReactLenis>
  );
}
