"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { businessConfig } from "@/config/business.config";
import { trackEvent } from "@/lib/analytics";

const actionClass =
  "flex flex-1 flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-[11px] font-semibold leading-none text-white transition active:scale-95";

/**
 * Sticky mobile conversion bar (hidden from md up): Call / WhatsApp / Book Online.
 * Numbers come from businessConfig so there is one source of truth.
 */
export function QuickActionsBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch justify-between gap-2 border-t border-neutral-800 bg-neutral-950/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
    >
      <a
        href={`tel:${businessConfig.telephoneClean}`}
        aria-label={`Call Angel Tattooz on ${businessConfig.telephone}`}
        className={`${actionClass} bg-neutral-700 hover:bg-neutral-600`}
        onClick={() => trackEvent("contact_call", { method: "sticky_bar" })}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call
      </a>
      <a
        href={businessConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Angel Tattooz on WhatsApp"
        className={`${actionClass} bg-emerald-600 hover:bg-emerald-500`}
        onClick={() => trackEvent("contact_whatsapp", { method: "sticky_bar" })}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        href="/bookings/"
        aria-label="Book a consultation online"
        className={`${actionClass} bg-sky-600 hover:bg-sky-500`}
        onClick={() => trackEvent("book_online_click", { method: "sticky_bar" })}
      >
        <Calendar className="h-5 w-5" aria-hidden="true" />
        Book Online
      </Link>
    </nav>
  );
}
