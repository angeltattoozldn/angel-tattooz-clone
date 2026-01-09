import { BUSINESS_CONFIG } from "@/config/business.config"

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

export interface WebSite {
  "@context": string
  "@type": string
  name: string
  url: string
  potentialAction: {
    "@type": string
    target: {
      "@type": string
      urlTemplate: string
    }
    "query-input": string
  }
}

export interface Review {
  "@context": string
  "@type": string
  itemReviewed: {
    "@type": string
    name: string
  }
  author: {
    "@type": string
    name: string
  }
  reviewRating: {
    "@context": string
    "@type": string
    ratingValue: number
    bestRating: number
  }
  reviewBody: string
}

export interface HowTo {
  "@context": string
  "@type": string
  name: string
  description: string
  step: Array<{
    "@type": string
    name: string
    text: string
    position: number
  }>
}

export interface VideoObject {
  "@context": string
  "@type": string
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl: string
}

export function generateOrganizationSchema(): LocalBusiness {
  const address = BUSINESS_CONFIG.primaryAddress
  const contact = BUSINESS_CONFIG.contact

  return {
    "@context": "https://schema.org",
    "@type": "TattooShop",
    name: BUSINESS_CONFIG.businessName,
    description:
      "Premium tattoo studio in North London specializing in custom designs, black & gray, and color tattoos.",
    url: "https://www.angeltattooz.co.uk",
    telephone: contact.phone,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.area,
      addressRegion: address.city,
      postalCode: address.postcode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_CONFIG.geo.latitude,
      longitude: BUSINESS_CONFIG.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Barnet" },
      { "@type": "City", name: "Cockfosters" },
      { "@type": "City", name: "Southgate" },
      { "@type": "City", name: "Enfield" },
      { "@type": "City", name: "Finchley" },
      { "@type": "City", name: "Potters Bar" },
      { "@type": "City", name: "Hertsmere" },
      { "@type": "City", name: "Hertfordshire" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:30",
        closes: "18:30",
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
      name: BUSINESS_CONFIG.businessName,
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

export function generateWebSiteSchema(): WebSite {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_CONFIG.businessName,
    url: "https://www.angeltattooz.co.uk",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.angeltattooz.co.uk/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateReviewSchema(review: {
  author: string
  rating: number
  text: string
}): Review {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS_CONFIG.businessName,
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
  }
}

export function generateHowToSchema(howto: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
}): HowTo {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howto.name,
    description: howto.description,
    step: howto.steps.map((step, index) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      position: index + 1,
    })),
  }
}
