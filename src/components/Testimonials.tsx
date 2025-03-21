import { Star } from 'lucide-react'
import React from 'react'

interface Props {
    
}

const Testimonials = (props: Props) => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Don't just take our word for it — hear from our satisfied customers about their experience with
                    Okopi Autos.
                </p>
                <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="ml-2 text-sm font-medium">4.9/5 from 500+ reviews</span>
                </div>
                </div>
                <div className="grid gap-4 md:gap-8">
                <div className="space-y-4 rounded-lg border p-4 bg-background">
                    <div className="flex items-start gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                    </span>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">James Peterson</h3>
                        <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                    "I've purchased multiple vehicles from Okopi Autos and each experience has been exceptional. The staff
                    goes above and beyond to ensure customer satisfaction."
                    </p>
                </div>
                <div className="space-y-4 rounded-lg border p-4 bg-background">
                    <div className="flex items-start gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">SM</span>
                    </span>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Sarah Miller</h3>
                        <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                    "The rental service is top-notch! Easy booking process, immaculate vehicles, and the team was
                    incredibly accommodating with my schedule changes."
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Testimonials
