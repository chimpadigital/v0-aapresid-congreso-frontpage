import { BackButton } from "./GoBackHero";

interface HeroSectionProps {
  backgroundImage: string;
  title1: string;
  title2?: string;
  showBackButton?: boolean;
  className?: string;
}

export function HeroSection({
  backgroundImage,
  title1,
  title2,
  showBackButton = true,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative mx-4 mt-4 flex h-[500px] flex-col justify-center rounded-[20px] bg-cover bg-center px-8 md:m-[33px] md:p-[70px] ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div>
        {showBackButton && <BackButton />}

        {/* Título */}
        <div className="">
          {title2 ? (
            <>
              <h2 className="mb-1 text-3xl text-white md:text-5xl">{title1}</h2>
              <h1 className="text-3xl font-medium text-white md:text-5xl">
                {title2}
              </h1>
            </>
          ) : (
            <h1 className="text-4xl text-white md:text-5xl">{title1}</h1>
          )}
        </div>
      </div>
    </section>
  );
}
