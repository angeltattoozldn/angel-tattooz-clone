"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "HOME", href: "/", id: "nav-home" },
    { name: "ABOUT US", href: "/about-us/", id: "nav-about" },
    { name: "SERVICES", href: "/services/", id: "nav-services" },
    { name: "GALLERY", href: "/gallery/", id: "nav-gallery" },
    { name: "BOOKINGS", href: "/bookings/", id: "nav-bookings" },
    { name: "PAYMENTS", href: "/payments/", id: "nav-payments" },
    { name: "BLOG", href: "/blog/", id: "nav-blog" },
    { name: "CONTACT", href: "/contact-us/", id: "nav-contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#121212] backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/angel-tattooz-logo-primary.svg"
                alt="Angel Tattooz Logo"
                width={130}
                height={68}
                className="p-2.5"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 h-full">
            {navigation.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative group flex items-center h-full px-1 text-[15px] font-bold tracking-widest transition-colors
                    ${isActive ? "text-[#FAD5E6]" : "text-[#FAD5E6]/90 hover:text-[#FAD5E6]"}`}
                >
                  {item.name}

                  {/* Pixel Perfect Gold Underline */}
                  <span
                    className={`absolute bottom-7 left-0 w-full h-0.75 bg-[#D4C59D] transition-transform duration-300 origin-left
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-[#FAD5E6]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#121212]">
            <div className="flex flex-col gap-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`block py-3 text-base font-bold tracking-widest border-b border-white/5
                    ${pathname === item.href ? "text-[#D4C59D]" : "text-[#FAD5E6]"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}