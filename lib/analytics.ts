/**
 * GA4 measurement ID and typed event helpers.
 * Client-side only: GA4 has no visibility into server actions, so conversion
 * events are fired from the components where the user action actually happens.
 */
export const GA_MEASUREMENT_ID = "G-6072WMC4VJ"

type GtagEvent = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: GtagEvent): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}
