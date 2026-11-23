import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { RelocationBanner } from "@/components/relocation-banner"
import { QuickActionsBar } from "@/components/quick-actions-bar"
import { TrafficSourceCapture } from "@/components/traffic-source-capture"
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

import { generateTattooParlorSchema } from "@/lib/schema"

export const gmbVerifiedSchema = generateTattooParlorSchema()

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
      <body className={`font-sans antialiased ${poppins.variable} ${heyAugust.variable} pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0`}>
        <RelocationBanner />
        {children}
        <QuickActionsBar />
        <TrafficSourceCapture />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}