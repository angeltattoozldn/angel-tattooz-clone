// app/layout.tsx

import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { RelocationBanner } from "@/components/relocation-banner"
import { SchemaScript } from "@/components/schema-script"
import { generateLocalBusinessSchema } from "@/lib/schema"
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



// 1. Define your Production Base URL (Critical for Canonical/OG)
const BASE_URL = "https://www.angeltattooz.co.uk"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Angel Tattooz | Premium Tattoo Studio in North London",
    template: "%s | Angel Tattooz"
  },
  // 2. Shortened Description (Report complained it was >160 chars)
  description:
    "Award-winning North London tattoo studio. Specialists in custom designs, realism & cover-ups. Expert artists serving Barnet, Cockfosters & Enfield.",
  keywords: [
    "tattoo studio",
    "North London tattoo",
    "custom tattoos",
    "tattoo artists",
    "Barnet",
    "Cockfosters",
    "Enfield",
  ],
  // 3. Fix Missing Canonical Tag (Report Error)
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  // 4. Fix Missing OG Data (Report Error)
  openGraph: {
    title: "Angel Tattooz | Premium Tattoo Studio in North London",
    description: "Award-winning tattoo studio in North London. Custom designs, expert artists.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // 5. Generate the Schema
  const orgSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className={`font-sans antialiased ${poppins.variable} ${heyAugust.variable}`}>
        {/* 6. Inject Schema JSON-LD */}
        <SchemaScript schema={orgSchema} />

        <RelocationBanner />
        {children}
        <Analytics />
      </body>
    </html>
  )
}