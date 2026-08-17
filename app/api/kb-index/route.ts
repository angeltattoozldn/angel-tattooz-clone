import { BUSINESS_CONFIG } from "@/config/business.config"
import { SERVICE_AREAS } from "@/config/service-areas.config"
import { NextResponse } from "next/server"

export async function GET() {
  const knowledgeBase = {
    pages: [
      {
        path: "/",
        title: "Home - Angel Tattooz",
        description: "Premium tattoo studio in North London",
        type: "homepage",
        priority: 1.0,
      },
      {
        path: "/about-us/",
        title: "About Us",
        description: "Learn about Angel Tattooz, our artists, and our studio",
        type: "about",
        priority: 0.9,
      },
      {
        path: "/services/",
        title: "Tattoo Services",
        description: "Comprehensive range of tattoo services",
        type: "services-hub",
        priority: 0.9,
      },
      {
        path: "/gallery/",
        title: "Tattoo Gallery",
        description: "Portfolio of our tattoo work",
        type: "gallery",
        priority: 0.8,
      },
      {
        path: "/faq/",
        title: "Frequently Asked Questions",
        description: "Answers to common tattoo questions",
        type: "faq",
        priority: 0.8,
      },
      {
        path: "/aftercare/",
        title: "Tattoo Aftercare Guide",
        description: "Complete guide to caring for your new tattoo",
        type: "guide",
        priority: 0.7,
      },
      {
        path: "/contact-us/",
        title: "Contact Us",
        description: "Get in touch with Angel Tattooz",
        type: "contact",
        priority: 0.7,
      },
      {
        path: "/bookings/",
        title: "Book Appointment",
        description: "Schedule your tattoo consultation and session",
        type: "booking",
        priority: 0.9,
      },
    ],
    services: [
      { slug: "custom-tattoo-design", name: "Custom Tattoo Design" },
      { slug: "black-gray-tattoos", name: "Black & Gray Tattoos" },
      { slug: "color-tattoos", name: "Color Tattoos" },
      { slug: "cover-up-tattoos", name: "Cover-Up Tattoos" },
      { slug: "fine-line-tattoos", name: "Fine Line Tattoos" },
      { slug: "tattoo-consultations", name: "Tattoo Consultations" },
    ],
    styles: [
      { slug: "realism", name: "Realism Tattoos" },
      { slug: "fine-line", name: "Fine Line Tattoos" },
      { slug: "black-grey", name: "Black & Grey Tattoos" },
      { slug: "traditional", name: "Traditional Tattoos" },
      { slug: "cover-ups", name: "Cover-Up Tattoos" },
      { slug: "first-tattoo", name: "First Tattoo" },
    ],
    serviceAreas: SERVICE_AREAS.map((area) => ({
      slug: area.slug,
      name: area.name,
      path: `/areas/${area.slug}`,
    })),
    contact: {
      phone: BUSINESS_CONFIG.contact.phoneDisplay,
      email: BUSINESS_CONFIG.contact.email,
      whatsapp: BUSINESS_CONFIG.contact.whatsapp,
      address: `${BUSINESS_CONFIG.primaryAddress.street}, ${BUSINESS_CONFIG.primaryAddress.area}, ${BUSINESS_CONFIG.primaryAddress.city} ${BUSINESS_CONFIG.primaryAddress.postcode}`,
    },
    metadata: {
      lastUpdated: new Date().toISOString(),
      version: "1.0",
      totalPages: 8,
    },
  }

  return NextResponse.json(knowledgeBase, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
