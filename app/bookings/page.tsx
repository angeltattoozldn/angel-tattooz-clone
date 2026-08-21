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
import { useState, useTransition } from "react"
import { submitBooking } from "@/app/actions/booking"
import { BUSINESS_CONFIG } from "@/config/business.config"


export default function BookPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    placement: "",
    appointmentType: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
  })

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      setFormStatus("idle")
      const result = await submitBooking(formData)
      if (result.success) {
        setFormStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          placement: "",
          appointmentType: "",
          description: "",
          preferredDate: "",
          preferredTime: "",
        })
      } else {
        console.error(result.error)
        setFormStatus("error")
      }
    })
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
        <section className="relative py-24 bg-linear-to-b from-background to-secondary/20">
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
                    <a href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
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
                  <div className="flex flex-col w-full gap-2 mt-4">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href={`tel:${BUSINESS_CONFIG.contact.phone}`}>{BUSINESS_CONFIG.contact.phoneDisplay}</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href={`tel:${BUSINESS_CONFIG.contact.phone2}`}>{BUSINESS_CONFIG.contact.phone2Display}</a>
                    </Button>
                  </div>
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

                {formStatus === "success" ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your booking request has been submitted. We will contact you soon.</span>
                    <Button className="mt-4" onClick={() => setFormStatus("idle")}>Submit Another Request</Button>
                  </div>
                ) : (
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
                        <Label htmlFor="service">Tattoo Style / Service *</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select a style</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="placement">Tattoo Placement *</Label>
                        <Input
                          id="placement"
                          value={formData.placement || ""}
                          onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                          placeholder="e.g. Left Forearm"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointmentType">Appointment Type *</Label>
                        <select
                          id="appointmentType"
                          value={formData.appointmentType || ""}
                          onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select type</option>
                          <option value="consultation">Consultation (Free)</option>
                          <option value="tattoo">Tattoo Session (£50 Deposit Required)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Input
                          id="preferredTime"
                          type="time"
                          value={formData.preferredTime || ""}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Tell Us About Your Tattoo Idea *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Describe your tattoo idea in detail..."
                        rows={6}
                        required
                      />
                    </div>

                    {formStatus === "error" && (
                      <div className="text-red-500 text-sm">Please fill out all required fields correctly.</div>
                    )}

                    <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Important Information
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>Tattoo sessions require a £50 deposit to secure your booking.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>We will contact you within 24 hours to confirm your appointment.</span>
                        </li>
                      </ul>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg" disabled={isPending}>
                      {isPending ? "Submitting..." : "Submit Consultation Request"}
                    </Button>
                  </form>
                )}
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
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
