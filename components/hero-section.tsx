import { BackButton } from "./GoBackHero"

interface HeroSectionProps {
  backgroundImage: string
  title1: string
  title2?: string
  showBackButton?: boolean
  className?: string
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
      className={`relative mx-4 flex h-[500px] flex-col justify-center rounded-[20px] bg-cover bg-center p-[70px] md:m-[33px] ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div>
        {showBackButton && <BackButton />}

        {/* Título */}
        <div className="">
          {title2 ? (
            <>
              <h2 className="mb-1 text-3xl text-white md:text-5xl">{title1}</h2>
              <h1 className="text-4xl font-medium text-white md:text-[40px]">{title2}</h1>
            </>
          ) : (
            <h1 className="text-4xl font-bold text-white md:text-5xl">{title1}</h1>
          )}
        </div>
      </div>
    </section>
  )
}
