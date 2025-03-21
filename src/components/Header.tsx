import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"

interface HeaderProps {
  current: string
}

const Header = ({current} : HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
            <Image 
            src="/images/logo.png" 
            width={30} 
            height={30} 
            alt="okopi logo"
            />
            <span className="text-xl font-bold">Okopi Autos</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className={`${current ==='home' ? 'font-bold' : ''} transition-colors hover:text-foreground/80`}>
            Home
            </Link>
            <Link href="/cars" className={`${current ==='cars' ? 'font-bold' : ''} transition-colors hover:text-foreground/80`}>
            Cars
            </Link>
            <Link href="/new-arrivals" className={`${current ==='new' ? 'font-bold' : ''} transition-colors hover:text-foreground/80`}>
            New Arrivals
            </Link>
            <Link href="/rental" className={`${current ==='rentals' ? 'font-bold' : ''} transition-colors hover:text-foreground/80`}>
            Rentals
            </Link>
            <Link href="/about" className={`${current ==='about' ? 'font-bold' : ''} transition-colors hover:text-foreground/80`}>
            About
            </Link>
            <Link href="/contact" className={`${current ==='contact' ? 'font-bold' : ''} transition-colors hover:text-foreground/80`}>
            Contact
            </Link>
        </nav>
        <div className="flex items-center gap-2">
            <Link href="/dashboard">
            <Button variant="outline" size="sm" className="hidden sm:flex">
                Dashboard
            </Button>
            </Link>
            <Link href="/login">
            <Button size="sm">Sign In</Button>
            </Link>
        </div>
        </div>
    </header>
  )
}

export default Header
