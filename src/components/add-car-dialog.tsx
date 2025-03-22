"use client"
import type React from "react"
import { useState } from "react"
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
import {
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue } from "@/components/ui/select"
import { Loader2, Plus, Upload, X } from "lucide-react"
import { createClient } from '@supabase/supabase-js'
import { anonkey, supabaseUrl } from "@/lib/supabase"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useCarContext } from "@/Context/CarContext"

type CarFormValues = {
  model: string
  make: string
  category: string
  year: string
  price: string
  seater: string
  mileage: string
  status: string
  description: string
}

export function AddCarDialog() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const supabase = createClient(supabaseUrl, anonkey);
  const {cars, setCars} = useCarContext();

  const form = useForm<CarFormValues>({
    defaultValues: {
      model: "",
      make: "",
      category: "",
      year: "",
      price: "",
      seater: "0",
      mileage: "0",
      status: "available",
      description: "",
    },
  })

  const handleImageUpload = async (files: File[]) => {
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'default2');
  
      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dcr8jrvub/image/upload', {
          method: 'POST',
          body: formData,
        });
  
        const data = await res.json();
        return data.secure_url; // Return uploaded image URL
      } catch (error) {
        console.error('Upload failed:', error);
        return null; // Return null for failed uploads
      }
    });
  
    const uploadedUrls = await Promise.all(uploadPromises);
    console.log('Uploaded Images:', uploadedUrls);
    return uploadedUrls;
  };

  const onSubmit = form.handleSubmit(async(values) => {
    setIsSubmitting(true)
    const urls = await handleImageUpload(imageFiles);
    const payload = { ...values, images: urls };
    const { data, error } = await supabase
    .from('cars')
    .insert([
      payload
    ])
    .select()
    setIsSubmitting(false)
    setOpen(false)
    form.reset()
    setImageFiles([])
    if (data) {
      toast.success('Car added successfully')
      setCars(data)
      return
    }
    if (error) {
      console.error('Error adding car:', error.message)
      return
    }
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(imageFiles.length >= 3 || e.target.files?.length! > 3) {
      alert('You can only upload a maximum of 3 images')
      return
    }
    const files = e.target.files
    if (files) {
      setImageFiles((prev) => prev.concat(Array.from(files)))
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add New Car
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80%] overflow-scroll" >
        <DialogHeader>
          <DialogTitle>Add New Car</DialogTitle>
          <DialogDescription>Enter the details of the new car to add it to your inventory.</DialogDescription>
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
                      <Input required placeholder="Tesla Model S" {...field} />
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
                    <Select onValueChange={field.onChange} required defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select make"  />
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
                    <Select onValueChange={field.onChange} required defaultValue={field.value}>
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
                    <Select onValueChange={field.onChange} required defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          new Array(50).fill(0).map((_, index) => {
                            const year = new Date().getFullYear() - index
                            return <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                          })
                        }
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
                      placeholder="100,000,000"
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
                name="seater"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seater</FormLabel>
                    <FormControl>
                      <Input type="number" required placeholder="4" min="0" {...field} />
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
                      <Input type="number" placeholder="0" min="0" {...field} />
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
                  <Select required onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue  placeholder="Select status" />
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
              <Label htmlFor="image">Car Images</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {imageFiles && imageFiles.length > 0
                    ? `${imageFiles.length} file(s) selected`
                    : "Drag & drop images here or click to browse"}
                </p>
                <Input  id="image" type="file" multiple className="hidden" onChange={handleFileChange} />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("image")?.click()}
                >
                  Choose Files
                </Button>
                <div className="grid grid-cols-3 gap-2">
                  {imageFiles.map((file, index) => (
                    <div key={index} className="relative flex items-center gap-2">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="Car Image"
                        width={100}
                        height={100}
                        layout="fixed"
                        className="rounded-md"
                      />
                      <Button type="button" variant="secondary" className="absolute top-0 right-0 p-1 cursor-pointer" onClick={() => setImageFiles((prev) => prev.filter((_, i) => i !== index))}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(false)
                  form.reset()
                  setImageFiles([])
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  "Add Car"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

