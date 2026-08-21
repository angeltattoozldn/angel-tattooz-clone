"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"


export default function PaymentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SiteHeader />

      <main className="flex-1">

        {/* =========================================
            1. HERO SECTION
            Matches Elementor ID: 96b68ce
           ========================================= */}
        <section className="relative w-full py-[150px] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/payments/payments-hero.webp"
              alt="Angel Tattooz Payments"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-[#FAD5E6] font-hey text-[60px] md:text-[90px] leading-none drop-shadow-xl">
              Payments
            </h1>
          </div>
        </section>

        {/* =========================================
            2. INTRO TEXT
            Matches Elementor ID: 0c7a78b
           ========================================= */}
        <section className="bg-[#121212] pt-16 pb-8 px-4">
          <div className="container mx-auto max-w-[800px] text-center">
            <p className="text-[#FF4D4D] font-sans text-[16px] font-normal leading-[1.6]">
              Please select your preferred method of payment and proceed with making the
              payment to secure your appointment.
            </p>
          </div>
        </section>

        {/* =========================================
            3. PAYMENT TABS SECTION
            Matches Elementor ID: b8d0dfa (jkit_tabs)
           ========================================= */}
        <PaymentTabs />

        {/* =========================================
            4. FOOTER DESCRIPTION
            Matches Elementor ID: af8d297
           ========================================= */}
        <section className="bg-[#121212] pt-8 pb-20 px-4">
          <div className="container mx-auto max-w-[900px] text-center">
            <p className="text-white font-sans text-[15px] font-light leading-relaxed">
              Explore our secure payment options for a seamless booking process. Whether you prefer the
              convenience of online transactions via Paypal or Stripe, or the simplicity of direct bank deposits,
              we’ve got you covered. Rest assured, your payment information is encrypted and safeguarded to
              ensure a worry-free experience. Choose your preferred method below and book your appointment today!
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}

/* --- PAYMENT TABS COMPONENT --- */

function PaymentTabs() {
  const [activeTab, setActiveTab] = useState<"bank" | "card" | "paypal">("bank")

  return (
    <section className="bg-[#121212] pb-8 px-4">
      <div className="container mx-auto max-w-[960px]">

        {/* TABS HEADER */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center mb-8">

          {/* Tab 1: Bank Deposit */}
          <button
            onClick={() => setActiveTab("bank")}
            aria-label="Bank Deposit"
            className={`
              relative w-full md:w-1/3 h-[80px] flex items-center justify-center rounded-[10px] md:rounded-r-none md:rounded-l-[10px] transition-all duration-300
              ${activeTab === "bank" ? "bg-[#D4C59D] scale-105 z-10 shadow-lg" : "bg-[#D5D5D5] hover:bg-[#e0e0e0]"}
            `}
          >
            <div className="relative w-[160px] h-[50px]">
              <Image
                src="/images/payments/BANK-DEPOSIT.webp"
                alt="Bank Deposit"
                fill
                className="object-contain"
              />
            </div>
            {/* Little Triangle Pointer for Active Tab */}
            {activeTab === "bank" && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D4C59D] rotate-45"></div>
            )}
          </button>

          {/* Tab 2: Cards / Stripe */}
          <button
            onClick={() => setActiveTab("card")}
            aria-label="Card Payments"
            className={`
              relative w-full md:w-1/3 h-[80px] flex items-center justify-center md:rounded-none rounded-[10px] transition-all duration-300
              ${activeTab === "card" ? "bg-[#D4C59D] scale-105 z-10 shadow-lg" : "bg-[#D5D5D5] hover:bg-[#e0e0e0]"}
            `}
          >
            <div className="relative w-[180px] h-[60px]">
              <Image
                src="/images/payments/cardpayments.webp"
                alt="Card Payments"
                fill
                className="object-contain"
              />
            </div>
            {activeTab === "card" && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D4C59D] rotate-45"></div>
            )}
          </button>

          {/* Tab 3: PayPal */}
          <button
            onClick={() => setActiveTab("paypal")}
            aria-label="PayPal"
            className={`
              relative w-full md:w-1/3 h-[80px] flex items-center justify-center rounded-[10px] md:rounded-l-none md:rounded-r-[10px] transition-all duration-300
              ${activeTab === "paypal" ? "bg-[#D4C59D] scale-105 z-10 shadow-lg" : "bg-[#D5D5D5] hover:bg-[#e0e0e0]"}
            `}
          >
            <div className="relative w-[160px] h-[50px]">
              <Image
                src="/images/payments/BANK-DEPOSIT-2.webp"
                alt="PayPal"
                fill
                className="object-contain"
              />
            </div>
            {activeTab === "paypal" && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D4C59D] rotate-45"></div>
            )}
          </button>

        </div>

        {/* TABS CONTENT AREA */}
        <div className="border border-[#D4C59D] rounded-[10px] p-8 md:p-12 min-h-[300px] flex items-center justify-center">

          {/* Content: Bank Deposit */}
          {activeTab === "bank" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <h3 className="text-white font-sans text-[28px] md:text-[36px] font-bold tracking-wider">
                54093195
              </h3>
              <h3 className="text-white font-sans text-[24px] md:text-[30px] font-bold tracking-wide">
                Metro Bank
              </h3>
              <p className="text-white font-sans text-[20px] font-bold">
                Sort Code <span className="ml-2">23/05/80</span>
              </p>
            </motion.div>
          )}

          {/* Content: Card Payment (Stripe) */}
          {activeTab === "card" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <a
                href="https://buy.stripe.com/9AQ4je1EQ3ff7T24gh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4C59D] hover:bg-white text-zinc-950 font-sans font-semibold text-[16px] py-4 px-8 rounded-[4px] transition-colors duration-300"
              >
                £50 Booking Advance
              </a>
              <p className="text-white/60 text-sm mt-4">Secure payment via Stripe</p>
            </motion.div>
          )}

          {/* Content: PayPal */}
          {activeTab === "paypal" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* Placeholder link, or reuse Stripe/PayPal link if available */}
              <a
                href="#"
                className="inline-block bg-[#D4C59D] hover:bg-white text-zinc-950 font-sans font-semibold text-[16px] py-4 px-8 rounded-[4px] transition-colors duration-300"
              >
                £50 Booking Advance
              </a>
              <p className="text-white/60 text-sm mt-4">Secure payment via PayPal</p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  )
}