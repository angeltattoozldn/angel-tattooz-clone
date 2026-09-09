import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "First Tattoo Guide | What to Expect | Angel Tattooz",
  description: "Getting your first tattoo? Read our comprehensive guide on what to expect, how to prepare, and expert advice for your first time.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/services/first-tattoo-guide/",
  },
}

export default function FirstTattooGuidePage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Services", url: "https://www.angeltattooz.co.uk/services/" },
    { name: "First Tattoo Guide" },
  ])

  const faqs = [
    {
      question: "What should I know before getting my first tattoo?",
      answer: "Make sure you have eaten a good meal, stay hydrated, and wear comfortable clothing. Avoid alcohol or aspirin for 24 hours prior. Relax, you're in safe hands!"
    },
    {
      question: "Does the first tattoo hurt the most?",
      answer: "Everyone's pain tolerance is different. It usually feels like a consistent scratching or vibrating sensation. We recommend choosing a less sensitive area (like the outer arm) for your first time."
    },
    {
      question: "How do I choose the right design?",
      answer: "Bring references and ideas to your free consultation. We will help you translate your concepts into a custom piece of art that suits your body's natural flow and fits your style."
    }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-20 text-white">
        <h1 className="text-4xl font-bold mb-8">First Tattoo Guide</h1>
        <div className="mb-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-300">
            We understand getting your first tattoo is a big step. Our friendly, experienced artists are here to guide you through the process, ensuring you feel comfortable and confident every step of the way.
          </p>
        </div>
        
        <h2 className="text-3xl font-semibold mb-6">First Timer FAQs</h2>
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
