"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, MessageCircle, Phone, Clock, Check, ShieldAlert, CreditCard } from "lucide-react"
import { useState, useTransition } from "react"
import { submitBooking, type BookingResult } from "@/app/actions/booking"
import { BUSINESS_CONFIG } from "@/config/business.config"

export default function BookPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [submissionResult, setSubmissionResult] = useState<BookingResult | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    placement: "",
    appointmentType: "consultation",
    description: "",
    preferredDate: "",
    preferredTime: "",
  })

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      setFormStatus("idle")
      setErrorMessage("")
      const result = await submitBooking(formData)
      if (result.success) {
        setSubmissionResult(result)
        setFormStatus("success")
      } else {
        setErrorMessage(result.error || "Unable to submit your request. Please try again or reach out on WhatsApp.")
        setFormStatus("error")
      }
    })
  }

  const services = [
    "Custom Tattoo Design",
    "Black & Gray Tattoos",
    "Color Tattoos",
    "Cover-Up Tattoos",
    "Fine-Line Tattoos",
    "Tattoo Consultation",
    "Touch-Up / Rework",
    "Not Sure Yet",
  ]

  const isTattooSession = formData.appointmentType === "tattoo"

  return (
    <>
      <SiteHeader />
      <main>
        {/* =========================================
            1. HERO SECTION
           ========================================= */}
        <section className="relative w-full py-37.5 items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/services-hero.webp"
              alt="Angel Tattooz Bookings"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-[#FAD5E6] font-hey text-[60px] md:text-[90px] leading-none drop-shadow-xl">
              Bookings & Consultations
            </h1>
          </div>
        </section>

        {/* =========================================
            2. INTRO TEXT
           ========================================= */}
        <section className="bg-[#121212] pt-16 pb-10 px-4">
          <div className="container mx-auto max-w-285 text-center">
            <div className="max-w-200 mx-auto">
              <p className="text-white font-sans text-[16px] font-normal leading-[1.6]">
                Start your tattoo journey with a consultation. Let's discuss your vision and create something extraordinary together.
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
                  <p className="text-sm text-muted-foreground">Fastest response for questions & consultations</p>
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
                  <p className="text-sm text-muted-foreground">Speak directly with our studio</p>
                  <div className="flex flex-col w-full gap-2 mt-4">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href={`tel:${BUSINESS_CONFIG.contact.phone}`}>{BUSINESS_CONFIG.contact.phoneDisplay}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Online Booking</h3>
                  <p className="text-sm text-muted-foreground">Submit your ideas or secure with £50 deposit</p>
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
                  title: "Inquire or Consult",
                  description: "Schedule a consultation or reach out to discuss your ideas with an artist",
                },
                {
                  step: "02",
                  title: "Secure Your Slot",
                  description: "Tattoo appointments are confirmed with a £50 deposit to reserve your time",
                },
                {
                  step: "03",
                  title: "Design & Session",
                  description: "Your tattoo is custom crafted and expertly applied in our sterile sanctuary",
                },
                {
                  step: "04",
                  title: "Aftercare Support",
                  description: "We guide you through healing with hospital-grade instructions and support",
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
            <Card className="border-zinc-800 bg-[#141414]">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-semibold text-foreground mb-4">
                    {isTattooSession ? "Book Your Tattoo Session" : "Request a Consultation"}
                  </h2>
                  <p className="text-muted-foreground">
                    {isTattooSession 
                      ? "Complete your details below and secure your appointment with a £50 deposit."
                      : "Fill out the form below or contact us directly on WhatsApp for immediate scheduling."}
                  </p>
                </div>

                {formStatus === "success" ? (
                  submissionResult?.isDepositRequired ? (
                    <div className="bg-neutral-900 border border-[#D4C59D] rounded-xl p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                      <div className="w-16 h-16 rounded-full bg-[#D4C59D]/20 text-[#D4C59D] flex items-center justify-center mx-auto text-3xl">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-white">Booking Details Received!</h3>
                      <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
                        Thank you, <strong>{submissionResult?.customerName}</strong>. To finalize your tattoo appointment and secure your artist's diary slot, please pay the <strong>£50 booking deposit</strong> via our secure Stripe checkout.
                      </p>

                      <div className="pt-2">
                        <a
                          href={submissionResult?.depositUrl || "https://buy.stripe.com/9AQ4je1EQ3ff7T24gh"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#D4C59D] hover:bg-white text-zinc-950 font-bold text-base py-4 px-8 rounded-lg shadow-lg shadow-[#D4C59D]/20 transition-all active:scale-95"
                        >
                          <CreditCard className="w-5 h-5" />
                          Pay £50 Deposit via Stripe →
                        </a>
                      </div>

                      <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 space-y-2">
                        <p>
                          Prefer direct bank transfer?{" "}
                          <Link href="/payments/" className="text-[#D4C59D] hover:underline">
                            View bank deposit details
                          </Link>
                        </p>
                        <p>
                          Questions? Message us directly on{" "}
                          <a 
                            href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsapp.replace('+', '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:underline font-semibold"
                          >
                            WhatsApp
                          </a>
                        </p>
                      </div>

                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-zinc-400 hover:text-white" 
                        onClick={() => {
                          setFormStatus("idle")
                          setSubmissionResult(null)
                        }}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-neutral-900 border border-emerald-500/40 rounded-xl p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
                      <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
                        Thank you, <strong>{submissionResult?.customerName}</strong>. Our studio team will review your tattoo idea and contact you within 24 hours to confirm your consultation.
                      </p>

                      <div className="pt-2">
                        <a
                          href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsapp.replace('+', '')}?text=Hi%20Angel%20Tattooz%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(submissionResult?.customerName || '')}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base py-3.5 px-8 rounded-lg shadow-lg shadow-[#25D366]/20 transition-all active:scale-95"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Message on WhatsApp for Instant Confirmation
                        </a>
                      </div>

                      <div className="pt-4 border-t border-zinc-800">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-zinc-400 hover:text-white" 
                          onClick={() => {
                            setFormStatus("idle")
                            setSubmissionResult(null)
                          }}
                        >
                          Submit Another Request
                        </Button>
                      </div>
                    </div>
                  )
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
                          className="bg-zinc-900/60 border-zinc-800"
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
                          className="bg-zinc-900/60 border-zinc-800"
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
                          className="bg-zinc-900/60 border-zinc-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Tattoo Style / Service *</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          required
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                          className="bg-zinc-900/60 border-zinc-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointmentType">Appointment Type *</Label>
                        <select
                          id="appointmentType"
                          value={formData.appointmentType}
                          onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                          required
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <option value="consultation">Consultation (Discuss Concept & Design)</option>
                          <option value="tattoo">Tattoo Session (£50 Deposit Required to Secure)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="bg-zinc-900/60 border-zinc-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time (Hours: 11:30 AM – 6:30 PM)</Label>
                        <select
                          id="preferredTime"
                          value={formData.preferredTime || ""}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <option value="">Select a time slot (from 11:30 AM)</option>
                          <option value="11:30 AM">11:30 AM (Opening Slot)</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="01:30 PM">01:30 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="02:30 PM">02:30 PM</option>
                          <option value="03:00 PM">03:00 PM</option>
                          <option value="03:30 PM">03:30 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                          <option value="04:30 PM">04:30 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="05:30 PM">05:30 PM</option>
                          <option value="06:00 PM">06:00 PM (Final Slot)</option>
                          <option value="Flexible">Flexible (Any Available Slot)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Tell Us About Your Tattoo Idea *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Describe your tattoo idea, size, style, or any reference details..."
                        rows={5}
                        required
                        className="bg-zinc-900/60 border-zinc-800"
                      />
                    </div>

                    {/* Deposit notice dynamically rendered when Tattoo Session is selected */}
                    {isTattooSession ? (
                      <div className="bg-[#D4C59D]/10 border border-[#D4C59D]/40 rounded-lg p-5 space-y-2 animate-in fade-in duration-200">
                        <h4 className="font-semibold text-[#D4C59D] flex items-center gap-2 text-sm">
                          <CreditCard className="h-4 w-4 shrink-0" />
                          £50 Deposit Required to Confirm Tattoo Sessions
                        </h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          To protect our artists' studio time, tattoo bookings are only secured once the <strong>£50 booking advance</strong> is completed. Submitting below will save your details and guide you to our secure Stripe checkout.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4 text-xs text-zinc-400 space-y-1">
                        <p className="text-zinc-200 font-medium">Need an immediate answer?</p>
                        <p>
                          Consultations can also be arranged directly via WhatsApp or telephone for same-day availability.
                        </p>
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="bg-red-500/10 border border-red-500/40 rounded-lg p-3 text-red-400 text-sm">
                        {errorMessage || "Unable to submit your request. Please message us on WhatsApp or call our studio."}
                      </div>
                    )}

                    <div className="bg-muted/30 border border-zinc-800/80 rounded-lg p-5 space-y-3">
                      <h3 className="font-semibold text-foreground flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#D4C59D]" />
                        Important Studio Policies
                      </h3>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4C59D] mt-0.5 shrink-0" />
                          <span>Tattoo session appointments require a £50 deposit to secure your slot.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4C59D] mt-0.5 shrink-0" />
                          <span>Our studio is located at Studio A, 15 Station Parade, Cockfosters EN4 0DL.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4C59D] mt-0.5 shrink-0" />
                          <span>We confirm all appointments within 24 hours of submission.</span>
                        </li>
                      </ul>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className={`w-full text-base font-bold py-6 ${
                        isTattooSession 
                          ? "bg-[#D4C59D] hover:bg-white text-zinc-950" 
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`} 
                      disabled={isPending}
                    >
                      {isPending 
                        ? "Submitting..." 
                        : isTattooSession 
                          ? "Proceed to Pay £50 Deposit & Book" 
                          : "Submit Consultation Request"}
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
            <Card className="border-zinc-800 bg-[#141414]">
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
                          <span>Monday – Saturday</span>
                          <span className="font-semibold text-foreground">{BUSINESS_CONFIG.openingHours.monday}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-semibold text-foreground">{BUSINESS_CONFIG.openingHours.sunday}</span>
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
