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
  areaServed?: string[]
  sameAs?: string[]
  knowsAbout?: string[]
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

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TattooShop', 'LocalBusiness'],
    '@id': 'https://www.angeltattooz.co.uk/#organization',
    name: 'Angel Tattooz',
    description: 'Premier custom tattoo studio in Cockfosters, Barnet, North London specializing in custom designs, black & grey realism, fine line, and cover-ups.',
    url: 'https://www.angeltattooz.co.uk/',
    telephone: '+447949123424',
    priceRange: '££',
    image: 'https://www.angeltattooz.co.uk/icon.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Studio A, 15 Station Parade',
      addressLocality: 'Cockfosters',
      addressRegion: 'Barnet, London',
      postalCode: 'EN4 0DL',
      addressCountry: 'GB',
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Derma Sence',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.6517,
      longitude: -0.1488,
    },
    areaServed: [
      'Cockfosters',
      'Barnet',
      'Southgate',
      'Enfield',
      'Hadley Wood',
      'Potters Bar',
      'Borehamwood',
      'North London',
      'Hertfordshire',
    ],
    sameAs: [
      'https://www.tiktok.com/@angeltattoozldn',
      'https://instagram.com/angeltattoozldn',
      'https://facebook.com/profile.php?id=61558770900820',
      'https://youtube.com/channel/UC6rRXUxTs7eu7rZZtfDXqkQ',
      'https://www.pinterest.com/ink1180/',
    ],
    knowsAbout: [
      'Custom Tattoos',
      'Cover-Up Tattoos',
      'First Tattoo Consultation',
      'Black and Grey Realism',
      'Fine Line Tattoos',
      'Traditional Tattoos',
      'Japanese Sleeve Tattoos',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '11:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        description: 'Appointments Only',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5.0,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1,
    },
  };
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
