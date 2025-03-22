"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Loader2, Upload } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { anonkey, supabaseUrl } from "@/lib/supabase"
import { createClient } from "@supabase/supabase-js"

interface EditCarDialogProps {
  car: {
    id: string
    model: string
    make?: string
    category: string
    price: number
    year?: number
    mileage?: number
    status: string
    description?: string
  }
}

type CarFormValues = {
  model: string
  make: string
  category: string
  year: string
  price: string
  mileage: string
  status: string
  description: string
}

export function EditCarDialog({ car }: EditCarDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)
  const [files, setFiles] = useState<FileList | null>(null)
  const supabase = createClient(supabaseUrl, anonkey);

  const form = useForm<CarFormValues>({
    defaultValues: {
      model: car.model,
      make: car.make || "",
      category: car.category,
      year: car.year?.toString() || "",
      price: car.price.toString(),
      mileage: car.mileage?.toString() || "0",
      status: car.status,
      description: car.description || "",
    },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }

  

  const onSubmit = form.handleSubmit(async(values) => {
    setIsSubmitting(true)
    

    const { data, error } = await supabase
    .from('cars')
    .update(values)
    .eq('id', car.id)
    .select()

    if (error) {
      console.log(error)
      setIsSubmitting(false)
      return
    }
    


    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setOpen(false)
    }, 1500)
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="h-3.5 w-3.5" />
          <span className="sr-only">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Car</DialogTitle>
          <DialogDescription>Update the details of {car.model}.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Car Name/Model</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="make"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Make</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select make" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tesla">Tesla</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                        <SelectItem value="audi">Audi</SelectItem>
                        <SelectItem value="porsche">Porsche</SelectItem>
                        <SelectItem value="lexus">Lexus</SelectItem>
                        <SelectItem value="range-rover">Range Rover</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        min="0"
                        {...field}
                        value={field.value ? Number(field.value).toLocaleString() : ""}
                        onChange={(e) => {
                          // Remove all non-digit characters and parse as number
                          const rawValue = e.target.value.replace(/[^\d]/g, "")
                          field.onChange(rawValue ? Number.parseInt(rawValue, 10) : "")
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mileage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mileage</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="reserved">Reserved</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter car description and features..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label htmlFor="edit-image">Car Images</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-16 w-16 rounded bg-muted flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Car thumbnail"
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                  <div className="h-16 w-16 rounded bg-muted flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Car thumbnail"
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                </div>
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {files && files.length > 0
                    ? `${files.length} new file(s) selected`
                    : "Drag & drop new images here or click to browse"}
                </p>
                <Input id="edit-image" type="file" multiple className="hidden" onChange={handleFileChange} />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("edit-image")?.click()}
                >
                  Choose Files
                </Button>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

