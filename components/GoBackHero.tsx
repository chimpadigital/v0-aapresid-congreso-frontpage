"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBack from "./icons/ArrowBack";

export function BackButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Si hay una navegación interna previa
    if (window.history.length > 2) {
      setCanGoBack(true);
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (canGoBack) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleClick} className="mb-[70px] inline-block">
      <span
        className="relative z-[1] flex w-full items-center justify-center gap-[9px] overflow-hidden rounded-full bg-transparent px-[22px] py-[10px] text-center text-lg font-normal leading-none tracking-wider text-white outline outline-1 outline-white transition-colors duration-500 before:absolute before:-left-[145%] before:top-[190%] before:z-[-1] before:h-[350%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:outline-none hover:before:scale-[3]"
      >
        <ArrowBack />
      </span>
    </button>
  );
}
