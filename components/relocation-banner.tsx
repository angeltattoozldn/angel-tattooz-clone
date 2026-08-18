"use client"

import { BUSINESS_CONFIG } from "@/config/business.config"
import { AlertCircle, X } from "lucide-react"
import { useState } from "react"

export function RelocationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!BUSINESS_CONFIG.relocation.isRelocating || !isVisible) {
    return null
  }

  return (
    <div className="bg-primary/90 text-primary-foreground py-3 px-4 relative">
      <div className="mx-auto max-w-7xl flex items-center justify-center relative">
        <div className="flex items-center justify-center gap-3 w-full px-8">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium text-center">
            {BUSINESS_CONFIG.relocation.note}
            {BUSINESS_CONFIG.relocation.estimatedDate && (
              <span className="ml-2 opacity-90">({BUSINESS_CONFIG.relocation.estimatedDate})</span>
            )}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 text-primary-foreground/80 hover:text-primary-foreground transition-colors shrink-0"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
