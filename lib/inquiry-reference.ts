import { randomInt } from "node:crypto"

/**
 * Inquiry reference IDs (AT-XXXXXX) and traffic-source classification.
 * Server-side only (uses node:crypto). The client only sends raw touchpoint
 * data (see lib/traffic-source-client.ts); the label is decided here.
 */

// Unambiguous characters: no 0/O, 1/I/L so references survive being read out over WhatsApp/phone.
const REFERENCE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"
export const REFERENCE_PATTERN = /^AT-[A-HJKMNP-Z2-9]{6}$/

export function generateInquiryReference(): string {
  let id = ""
  for (let i = 0; i < 6; i++) {
    id += REFERENCE_ALPHABET[randomInt(REFERENCE_ALPHABET.length)]
  }
  return `AT-${id}`
}

export type TrafficSourceLabel = "GBP" | "Organic Search" | "Social" | "Referral" | "Direct"

export interface RawTrafficContext {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  referrer?: string
  landingPath?: string
}

export interface TrafficSource {
  label: TrafficSourceLabel
  /** Human-readable evidence for the label, shown to reception. */
  detail: string
  landingPath?: string
}

const SEARCH_HOSTS = /(^|\.)(google|bing|yahoo|duckduckgo|ecosia|baidu|yandex|brave|startpage)\./i
const SOCIAL_HOSTS = /(^|\.)(facebook|instagram|tiktok|t|twitter|x|linkedin|pinterest|youtube|reddit|snapchat|whatsapp)\.(com|co|me)$|^l\.(facebook|instagram)\.com$|^lm\.facebook\.com$/i
const GBP_UTM = /^(gbp|gmb|google[-_ ]?business(?:[-_ ]?profile)?|google[-_ ]?maps|gmaps|maps|map[-_ ]?pack|local)$/i

const clean = (v: unknown, max = 120): string | undefined => {
  if (typeof v !== "string") return undefined
  const s = v.replace(/[\u0000-\u001f\u007f<>]/g, "").trim().slice(0, max)
  return s || undefined
}

export function parseRawTrafficContext(json: unknown): RawTrafficContext {
  if (typeof json !== "string" || !json) return {}
  try {
    const o = JSON.parse(json.slice(0, 2000)) as Record<string, unknown>
    return {
      utmSource: clean(o.utmSource, 60),
      utmMedium: clean(o.utmMedium, 60),
      utmCampaign: clean(o.utmCampaign, 80),
      referrer: clean(o.referrer, 300),
      landingPath: clean(o.landingPath, 160),
    }
  } catch {
    return {}
  }
}

export function classifyTrafficSource(ctx: RawTrafficContext, ownHost = "angeltattooz.co.uk"): TrafficSource {
  const { utmSource, utmMedium, utmCampaign, referrer, landingPath } = ctx
  const utm = [utmSource && `source=${utmSource}`, utmMedium && `medium=${utmMedium}`, utmCampaign && `campaign=${utmCampaign}`]
    .filter(Boolean)
    .join(", ")

  // 1. Explicit tagging wins. A Google Business Profile link must carry e.g. ?utm_source=gbp.
  if ((utmSource && GBP_UTM.test(utmSource)) || (utmMedium && GBP_UTM.test(utmMedium)) || (utmCampaign && GBP_UTM.test(utmCampaign))) {
    return { label: "GBP", detail: `UTM tag (${utm})`, landingPath }
  }

  let host = ""
  let path = ""
  try {
    if (referrer) {
      const u = new URL(referrer)
      host = u.hostname.replace(/^www\./, "")
      path = u.pathname
    }
  } catch {
    /* ignore malformed referrer */
  }

  // 2. Referrer coming from Google Maps / Business Profile surfaces.
  if (host && /(^|\.)google\./i.test(host) && (/^maps\./i.test(host) || path.startsWith("/maps") || path.startsWith("/local"))) {
    return { label: "GBP", detail: `Referrer ${host}${path}`, landingPath }
  }

  // 3. Other UTM-tagged traffic.
  if (utmMedium && /^(organic|seo)$/i.test(utmMedium)) {
    return { label: "Organic Search", detail: `UTM tag (${utm})`, landingPath }
  }
  if (utmMedium && /^(social|paid[-_ ]?social)$/i.test(utmMedium)) {
    return { label: "Social", detail: `UTM tag (${utm})`, landingPath }
  }

  // 4. Referrer-based guess.
  if (host && host !== ownHost && !host.endsWith(`.${ownHost}`)) {
    if (SEARCH_HOSTS.test(host)) return { label: "Organic Search", detail: `Referrer ${host}`, landingPath }
    if (SOCIAL_HOSTS.test(host)) return { label: "Social", detail: `Referrer ${host}`, landingPath }
    return { label: "Referral", detail: `Referrer ${host}`, landingPath }
  }

  if (utm) return { label: "Referral", detail: `UTM tag (${utm})`, landingPath }
  return { label: "Direct", detail: "No referrer or UTM tag (direct, bookmark, or app link)", landingPath }
}
