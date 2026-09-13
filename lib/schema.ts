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
    '@type': 'TattooParlor',
    name: 'Angel Tattooz',
    image: 'https://www.angeltattooz.co.uk/logo.png',
    '@id': 'https://www.angeltattooz.co.uk/#tattooparlor',
    url: 'https://www.angeltattooz.co.uk/',
    telephone: '+447949123424',
    priceRange: '££-£££',
    description: 'We are a premier tattoo studio in London, operating as a modern tattoo shop that honors the history of the classic London tattoo parlour.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Studio A, 15 Station Parade',
      addressLocality: 'Barnet, London',
      postalCode: 'EN4 0DL',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.6511,
      longitude: -0.1495,
    },
    hasMap: 'https://maps.app.goo.gl/aUofWWXSFmsiukHt5',
    sameAs: [
      'https://maps.app.goo.gl/aUofWWXSFmsiukHt5',
      'https://www.instagram.com/angeltattoozldn/',
      'https://www.tiktok.com/@angeltattoozldn',
      'https://www.facebook.com/angeltattoozldn',
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'London' },
      { '@type': 'AdministrativeArea', name: 'North London' },
      { '@type': 'AdministrativeArea', name: 'Barnet' },
      { '@type': 'AdministrativeArea', name: 'Cockfosters' },
      { '@type': 'AdministrativeArea', name: 'Southgate' },
      { '@type': 'AdministrativeArea', name: 'Enfield' },
      { '@type': 'AdministrativeArea', name: 'Potters Bar' },
      { '@type': 'AdministrativeArea', name: 'Hertfordshire' },
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
    knowsAbout: [
      'Tattoo Cover-ups',
      'First-Time Tattoos',
      'Fine Line Tattoos',
      'Black and Grey Realism',
      'Custom Tattoo Art',
    ],
    makesOffer: {
      '@type': 'OfferCatalog',
      name: 'Specialist Tattoo Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Tattoo Cover-Ups',
            description: 'Expert transformation and concealment of old, faded, or unwanted tattoos using advanced shading and custom artistry.',
          },
          priceRange: '££-£££',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'First-Time Tattoo Consultation & Guide',
            description: 'Personalized, patient consultation for first-time clients including design sizing, anatomical placement, and comprehensive aftercare.',
          },
          priceRange: '££',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Black & Grey Realism Tattoos',
            description: 'Photorealistic black and grey portraits, statues, wildlife, and intricate dark-and-light contrast designs.',
          },
          priceRange: '££-£££',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
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
