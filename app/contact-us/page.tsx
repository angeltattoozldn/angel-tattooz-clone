import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Phone, Mail, MapPin } from "lucide-react"
import { BUSINESS_CONFIG, getFullAddress } from "@/config/business.config"

export const metadata: Metadata = {
  title: "Contact Us | Angel Tattooz",
  description: "Get in touch with Angel Tattooz in North London.",
};
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SiteHeader />

      <main className="flex-1">

        {/* =========================================
            1. HERO SECTION
           ========================================= */}
        <section className="relative w-full py-37.5 flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact/contact-hero.webp"
              alt="Angel Tattooz Contact"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-[#FAD5E6] font-hey text-[60px] md:text-[90px] leading-none drop-shadow-xl">
              Contact Us
            </h1>
          </div>
        </section>

        {/* =========================================
            2. CONTACT DETAILS GRID
           ========================================= */}
        <section className="bg-[#121212] py-20 px-4">
          <div className="container mx-auto max-w-285">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

              {/* Telephone */}
              <div className="flex flex-col items-center">
                <div className="mb-4 text-[#FAD5E6]">
                  <Phone className="w-12.5 h-12.5" strokeWidth={1.5} />
                </div>
                <h2 className="text-[#FAD5E6] font-hey text-[46px] leading-tight mb-2">
                  Telephone
                </h2>
                <div className="flex flex-col items-center gap-1">
                  <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="text-white font-sans text-[19px] hover:text-[#D4C59D] transition-colors">
                    Studio: {BUSINESS_CONFIG.contact.phoneDisplay}
                  </a>
                  <a href={`tel:${BUSINESS_CONFIG.contact.phone2}`} className="text-white font-sans text-[19px] hover:text-[#D4C59D] transition-colors">
                    Mobile: {BUSINESS_CONFIG.contact.phone2Display}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="mb-4 text-[#FAD5E6]">
                  <Mail className="w-12.5 h-12.5" strokeWidth={1.5} />
                </div>
                <h2 className="text-[#FAD5E6] font-hey text-[46px] leading-tight mb-2">
                  Email
                </h2>
                <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="text-white font-sans text-[19px] hover:text-[#D4C59D] transition-colors">
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center">
                <div className="mb-4 text-[#FAD5E6]">
                  <MapPin className="w-12.5 h-12.5" strokeWidth={1.5} />
                </div>
                <h2 className="text-[#FAD5E6] font-hey text-[46px] leading-tight mb-2">
                  Address
                </h2>
                <address className="text-white font-sans text-[19px] not-italic max-w-75">
                  {BUSINESS_CONFIG.primaryAddress.street},<br />
                  {BUSINESS_CONFIG.primaryAddress.area}, {BUSINESS_CONFIG.primaryAddress.city},<br />
                  {BUSINESS_CONFIG.primaryAddress.postcode}
                </address>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            3. GOOGLE MAPS EMBED
           ========================================= */}
        <section className="w-full bg-[#121212]">
          <div className="w-full h-87.5 md:h-112.5 grayscale invert-[.1]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`}
              title="Angel Tattooz Location"
            ></iframe>
          </div>
        </section>

        {/* =========================================
            4. CTA SECTION
           ========================================= */}
        <section className="relative bg-[#121212] py-16 px-4 border-t border-white/5">
          <div className="container mx-auto max-w-285 flex flex-col items-center text-center gap-6">
            <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal">
              Ready to Get Inked?
            </h2>
            <div className="max-w-162.5">
              <p className="text-white font-sans text-[16px] font-normal leading-relaxed">
                Take the first step towards your tattoo journey. Secure your spot or inquire about our services.
                Let’s bring your ink dreams to life.
              </p>
            </div>
            <Link
              href="/bookings"
              className="inline-block bg-[#D4C59D] text-zinc-950 font-semibold text-[15px] font-medium py-3 px-8 rounded-[3px] tracking-wide transition-all duration-300 hover:bg-white hover:text-black mt-2"
            >
              Book Now
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}