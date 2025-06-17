"use client";
import React, { useEffect, useState } from "react";
import { Event } from "@/lib/types";

const Charlas = () => {
  const [charlas, setCharlas] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/charlas")
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
  }, []);

  if (loading) return <div>Cargando charlas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {charlas.map((charla) => (
        <div key={charla.id} className="rounded-lg border bg-white p-4 shadow">
          <h3 className="mb-2 text-lg font-bold">
            {charla.multilingual_title?.es || charla.multilingual_title?.en}
          </h3>
          <p className="mb-1 text-sm text-gray-600">
            {charla.date} {charla.start_time} - {charla.end_time}
          </p>
          <p className="mb-2 text-xs text-gray-500">
            Sala: {charla.Room?.name}
          </p>
          <p className="text-xs text-gray-500">
            Moderador: {charla.Moderator?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Charlas;
