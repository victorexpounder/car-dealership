"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import CarCard from "@/components/car-card"
import CarFilterForm from "@/components/car-filter-frorm"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function CarsPage() {
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
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Tesla Model S"
                  year={2023}
                  price={89999}
                  mileage={0}
                  isNew={true}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="BMW X5"
                  year={2023}
                  price={76500}
                  mileage={120}
                  isNew={true}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Mercedes EQS"
                  year={2023}
                  price={102000}
                  mileage={0}
                  isNew={true}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Audi e-tron GT"
                  year={2022}
                  price={99800}
                  mileage={1200}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Porsche 911"
                  year={2022}
                  price={115000}
                  mileage={800}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="BMW i4"
                  year={2022}
                  price={65900}
                  mileage={500}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Lexus LS"
                  year={2021}
                  price={71200}
                  mileage={8500}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Range Rover Sport"
                  year={2022}
                  price={87450}
                  mileage={3200}
                />
                <CarCard
                  image="/placeholder.svg?height=300&width=400"
                  name="Genesis G80"
                  year={2021}
                  price={58900}
                  mileage={5600}
                />
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

