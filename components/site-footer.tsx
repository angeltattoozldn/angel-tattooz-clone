"use client"

import Link from "next/link"
import Image from "next/image"
import { Rss, MapPin, Phone } from "lucide-react"
import { BUSINESS_CONFIG, getFullAddress } from "@/config/business.config"

export function SiteFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-285 px-4">

        {/* Top Border Line */}
        <div className="border-t border-[#FAD5E6] mt-15 pt-11 pb-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            {/* --- COLUMN 1: LOGO --- */}
            <div className="flex flex-col items-center justify-start">
              <Link href="/" className="inline-block">
                <Image
                  src="/angel-tattooz-logo-primary.svg"
                  alt="Angel Tattooz Logo"
                  width={250}
                  height={130}
                  className="w-[80%] h-auto max-w-62.5 opacity-100"
                />
              </Link>
            </div>

            {/* --- COLUMN 2: ADDRESS & CONTACT --- */}
            <div className="flex flex-col items-center gap-6">
              {/* Address */}
              <div className="flex flex-col items-center gap-3">
                <div className="text-white">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(getFullAddress())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] leading-[1.6] font-normal hover:text-[#FAD5E6] transition-colors font-sans"
                >
                  {BUSINESS_CONFIG.primaryAddress.street},<br />
                  {BUSINESS_CONFIG.primaryAddress.area}, {BUSINESS_CONFIG.primaryAddress.city},<br />
                  {BUSINESS_CONFIG.primaryAddress.postcode}
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-3">
                <div className="text-white">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                  className="text-[#FAD5E6] text-[16px] font-normal hover:text-white transition-colors font-sans"
                >
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* --- COLUMN 3: QUICK LINKS --- */}
            <div className="flex flex-col items-center gap-3 text-[16px] font-sans pt-2">
              <Link href="/faq/" className="hover:text-[#FAD5E6] transition-colors">FAQ</Link>
              <Link href="/aftercare/" className="hover:text-[#FAD5E6] transition-colors">After Care</Link>
              <Link href="/privacy-and-terms/" className="hover:text-[#FAD5E6] transition-colors">Privacy & Terms</Link>
              <Link href="/#newsletter" className="hover:text-[#FAD5E6] transition-colors">Offer</Link>
            </div>

            {/* --- COLUMN 4: HOURS & SOCIALS --- */}
            <div className="flex flex-col items-center">
              <div className="mb-6 space-y-1 font-sans text-center">
                <p className="font-bold text-[16px]">Mon-Sat</p>
                <p className="text-[16px] font-normal">{BUSINESS_CONFIG.openingHours.monday}</p>
                <p className="font-bold text-[16px] mt-4">Sunday</p>
                <p className="text-[16px] font-normal">{BUSINESS_CONFIG.openingHours.sunday}</p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=61558770900820"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://www.instagram.com/angeltattoozldn/"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  }
                />

                {/* TikTok (Custom SVG as Lucide doesn't have it) */}
                <SocialLink
                  href="https://www.tiktok.com/@angeltattoozldn"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  }
                />

                <SocialLink
                  href="https://www.youtube.com/channel/UC6rRXUxTs7eu7rZZtfDXqkQ"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.083 0 12 0 12s0 3.917.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.917 24 12 24 12s0-3.917-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  }
                />

                {/* Pinterest (Custom SVG as Lucide doesn't have it) */}
                <SocialLink
                  href="https://www.pinterest.com/ink1180/"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                    </svg>
                  }
                />

                <SocialLink
                  href="/blog/"
                  icon={<Rss className="w-5 h-5" />}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- BOTTOM COPYRIGHT BAR --- */}
      <div className="bg-black py-6 mt-8 border-t border-white/5">
        <div className="container mx-auto text-center">
          <p className="text-white text-[14px] font-sans font-normal tracking-wide">
            2024 © Angel Tattooz
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#D4C59D] transition-colors duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  )
}