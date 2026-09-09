/* eslint-disable tailwindcss/no-contradicting-classname */
import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { BUSINESS_CONFIG, getFullAddress } from "@/config/business.config"

export const metadata: Metadata = {
  title: "Terms of Service | Angel Tattooz",
  description: "Terms and conditions of service, booking policies, and studio guidelines for Angel Tattooz in Cockfosters, North London.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/terms-of-service/",
  },
}

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-16">
          <div className="prose prose-invert max-w-none prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:text-center prose-h2:mb-8 prose-h3:font-sans prose-h3:font-bold prose-h3:text-xl prose-h3:text-white prose-h3:mt-12 prose-h3:mb-4 prose-p:mb-6 prose-ul:mb-8 prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base prose-a:text-[#D4C59D] prose-a:no-underline hover:prose-a:underline">
            
            <p className="font-bold text-lg text-zinc-200">Welcome to Angel Tattooz</p>
            <p>
              By booking an appointment or using our services at <a href="https://www.angeltattooz.co.uk">www.angeltattooz.co.uk</a>, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h3>1. Service Provider</h3>
            <ul className="list-none pl-0 space-y-1 text-zinc-300 text-sm md:text-base">
              <li><strong>Business Name:</strong> {BUSINESS_CONFIG.businessName}</li>
              <li><strong>Studio Address:</strong> {getFullAddress()} (Located in: Derma Sence)</li>
              <li><strong>Contact Email:</strong> <a href={`mailto:${BUSINESS_CONFIG.contact.email}`}>{BUSINESS_CONFIG.contact.email}</a></li>
              <li><strong>Telephone:</strong> {BUSINESS_CONFIG.contact.phoneDisplay} / {BUSINESS_CONFIG.contact.phone2Display}</li>
            </ul>

            <h3>2. Appointments, Deposits & Cancellations</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Deposits:</strong> A non-refundable booking deposit (typically £50) is required to secure every tattoo session. The deposit is deducted from your final balance on the day.</li>
              <li><strong>Cancellation Policy:</strong> A minimum of 48 hours notice is required to reschedule your appointment without forfeiting your deposit.</li>
              <li><strong>Lateness & No-Shows:</strong> Arriving more than 15 minutes late without prior notice may result in session cancellation and forfeiture of deposit.</li>
            </ul>

            <h3>3. Age & Identification Policy</h3>
            <p>
              By law in the United Kingdom (Tattooing of Minors Act 1969), you must be at least 18 years of age to receive a tattoo. We strictly operate a Challenge 25 policy. Valid physical government-issued photo ID (passport or driving license) is mandatory prior to your session. Parental consent for minors is legally invalid.
            </p>

            <h3>4. Health, Safety & Hygiene Standards</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-base">
              <li><strong>Medical Disclosure:</strong> You must complete our health declaration accurately, disclosing any relevant conditions, allergies, or medications.</li>
              <li><strong>Sobriety:</strong> We will not tattoo anyone under the influence of alcohol, drugs, or non-prescribed substances.</li>
              <li><strong>Sterilization:</strong> We use hospital-grade autoclave sterilization, single-use disposable needles, and premium EU/UK REACH-compliant tattoo pigments.</li>
            </ul>

            <h3>5. Custom Artwork & Intellectual Property</h3>
            <p>
              All custom drawings and bespoke tattoo designs remain the intellectual property of Angel Tattooz and its artists. Photography and videography of finished work may be used for portfolio and promotional displays unless explicitly opted out in writing prior to the session.
            </p>

            <h3>6. Aftercare & Guarantee</h3>
            <p>
              Comprehensive verbal and written aftercare instructions are provided. We offer complimentary touch-ups within the first year of completed tattoos, provided verified studio aftercare guidance has been adhered to diligently.
            </p>

            <p className="mt-8 font-semibold italic text-center text-zinc-300">
              Updated: September 2026. Governing Law: England & Wales.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
