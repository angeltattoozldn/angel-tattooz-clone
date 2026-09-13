/* eslint-disable tailwindcss/no-contradicting-classname */
import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { BUSINESS_CONFIG, getFullAddress } from "@/config/business.config"

export const metadata: Metadata = {
  title: "Privacy Policy | Angel Tattooz",
  description: "Privacy Policy and data protection practices for Angel Tattooz, premier tattoo studio in Cockfosters, Barnet, North London.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/privacy-policy/",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-20">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] min-h-75 flex items-center justify-center border-b border-zinc-800/60 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Angel Tattooz Studio"
              className="object-cover"
              fill
              priority
              src="/images/home/Angle-Tattooz-Website-Hero-Image.webp"
            />
            <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-[#0a0a0a] via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 pt-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hey text-[#ffe4e6] tracking-wide leading-tight max-w-5xl mx-auto drop-shadow-lg">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-16">
          <div className="prose prose-invert max-w-none prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:text-center prose-h2:mb-8 prose-h3:font-sans prose-h3:font-bold prose-h3:text-xl prose-h3:text-white prose-h3:mt-12 prose-h3:mb-4 prose-p:mb-6 prose-ul:mb-8 prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base prose-a:text-[#D4C59D] prose-a:no-underline hover:prose-a:underline">
            
            <p className="font-bold text-lg text-zinc-200">Introduction</p>
            <p>
              Angel Tattooz is committed to protecting your personal data and respecting your privacy in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy explains how we collect, use, and protect your personal information.
            </p>

            <h3>1. Data Controller</h3>
            <ul className="list-none pl-0 space-y-1 text-zinc-300 text-sm md:text-base">
              <li><strong>Company:</strong> {BUSINESS_CONFIG.businessName}</li>
              <li><strong>Studio Address:</strong> {getFullAddress()}</li>
              <li><strong>Website:</strong> <a href="https://www.angeltattooz.co.uk">www.angeltattooz.co.uk</a></li>
              <li><strong>Contact Email:</strong> <a href={`mailto:${BUSINESS_CONFIG.contact.email}`}>{BUSINESS_CONFIG.contact.email}</a></li>
              <li><strong>Phone:</strong> {BUSINESS_CONFIG.contact.phoneDisplay}</li>
            </ul>

            <h3>2. Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Contact Details:</strong> Full name, telephone number, email address, and home address.</li>
              <li><strong>Health & Consent Information:</strong> Relevant medical history, skin conditions, allergy disclosures, and signed client consent forms required by UK local health licensing regulations.</li>
              <li><strong>Identification:</strong> Proof of age (government photo ID verifying age 18+).</li>
              <li><strong>Booking Details:</strong> Design preferences, reference images, body placement notes, and deposit payment transaction records.</li>
            </ul>

            <h3>3. How We Use Your Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Service Delivery:</strong> To manage appointments, consultations, and administer professional tattoo services.</li>
              <li><strong>Client Communication:</strong> To send appointment confirmations, aftercare reminders, and respond to queries.</li>
              <li><strong>Health & Legal Compliance:</strong> To satisfy statutory obligations, health inspection licensing, and local council regulations.</li>
              <li><strong>Financial Accounting:</strong> To process deposits and maintain statutory business accounts.</li>
            </ul>

            <h3>4. Legal Basis for Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Contractual Necessity:</strong> Processing required to fulfil our contract for tattooing services.</li>
              <li><strong>Explicit Consent:</strong> Processing special category data (health disclosures) based on explicit written consent on our consent forms.</li>
              <li><strong>Legal Obligation:</strong> Maintaining health, safety, and tax records in accordance with UK law.</li>
              <li><strong>Legitimate Interests:</strong> Managing studio operations, client safety, and business security.</li>
            </ul>

            <h3>5. Data Sharing & Security</h3>
            <p>
              We never sell, trade, or transfer your personal data to outside marketers. All digital records are stored securely, and physical consent forms are kept in locked, restricted-access storage. Transactions via Stripe and PayPal are encrypted and adhere to PCI-DSS Level 1 standards.
            </p>

            <h3>6. Your Statutory Rights</h3>
            <p>
              Under UK GDPR, you have the right to request access, rectification, erasure, or restriction of your personal data. To exercise any of these rights, please contact our studio at <a href={`mailto:${BUSINESS_CONFIG.contact.email}`}>{BUSINESS_CONFIG.contact.email}</a>.
            </p>

            <p className="mt-8 font-semibold italic text-center text-zinc-300">
              Last updated: September 2026. Thank you for choosing Angel Tattooz.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
