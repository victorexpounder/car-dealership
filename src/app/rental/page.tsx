import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, CalendarDays, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import RentalForm from "@/components/rental-form"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RentalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header current="rentals" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/img2.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 bg-background/60 backdrop-blur-md p-8 rounded-xl max-w-xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rent Your Dream Car</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience luxury and performance with our premium rental fleet. Easy booking, flexible terms,
                exceptional service.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>View Available Cars</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Renting a car with Okopi Autos is simple, fast, and convenient.
                </p>
              </div>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Select Dates</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Choose your rental period, from a single day to extended rentals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Choose Your Car</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Browse our luxury fleet and select the perfect vehicle for your needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Book & Drive</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Complete your booking, and enjoy the open road in your premium rental.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Apply for Car Rental</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill out the form to apply for a car rental. We'll get back to you within 24 hours to confirm your
                  booking.
                </p>
                <RentalForm />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Car Rental Application"
                  width={500}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

