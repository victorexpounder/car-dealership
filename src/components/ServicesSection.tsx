import { Car } from 'lucide-react'
import React from 'react'

interface Props {
    
}

const ServicesSection = (props: Props) => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the ultimate in automotive excellence with our comprehensive services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border bg-background">
                <div className="p-3 rounded-full bg-primary/10">
                  <Car className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">New & Used Sales</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Find your perfect vehicle from our curated selection of new and premium pre-owned cars.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border bg-background">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M10 3h.01" />
                    <path d="M14 2h.01" />
                    <path d="m2 10 20-5" />
                    <path d="M5 19h14" />
                    <path d="M5 15v4" />
                    <path d="M19 15v4" />
                    <path d="M15 7v1" />
                    <path d="M9 7v1" />
                    <path d="m5 13 14-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Car Rentals</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Short or long-term rentals with flexible terms and a wide range of premium vehicles.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border bg-background">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M5 4h14a1 1 0 0 1 1 1v14c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Z" />
                    <path d="m16 2-2 2-2-2" />
                    <path d="M9 2 7 4 5 2" />
                    <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H10" />
                    <path d="M12 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Financing</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Competitive rates and flexible financing options to help you drive away your dream car today.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default ServicesSection
