import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Gauge, MapPin } from "lucide-react"

interface CarCardProps {
  image: string
  name: string
  year: number
  price: number
  mileage: number
  location?: string
  isNew?: boolean
}

export default function CarCard({
  image,
  name,
  year,
  price,
  mileage,
  location = "New York, NY",
  isNew = false,
}: CarCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      {isNew && <Badge className="absolute right-2 top-2 z-10">NEW</Badge>}
      <Link href={`/cars/${name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Gauge className="h-4 w-4" />
              <span>{mileage.toLocaleString()} mi</span>
            </div>
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-lg">₦{price.toLocaleString()}</span>
            <Link href={`/cars/${name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Button size="sm">View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

