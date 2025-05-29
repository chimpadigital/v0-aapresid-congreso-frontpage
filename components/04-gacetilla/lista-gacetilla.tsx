"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { GacetillaCard } from "../gacetilla-card";
import LupaIcon from "../icons/LupaIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "../icons/CloseIcon";
import { Paginacion } from "./paginacion";

const allGacetillas = [
  {
    id: 1,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 2,
    date: "14 FEB 2025",
    title: "Sistemas integrados de producción agrícola sostenible",
    description:
      "Nuevas metodologías para optimizar la producción mientras se mantiene el equilibrio ecológico. Descubre las últimas innovaciones en agricultura regenerativa...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 3,
    date: "13 FEB 2025",
    title: "Innovación tecnológica en el manejo de cultivos",
    description:
      "La tecnología está revolucionando la forma en que gestionamos nuestros cultivos. Desde drones hasta sensores IoT, conoce las herramientas del futuro...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  // Agregar más elementos para demostrar la paginación
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    date: `${15 - (i % 15)} FEB 2025`,
    title: `Artículo ${i + 4}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  })),
];

interface GacetillasWithPaginationProps {
  itemsPerPage?: number;
}

const ListaGacetilla = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredGacetillas, setFilteredGacetillas] = useState(allGacetillas);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const itemsPerPage = 6;

  // Filtrar gacetillas basado en búsqueda y fecha
  useEffect(() => {
    let filtered = allGacetillas;

    if (searchTerm) {
      filtered = filtered.filter(
        (gacetilla) =>
          gacetilla.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          gacetilla.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedDate) {
      // Aquí podrías implementar filtrado por fecha real
      // Por ahora, solo como ejemplo
      filtered = filtered.filter((gacetilla) =>
        gacetilla.date.includes("15 FEB"),
      );
    }

    setFilteredGacetillas(filtered);
    setCurrentPage(1); // Resetear a la primera página cuando se filtra
  }, [searchTerm, selectedDate]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredGacetillas.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGacetillas = filteredGacetillas.slice(startIndex, endIndex);

  const handleSearch = (term: string, date: string) => {
    setSearchTerm(term);
    setSelectedDate(date);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedDate("");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba cuando cambia la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ExampleCustomInput = forwardRef<
    HTMLButtonElement,
    { value: string; onClick: () => void; className: string }
  >(({ value, onClick, className }, ref) => (
    <button className={className} type="button" onClick={onClick} ref={ref}>
      <div className="h-[18px] w-[18px]">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>{" "}
      </div>
      <p className="relative top-px leading-none tracking-wider">
        {value ? value : "Día"}
      </p>
      {value && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            setSelectedDate(null);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-primary"
        >
          x
        </span>
      )}
    </button>
  ));

  return (
    <section className="mx-auto max-w-[1390px] px-4 pt-10 md:pt-0 md:px-[33px] 2xl:px-0">
      <h2 className="mb-8 text-5xl tracking-wide text-primary">Gacetillas</h2>
      <form className="mb-[91px] flex flex-col gap-[30px]">
        <label className="border-b-px flex w-full max-w-[304px] items-center gap-2 border-b border-b-primary focus-within:border-b-accent">
          <LupaIcon />
          <input
            placeholder="Palabra clave"
            className="w-full px-2 py-1 text-lg tracking-wider placeholder-primary focus-visible:outline-none"
          />
        </label>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Día"
          customInput={
            <ExampleCustomInput
              value={selectedDate ? selectedDate.toLocaleDateString() : ""}
              onClick={() => {}}
              className="flex w-[min(100%,304px)] items-center gap-3 border-b border-b-primary py-2 focus-within:border-b-accent"
            />
          }
        />

        <button className="relative z-[1] w-fit flex items-center gap-[10px] overflow-hidden rounded-full bg-accent px-[40px] py-[14px] text-lg font-light tracking-wider text-white transition-colors duration-500 before:absolute before:-left-[150%] before:top-[120%] before:z-[-1] before:h-[250%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:bg-gray-100 hover:before:scale-[3]">
          Buscar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
          >
            <path
              d="M8.293 0.299012C8.48053 0.111541 8.73484 0.00622559 9 0.00622559C9.26516 0.00622559 9.51947 0.111541 9.707 0.299012L14.207 4.79901C14.3945 4.98654 14.4998 5.24085 14.4998 5.50601C14.4998 5.77118 14.3945 6.02548 14.207 6.21301L9.707 10.713C9.5184 10.8952 9.2658 10.996 9.0036 10.9937C8.7414 10.9914 8.49059 10.8862 8.30518 10.7008C8.11977 10.5154 8.0146 10.2646 8.01233 10.0024C8.01005 9.74022 8.11084 9.48761 8.293 9.29901L11 6.50601H1.5C1.23478 6.50601 0.98043 6.40065 0.792893 6.21312C0.605357 6.02558 0.5 5.77123 0.5 5.50601C0.5 5.2408 0.605357 4.98644 0.792893 4.79891C0.98043 4.61137 1.23478 4.50601 1.5 4.50601H11L8.293 1.71301C8.10553 1.52548 8.00021 1.27118 8.00021 1.00601C8.00021 0.740848 8.10553 0.48654 8.293 0.299012Z"
              fill="white"
            />
          </svg>
        </button>
      </form>

      {/* Grid de tarjetas */}
      {currentGacetillas.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-[35px] gap-y-[40px] justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {currentGacetillas.map((gacetilla) => (
            <GacetillaCard
              key={gacetilla.id}
              date={gacetilla.date}
              title={gacetilla.title}
              description={gacetilla.description}
              imageUrl={gacetilla.imageUrl}
              href={gacetilla.href}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg text-[#736D6D]">
            No se encontraron gacetillas que coincidan con tu búsqueda.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <Paginacion
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-16"
        />
      )}
    </section>
  );
};

export default ListaGacetilla;
