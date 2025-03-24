'use client'
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Car, ChevronRight, Clock, Fuel, Gauge, Info, MapPin, Shield, Star, Zap } from "lucide-react"
import CarCard from "@/components/car-card"
import { createClient } from "@supabase/supabase-js"
import { anonkey, supabaseUrl } from "@/lib/supabase"
import { use, useEffect, useState } from "react"

type CarValues = {
    id: string
    images: string[]
    model: string
    make: string
    category: string
    year: number
    price: number
    seater: string
    mileage: number
    status: string
    description: string
    location: string,
    isNew: boolean,
    features: string[],
    specifications: {
      engine: string,
      horsepower: string,
      acceleration: string,
      topSpeed: string,
      range: string,
      seating: string,
      cargo: string,
      weight: string,
    },
    rating: number,
    reviewCount: number,
}

const supabase = createClient(supabaseUrl, anonkey);

const getCar = async(id: string) => {
  let { data: cars, error } = await supabase
  .from('cars')
  .select('*')
  .eq('id', id)
  .single();

  return {
    id: cars?.id,
    images: [cars?.images],
    model: cars?.name,
    make: cars?.make,
    category: cars?.category,
    description: cars?.description,
    year: cars?.year,
    price: cars?.price,
    seater: cars?.seater,
    mileage: cars?.mileage,
    status: cars?.status,
    location: "Lagos, Nigeria",
    isNew: cars?.created_at ? new Date(cars.created_at) > new Date(new Date().setMonth(new Date().getMonth() - 1)) : false,
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      '17" Touchscreen Display',
      "Premium Audio System",
      "Wireless Charging",
      "Heated Seats",
      "Glass Roof",
      "Adaptive Air Suspension",
    ],
    specifications: {
      engine: "Dual Motor All-Wheel Drive",
      horsepower: "670 hp",
      acceleration: "3.1 seconds 0-60 mph",
      topSpeed: "155 mph",
      range: "405 miles",
      seating: "5 adults",
      cargo: "28 cubic feet",
      weight: "4,561 lbs",
    },
    rating: 4.9,
    reviewCount: 124,
  }
}

// This would typically come from a database
const getRelatedCars = () => {
  // Mock data for demonstration
  return [
    {
      id: "2",
      name: "Tesla Model 3",
      year: 2023,
      price: 42990,
      mileage: 0,
      image: "/placeholder.svg?height=300&width=400",
      isNew: true,
    },
    {
      id: "3",
      name: "Tesla Model X",
      year: 2023,
      price: 99990,
      mileage: 0,
      image: "/placeholder.svg?height=300&width=400",
      isNew: true,
    },
    {
      id: "4",
      name: "Tesla Model Y",
      year: 2023,
      price: 54990,
      mileage: 0,
      image: "/placeholder.svg?height=300&width=400",
      isNew: true,
    },
  ]
}

interface Params {
  id: string
}

export default function CarDetailsPage(params: Params) {
  const [car, setCar] = useState<CarValues | null>(null)
  const relatedCars = getRelatedCars()
  const id = params.id
  
  useEffect(()=>{
    getCar(id).then((car) => {
      setCar(car)
    })
  }, [id])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">AutoElite</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/cars" className="font-bold transition-colors">
              Cars
            </Link>
            <Link href="/new-arrivals" className="transition-colors hover:text-foreground/80">
              New Arrivals
            </Link>
            <Link href="/rental" className="transition-colors hover:text-foreground/80">
              Rentals
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Dashboard
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/cars" className="hover:text-foreground">
              Cars
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{car?.model}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
                <Image src={car?.images[0] || "/placeholder.svg"} alt={car?.model || 'carimage'} fill className="object-cover" />
                {car?.isNew && <Badge className="absolute right-3 top-3 z-10">NEW</Badge>}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {car?.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-[4/3] overflow-hidden rounded-md border ${index === 0 ? "ring-2 ring-primary" : ""}`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${car?.model} - View ${index + 1}`}
                      width={200}
                      height={150}
                      className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>

              {/* Car Details Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="text-gray-600">{car?.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <Calendar className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm font-medium">{car?.year}</span>
                        <span className="text-xs text-muted-foreground">Year</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <Gauge className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm font-medium">{car?.mileage.toLocaleString()} mi</span>
                        <span className="text-xs text-muted-foreground">Mileage</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <Fuel className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm font-medium">Electric</span>
                        <span className="text-xs text-muted-foreground">Fuel Type</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <MapPin className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm font-medium">{car?.location}</span>
                        <span className="text-xs text-muted-foreground">Location</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Engine</span>
                          <span className="font-medium">{car?.specifications.engine}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Horsepower</span>
                          <span className="font-medium">{car?.specifications.horsepower}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Acceleration</span>
                          <span className="font-medium">{car?.specifications.acceleration}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Top Speed</span>
                          <span className="font-medium">{car?.specifications.topSpeed}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Range</span>
                          <span className="font-medium">{car?.specifications.range}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Seating</span>
                          <span className="font-medium">{car?.specifications.seating}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Cargo Space</span>
                          <span className="font-medium">{car?.specifications.cargo}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Weight</span>
                          <span className="font-medium">{car?.specifications.weight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {car?.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 py-2">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Customer Reviews</h2>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(car?.rating || 3) ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{car?.rating}/5</span>
                        <span className="text-muted-foreground">({car?.reviewCount} reviews)</span>
                      </div>
                    </div>

                    {/* Sample Reviews */}
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-medium">JD</span>
                            </div>
                            <span className="font-medium">John Doe</span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Absolutely love this car! The performance is incredible, and the technology is cutting-edge.
                          The range is more than enough for my daily commute and weekend trips.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">Posted 2 months ago</p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-medium">JS</span>
                            </div>
                            <span className="font-medium">Jane Smith</span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Great car overall. The autopilot feature is impressive, and the interior is luxurious. My only
                          complaint is that the charging network could be better in my area.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">Posted 3 months ago</p>
                      </div>

                      <Button variant="outline" className="w-full">
                        Load More Reviews
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Price and Actions */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="border rounded-lg p-6 space-y-4 sticky top-24">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">{car?.model}</h1>
                  <div className="flex items-center gap-2">
                    <Badge variant={car?.status === "available" ? "default" : "outline"}>
                      {car?.status === "available" ? "Available" : "Reserved"}
                    </Badge>
                    {car?.isNew && <Badge variant="outline">New Arrival</Badge>}
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-y">
                  <span className="text-muted-foreground">Price</span>
                  <span className="text-3xl font-bold">${car?.price.toLocaleString()}</span>
                </div>

                <div className="space-y-3">
                  <Button className="w-full">Purchase Now</Button>
                  <Button variant="outline" className="w-full">
                    Add to Favorites
                  </Button>
                </div>

                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Includes 4-year/50,000-mile warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>24/7 Roadside Assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Free charging for 6 months</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Info className="h-4 w-4 text-primary" />
                    <span>7-day money back guarantee</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="link" className="p-0 h-auto">
                    <span>Have questions?</span>
                    <Link href="/contact" className="ml-1 text-primary">
                      Contact us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Cars Section */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCars.map((relatedCar) => (
                <CarCard
                  key={relatedCar.id}
                  image={relatedCar.image}
                  name={relatedCar.name}
                  year={relatedCar.year}
                  price={relatedCar.price}
                  mileage={relatedCar.mileage}
                  isNew={relatedCar.isNew}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              <span className="text-lg font-bold">AutoElite</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 md:max-w-xs">
              Providing premium automotive solutions since 2005. Your satisfaction is our top priority.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex-1 md:justify-end">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/cars"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Buy a Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rental"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Rent a Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financing"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Financing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Check component for the features list
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

