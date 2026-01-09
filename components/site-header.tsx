"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "HOME", href: "/", id: "nav-home" },
    { name: "ABOUT US", href: "/about", id: "nav-about" },
    { name: "SERVICES", href: "/services", id: "nav-services" },
    { name: "GALLERY", href: "/gallery", id: "nav-gallery" },
    { name: "BOOKINGS", href: "/book", id: "nav-bookings" },
    { name: "PAYMENTS", href: "/payments", id: "nav-payments" },
    { name: "BLOG", href: "/blog", id: "nav-blog" },
    { name: "CONTACT", href: "/contact", id: "nav-contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-display text-3xl text-primary">Angel Tattooz</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-xs font-semibold text-foreground/90 hover:text-primary transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
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
