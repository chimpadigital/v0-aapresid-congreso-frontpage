"use client";
import React, { forwardRef, useState } from "react";
import { GacetillaCard } from "../gacetilla-card";
import LupaIcon from "../icons/LupaIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const gacetillas = [
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
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 3,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 5,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 6,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 7,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 8,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 9,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
  {
    id: 10,
    date: "15 FEB 2025",
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem...",
    imageUrl: "/images/home/gacetilla-ejemplo-borrar.png",
    href: "#",
  },
];
const ListaGacetilla = () => {
  const [selectedDate, setSelectedDate] = useState<any>(null);

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
      <p className="tracking-wider leading-none top-px relative">{value ? value : "Día"}</p>
    </button>
  ));

  return (
    <section className="mx-auto max-w-[1390px] px-4 md:px-[33px] 2xl:px-0">
      <h2 className="mb-8 text-5xl tracking-wide text-primary">Gacetillas</h2>
      <form className="mb-[91px] flex gap-5">
        <label className="border-b-px flex max-w-[304px] items-center gap-2 border-b border-b-primary focus-within:border-b-accent">
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
      </form>
      <div className="grid grid-cols-1 gap-[35px] md:grid-cols-2 lg:grid-cols-3">
        {gacetillas.map((gacetilla) => (
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
    </section>
  );
};

export default ListaGacetilla;
