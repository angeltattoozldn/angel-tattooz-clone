import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ReviewsSection } from "@/components/reviews-section"

// Reusing helper components from the main page if they are exported or redefining them here
// Ideally, move these to separate component files in /components for cleaner reuse.
// For this single-file copy-paste solution, I will include the InstagramCard here.

function InstagramCard({ bgImage, link }: { bgImage: string, link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block h-50 w-full rounded-xl overflow-hidden group cursor-pointer"
    >
      <Image
        src={bgImage}
        alt="Instagram Post"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 transform scale-50 group-hover:opacity-100 group-hover:scale-100">
        <div className="relative w-25 h-25">
          <Image
            src="/images/home/ig-btn-02.webp"
            alt="Instagram"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </a>
  )
}


export const metadata: Metadata = {
  title: "About Us | Angel Tattooz",
  description: "Learn about Angel Tattooz, North London's premier tattoo studio.",
};
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SiteHeader />

      <main className="flex-1">

        {/* =========================================
            1. PAGE HEADER (Hero Style)
            Matches Elementor ID: 7355454
            - Background Image: Mock-ups-28.png
            - Centered Title "About Us"
           ========================================= */}
        <section className="relative w-full h-100 flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about/about-hero.webp"
              alt="About Angel Tattooz"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Overlay (Opacity 0.65 from Elementor) */}
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-[#FAD5E6] font-hey text-[60px] md:text-[90px] leading-none drop-shadow-lg">
              About Us
            </h1>
          </div>
        </section>

        {/* =========================================
            2. MAIN CONTENT (Text + Image)
            Matches Elementor ID: be2b022
            - 2 Columns: Image Left, Text Right
           ========================================= */}
        <section className="relative bg-[#121212] py-20 px-4">
          <div className="container mx-auto max-w-285">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* Left Column: Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-3/4 rounded-sm overflow-hidden">
                  <Image
                    src="/images/about/about-section-2.webp"
                    alt="Tattoo Artist Working"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="w-full lg:w-1/2 text-white font-sans">
                <h2 className="text-[#FAD5E6] font-hey text-[50px] md:text-[65px] leading-[1.1] mb-6">
                  Your Premier London<br />Tattoo Studio
                </h2>

                <div className="space-y-6 text-[16px] font-light leading-relaxed text-white/90">
                  <p>
                    <strong className="text-white font-bold">Your Premier Tattoo Studio in North London</strong>
                  </p>
                  <p>
                    Welcome to Angel Tattooz, your top destination for tattoo artistry in Cockfosters, Barnet, and North London. Whether it’s your first tattoo or an addition to your collection, we promise an outstanding experience from start to finish.
                  </p>

                  <p>
                    <strong className="text-white font-bold">Why Choose Angel Tattooz?</strong>
                  </p>
                  <p>
                    Angel Tattooz is more than just a tattoo studio—it’s a community of skilled artists dedicated to bringing your ideas to life. Catering to everyone from first-timers to seasoned enthusiasts, we are your go-to for personalized, high-quality tattoos. If you’re searching for “best tattoo studio North London” or “top tattoo artists Barnet,” look no further:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 marker:text-[#FAD5E6]">
                    <li>Peaceful Location: Our tranquil, nature-surrounded studio offers a calming atmosphere.</li>
                    <li>Top-Quality Equipment: We use the latest equipment for precision and safety.</li>
                    <li>Premium Inks: Our high-quality inks ensure vibrant colours and lasting results.</li>
                  </ul>

                  {/* Read More Expandable Section (Simplified as static for now, or Link to FAQ/Contact) */}
                  <div className="pt-4">
                    <p className="mb-4">
                      <strong className="text-white font-bold">Your First Tattoo Experience</strong>
                    </p>
                    <p>
                      Start your tattoo journey with confidence at Angel Tattooz. Our skilled artists specialize in intricate designs and innovative techniques, ensuring a comfortable and memorable first tattoo experience.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            3. GOOGLE REVIEWS SECTION
           ========================================= */}
        <ReviewsSection />

        {/* =========================================
            4. CTA SECTION: "Ready to Get Inked?"
            Reuse of Home Page Component
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

        {/* =========================================
            4. INSTAGRAM FEED SECTION
            Reuse of Home Page Component
           ========================================= */}
        <section className="relative bg-[#121212] py-10 px-4 border-t border-white/5">
          <div className="container mx-auto max-w-285">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <InstagramCard bgImage="/images/home/Angle-Tattooz-Website-Insta-1.webp" link="https://www.instagram.com/angeltattoozldn/" />
              <InstagramCard bgImage="/images/home/Angle-Tattooz-Website-Insta-2.webp" link="https://www.instagram.com/angeltattoozldn/" />
              <InstagramCard bgImage="/images/home/Angle-Tattooz-Website-Insta-3.webp" link="https://www.instagram.com/angeltattoozldn/" />
              <InstagramCard bgImage="/images/home/Angle-Tattooz-Website-Insta-4.webp" link="https://www.instagram.com/angeltattoozldn/" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}