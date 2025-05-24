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
    <button
      onClick={handleClick}
      className="mb-[70px] inline-block"
    >
      <span className="rounded-full inline-block border border-white px-[22px] py-[10px]">
        <ArrowBack />
      </span>
    </button>
  );
}
