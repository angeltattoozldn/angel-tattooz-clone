import type React from "react"
import type { Metadata } from "next"
import { Poppins, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { RelocationBanner } from "@/components/relocation-banner"
import "./globals.css"

// 1. Configure Poppins (Replaces Geist)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// 2. Keep Dancing Script (Existing)
const _dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-display"
})

export const metadata: Metadata = {
  title: "Angel Tattooz | Premium Tattoo Studio in North London",
  description:
    "Award-winning tattoo studio in North London. Custom designs, black & gray, color tattoos, cover-ups. Expert artists serving Barnet, Cockfosters, Southgate, Enfield.",
  keywords: [
    "tattoo studio",
    "North London tattoo",
    "custom tattoos",
    "tattoo artists",
    "Barnet",
    "Cockfosters",
    "Enfield",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Angel Tattooz | Premium Tattoo Studio in North London",
    description: "Award-winning tattoo studio in North London. Custom designs, expert artists.",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212", // Updated to match your Brand Dark color
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      {/* 3. Inject Poppins and Dancing Script variables */}
      <body className={`font-sans antialiased ${poppins.variable} ${_dancingScript.variable}`}>
        <RelocationBanner />
        {children}
        <Analytics />
      </body>
    </html>
  )
}