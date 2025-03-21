import { Car } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <footer className="w-full border-t bg-background py-6 px-4 md:py-8 md:px-6">
        <div className="container flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <div className="flex items-center gap-2">
              <Image 
              src="/images/logo.png" 
              width={30} 
              height={30} 
              alt="okopi logo"
              />
              <span className="text-xl font-bold">Okopi Autos</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 md:max-w-xs">
              Providing premium automotive solutions. Your satisfaction is our top priority.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex-1 md:justify-end">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/cars"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Buy a Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rental"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Rent a Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financing"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Financing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-500 transition-colors hover:text-foreground dark:text-gray-400"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-6 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Okopi Autos, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-foreground dark:text-gray-400">
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
                className="h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-foreground dark:text-gray-400">
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
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-foreground dark:text-gray-400">
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
                className="h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    )
}

export default Footer
