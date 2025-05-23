import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface GacetillaCardProps {
  date: string
  title: string
  description: string
  imageUrl: string
  href: string
}

export function GacetillaCard({ date, title, description, imageUrl, href }: GacetillaCardProps) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[240px] w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="inline-block bg-[#64B33D1A] text-primary text-sm font-medium py-1 px-3 rounded-[5px] mb-4">
          {date}
        </div>
        <h3 className="text-[18px] leading-tight font-bold text-primary mb-3">{title}</h3>
        <p className="text-[#736D6D] mb-6 line-clamp-3">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-primary font-medium border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
        >
          Leer más <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
