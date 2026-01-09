export interface Organization {
  "@context": string
  "@type": string
  name: string
  description?: string
  url?: string
  logo?: string
  image?: string[]
  telephone?: string
  address?: {
    "@type": string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    "@type": string
    latitude: number
    longitude: number
  }
  openingHoursSpecification?: Array<{
    "@type": string
    dayOfWeek: string[]
    opens: string
    closes: string
  }>
  priceRange?: string
  aggregateRating?: {
    "@type": string
    ratingValue: number
    reviewCount: number
  }
}

export interface LocalBusiness extends Organization {
  "@type": "TattooShop" | "LocalBusiness"
  areaServed?: Array<{
    "@type": string
    name: string
  }>
}

export interface Service {
  "@context": string
  "@type": string
  serviceType: string
  provider: {
    "@type": string
    name: string
  }
  description?: string
  areaServed?: string
  offers?: {
    "@type": string
    priceCurrency?: string
    price?: string
  }
}

export interface FAQPage {
  "@context": string
  "@type": string
  mainEntity: Array<{
    "@type": string
    name: string
    acceptedAnswer: {
      "@type": string
      text: string
    }
  }>
}

export interface BreadcrumbList {
  "@context": string
  "@type": string
  itemListElement: Array<{
    "@type": string
    position: number
    name: string
    item?: string
  }>
}

export function generateOrganizationSchema(): LocalBusiness {
  return {
    "@context": "https://schema.org",
    "@type": "TattooShop",
    name: "Angel Tattooz",
    description:
      "Premium tattoo studio in North London specializing in custom designs, black & gray, and color tattoos.",
    url: "https://www.angeltattooz.co.uk",
    telephone: "+442012345678",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 High Street",
      addressLocality: "Barnet",
      addressRegion: "London",
      postalCode: "EN5 5XY",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.6502,
      longitude: -0.1999,
    },
    areaServed: [
      { "@type": "City", name: "Barnet" },
      { "@type": "City", name: "Cockfosters" },
      { "@type": "City", name: "Southgate" },
      { "@type": "City", name: "Enfield" },
      { "@type": "City", name: "Finchley" },
      { "@type": "City", name: "Potters Bar" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 127,
    },
  }
}

export function generateBreadcrumbs(items: Array<{ name: string; url?: string }>): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  area?: string
}): Service {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "TattooShop",
      name: "Angel Tattooz",
    },
    description: service.description,
    ...(service.area && { areaServed: service.area }),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
