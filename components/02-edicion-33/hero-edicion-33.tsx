import Image from "next/image";
import Link from "next/link";
import ArrowBack from "../icons/ArrowBack";

export function HeroEdicion33() {
  return (
    <section className="relative mx-4 flex h-[500px] flex-col justify-center rounded-[20px] bg-[url('/images/edicion-33/hero.webp')] bg-cover bg-center p-[70px] md:m-[33px]">
      <div>
        <Link href={"/"} className="mb-[70px] inline-block">
          <span className="rounded-full inline-block border border-white px-[22px] py-[10px]">
            <ArrowBack />
          </span>
        </Link>

        {/* Título */}
        <div className="">
          <h2 className="mb-1 text-3xl text-white md:text-5xl">Acerca del</h2>
          <h1 className="text-4xl font-bold text-white md:text-[40px]">
            Congreso
          </h1>
        </div>
      </div>
    </section>
  );
}
