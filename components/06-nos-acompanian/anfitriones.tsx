import Image from "next/image";
import React from "react";

const Anfitriones = () => {
  return (
    <div className="mx-4 mt-[26px] rounded-[20px] bg-[#F0F0F1] px-4 py-16 md:mx-[33px]">
      {/* COMPONENTE */}
      <div className="mx-auto mb-16 max-w-[1049px]">
        <h3 className="mb-12 w-full border-b border-b-primary pb-[20px] text-left text-3xl text-primary md:mb-[109px]">
          Anfitrión
        </h3>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pb-10 md:pb-0">
            <figure className="relative inline-block h-24 w-full md:h-full">
              <Image
                src="/images/comercial/logoborrar.png"
                fill
                alt="logo falso"
                className="object-contain pr-20 md:pl-7"
              />
            </figure>
          </div>
          <article className="flex flex-[1.2] flex-col">
            <h3 className="w-full pb-[20px] text-left text-3xl font-medium text-primary">
              LogoIpsun
            </h3>
            <p className="text-paragraph leading-tight tracking-wider">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <a
              href="#"
              className="relative ml-auto mt-[41px] inline-block min-w-[225px] rounded-full border border-primary px-4 py-1 text-center text-lg text-primary"
            >
              www.empresafalsa.com
            </a>
          </article>
        </div>
      </div>

      {/* COMPONENTE */}
      <div className="mx-auto mb-16 max-w-[1049px]">
        <h3 className="mb-12 w-full border-b border-b-primary pb-[20px] text-left text-3xl text-primary md:mb-[109px]">
          Anfitrión
        </h3>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pb-10 md:pb-0">
            <figure className="relative inline-block h-24 w-full md:h-full">
              <Image
                src="/images/comercial/logoborrar.png"
                fill
                alt="logo falso"
                className="object-contain pr-20 md:pl-7"
              />
            </figure>
          </div>
          <article className="flex flex-[1.2] flex-col">
            <h3 className="w-full pb-[20px] text-left text-3xl font-medium text-primary">
              LogoIpsun
            </h3>
            <p className="text-paragraph leading-tight tracking-wider">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <a
              href="#"
              className="relative ml-auto mt-[41px] inline-block min-w-[225px] rounded-full border border-primary px-4 py-1 text-center text-lg text-primary"
            >
              www.empresafalsa.com
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Anfitriones;
