import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function FeaturedSection() {
 
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-muted/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Featured Models
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Luxury Collection</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the pinnacle of automotive engineering with our exclusive luxury collection.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl lg:grid-cols-3 items-start gap-8 md:gap-12 mt-8">
          <div className="group grid gap-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/img5.jpg"
                alt="Luxury Sedan"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2 pt-3">
              <Badge>Sedan</Badge>
              <Badge variant="outline">Luxury</Badge>
            </div>
            <h3 className="text-xl font-bold">Premium Sedans</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Combining luxury, performance, and comfort, our premium sedans set the standard for elegance on the road.
            </p>
            <Link href="/images/img.jpg">
              <Button variant="ghost" className="mt-2">
                View Collection
              </Button>
            </Link>
          </div>

          <div className="grid gap-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/img.jpg"
                alt="Luxury SUV"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 pt-3">
              <Badge>SUV</Badge>
              <Badge variant="outline">Premium</Badge>
            </div>
            <h3 className="text-xl font-bold">Executive SUVs</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Commanding presence with sophisticated style, our luxury SUVs combine spaciousness with unparalleled
              refinement.
            </p>
            <Link href="/cars?category=suv">
              <Button variant="ghost" className="mt-2">
                View Collection
              </Button>
            </Link>
          </div>

          <div className="grid gap-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/img6.jpg"
                alt="Sports Car"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 pt-3">
              <Badge>Sports</Badge>
              <Badge variant="outline">Performance</Badge>
            </div>
            <h3 className="text-xl font-bold">Performance Sports Cars</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Engineered for maximum thrill, our sports cars deliver breathtaking speed and precision handling.
            </p>
            <Link href="/cars?category=sports">
              <Button variant="ghost" className="mt-2">
                View Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

