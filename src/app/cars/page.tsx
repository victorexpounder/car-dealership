"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import CarCard from "@/components/car-card"
import CarFilterForm from "@/components/car-filter-frorm"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useCarContext } from "@/Context/CarContext"
import { Suspense } from "react"



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
}

export default function CarsPage() {
  const {cars, setCars} = useCarContext()
  return (
    <div className="flex min-h-screen flex-col">
      <Header current="cars" />
      <main className="flex-1 px-4 md:px-6">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <CarFilterForm
                  onSubmit={(data) => {
                    console.log("Filter data:", data)
                    // Here you would typically filter the cars based on the form data
                  }}
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Available Cars</h1>
                <div className="flex items-center gap-2">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Suspense fallback={<div>Loading...</div>}> 
                  {cars?.map((car: CarValues) => (
                    <CarCard
                      key={car.id}
                      image={car?.images[0]}
                      name={car.model}
                      year={car.year}
                      price={car.price}
                      mileage={car.mileage}
                      isNew={true}
                    />
                  ))}
                </Suspense>
                
              </div>
              <div className="flex items-center justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-[2rem]">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-[2rem] bg-primary text-primary-foreground">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-[2rem]">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-[2rem]">
                    4
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-[2rem]">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

