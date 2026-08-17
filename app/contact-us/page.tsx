import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {

  // GPT Optimization: Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor", // Specific Schema for Tattoo Studios
    "name": "Angel Tattooz",
    "image": "https://www.angeltattooz.co.uk/wp-content/uploads/2024/05/Angle-Tattooz-Website-Mock-ups-20.png",
    "telephone": "07949123424",
    "email": "info@angeltattooz.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Studio A, 15 Station Parade",
      "addressLocality": "Cockfosters, Barnet",
      "addressRegion": "London",
      "postalCode": "EN4 0DL",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.6517, // Approx coords for Cockfosters
      "longitude": -0.1488
    },
    "url": "https://www.angeltattooz.co.uk",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "11:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "description": "By Appointment Only"
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      {/* Injecting the Schema for GPTs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                <h3 className="text-[#FAD5E6] font-hey text-[46px] leading-tight mb-2">
                  Telephone
                </h3>
                <a href="tel:07949123424" className="text-white font-sans text-[19px] hover:text-[#D4C59D] transition-colors">
                  07949 123424
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="mb-4 text-[#FAD5E6]">
                  <Mail className="w-12.5 h-12.5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#FAD5E6] font-hey text-[46px] leading-tight mb-2">
                  Email
                </h3>
                <a href="mailto:info@angeltattooz.co.uk" className="text-white font-sans text-[19px] hover:text-[#D4C59D] transition-colors">
                  info@angeltattooz.co.uk
                </a>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center">
                <div className="mb-4 text-[#FAD5E6]">
                  <MapPin className="w-12.5 h-12.5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#FAD5E6] font-hey text-[46px] leading-tight mb-2">
                  Address
                </h3>
                <address className="text-white font-sans text-[19px] not-italic max-w-75">
                  Studio A, 15 Station Parade,<br />
                  Cockfosters, Barnet,<br />
                  EN4 0DL
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.106560932289!2d-0.15174592305018693!3d51.64964600171221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761853aaa9a39d%3A0x6b1070868f000000!2s3%20Mount%20Parade%2C%20Cockfosters%20Rd%2C%20Barnet%20EN4%209DD%2C%20UK!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
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
              className="inline-block bg-[#D4C59D] text-white text-[15px] font-medium py-3 px-8 rounded-[3px] tracking-wide transition-all duration-300 hover:bg-white hover:text-black mt-2"
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