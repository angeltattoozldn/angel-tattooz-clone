import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { RelocationBanner } from "@/components/relocation-banner"
import { QuickActionsBar } from "@/components/quick-actions-bar"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const heyAugust = localFont({
  src: [
    {
      path: "../public/fonts/hey-august/HeyAugust.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hey",
  display: "swap",
})

const BASE_URL = "https://www.angeltattooz.co.uk"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Angel Tattooz | Premier Custom Tattoo Studio North London & Cockfosters",
    template: "%s | Angel Tattooz",
  },
  description:
    "Studio-led custom tattoo sanctuary at 15 Station Parade, Cockfosters (EN4 0DL). Specializing in custom cover-ups, fine-line, and black & grey realism.",
  keywords: [
    "tattoo studio",
    "North London tattoo",
    "custom tattoos",
    "tattoo artists",
    "Barnet",
    "Cockfosters",
    "Enfield",
  ],
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Angel Tattooz | Premier Custom Tattoo Studio North London & Cockfosters",
    description:
      "Studio-led custom tattoo sanctuary at 15 Station Parade, Cockfosters (EN4 0DL). Specializing in custom cover-ups, fine-line, and black & grey realism.",
    url: BASE_URL,
    siteName: "Angel Tattooz",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/ogg.jpg",
        width: 1200,
        height: 630,
        alt: "Angel Tattooz Studio Interior",
      },
    ],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
}

export const gmbVerifiedSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Angel Tattooz",
  "image": "https://www.angeltattooz.co.uk/logo.png",
  "@id": "https://www.angeltattooz.co.uk/#tattooparlor",
  "url": "https://www.angeltattooz.co.uk/",
  "telephone": "+447949123424",
  "priceRange": "££-£££",
  "description": "Premier studio-led custom tattoo studio in London, providing medical-grade sterilization, private consultation sanctuaries, and specialized artistry.",
  "hasMap": "https://maps.google.com/?cid=12140880313101569106",
  "sameAs": [
    "https://maps.google.com/?cid=12140880313101569106",
    "https://www.instagram.com/angeltattoozldn/",
    "https://www.tiktok.com/@angeltattoozldn",
    "https://www.facebook.com/angeltattoozldn"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Studio A, 15 Station Parade, Cockfosters",
    "addressLocality": "Barnet, London",
    "postalCode": "EN4 0DL",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.6511,
    "longitude": -0.1495
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "11:30",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "description": "Appointments Only"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": [
    {"@type": "AdministrativeArea", "name": "London"},
    {"@type": "AdministrativeArea", "name": "North London"},
    {"@type": "AdministrativeArea", "name": "Barnet"},
    {"@type": "AdministrativeArea", "name": "Cockfosters"},
    {"@type": "AdministrativeArea", "name": "Southgate"},
    {"@type": "AdministrativeArea", "name": "Enfield"},
    {"@type": "AdministrativeArea", "name": "Potters Bar"},
    {"@type": "AdministrativeArea", "name": "Hertfordshire"}
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
          "name": "Fine-Line & Delicate Tattoo Artistry",
          "description": "Ultra-precise fine-needle texturing, micro-realism, and subtle script artistry."
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gmbVerifiedSchema) }}
        />
      </head>
      <body className={`font-sans antialiased ${poppins.variable} ${heyAugust.variable}`}>
        <RelocationBanner />
        {children}
        <QuickActionsBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}