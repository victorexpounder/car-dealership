'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, ChevronRight, Star } from "lucide-react"
import CarCard from "@/components/car-card"
import NewsletterPopup from "@/components/newsletter-popup"
import FeaturedSection from "@/components/featured-section"
import Image from "next/image"
import Header from "@/components/Header"
import { useEffect, useState } from "react"
import HeroSection from "@/components/HeroSection"
import NewArrivalsSection from "@/components/NewArrivalsSection"
import ServicesSection from "@/components/ServicesSection"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header current={'home'} />
      <main className="flex-1">
        <HeroSection />
        <NewArrivalsSection />
        <FeaturedSection />
        <ServicesSection />
        <Testimonials />
      </main>

      <Footer/>
      <NewsletterPopup />
    </div>
  )
}

