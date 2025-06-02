"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBack from "./icons/ArrowBack";

export function BackButton() {
  const router = useRouter();
  const [isInternalReferrer, setIsInternalReferrer] = useState(false);

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer) {
      try {
        const currentHost = window.location.host;
        const referrerHost = new URL(referrer).host;

        if (referrerHost === currentHost) {
          setIsInternalReferrer(true);
        }
      } catch (err) {
        console.warn("Error al analizar referrer:", err);
      }
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInternalReferrer) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleClick} className="mb-[70px] inline-block">
      <span
        // className="rounded-full inline-block border border-white px-[22px] py-[10px]"
        className="relative z-[1] flex w-full items-center justify-center gap-[9px] overflow-hidden rounded-full bg-transparent px-[22px] py-[10px] text-center text-lg font-normal leading-none tracking-wider text-white outline outline-1 outline-white transition-colors duration-500 before:absolute before:-left-[145%] before:top-[190%] before:z-[-1] before:h-[350%] before:w-[160%] before:-rotate-[35deg] before:bg-white before:transition-transform before:duration-500 hover:border-transparent hover:text-primary hover:outline-none hover:before:scale-[3]"
      >
        <ArrowBack />
      </span>
    </button>
  );
}
