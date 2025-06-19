import { BackButton } from "./GoBackHero";

interface HeroSectionProps {
  backgroundImage: string;
  title1: string;
  title2?: string;
  showBackButton?: boolean;
  className?: string;
  compact?: boolean;
}

export function HeroSection({
  backgroundImage,
  title1,
  title2,
  showBackButton = true,
  className = "",
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative mx-4 mt-4 ${compact ? "h-[378px]" : "h-[400px] xs:h-[500px]"} flex flex-col justify-center rounded-[20px] bg-cover bg-center px-8 md:m-[33px] md:justify-normal md:p-[70px] md:pt-[114px] ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="mx-auto w-full max-w-7xl">
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
