"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { GacetillaCard } from "../gacetilla-card";
import LupaIcon from "../icons/LupaIcon";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "../icons/CloseIcon";
import { Paginacion } from "./paginacion";
import { GacetillaApiItem, GacetillaApiResponse } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { es, enUS } from "date-fns/locale";

registerLocale("es", es);
registerLocale("en", enUS);

const ListaGacetilla = () => {
  const searchParams = useSearchParams();

  // Leer página desde la URL (query param)
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const itemsPerPage = 2;

  const [gacetillas, setGacetillas] = useState<GacetillaApiResponse>();
  const [loading, setLoading] = useState(true);

  // Estado para los filtros que se aplican al buscar
  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
  const [appliedDate, setAppliedDate] = useState<Date | null>(null);

  // Fetch gacetillas desde la API solo cuando cambian los filtros aplicados o la página
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page: currentPage.toString(),
      pageSize: itemsPerPage.toString(),
    });
    if (appliedDate) {
      const from = appliedDate.toISOString().slice(0, 10);
      const toDate = new Date(appliedDate);
      toDate.setDate(toDate.getDate() + 1);
      const to = toDate.toISOString().slice(0, 10);
      params.append("dateFrom", from);
      params.append("dateTo", to);
    }
    if (appliedSearchTerm) {
      params.append("search", appliedSearchTerm);
    }
    // Agregar parámetro lang según el locale
    if (locale) {
      params.append("lang", locale);
    }
    fetch(
      `https://api.congreso.v1.franco.in.net/api/press-release?${params.toString()}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setGacetillas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [currentPage, itemsPerPage, appliedDate, appliedSearchTerm]);

  // Eliminar filtrado en frontend, usar solo la data de la API
  const currentGacetillas = gacetillas?.data || [];

  // Calcular paginación
  const totalPages = gacetillas
    ? Math.ceil(gacetillas.total / itemsPerPage)
    : 1;

  // Inicializar los filtros desde la URL al cargar el componente
  useEffect(() => {
    // Solo en el primer render
    const urlSearch = new URLSearchParams(window.location.search);
    const search = urlSearch.get("search") || "";
    const date = urlSearch.get("date");
    const page = urlSearch.get("page") || "1";
    setSearchTerm(search);
    setAppliedSearchTerm(search);
    if (date) {
      // Crear la fecha como local (no UTC) para que el input muestre el día correcto
      const [year, month, day] = date.split('-').map(Number);
      const parsedDate = new Date(year, month - 1, day);
      setSelectedDate(parsedDate);
      setAppliedDate(parsedDate);
    }
    setCurrentPage(parseInt(page, 10));
  }, []);

  // Actualizar la URL cuando cambia la página, la fecha o el search term aplicado
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", currentPage.toString());
    if (appliedSearchTerm) {
      params.set("search", appliedSearchTerm);
    }
    if (appliedDate) {
      params.set("date", appliedDate.toISOString().slice(0, 10));
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [currentPage, appliedDate, appliedSearchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba cuando cambia la página
    window.scrollTo({ top: 100, behavior: "smooth" });
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

  const locale = useLocale();

  // Al presionar Buscar, aplicar los filtros actuales y resetear a la página 1
  function handleSearchClick(e: React.FormEvent) {
    e.preventDefault();
    setAppliedSearchTerm(searchTerm); // Esto ya manda el search param
    setAppliedDate(selectedDate);
    setCurrentPage(1);
  }

  return (
    <section className="mx-auto max-w-[1390px] px-4 pt-10 md:px-[33px] md:pt-0 2xl:px-0">
      <h2 className="mb-8 text-5xl tracking-wide text-primary">Gacetillas</h2>
      <form className="mb-[91px] flex flex-col gap-[30px] md:flex-row" onSubmit={handleSearchClick}>
        <label className="border-b-px mt-auto flex h-fit w-full max-w-[304px] items-center gap-2 border-b border-b-primary focus-within:border-b-accent">
          <LupaIcon />
          <input
            placeholder="Palabras claves"
            className="w-full px-2 py-1 text-lg tracking-wider placeholder-primary focus-visible:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            name="search"
            autoComplete="off"
          />
        </label>

        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date as Date | null)}
          dateFormat={locale === "en" ? "yyyy/MM/dd" : "dd/MM/yyyy"}
          placeholderText="Día"
          locale={locale}
          customInput={
            <ExampleCustomInput
              value={selectedDate ? selectedDate.toLocaleDateString(locale === "en" ? "en-US" : "es-AR") : ""}
              onClick={() => {}}
              className="flex w-[min(100%,304px)] items-center gap-3 border-b border-b-primary py-2 focus-within:border-b-accent"
            />
          }
        />

        <button type="submit" className="relative top-2 z-[1] flex w-fit items-center gap-[10px] overflow-hidden rounded-full bg-accent px-[40px] py-[14px] text-lg font-light tracking-wider text-white transition-colors duration-500 before:absolute before:-left-[150%] before:top-[120%] before:z-[-1] before:h-[250%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[3]">
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
      {loading ? (
        <div className="py-16 text-center">
          <p className="text-lg text-[#736D6D]">Cargando gacetillas...</p>
        </div>
      ) : currentGacetillas.length > 0 ? (
        <div className="grid grid-cols-1 justify-items-center gap-x-[35px] gap-y-[40px] md:grid-cols-2 md:justify-items-start lg:grid-cols-3">
          {currentGacetillas.map((gacetilla) => {
            let title = "";
            let description = "";
            try {
              title = JSON.parse(gacetilla.title).es || gacetilla.title;
              description = JSON.parse(gacetilla.excerpt).es || gacetilla.excerpt;
            } catch {
              title = gacetilla.title;
              description = gacetilla.excerpt;
            }
            return (
              <GacetillaCard
                key={gacetilla.id}
                date={gacetilla.date}
                title={title}
                description={description}
                imageUrl={gacetilla.image}
                href={"/gacetilla/" + gacetilla.id}
              />
            );
          })}
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
