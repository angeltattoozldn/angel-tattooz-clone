"use client"

const KEY = "at_traffic_context"

/** Capture first-touch UTM + referrer once per browser session. */
export function captureTrafficContext(): void {
  try {
    if (sessionStorage.getItem(KEY)) return
    const p = new URLSearchParams(window.location.search)
    const ctx = {
      utmSource: p.get("utm_source") || undefined,
      utmMedium: p.get("utm_medium") || undefined,
      utmCampaign: p.get("utm_campaign") || undefined,
      referrer: document.referrer || undefined,
      landingPath: window.location.pathname,
    }
    sessionStorage.setItem(KEY, JSON.stringify(ctx))
  } catch {
    /* storage blocked: attribution falls back to Direct */
  }
}

export function readTrafficContext(): string {
  try {
    return sessionStorage.getItem(KEY) || ""
  } catch {
    return ""
  }
}
