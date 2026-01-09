"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Have questions? Ready to book? We'd love to hear from you
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          123 High Street
                          <br />
                          Barnet, London
                          <br />
                          EN5 5XY
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a
                          href="tel:+442012345678"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          020 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a
                          href="mailto:info@angeltattooz.co.uk"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@angeltattooz.co.uk
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Tuesday - Friday: 10:00 AM - 7:00 PM</p>
                          <p>Saturday: 10:00 AM - 6:00 PM</p>
                          <p>Sunday - Monday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                  <div className="flex gap-4">
                    <Button asChild size="lg" className="flex-1">
                      <a
                        href="https://wa.me/442012345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07123 456789"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your tattoo idea..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Find Us</h2>
              <p className="text-lg text-muted-foreground">Located in the heart of Barnet, North London</p>
            </div>
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <div>
                    <p className="text-foreground font-semibold mb-2">Angel Tattooz</p>
                    <p className="text-muted-foreground">123 High Street, Barnet, London EN5 5XY</p>
                  </div>
                  <Button asChild>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=123+High+Street+Barnet+EN5+5XY"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Transport */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Getting Here</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">By Train</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    High Barnet Station (Northern Line) - 8 minutes walk
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">By Car</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Free street parking available nearby. Multiple car parks within 5 minutes walk.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">By Bus</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multiple bus routes stop within 2 minutes walk. Check TfL for routes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
