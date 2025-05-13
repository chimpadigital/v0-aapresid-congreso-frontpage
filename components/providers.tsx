"use client";

import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
