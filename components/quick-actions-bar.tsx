"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { businessConfig } from "@/config/business.config";
import { trackEvent } from "@/lib/analytics";

/**
 * Floating Call / WhatsApp / Book pill, shown on every breakpoint.
 * Numbers come from businessConfig so there is one source of truth.
 */
export function QuickActionsBar() {
  return (
    <aside
      aria-label="Quick contact and booking bar"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-full border border-white/15 bg-[#181818]/95 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-md transition-transform duration-300 print:hidden"
    >
      <div className="flex w-full items-center justify-between gap-1">
        <a
          href={`tel:${businessConfig.telephoneClean}`}
          aria-label={`Call Angel Tattooz on ${businessConfig.telephone}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2.5 text-xs font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white active:scale-95 sm:text-sm"
          onClick={() => trackEvent("contact_call", { method: "sticky_bar" })}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D4C59D]">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span>Call</span>
        </a>

        <a
          href={businessConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Angel Tattooz on WhatsApp"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2.5 text-xs font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white active:scale-95 sm:text-sm"
          onClick={() => trackEvent("contact_whatsapp", { method: "sticky_bar" })}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span>WhatsApp</span>
        </a>

        <Link
          href="/bookings/"
          aria-label="Book a consultation online"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#D4C59D] px-3 py-2.5 text-xs font-semibold text-zinc-950 shadow-md transition-all hover:bg-white active:scale-95 sm:text-sm"
          onClick={() => trackEvent("book_online_click", { method: "sticky_bar" })}
        >
          <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Book</span>
        </Link>
      </div>
    </aside>
  );
}
