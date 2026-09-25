import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Best First Tattoo Studio London & Southgate | Angel Tattooz",
  description: "Looking for the best first tattoo studio in London near Southgate & Cockfosters? Angel Tattooz offers patient, private consultations and custom designs in a welcoming setting.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/best-first-tattoo-studio-london-southgate/",
  },
}

export default function BestFirstTattooStudioPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "First Tattoo Guide", url: "https://www.angeltattooz.co.uk/services/first-tattoo-guide/" },
    { name: "Best First Tattoo Studio London & Southgate" },
  ])

  const faqs = [
    {
      question: "Why choose Angel Tattooz for your first tattoo near Southgate?",
      answer: "We specialize in making first-time clients feel completely at ease. Our artists provide unhurried, one-on-one consultations, transparent pricing, and gentle application techniques just minutes from Southgate on the Piccadilly Line.",
    },
    {
      question: "Can I review and tweak my design before tattooing starts?",
      answer: "Yes, 100%. We provide full mockups and collaborate on design revisions until you are completely confident in the size, style, and anatomical placement.",
    },
    {
      question: "What should I do to prepare for my first appointment?",
      answer: "Eat a hearty meal beforehand, hydrate well, get plenty of sleep, and wear comfortable clothing that provides easy access to the area being tattooed.",
    },
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-zinc-100">
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-28 px-4 bg-linear-to-b from-black via-zinc-950 to-[#121212] border-b border-white/10 text-center">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4C59D]/10 text-[#D4C59D] border border-[#D4C59D]/30 text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-4 h-4" /> First-Timer Friendly Studio
            </span>
            <h1 className="text-4xl md:text-6xl font-hey text-[#FAD5E6] leading-tight mb-6">
              Best First Tattoo Studio in London & Southgate
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
              Getting your first tattoo is a landmark moment. At Angel Tattooz, located in Cockfosters immediately adjacent to Southgate, we provide a warm, supportive, and clinical-grade environment to bring your design to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-[#D4C59D] hover:bg-white text-zinc-950 font-semibold px-8 py-6 text-base">
                <Link href="/bookings/">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-base">
                <Link href="/services/first-tattoo-guide/">Read First-Time Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4 bg-[#121212]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-hey text-[#FAD5E6] text-center mb-12">
              Why First-Timers Choose Angel Tattooz
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <HeartHandshake className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Zero Pressure Consultations</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  We walk you through sizing, placement, and pain management before committing to ink. Your comfort always comes first.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <ShieldCheck className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Hospital-Grade Hygiene</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Autoclave sterilization, 100% single-use membrane cartridges, and medical-grade studio protocols fully licensed by Barnet Council.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <CheckCircle2 className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Lifetime Aftercare Support</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Comprehensive healing instructions, recommended balms, and complimentary touch-ups within your first year of tattooing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-zinc-950/60 border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-hey text-[#FAD5E6] text-center mb-12">
              First-Time Tattoo FAQs
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-zinc-300 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
