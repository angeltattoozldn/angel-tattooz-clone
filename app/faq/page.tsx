import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tattoo FAQ | Common Questions Answered | Angel Tattooz",
  description:
    "Get answers to common tattoo questions. Pain, pricing, aftercare, healing time, and more. Expert advice from North London's premier tattoo studio.",
}

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "FAQ" },
  ])

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How much will my tattoo cost?",
          answer:
            "Tattoo pricing depends on size, complexity, placement, and time required. Small simple tattoos start around £80-150, while larger custom pieces are typically £100-150 per hour. We provide detailed quotes during your free consultation after discussing your design.",
        },
        {
          question: "Do tattoos hurt?",
          answer:
            "Pain levels vary by individual and placement. Most people describe the sensation as a scratching or burning feeling. Areas with more flesh tend to be less painful, while bony areas can be more sensitive. Our artists work efficiently to minimize discomfort, and most clients find the experience manageable.",
        },
        {
          question: "How do I book an appointment?",
          answer:
            "You can book online through our website, call us at 020 1234 5678, or message us on WhatsApp. We recommend starting with a free consultation to discuss your ideas and get a quote before scheduling your tattoo session.",
        },
        {
          question: "What should I bring to my consultation?",
          answer:
            "Bring any reference images, ideas, or inspiration photos you have. Think about size, placement, and your budget. We'll discuss your vision and create a custom design plan. No obligation to book on the spot.",
        },
        {
          question: "How old do I need to be to get a tattoo?",
          answer:
            "You must be 18 or older to get a tattoo in the UK. We require valid photo ID (passport or driving license) for all clients. No exceptions, even with parental consent.",
        },
      ],
    },
    {
      category: "Design & Planning",
      questions: [
        {
          question: "Can I bring my own design?",
          answer:
            "Yes! We welcome reference images and design ideas. Our artists will work with you to refine and adapt your design to work best as a tattoo, ensuring it will age well and look great on your chosen placement.",
        },
        {
          question: "How long does the design process take?",
          answer:
            "For custom designs, typically 1-2 weeks from consultation to final design approval. Complex pieces may take longer. We provide digital mockups and offer unlimited revisions until you're completely satisfied.",
        },
        {
          question: "Can I see the design before my appointment?",
          answer:
            "For custom work, yes! We'll send you digital mockups for approval. For simpler designs, you'll see the stencil on the day of your appointment before we begin. You always have final approval.",
        },
        {
          question: "What if I don't know exactly what I want?",
          answer:
            "That's completely normal! Book a consultation and share your general ideas, themes, or feelings you want to express. Our experienced artists will guide you through the creative process and help develop the perfect design.",
        },
      ],
    },
    {
      category: "The Tattoo Process",
      questions: [
        {
          question: "How long will my tattoo session take?",
          answer:
            "Session length varies by design size and complexity. Small tattoos may take 1-2 hours, medium pieces 3-5 hours, and large work may require multiple sessions of 4-8 hours each. We'll give you a time estimate during consultation.",
        },
        {
          question: "Can I take breaks during my session?",
          answer:
            "Yes! We encourage breaks for longer sessions. Feel free to request breaks anytime you need to stretch, use the bathroom, or have a snack. Your comfort is important to us.",
        },
        {
          question: "What should I wear to my appointment?",
          answer:
            "Wear comfortable clothing that provides easy access to the area being tattooed. Choose dark, old clothing in case of ink stains. Avoid tight clothing that might rub against your fresh tattoo.",
        },
        {
          question: "Should I eat before getting tattooed?",
          answer:
            "Yes! Eat a good meal 1-2 hours before your appointment and stay hydrated. This helps maintain your blood sugar and energy levels. Avoid alcohol and aspirin for 24 hours before, as they thin blood.",
        },
      ],
    },
    {
      category: "Aftercare & Healing",
      questions: [
        {
          question: "How do I care for my new tattoo?",
          answer:
            "Keep it clean and moisturized. Wash gently 2-3 times daily with antibacterial soap, pat dry, and apply a thin layer of recommended ointment. See our detailed aftercare guide for complete instructions.",
        },
        {
          question: "How long does a tattoo take to heal?",
          answer:
            "Surface healing takes 2-3 weeks, but complete healing takes 3-4 months. Initial peeling and flaking occur within the first week. Follow aftercare instructions carefully for best results.",
        },
        {
          question: "Can I swim or work out after getting tattooed?",
          answer:
            "Avoid swimming, saunas, and steam rooms for 2-3 weeks. Light exercise is fine, but avoid activities that cause excessive sweating or friction on the tattoo. Keep it clean and dry.",
        },
        {
          question: "What if my tattoo looks faded after healing?",
          answer:
            "Some fading during healing is normal as skin regenerates. We offer free touch-ups within the first year for work done at our studio. Book a touch-up appointment if needed after complete healing.",
        },
      ],
    },
    {
      category: "Safety & Health",
      questions: [
        {
          question: "Is getting a tattoo safe?",
          answer:
            "Yes, when done by licensed professionals following proper safety protocols. We use sterile, single-use needles, maintain strict hygiene standards, and follow all UK health and safety regulations.",
        },
        {
          question: "Can I get a tattoo if I have allergies?",
          answer:
            "Most people with allergies can get tattoos safely. Inform us of any known allergies during consultation. Severe metal allergies or specific pigment sensitivities may require patch testing or alternative inks.",
        },
        {
          question: "Can I get a tattoo if I'm pregnant or breastfeeding?",
          answer:
            "We don't tattoo pregnant or breastfeeding clients due to potential risks. We recommend waiting until after pregnancy and breastfeeding are complete for your safety.",
        },
        {
          question: "What about medical conditions or medications?",
          answer:
            "Certain conditions and medications may affect tattooing. Inform us of any medical conditions, medications, blood thinners, or immune system issues. We may require doctor's clearance in some cases.",
        },
      ],
    },
  ]

  const allFAQs = faqCategories.flatMap((category) =>
    category.questions.map((q) => ({
      question: q.question,
      answer: q.answer,
    })),
  )

  const faqSchema = generateFAQSchema(allFAQs)

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-linear-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Everything you need to know about getting a tattoo at Angel Tattooz
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h2 className="text-3xl font-semibold text-foreground">{category.category}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left text-foreground faq-question">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed faq-answer">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're here to help! Book a free consultation or get in touch with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/bookings/">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/contact-us/">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
