"use client"

import { forwardRef, type AnchorHTMLAttributes } from "react"
import { trackEvent } from "@/lib/analytics"

type TrackedContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: "contact_call" | "contact_whatsapp"
  location: string
}

/**
 * Drop-in replacement for a plain <a> call/WhatsApp link on server-component
 * pages (contact, areas, blog) so every touchpoint fires the same GA4 event
 * the sticky bar and footer already fire, not just the mobile ones.
 * Forwards its ref since it is also used inside Button asChild (Radix Slot).
 */
export const TrackedContactLink = forwardRef<HTMLAnchorElement, TrackedContactLinkProps>(
  function TrackedContactLink({ event, location, onClick, ...anchorProps }, ref) {
    return (
      <a
        ref={ref}
        {...anchorProps}
        onClick={(e) => {
          trackEvent(event, { method: location })
          onClick?.(e)
        }}
      />
    )
  }
)
