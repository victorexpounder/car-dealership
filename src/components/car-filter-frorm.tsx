"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { Form, FormControl, FormField } from "@/components/ui/form"

type FilterFormValues = {
  search: string
  category: string
  make: string
  year: string
  priceRange: number[]
  mileage: string
}

interface CarFilterFormProps {
  onSubmit: (data: FilterFormValues) => void
}

export default function CarFilterForm({ onSubmit }: CarFilterFormProps) {
  const [priceRange, setPriceRange] = useState<number[]>([0, 200000])

  const form = useForm<FilterFormValues>({
    defaultValues: {
      search: "",
      category: "all",
      make: "all",
      year: "all",
      priceRange: [0, 200000],
      mileage: "all",
    },
  })

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    form.setValue("priceRange", value)
  }

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data)
  })

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormControl>
                    <Input id="search" type="search" placeholder="Search cars..." className="pl-8" {...field} />
                  </FormControl>
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="make">Make</Label>
            <FormField
              control={form.control}
              name="make"
              render={({ field }) => (
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="make">
                      <SelectValue placeholder="Select make" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Makes</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="tesla">Tesla</SelectItem>
                      <SelectItem value="porsche">Porsche</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Price Range</Label>
              <span className="text-xs text-muted-foreground">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </span>
            </div>
            <FormField
              control={form.control}
              name="priceRange"
              render={({ field }) => (
                <FormControl>
                  <Slider
                    defaultValue={[0, 200000]}
                    max={200000}
                    step={5000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="py-4"
                  />
                </FormControl>
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mileage">Mileage</Label>
            <FormField
              control={form.control}
              name="mileage"
              render={({ field }) => (
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="mileage">
                      <SelectValue placeholder="Select mileage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Mileage</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="under-10k">Under 10,000 miles</SelectItem>
                      <SelectItem value="under-30k">Under 30,000 miles</SelectItem>
                      <SelectItem value="under-60k">Under 60,000 miles</SelectItem>
                      <SelectItem value="under-100k">Under 100,000 miles</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Apply Filters
          </Button>
        </div>
      </form>
    </Form>
  )
}

