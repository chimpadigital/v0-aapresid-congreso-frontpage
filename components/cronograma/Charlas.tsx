"use client";
import React, { useEffect, useState } from "react";
import { EventsApiResponse } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import SkeletonCharlaCard from "./SkeletonCharlaCard";
import CharlaCardMobile from "./CharlaCardMobile";
import CharlaCardDesk from "./CharlaCardDesk";
import { useIsMobile } from "@/hooks/use-mobile";

const Charlas = () => {
  const searchParams = useSearchParams();

  const [charlas, setCharlas] = useState<EventsApiResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const locale = useLocale();

  useEffect(() => {
    const query = searchParams.toString();
    const url = `/api/charlas${query ? `?${query}` : ""}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener charlas");
        return res.json();
      })
      .then((data) => {
        setCharlas(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchParams]);

  const isMobile = useIsMobile(500);

  if (loading)
    return (
      <div className="mx-auto flex w-full max-w-[1163px] flex-col gap-[50px]">
        <SkeletonCharlaCard />
        <SkeletonCharlaCard />
        <SkeletonCharlaCard />
      </div>
    );
  if (error)
    return (
      <div className="mx-auto flex w-full max-w-[1163px] flex-col gap-[50px]">
        Error: {error}
      </div>
    );

  return (
    <div className="mx-auto flex w-full max-w-[1163px] flex-col gap-[50px]">
      {charlas?.data?.length === 0 ? (
        <div className="w-full py-8 text-center text-gray-500">
          No hay charlas disponibles para los filtros seleccionados.
        </div>
      ) : (
        charlas?.data?.map((charla) =>
          isMobile ? (
            <CharlaCardMobile charla={charla} locale={locale} key={charla.id} />
          ) : (
            <CharlaCardDesk charla={charla} locale={locale} key={charla.id} />
          ),
        )
      )}
    </div>
  );
};

export default Charlas;
