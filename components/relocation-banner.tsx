"use client"

import { useState } from "react"
import { BUSINESS_CONFIG } from "@/config/business.config"
import { MapPin, Navigation, X } from "lucide-react"

export function RelocationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!BUSINESS_CONFIG.relocation.isRelocating || !isVisible) {
    return null
  }

  return (
    <aside
      aria-label="Studio relocation and directions notice"
      className="bg-[#181818] text-white border-b border-[#D4C59D]/30 px-3 py-2 sm:py-2.5 relative shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 pr-8 sm:pr-10 text-center sm:text-left">
        {/* Punchy 2-line address & landmark */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 leading-tight">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 font-semibold text-xs sm:text-sm text-white">
            <MapPin className="h-3.5 w-3.5 text-[#D4C59D] shrink-0" />
            <span>Studio A, 15 Station Parade, Cockfosters, EN4 0DL</span>
          </div>
          <span className="hidden sm:inline text-zinc-500">•</span>
          <span className="text-[11px] sm:text-xs text-zinc-300">
            Next door to Costa Coffee • Minutes away from Cockfosters Tube
          </span>
        </div>

        {/* Embedded Google Maps Directions button */}
        <a
          href={BUSINESS_CONFIG.reviews.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4C59D] hover:bg-white text-zinc-950 font-semibold text-xs transition-all shadow-sm shrink-0 active:scale-95"
          aria-label="Get directions to Angel Tattooz on Google Maps"
        >
          <Navigation className="h-3 w-3 fill-current shrink-0" />
          <span>Get Directions</span>
        </a>

        {/* Dismiss button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1 rounded-full transition-colors"
          aria-label="Dismiss notice"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}

