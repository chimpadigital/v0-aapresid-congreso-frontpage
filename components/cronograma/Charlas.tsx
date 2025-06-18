"use client";
import React, { useEffect, useState } from "react";
import { Event } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import MapPin from "../icons/MapPin";
import { Code, Globe, Languages, Mic, Target, Users2 } from "lucide-react";

const Charlas = () => {
  const searchParams = useSearchParams();

  const [charlas, setCharlas] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = searchParams.toString();
    const url = `/api/charlas${query ? `?${query}` : ""}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener charlas");
        return res.json();
      })
      .then((data) => {
        setCharlas(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchParams]);

  if (loading) return <div>Cargando charlas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex w-full flex-col gap-10 mx-auto max-w-[1163px]">
      {charlas.map((charla) => (
        <div className="mx-auto flex w-full flex-col gap-2.5 overflow-hidden rounded-lg bg-white shadow-lg lg:flex-row">
          {/* Left Section - Program Details */}
          <div className="flex flex-col lg:w-1/3">
            {/* Date and Time Header */}
            <div className="bg-[#2d3d34] p-6 text-white">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{charla.date}</h2>
                <span className="text-lg font-medium">{charla.end_time}</span>
              </div>
            </div>

            {/* Program Details with white background */}
            <div className="flex-1 space-y-4 bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin />
                <span className="text-sm leading-relaxed text-gray-700">
                  {charla.Room.name}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Code className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                <span className="text-sm leading-relaxed text-gray-700">
                  {charla.code}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ef7b80]" />
                <span className="text-sm leading-relaxed text-gray-700">
                  {charla.Theme.name}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                <span className="text-sm leading-relaxed text-gray-700">
                  {charla.date}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Languages className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                <span className="text-sm leading-relaxed text-gray-700">
                  {charla.languages}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Session Details */}
          <div className="flex flex-col justify-between bg-[#2d3d34] p-6 text-white lg:w-2/3">
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-xl font-bold leading-tight lg:text-2xl">
                {charla.multilingual_title.en}
              </h1>
            </div>

            {/* Speakers and Moderator */}
            <div className="mb-6 flex-1 space-y-4">
              <div className="flex items-start gap-3">
                <Users2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300" />
                <div>
                  <span className="text-sm font-semibold">Disertantes: </span>
                  <span className="text-sm">
                    {charla.Speakers.map((speaker) => speaker.name).join(", ")}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mic className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300" />
                <div>
                  <span className="text-sm font-semibold">Moderador: </span>
                  <span className="text-sm">{charla.Moderator.name}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              {/* <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#2d3d34] transition-colors"
            onClick={onWatchVideo}
          >
            Ver video
          </Button>
          <Button className="bg-[#64B33D] hover:bg-[#61bc4f] text-white transition-colors" onClick={onViewDetails}>
            Ver más detalles
          </Button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Charlas;
