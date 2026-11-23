import { businessConfig, BUSINESS_CONFIG } from "@/config/business.config"

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

export interface TattooParlor extends Organization {
  "@type": "TattooParlor"
  areaServed?: Array<{ "@type": string; name: string }> | string[]
  sameAs?: string[]
  knowsAbout?: string[]
}

export type LocalBusiness = TattooParlor

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
  speakable?: {
    "@type": string
    cssSelector: string[]
  }
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

export function generateTattooParlorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": businessConfig.name,
    "image": "https://www.angeltattooz.co.uk/logo.png",
    "@id": "https://www.angeltattooz.co.uk/#tattooparlor",
    "url": "https://www.angeltattooz.co.uk/",
    "telephone": businessConfig.telephoneClean,
    "priceRange": "££-£££",
    "description": "Premier studio-led custom tattoo studio in London, providing medical-grade sterilization, private consultation sanctuaries, and specialized artistry.",
    "hasMap": `https://maps.google.com/?cid=${businessConfig.cid}`,
    "sameAs": [
      `https://maps.google.com/?cid=${businessConfig.cid}`,
      "https://www.instagram.com/angeltattoozldn/",
      "https://www.tiktok.com/@angeltattoozldn",
      "https://www.facebook.com/angeltattoozldn"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address.street,
      "addressLocality": businessConfig.address.city,
      "postalCode": businessConfig.address.postcode,
      "addressCountry": businessConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessConfig.geo.latitude,
      "longitude": businessConfig.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:30",
        "closes": "18:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(businessConfig.reviews.googleRating),
      "reviewCount": String(businessConfig.reviews.reviewCount),
      "bestRating": "5",
      "worstRating": "1"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": businessConfig.bookingUrl,
        "inLanguage": "en-GB",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Tattoo Consultation Appointment"
      }
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "London" },
      { "@type": "AdministrativeArea", "name": "North London" },
      { "@type": "AdministrativeArea", "name": "Barnet" },
      { "@type": "AdministrativeArea", "name": "Cockfosters" },
      { "@type": "AdministrativeArea", "name": "Southgate" },
      { "@type": "AdministrativeArea", "name": "Enfield" },
      { "@type": "AdministrativeArea", "name": "Potters Bar" },
      { "@type": "AdministrativeArea", "name": "Hertfordshire" }
    ],
    "knowsAbout": [
      "Tattoo Cover-ups",
      "First-Time Tattoos",
      "Fine Line Tattoos",
      "Black and Grey Realism",
      "Custom Tattoo Art"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Specialist Tattoo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Tattoo Cover-Ups & Reworks",
            "description": "Advanced dermal pigment analysis and blast-over transformation for existing tattoos."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP",
            "price": "££-£££"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "First-Time Tattoo Consultation & Guide",
            "description": "Low-anxiety, private consultation sanctuary tailored for first-time clients."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP",
            "price": "££"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Black & Grey Realism Tattoos",
            "description": "High-contrast, smooth-gradient realism and fine-needle detailed portraiture."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP",
            "price": "££-£££"
          }
        }
      ]
    }
  };
}

export const generateLocalBusinessSchema = generateTattooParlorSchema;

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
      "@type": "TattooParlor",
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
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h2", "h3", ".faq-question", ".faq-answer"],
    },
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
      "@type": "TattooParlor",
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
