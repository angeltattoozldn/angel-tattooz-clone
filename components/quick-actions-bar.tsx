"use client"

import Link from "next/link"
import { Phone, Calendar } from "lucide-react"
import { BUSINESS_CONFIG } from "@/config/business.config"

export function QuickActionsBar() {
  const whatsappNumber = BUSINESS_CONFIG.contact.whatsapp.replace("+", "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Angel%20Tattooz%2C%20I%20would%20like%20to%20inquire%20about%20a%20tattoo.`

  return (
    <aside
      aria-label="Quick contact and booking bar"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md bg-[#181818]/95 backdrop-blur-md border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)] rounded-full p-1.5 print:hidden transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-1 w-full">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.contact.phone}`}
          aria-label={`Call Angel Tattooz at ${BUSINESS_CONFIG.contact.phoneDisplay}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full text-zinc-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all text-xs sm:text-sm font-medium"
        >
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#D4C59D]">
            <Phone className="w-3.5 h-3.5" />
          </span>
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Angel Tattooz on WhatsApp"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full text-zinc-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all text-xs sm:text-sm font-medium"
        >
          <span className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 text-[#25D366]">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              className="shrink-0"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.77.818 2.781.819 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.803-5.768-5.803zm3.371 8.203c-.141.399-.817.767-1.129.816-.312.049-.691.074-1.99-.441-1.657-.657-2.716-2.348-2.798-2.457-.082-.11-.667-.887-.667-1.691 0-.804.42-1.2.569-1.359.149-.16.326-.2.434-.2.109 0 .217.001.312.006.1.005.234-.038.366.279.141.339.479 1.171.521 1.258.043.087.072.189.014.304-.058.115-.087.187-.174.288-.087.101-.183.226-.261.303-.087.086-.178.181-.077.355.101.174.45 1.742 1.637 2.378.293.158.528.21.724.148.24-.076.542-.628.687-.843.145-.216.291-.18.491-.106.2.074 1.265.596 1.482.705.217.109.362.164.415.255.053.091.053.528-.088.927z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.662 1.445 5.176L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.677 0-3.25-.499-4.576-1.358l-.328-.212-2.964.83.837-2.909-.23-.343A8.163 8.163 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
            </svg>
          </span>
          <span>WhatsApp</span>
        </a>

        {/* Book Button */}
        <Link
          href="/bookings/"
          aria-label="Book a tattoo appointment online"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#D4C59D] hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book</span>
        </Link>
      </div>
    </aside>
  )
}
