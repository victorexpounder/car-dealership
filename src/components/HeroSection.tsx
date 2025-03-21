"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


const backgroundImages = [
  "/images/img4.jpg",
  "/images/img.jpg",
  "/images/img2.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {

    const interval = setInterval(() => {

      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        setIsTransitioning(false)
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background images with transition effect */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out",
            index === currentImageIndex ? "opacity-100" : "opacity-0",
            isTransitioning && index === currentImageIndex ? "opacity-0" : "",
          )}
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      ))}

      {/* Content overlay */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 bg-background/60 backdrop-blur-md p-8 rounded-xl max-w-xl">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover Your Perfect Drive</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Premium vehicles with exceptional service. Browse our collection or rent your dream car today.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/cars">
              <Button>Explore Cars</Button>
            </Link>
            <Link href="/rental">
              <Button variant="outline">Rent a Car</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentImageIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentImageIndex(index)
                setIsTransitioning(false)
              }, 500)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

