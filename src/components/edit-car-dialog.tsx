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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Loader2, Upload } from "lucide-react"

interface EditCarDialogProps {
  car: {
    name: string
    make?: string
    category: string
    price: number
    year?: number
    mileage?: number
    status: string
    description?: string
  }
}

export function EditCarDialog({ car }: EditCarDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setOpen(false)
      // Here you would typically update the car in your database
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="h-3.5 w-3.5" />
          <span className="sr-only">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Edit Car</DialogTitle>
          <DialogDescription>Update the details of {car.name}.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Car Name/Model</Label>
              <Input id="edit-name" defaultValue={car.name} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-make">Make</Label>
              <Select defaultValue={car.make || "tesla"} required>
                <SelectTrigger id="edit-make">
                  <SelectValue placeholder="Select make" />
                </SelectTrigger>
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
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-category">Category</Label>
              <Select defaultValue={car.category} required>
                <SelectTrigger id="edit-category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-year">Year</Label>
              <Select defaultValue={car.year?.toString() || "2023"} required>
                <SelectTrigger id="edit-year">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-price">Price ($)</Label>
              <Input id="edit-price" type="number" defaultValue={car.price} min="0" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-mileage">Mileage</Label>
              <Input id="edit-mileage" type="number" defaultValue={car.mileage || 0} min="0" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-status">Status</Label>
            <Select defaultValue={car.status} required>
              <SelectTrigger id="edit-status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">Description</Label>
            <Textarea
              id="edit-description"
              defaultValue={car.description || ""}
              placeholder="Enter car description and features..."
              className="min-h-[100px]"
            />
          </div>

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
              <p className="text-sm text-muted-foreground">Drag & drop new images here or click to browse</p>
              <Input id="edit-image" type="file" multiple className="hidden" />
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
      </DialogContent>
    </Dialog>
  )
}

