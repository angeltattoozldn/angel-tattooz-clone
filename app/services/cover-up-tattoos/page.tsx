import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cover Up Tattoos London | Expert Tattoo Cover-Ups | Angel Tattooz",
  description: "Specialist cover-up tattoos in North London. Transform old or unwanted tattoos into beautiful new art with our expert artists.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/services/cover-up-tattoos/",
  },
}

export default function CoverUpTattoosPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Services", url: "https://www.angeltattooz.co.uk/services/" },
    { name: "Cover Up Tattoos" },
  ])

  const faqs = [
    {
      question: "Can any tattoo be covered up?",
      answer: "Most tattoos can be covered, but it depends on the size, darkness, and placement of the original tattoo. We offer a dedicated consultation to evaluate your existing tattoo and discuss realistic options for covering it."
    },
    {
      question: "Will the old tattoo show through?",
      answer: "A successful cover-up uses strategic design, shading, and color placement to completely hide or integrate the old tattoo. Our artists specialize in techniques that ensure the old ink won't be visible once fully healed."
    },
    {
      question: "Do cover-ups need to be much larger than the original?",
      answer: "Generally, yes. To effectively hide the old design and create a visually appealing new piece, the cover-up usually needs to be somewhat larger. We will discuss sizing during your consultation."
    }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-20 text-white">
        <h1 className="text-4xl font-bold mb-8">Expert Cover-Up Tattoos</h1>
        <div className="mb-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-300">
            Don't live with a tattoo you no longer love. Our award-winning artists specialize in transforming old, faded, or unwanted tattoos into beautiful new artwork.
          </p>
        </div>
        
        <h2 className="text-3xl font-semibold mb-6">Cover-Up FAQs</h2>
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-white faq-question">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
