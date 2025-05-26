"use client";

import ChevronLeft from "../icons/ChevronLeft";
import DoubleChevronLeft from "../icons/DoubleChevronLeft";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Paginacion({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  // Función para generar los números de página a mostrar
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7; // Máximo de páginas visibles

    if (totalPages <= maxVisiblePages) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para páginas con puntos suspensivos
      if (currentPage <= 4) {
        // Mostrar: 1, 2, 3, 4, 5, ..., última
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Mostrar: 1, ..., últimas 5 páginas
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Mostrar: 1, ..., actual-1, actual, actual+1, ..., última
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {/* Botón primera página */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="flex aspect-square h-[32px] items-center justify-center rounded-full border border-primary text-xs leading-none text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary"
        aria-label="Primera página"
      >
        <DoubleChevronLeft />
      </button>

      {/* Botón página anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex aspect-square h-[32px] items-center justify-center rounded-full border border-primary text-xs leading-none text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary"
        aria-label="Página anterior"
      >
        <ChevronLeft />
      </button>

      {/* Números de página */}
      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex aspect-square h-[32px] items-center justify-center text-xs leading-none text-primary"
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`flex aspect-square h-[32px] items-center justify-center rounded-full border text-xs leading-none transition-colors ${
              isActive
                ? "border-primary bg-primary text-white"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            }`}
            aria-label={`Página ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Botón página siguiente */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex aspect-square h-[32px] rotate-180 items-center justify-center rounded-full border border-primary text-xs leading-none text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary"
        aria-label="Página siguiente"
      >
        <ChevronLeft />
      </button>

      {/* Botón última página */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="flex aspect-square h-[32px] rotate-180 items-center justify-center rounded-full border border-primary text-xs leading-none text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary"
        aria-label="Última página"
      >
        <DoubleChevronLeft />
      </button>
    </div>
  );
}
