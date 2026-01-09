"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, MessageCircle, Phone, Clock, Check } from "lucide-react"
import { useState } from "react"

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    preferredDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
  }

  const services = [
    "Custom Tattoo Design",
    "Black & Gray Tattoos",
    "Color Tattoos",
    "Cover-Up Tattoos",
    "Tattoo Consultation",
    "Touch-Up / Rework",
    "Not Sure Yet",
  ]

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">
                Book Your Consultation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Start your tattoo journey with a free consultation. Let's discuss your vision and create something
                extraordinary together.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-primary/50">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Fastest response time</p>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/442012345678" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                  <p className="text-sm text-muted-foreground">Speak to us directly</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="tel:+442012345678">020 1234 5678</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Online Form</h3>
                  <p className="text-sm text-muted-foreground">Book at your convenience</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Fill Out Form Below
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple steps from consultation to completion</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Book Consultation",
                  description: "Schedule a free consultation to discuss your ideas",
                },
                {
                  step: "02",
                  title: "Design Creation",
                  description: "Our artist creates custom artwork for your approval",
                },
                {
                  step: "03",
                  title: "Tattoo Session",
                  description: "Your tattoo is expertly applied in a comfortable environment",
                },
                {
                  step: "04",
                  title: "Aftercare Support",
                  description: "We guide you through healing with detailed instructions",
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-block">
                    <span className="font-display text-6xl text-primary/20">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking-form" className="py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Request a Consultation</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
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
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07123 456789"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type</Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date (Optional)</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Tell Us About Your Tattoo Idea *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your tattoo idea, including size, placement, style preferences, and any reference images you have..."
                      rows={6}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Include details about size, placement, colors, and style preferences
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      What to Expect
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Free consultation with no obligation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Response within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Detailed quote and timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Design mockups before you commit</span>
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Submit Consultation Request
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    By submitting this form, you agree to be contacted about your consultation
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Opening Hours</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Tuesday - Friday</span>
                          <span className="font-semibold">10:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span className="font-semibold">10:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monday</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Evening appointments available by request. Same-day consultations subject to availability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
