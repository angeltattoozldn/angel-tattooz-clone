import type { Metadata } from "next";
/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { generateWebSiteSchema } from "@/lib/schema"
import { BackgroundVideo } from "@/components/background-video"

const ReviewsSection = dynamic(
  () => import("@/components/reviews-section").then((mod) => mod.ReviewsSection),
  {
    ssr: true,
    loading: () => <div className="h-64 animate-pulse bg-slate-900/20 rounded-lg max-w-285 mx-auto my-12" />,
  }
)


export const metadata: Metadata = {
  title: "Angel Tattooz | Premier Tattoo Studio in North London",
  description: "Angel Tattooz is an award-winning custom tattoo studio in Cockfosters, North London. We specialize in bespoke designs, cover-ups, and fine line art. Book today!",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/",
  },
};
export default function Home() {
  const websiteSchema = generateWebSiteSchema()

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <SiteHeader />

      <main className="flex-1">

        {/* =========================================
            1. HERO SECTION
           ========================================= */}
        <section className="relative w-full min-h-[90vh] flex items-center py-20 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/Angle-Tattooz-Website-Hero-Image.webp"
              alt="Angel Tattooz Studio Cockfosters"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px"
              className="object-cover object-[77%] md:object-center"
              priority={true}
              fetchPriority="high"
              loading="eager"
            />
          </div>

          <div className="relative z-10 w-full max-w-285 mx-auto px-4 md:px-5">
            <div className="flex flex-col lg:flex-row items-start">
              <div className="w-full lg:w-[60%] relative">
                <div className="bg-black/75 p-8 md:p-9.75 rounded-[20px] backdrop-blur-[0px] shadow-none">
                  <div className="mb-14">
                    <h1
                      className="text-[#FAD5E6] font-hey font-normal leading-none text-[5rem] md:text-[6.5rem] lg:text-[136px]"
                      style={{
                        textShadow: '7px 0px 22px #000000',
                        WebkitTextStroke: '0px #000000'
                      }}
                    >
                      {/* Screen Reader Only Text for SEO Dominance */}
                      <span className="sr-only">Angel Tattooz: North London Tattoo Studio - </span>
                      Art You Can Wear
                    </h1>
                  </div>
                  <div>
                    <Link
                      href="/bookings"
                      className="inline-flex items-center justify-center bg-[#D4C59D] text-zinc-950 font-semibold text-[15px] py-3 px-6 rounded-[3px] transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      Book Your Appointment Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-[40%]"></div>
            </div>
          </div>
        </section>


        {/* =========================================
            2. BE INKSPIRED (GRID SECTION)
            Fixed: Spacing (30px/35px gap) and Z-Index Overlap
           ========================================= */}
        <section className="relative bg-[#121212] pt-10 pb-20 px-4 mt-10">
          <div className="container mx-auto max-w-285">

            {/* Grid Gap Fix: 
                - gap-x-[30px] matches Elementor column gap
                - gap-y-[35px] matches Elementor row gap 
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-8.75">

              {/* --- CELL 1 (Left Top) --- */}
              <div className="relative w-full overflow-hidden group rounded-[10px]">
                <Image
                  src="/images/home/Be-Inkspired-1.webp"
                  alt="Tattoo Showcase 1"
                  width={502}
                  height={768}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* --- CELL 2 (Center Top - Text) --- 
                  Fix: Added z-20 to ensure text/button stays ON TOP of the image below 
              */}
              <div className="relative z-20 h-140 w-full flex flex-col justify-center items-center text-center p-8 bg-transparent">
                <h2 className="text-[#FAD5E6] font-hey text-[65px] leading-none mb-4">
                  Be<br />Inkspired
                </h2>
                <div className="text-white font-sans text-[16px] font-normal leading-relaxed mb-8 max-w-75">
                  Step into a realm of inspiration. Our gallery showcases a fusion of styles and stories.
                  Find the perfect design to express your individuality.
                </div>
                {/* Button is safe now due to z-20 on parent */}
                <Link
                  href="/gallery"
                  className="inline-block border-2 border-transparent bg-[#D4C59D] text-zinc-950 font-semibold px-8 py-3 text-[15px] rounded-[3px] hover:bg-white hover:text-black transition-all duration-300"
                >
                  Ink Showcase
                </Link>
              </div>

              {/* --- CELL 3 (Right Top) --- */}
              <div className="relative w-full overflow-hidden group rounded-[10px]">
                <Image
                  src="/images/home/Be-Inkspired-2.webp"
                  alt="Tattoo Showcase 2"
                  width={502}
                  height={768}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* --- CELL 4 (Left Bottom) --- */}
              <div className="relative w-full overflow-hidden group rounded-[10px]">
                <Image
                  src="/images/home/Be-Inkspired-7.webp"
                  alt="Tattoo Showcase 3"
                  width={502}
                  height={512}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* --- CELL 5 (Center Bottom - Staggered Image) --- 
                  Fix: Kept z-10 (lower than text block's z-20) so overlap is handled correctly 
              */}
              <div className="relative z-10 w-full overflow-hidden group lg:-mt-25 rounded-[10px]">
                <Image
                  src="/images/home/Be-Inkspired-4.webp"
                  alt="Tattoo Showcase 4"
                  width={502}
                  height={768}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* --- CELL 6 (Right Bottom) --- */}
              <div className="relative w-full overflow-hidden group rounded-[10px]">
                <Image
                  src="/images/home/Be-Inkspired-8.webp"
                  alt="Tattoo Showcase 5"
                  width={502}
                  height={512}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            3. NEWSLETTER SECTION
            Matches Elementor ID: fb88be5
            - Overlaps previous section with -mt-[131px]
            - Centered text and custom form styling
           ========================================= */}
        <section
          className="relative z-20 w-full my-5 mx-auto px-4 py-28 rounded-sm shadow-xl overflow-hidden"
        >
          {/* Background Image Optimized via Next.js */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/newsletter.webp"
              alt="Newsletter Background"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>

          {/* Dark Overlay (Implicit in design or image, added for readability if needed) */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6">

            {/* Heading */}
            <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal">
              Stay in the Loop – Join Our Newsletter!
            </h2>

            {/* Subtext */}
            <div className="max-w-162.5">
              <p className="text-white font-sans text-[16px] font-normal leading-relaxed">
                Be the first to know about our latest designs, artist features, and special updates.
                Subscribe now and never miss an update from Angel Tattooz!
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full max-w-125 mt-2">
              <form
                aria-label="Newsletter Subscription Form"
                data-mcp-form="newsletter"
                action="https://www.angeltattooz.co.uk/?na=s"
                method="post"
                className="flex w-full"
              >
                <input type="hidden" name="nr" value="minimal" />
                <input type="hidden" name="nlang" value="" />

                {/* Email Input */}
                <input
                  type="email"
                  name="ne"
                  required
                  placeholder="Email"
                  className="w-[70%] px-4 py-3 bg-neutral-100 text-zinc-900 text-[16px] border border-neutral-300 rounded-l-[10px] focus:outline-none"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-[30%] bg-[#D4C59D] text-zinc-950 font-semibold text-[14px] uppercase tracking-wide rounded-r-[10px] hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </section>
        {/* =========================================
            4. SERVICES FLIP-BOX GRID
            Matches Elementor ID: 74c2cd0
            - 3 Columns, 2 Rows
            - 3D Flip Animation on Hover
           ========================================= */}
        <section className="relative bg-[#121212] py-20 px-4" aria-label="Our Professional Tattoo Services">
          <div className="container mx-auto max-w-285">
            <div className="text-center mb-12">
              <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal">
                Our Professional Tattoo Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Service 1: Custom Tattoo Design */}
              <FlipCard
                image="/images/home/Custom-Tattoo-Design.webp"
                title="Custom Tattoo Design"
                desc="Get a unique tattoo with our custom design service. Our expert artists create personalized tattoos in styles like minimalist, realism, abstract, tribal, and traditional."
              />

              {/* Service 2: Black & Grey */}
              <FlipCard
                image="/images/home/Black-and-Grey-Tattoos.webp"
                title="Black & Grey Tattoos"
                desc="Love black and grey tattoos? Our artists craft detailed designs with unmatched depth and elegance. From realism to custom motifs, we use premium inks."
              />

              {/* Service 3: Colour Tattoos */}
              <FlipCard
                image="/images/home/Colour-Tattoos.webp"
                title="Colour Tattoos"
                desc="Love vibrant colour tattoos? Our expert artists craft bold, vivid designs just for you. From traditional to custom realism, using premium inks and advanced equipment."
              />

              {/* Service 4: Cover-Up Tattoos */}
              <FlipCard
                image="/images/home/Cover-Up-Tattoos.webp"
                title="Cover-Up Tattoos"
                desc="Need a tattoo cover-up? Our artists transform old tattoos into stunning new designs. With advanced techniques and premium inks, we ensure top quality."
              />

              {/* Service 5: Tattoo Consultations */}
              <FlipCard
                image="/images/home/Tattoo-Consultations.webp"
                title="Tattoo Consultations"
                desc="Considering a new tattoo but unsure where to start? Our tattoo consultations offer personalized guidance to bring your vision to life."
              />

              {/* Service 6: View All Services */}
              <FlipCard
                image="/images/home/All-Services.webp"
                title="View All Services"
                desc=""
                isLast={true}
              />

            </div>
          </div>
        </section>

        {/* =========================================
            5. CTA SECTION: "Ready to Get Inked?"
            Matches Elementor ID: 1dd584c
            - Simple centered CTA strip
           ========================================= */}
        <section className="relative bg-[#121212] py-16 px-4">
          <div className="container mx-auto max-w-285 flex flex-col items-center text-center gap-6">

            {/* Heading */}
            <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal">
              Ready to Get Inked?
            </h2>

            {/* Subtext */}
            <div className="max-w-162.5">
              <p className="text-white font-sans text-[16px] font-normal leading-relaxed">
                Take the first step towards your tattoo journey. Secure your spot or inquire about our services.
                Let’s bring your ink dreams to life.
              </p>
            </div>

            {/* Book Now Button */}
            <Link
              href="/bookings"
              className="inline-block bg-[#D4C59D] text-zinc-950 font-semibold text-[15px] py-3 px-8 rounded-[3px] tracking-wide transition-all duration-300 hover:bg-white hover:text-black mt-2"
            >
              Book Now
            </Link>

          </div>
        </section>

        {/* =========================================
            7. CINEMATIC VIDEO SECTION
            Matches Elementor ID: ecc91bf
            - Height: 500px
            - Background: YouTube Video (DxR9eauTK1I) 2s-30s loop
            - Overlay: Linear Gradient fade (Top to Bottom)
           ========================================= */}
        <section className="relative w-full h-125 overflow-hidden bg-[#121212]">

          {/* Video Container 
              - Oversized (w-[300%]) and centered to ensure it "covers" the area 
              - pointer-events-none prevents interaction (it's just a background)
          */}
          <BackgroundVideo videoId="DxR9eauTK1I" />

          {/* Gradient Overlay
              - Matches the specific RGB gradient from your JSX
              - Fades from Solid Black/Grey (#121212) at top to Transparent at bottom
          */}
          <div
            className="absolute inset-0 z-10 w-full h-full"
            style={{
              background: 'linear-gradient(180deg, rgb(18, 18, 18) 0%, rgba(12, 12, 12, 0) 100%)'
            }}
          />

        </section>

        {/* =========================================
            8. ABOUT US SECTION
            Matches Elementor ID: a148f73
            - Centered Layout
            - Decorative Image on top
            - Solid Gold Button
           ========================================= */}
        <section className="relative bg-[#121212] py-15 px-4 mt-10">
          <div className="container mx-auto max-w-285 flex flex-col items-center text-center">

            {/* Decorative Image (Mock-ups-21.png) */}
            <div className="mb-4 w-25 h-20 absolute top-0 left-1/2">
              <Image
                src="/images/home/decoration.webp"
                alt="Decoration"
                fill
                sizes="100px"
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-[#FAD5E6] font-hey text-[65px] leading-none font-normal mb-6">
              About Us
            </h2>

            {/* Text Content - Width restricted to 60% approx to match design */}
            <div className="max-w-200 mb-8 px-10">
              <p className="text-white font-sans text-[16px] font-normal leading-[1.8] tracking-wide">
                At Angel Tattooz, we are dedicated to creating unforgettable tattoo experiences.
                Our passion for the craft ensures you leave with a unique piece of art.
                We believe every tattoo tells a story—whether it’s a memory, milestone, or personal expression.
                Let us help you tell your story in ink with our skilled artists, ready to bring your vision to life.
              </p>
            </div>

            {/* Read More Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-[#D4C59D] text-zinc-950 font-semibold text-[15px] py-3 px-8 rounded-[3px] transition-all duration-300 hover:bg-white hover:text-black"
            >
              Discover Our Tattoo Artists and Studio
            </Link>

          </div>
        </section>

        {/* =========================================
            9. INSTAGRAM FEED SECTION
            Matches Elementor ID: ec77411 / ef476c1
            - 4 Columns
            - Background Image + Overlay + Icon
           ========================================= */}
        <section className="relative bg-[#121212] py-10 px-4" aria-label="Follow Us on Instagram">
          <div className="container mx-auto max-w-285">
            <div className="text-center mb-8">
              <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal">
                Follow Our Ink Journey
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

              {/* Insta Item 1 */}
              <InstagramCard
                bgImage="/images/home/Angle-Tattooz-Website-Insta-1.webp"
                link="https://www.instagram.com/angeltattoozldn/"
              />

              {/* Insta Item 2 */}
              <InstagramCard
                bgImage="/images/home/Angle-Tattooz-Website-Insta-2.webp"
                link="https://www.instagram.com/angeltattoozldn/"
              />

              {/* Insta Item 3 */}
              <InstagramCard
                bgImage="/images/home/Angle-Tattooz-Website-Insta-3.webp"
                link="https://www.instagram.com/angeltattoozldn/"
              />

              {/* Insta Item 4 */}
              <InstagramCard
                bgImage="/images/home/Angle-Tattooz-Website-Insta-4.webp"
                link="https://www.instagram.com/angeltattoozldn/"
              />

            </div>
          </div>
        </section>

        {/* =========================================
            10. GOOGLE REVIEWS & TESTIMONIALS SECTION
           ========================================= */}
        <ReviewsSection />

        {/* =========================================
            11. LATEST BLOG POSTS SECTION
            Matches Elementor ID: cba5c0c
            - 3 Column Grid
            - Blog Card Style with Floating Badge
           ========================================= */}
        <section className="relative bg-[#121212] pb-24 px-4" aria-label="Latest Articles and Guides">
          <div className="container mx-auto max-w-285">
            <div className="text-center mb-12">
              <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal">
                Latest Articles & Tattoo Guides
              </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mb-12">

              {/* Blog Post 1 */}
              <BlogCard
                image="/images/home/blog-post-1.webp"
                category="Tattoos"
                title="Top Tattoo Styles in 2026: Find Your Next Design Inspiration"
                link="/blog/top-10-most-popular-tattoo-styles-in-2024-find-your-next-design-inspiration/"
              />

              {/* Blog Post 2 */}
              <BlogCard
                image="/images/home/blog-post-2.webp"
                category="Tattoos"
                title="The History of Tattoos: From Ancient Traditions to Modern Art"
                link="/blog/the-history-of-tattoos-from-ancient-traditions-to-modern-art/"
              />

              {/* Blog Post 3 */}
              <BlogCard
                image="/images/home/blog-post-3.webp"
                category="Tattoos"
                title="Discover the Diverse Tattoo Styles at Angel Tattooz in London"
                link="/blog/discover-the-diverse-tattoo-styles-at-angel-tattooz-in-london/"
              />

            </div>

            {/* View More Button */}
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block bg-[#D4C59D] text-zinc-950 font-semibold text-[15px] py-3 px-8 rounded-[3px] tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
              >
                View More Posts
              </Link>
            </div>

          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}

function FlipCard({
  image,
  title,
  desc,
  isLast = false
}: {
  image: string,
  title: string,
  desc: string,
  isLast?: boolean
}) {
  return (
    <div className="group h-80 w-full perspective-[1000px]">
      <div className="relative h-full w-full transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)] rounded-[26px]">

        {/* --- FRONT FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-[26px] backface-hidden overflow-hidden">
          {/* Background Image */}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Overlay & Title */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-4">
            <h3 className="text-white font-hey text-[45px] leading-none text-center drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-[26px] backface-hidden transform-[rotateY(180deg)] overflow-hidden bg-black">
          {/* Background Image (Darkened) */}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-40"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            {!isLast ? (
              <p className="text-white font-sans text-[14px] leading-relaxed mb-0">
                {desc}
              </p>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <Link
                  href="/services"
                  className="inline-block border border-[#D4C59D] bg-[#D4C59D] text-zinc-950 font-semibold hover:bg-transparent hover:text-white px-6 py-2 text-[15px] rounded-[3px] transition-all duration-300"
                >
                  Explore All Tattoo Services
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

function InstagramCard({ bgImage, link }: { bgImage: string, link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View our Instagram Profile"
      className="relative block h-50 w-full rounded-xl overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Instagram Post"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay - Appears on Hover */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />

      {/* Instagram Icon - Hidden by default, pops in on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 transform scale-50 group-hover:opacity-100 group-hover:scale-100">
        <div className="relative w-28 h-28"> {/* Increased size */}
          <Image
            src="/images/home/ig-btn-02.webp"
            alt="Instagram"
            fill
            sizes="112px"
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </a>
  )
}

function QuoteIcon() {
  return (
    <svg id="a" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path d="M471.62,202.12v34.28c0,2.86-1.35,5.99-1.75,9.05-5.69,42.86-25.77,81.6-57.7,110.81-37.54,34.35-87.09,53.29-137.35,59.08-5.17.6-8.76-4.12-9.32-8.02-.68-4.73,1.82-8.32,6.25-10.31,25.55-11.51,55.65-30.06,65.89-57.48,4.47-11.96,4.14-24.67-1.66-35.67-11.01-20.86-27.68-6.6-50.64-38.43-11.41-15.82-17.15-34.14-19.32-53.48-3.92-34.96,9.77-68.91,35.86-90.89,27.1-22.84,63.69-30.34,97.48-19.61,21.46,6.82,38.54,20.79,50.87,39.33,13.41,20.16,17.08,38.87,21.39,61.34ZM330.61,382.82c25.63-8.29,46.87-21.5,65.87-37.73,33.63-29.48,53.43-70.13,55.99-114.79,1.05-18.33-.2-35.75-5.67-53.15-9.17-29.17-29.67-53.12-60.43-59.78-27.31-5.92-55.17,1.91-75.44,20.81-19.47,18.16-29.36,44.59-26.21,71.89,1.76,15.24,5.87,29.5,14.5,42.21,5.37,7.9,12.53,15.97,21.95,18.64,13,3.68,23.39,10.38,30.32,22.29,9.22,15.83,10.14,34.23,4.27,51.72-4.96,14.79-14.63,25.54-25.14,37.89Z" fill="#fad5e6" /><path d="M46.49,397.15c26-11.77,55.93-30.21,66.16-57.62,4.47-11.96,4.14-24.67-1.66-35.67-11.01-20.85-27.75-6.64-50.64-38.43-11.4-15.83-17.18-34.1-19.32-53.56-3.46-31.41,7.07-62.07,28.79-84.23,42.35-43.23,115.49-42.27,152.57,9.03,21.58,29.86,26.77,67.03,23.11,103.28-4.55,45-25.02,85.85-58.31,116.31-37.56,34.38-87.07,53.25-137.35,59.09-4.87.57-8.43-3.74-9.18-7.3-.98-4.66,1.05-8.72,5.84-10.89ZM105.64,382.85c25.52-8.44,46.96-21.37,65.82-37.81,32.07-27.95,51.61-66.27,55.52-108.59,2.81-30.39-1.2-63.16-19.41-88.21-10.2-14.03-23.79-24.46-40.58-29.4-27.84-8.19-57.41-1.42-79.14,17.61-20.65,18.09-31.4,45.4-28.12,73.64,1.77,15.22,5.86,29.48,14.5,42.19,5.37,7.9,12.53,15.97,21.95,18.64,13,3.68,23.38,10.38,30.32,22.28,9.23,15.83,10.13,34.23,4.27,51.72-4.96,14.81-14.66,25.51-25.13,37.92Z" fill="#fad5e6" /></svg>

  )
}

function BlogCard({
  image,
  category,
  title,
  link
}: {
  image: string,
  category: string,
  title: string,
  link: string
}) {
  return (
    <article className="flex flex-col bg-[#242424] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <Link href={link} className="relative block w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Floating Category Badge */}
        <span className="absolute top-5 right-5 bg-[#D4C59D] text-zinc-950 font-semibold text-[12px] uppercase px-3 py-2 rounded-full shadow-md">
          {category}
        </span>
      </Link>

      {/* Content */}
      <div className="p-8 flex flex-col grow">
        <h3 className="text-[#FAD5E6] font-sans text-[22px] leading-[1.3] font-normal mb-6">
          <Link href={link} className="hover:text-white transition-colors">
            {title}
          </Link>
        </h3>

        <div className="mt-auto">
          <Link
            href={link}
            className="text-white text-[15px] font-medium uppercase tracking-wide hover:text-[#D4C59D] transition-colors"
          >
            Read Full Article →
          </Link>
        </div>
      </div>
    </article>
  )
}