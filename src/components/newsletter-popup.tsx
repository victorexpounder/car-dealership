"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already subscribed (stored in localStorage)
      const hasSubscribed = localStorage.getItem("newsletter-subscribed")
      if (!hasSubscribed) {
        setOpen(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription process
    setSubmitted(true)
    localStorage.setItem("newsletter-subscribed", "true")

    // Close dialog after 2 seconds
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Stay Updated</DialogTitle>
          <DialogDescription>
            Subscribe to our newsletter to receive notifications about new car listings and exclusive offers.
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
            <p className="text-xs text-center text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        ) : (
          <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center rounded-full p-2 bg-green-100 text-green-600 mb-4">
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
                className="h-6 w-6"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-xl font-medium">Thank You!</h3>
            <p className="text-gray-500 mt-2">You've successfully subscribed to our newsletter.</p>
          </div>
        )}
        
      </DialogContent>
    </Dialog>
  )
}

