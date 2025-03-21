import React from 'react'
import CarCard from './car-card'
import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

interface Props {
    
}

const NewArrivalsSection = (props: Props) => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Latest Models
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">New Arrivals</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover our newest additions to the fleet, featuring cutting-edge technology and supreme comfort.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <CarCard
                image="/images/img3.jpg"
                name="Tesla Model S"
                year={2023}
                price={89999}
                mileage={0}
                isNew={true}
              />
              <CarCard
                image="/images/img4.jpg"
                name="BMW X5"
                year={2023}
                price={76500}
                mileage={120}
                isNew={true}
              />
              <CarCard
                image="/images/img6.jpg"
                name="Mercedes EQS"
                year={2023}
                price={102000}
                mileage={0}
                isNew={true}
              />
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/new-arrivals">
                <Button variant="outline" className="gap-1">
                  View All New Arrivals
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
    )
}

export default NewArrivalsSection
