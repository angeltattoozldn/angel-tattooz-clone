"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion, AnimatePresence } from "framer-motion"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SiteHeader />

      <main className="flex-1">

        {/* =========================================
            1. HERO SECTION
            Matches Elementor ID: 7f1bbcb
           ========================================= */}
        <section className="relative w-full py-[150px] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery/gallery-hero.webp"
              alt="Angel Tattooz Gallery"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-[#FAD5E6] font-hey text-[60px] md:text-[90px] leading-none drop-shadow-xl">
              Gallery
            </h1>
          </div>
        </section>

        {/* =========================================
            2. FILTERABLE GALLERY
            Matches Elementor ID: 1301c05
           ========================================= */}
        <GalleryGrid />

        {/* =========================================
            3. CTA SECTION
            Matches Elementor ID: 2da1886
           ========================================= */}
        <section className="relative bg-[#121212] py-16 px-4 border-t border-white/5">
          <div className="container mx-auto max-w-[1140px] flex flex-col items-center text-center gap-6">
            <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-[1] font-normal">
              Ready to Get Inked?
            </h2>
            <div className="max-w-[650px]">
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

/* --- GALLERY COMPONENT --- */

const CATEGORIES = ["All", "Arm", "Back/Chest", "Face", "Neck", "Leg"]

function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter items based on active category
  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter)

  return (
    <section className="bg-[#121212] py-16 px-4">
      <div className="container mx-auto max-w-[1140px]">

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-[6px] text-[15px] uppercase tracking-wide transition-all duration-300 ${activeFilter === cat
                ? "bg-[#D4C59D] text-black font-medium"
                : "bg-transparent text-[#FAD5E6] hover:bg-[#FAD5E6] hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative aspect-[2/3] overflow-hidden rounded-[8px] group bg-[#1a1a1a]"
              >
                <Image
                  src={item.src}
                  alt={`Tattoo ${item.category}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#D4C59D] text-black text-xs font-bold px-3 py-1 rounded uppercase">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

/* --- DATA: EXTRACTED FROM YOUR HTML --- */

const GALLERY_ITEMS = [
  { id: 1, category: "Neck", src: "/images/gallery/Tattoo-fine-line-neck-ghost-art-design.webp" },
  { id: 2, category: "Arm", src: "/images/gallery/Tattoo-graphic-name-arm-art-design.webp" },
  { id: 3, category: "Arm", src: "/images/gallery/Tattoo-fine-line-hand-flower-art-design.webp" },
  { id: 4, category: "Arm", src: "/images/gallery/Tattoo-graphic-memorial-arm-art-design.webp" },
  { id: 5, category: "Arm", src: "/images/gallery/Tattoo-graphic-lion-arm-art-design.webp" },
  { id: 6, category: "Leg", src: "/images/gallery/Tattoo-graphic-zeus-leg-art-design.webp" },
  { id: 7, category: "Back/Chest", src: "/images/gallery/Tattoo-chest-art-design.webp" },
  { id: 8, category: "Arm", src: "/images/gallery/Tattoo-graphic-colour-arm-art-design.webp" },
  { id: 9, category: "Leg", src: "/images/gallery/Tattoo-fine-line-leg-art-design.webp" },
  { id: 10, category: "Arm", src: "/images/gallery/Tattoo-graphic-dragon-shoulder-art-design.webp" },
  { id: 11, category: "Arm", src: "/images/gallery/Tattoo-graphic-colour-arm-art-design1.webp" },
  { id: 12, category: "Leg", src: "/images/gallery/Tattoo-graphic-star-leg-art-design.webp" },
  { id: 13, category: "Neck", src: "/images/gallery/Tattoo-fine-line-neck-flower-initial-art-design.webp" },
  { id: 14, category: "Leg", src: "/images/gallery/Tattoo-graphic-zeus-leg-art-design-3.webp" }, // Renamed from -2 based on context if duplicate
  { id: 15, category: "Arm", src: "/images/gallery/Tattoo-graphic-shoulder-art-design.webp" },
  { id: 16, category: "Arm", src: "/images/gallery/Tattoo-fine-line-arm-butterfly-art-design.webp" },
  { id: 17, category: "Back/Chest", src: "/images/gallery/Tattoo-fine-line-back-art-design.webp" },
  { id: 18, category: "Neck", src: "/images/gallery/ewdxw3ed.webp" },
  { id: 19, category: "Leg", src: "/images/gallery/Tattoo-graphic-zeus-leg-art-design-2.webp" },
  { id: 20, category: "Arm", src: "/images/gallery/Tattoo-graphic-clock-dove-arm-art-design.webp" },
  { id: 21, category: "Arm", src: "/images/gallery/Tattoo-graphic-cat-arm-art-design.webp" },
  { id: 22, category: "Arm", src: "/images/gallery/Tattoo-graphic-arm-art-design.webp" },
  { id: 23, category: "Face", src: "/images/gallery/Tattoo-face-cover-up-art-design.webp" },
]