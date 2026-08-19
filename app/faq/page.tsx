import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Angel Tattooz",
  description:
    "Get answers to common tattoo questions. Pain, pricing, aftercare, healing time, and more. Expert advice from Angel Tattooz.",
}

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "FAQ" },
  ])

  const allFAQs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our online booking form on the website. If you have a design, you can book a 30-minute consultation. If you need help with a design, you can book a 1-hour appointment."
    },
    {
      question: "What are the prices for tattoos?",
      answer: "Black & White Tattoos: £120 (currently on special offer for £100 for a 1-hour session). Colour Tattoos: £150 (currently on special offer for £130 for a 1-hour session)",
      jsxAnswer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Black &amp; White Tattoos: £120 (currently on special offer for £100 for a 1-hour session)</li>
          <li>Colour Tattoos: £150 (currently on special offer for £130 for a 1-hour session)</li>
        </ul>
      )
    },
    {
      question: "Do I need to pay a deposit?",
      answer: "Yes, a £50 deposit is required to book in for a tattoo and for the 1-hour appointment if you do not have a design."
    },
    {
      question: "Can I get a quote for a custom tattoo?",
      answer: "Yes, you can request a quotation for custom & complex tattoos. There is a £50 fee for the custom design, which goes towards the price of the tattoo when you get it done."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring a valid form of ID. Ensure you are well-rested, hydrated, and have eaten a good meal before your appointment. Avoid alcohol and blood-thinning medications 24 hours prior to your session. If you are a new customer, ensure you have completed the patch test 24 hours before your appointment if required."
    },
    {
      question: "Are there any health conditions that might affect my ability to get a tattoo?",
      answer: "Yes, certain health conditions might affect your ability to get a tattoo. Please inform us if you have any medical conditions, allergies, or if you are on medication. Tattooing is not recommended for individuals who are pregnant or breastfeeding. During your consultation, let your artist know about any skin sensitivities or allergies. We use high-quality, hypoallergenic inks and can advise on the best approach."
    },
    {
      question: "Is there anything I should avoid before my tattoo appointment?",
      answer: "Yes, please avoid alcohol and drugs before your appointment. It is important to be in a sober state for the procedure."
    },
    {
      question: "How long will my tattoo take?",
      answer: "The duration of your tattoo session depends on the size and complexity of the design. Standard sessions are typically 1 hour, but this can vary."
    },
    {
      question: "Do you offer touch-ups?",
      answer: "Yes, we offer touch-ups for our tattoos. Please discuss this with your tattoo artist during your consultation."
    },
    {
      question: "What if I need to reschedule my appointment?",
      answer: "If you need to reschedule, please contact us at least 48 hours in advance. We require at least 48 hours' notice for cancellations or rescheduling. Deposits are non-refundable but can be transferred to a new appointment if rescheduled in time. Please note that the £50 deposit, which goes towards the price of the tattoo, is non-refundable for no-shows."
    },
    {
      question: "How do I choose the right tattoo design?",
      answer: "Our experienced tattoo artists can help you choose a design that fits your style and preferences. Schedule a 1-hour consultation for just £50 to discuss your ideas and start the design process."
    },
    {
      question: "What should I expect during my tattoo session?",
      answer: "Our artists will clean and prep the area, transfer the design, and then start tattooing. The process can take a few hours, depending on the complexity of the design. You can take breaks if needed."
    },
    {
      question: "Does getting a tattoo hurt?",
      answer: "Pain levels vary by individual and tattoo placement. Our artists strive to make the experience as comfortable as possible. You can discuss any concerns during your consultation. We also use the very best tattoo guns, which have pressure sensitivity on them, which really helps as well to minimize any discomfort."
    },
    {
      question: "How do I care for my new tattoo?",
      answer: "After your session, our artist will provide detailed aftercare instructions to ensure proper healing. This typically includes keeping the tattoo clean, moisturized, and protected from direct sunlight.",
      jsxAnswer: (
        <p>After your session, our artist will provide <Link href="/aftercare" className="text-black font-semibold hover:underline">detailed aftercare instructions</Link> to ensure proper healing. This typically includes keeping the tattoo clean, moisturized, and protected from direct sunlight.</p>
      )
    },
    {
      question: "What if I want to cover up an old tattoo?",
      answer: "Our skilled artists specialize in cover-up tattoos. Show us your existing tattoo, and we can discuss design options to create a new piece you'll love."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "While we recommend booking an appointment to ensure availability, we do accept walk-ins based on artist availability. Call ahead to check for same-day openings."
    }
  ]

  const faqSchema = generateFAQSchema(allFAQs)

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SiteHeader />
      <main className="bg-[#121212]">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              fill
              className="object-cover object-center"
              alt="Angel Tattooz Studio Interior"
              src="/images/home/Angle-Tattooz-Website-Hero-Image.webp"
            />
            <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-[#121212] via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 pt-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hey text-[#FAD5E6] tracking-wide leading-tight max-w-5xl mx-auto drop-shadow-lg">
              FAQ
            </h1>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-[45px] text-[#FAD5E6] font-normal leading-tight mb-4 drop-shadow-md">
                You Got Questions. We Got Answers
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {allFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="group border border-zinc-600 rounded-[10px] overflow-hidden data-[state=open]:border-[#FAD5E6] data-[state=open]:bg-[#FAD5E6] transition-all duration-300"
                >
                  <AccordionTrigger className="font-sans flex-1 text-center justify-between text-white group-data-[state=open]:text-black hover:no-underline py-5 px-6 [&>svg]:ml-4 group-data-[state=open]:[&>svg]:text-black">
                    <span className="flex-1 text-center font-bold tracking-wide text-[15px]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white group-data-[state=open]:text-black leading-relaxed pb-6 px-6 text-sm md:text-base font-medium">
                    {faq.jsxAnswer || <p>{faq.answer}</p>}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
