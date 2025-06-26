import React from "react";
import CalendarLineal from "../icons/CalendarLineal";
import MapPinLineal from "../icons/MapPinLineal";

const BannerCongreso = () => {
  return (
    <div
      className="container-banne-edicion33 mx-4 rounded-[20px] bg-[#F0F0F1] px-10 py-10 xs:px-20 xs:py-[100px] md:mx-[33px]"
      style={{
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10">
        <article className="text-primary">
          <h3 className="text-[40px] leading-none">Congreso</h3>
          <h3 className="text-[40px] font-bold leading-none">Aapresid</h3>
          <p className="mt-5 max-w-[35ch] text-xl tracking-wider">
            El evento en el que buscamos conectar el conocimiento, la ciencia y
            los sistemas de producción sustentables.
          </p>
        </article>
        <div className="text-xl text-primary">
          <div className="mb-7 flex items-center gap-2">
            <CalendarLineal /> 6, 7 y 8 de Agosto
          </div>
          <div className="flex items-center gap-2">
            <div className="relative -top-[5px]">
              <MapPinLineal />
            </div>
            La Rural de Palermo, Buenos Aires
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCongreso;
