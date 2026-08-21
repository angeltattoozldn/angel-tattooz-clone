import { BUSINESS_CONFIG } from "@/config/business.config"
import { SERVICE_AREAS } from "@/config/service-areas.config"
import { NextResponse } from "next/server"

export async function GET() {
  const brandFeed = {
    business: {
      name: BUSINESS_CONFIG.businessName,
      tagline: "Art You Can Wear",
      type: "Tattoo Studio",
      established: "2010",
      location: {
        address: `${BUSINESS_CONFIG.primaryAddress.street}, ${BUSINESS_CONFIG.primaryAddress.area}, ${BUSINESS_CONFIG.primaryAddress.city} ${BUSINESS_CONFIG.primaryAddress.postcode}`,
        city: BUSINESS_CONFIG.primaryAddress.city,
        area: BUSINESS_CONFIG.primaryAddress.area,
        postcode: BUSINESS_CONFIG.primaryAddress.postcode,
      },
      contact: {
        phone: BUSINESS_CONFIG.contact.phoneDisplay,
        phone2: BUSINESS_CONFIG.contact.phone2Display,
        whatsapp: BUSINESS_CONFIG.contact.whatsapp,
        email: BUSINESS_CONFIG.contact.email,
      },
      hours: BUSINESS_CONFIG.openingHours,
    },
    services: [
      {
        id: "custom-tattoo-design",
        name: "Custom Tattoo Design",
        category: "Custom Work",
        popular: true,
      },
      {
        id: "black-gray-tattoos",
        name: "Black & Gray Tattoos",
        category: "Style",
        popular: true,
      },
      {
        id: "color-tattoos",
        name: "Color Tattoos",
        category: "Style",
        popular: true,
      },
      {
        id: "cover-up-tattoos",
        name: "Cover-Up Tattoos",
        category: "Specialty",
        popular: true,
      },
      {
        id: "fine-line-tattoos",
        name: "Fine Line Tattoos",
        category: "Style",
        popular: false,
      },
      {
        id: "tattoo-consultations",
        name: "Tattoo Consultations",
        category: "Service",
        popular: false,
      },
    ],
    serviceAreas: SERVICE_AREAS.map((area) => ({
      name: area.name,
      slug: area.slug,
      distance: area.distance,
      travelTime: area.travelTime,
    })),
    styles: [
      "Realism",
      "Fine Line",
      "Black & Grey",
      "Traditional",
      "Neo-Traditional",
      "Watercolor",
      "Geometric",
      "Minimalist",
    ],
    metadata: {
      lastUpdated: new Date().toISOString(),
      version: "1.0",
    },
  }

  return NextResponse.json(brandFeed, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
