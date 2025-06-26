import { BackButton } from "./GoBackHero";

interface HeroSectionProps {
  backgroundImage: string;
  title1: string;
  title2?: string;
  showBackButton?: boolean;
  className?: string;
  compact?: boolean;
  titleIsInline?: boolean;
}

export function HeroSection({
  backgroundImage,
  title1,
  title2,
  showBackButton = true,
  className = "",
  compact = false,
  titleIsInline = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative mx-4 mt-4 ${compact ? "h-[378px] justify-end pb-20 pt-14" : "h-[400px] justify-center xs:h-[500px] md:justify-normal"} flex flex-col rounded-[20px] bg-cover bg-center px-8 md:m-[33px] md:p-[70px] md:pt-[114px] ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        className={`relative mx-auto w-full max-w-7xl ${compact && title2 ? "top-5" : ""} `}
      >
        {showBackButton && <BackButton />}

        {/* Título */}
        <div>
          {title2 ? (
            <div
              className={`relative flex ${titleIsInline ? "flex-row gap-2" : "flex-col"} items-start`}
            >
              <h2 className="mb-1 text-3xl text-white md:text-5xl">{title1}</h2>
              <h1 className="text-3xl font-medium text-white md:text-5xl">
                {title2}
              </h1>
            </div>
          ) : (
            <h1 className="text-4xl text-white md:text-5xl">{title1}</h1>
          )}
        </div>
      </div>
    </section>
  );
}
