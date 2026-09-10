import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wand2, Shield, EyeOff } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Tattoo Cover Up Studio London | Expert Cover-Ups | Angel Tattooz",
  description: "Looking for the best tattoo cover up studio in London? Angel Tattooz specializes in transforming old, faded, or regret tattoos into breathtaking custom art without laser removal.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/best-tattoo-cover-up-studio-london/",
  },
}

export default function BestTattooCoverUpStudioPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Services", url: "https://www.angeltattooz.co.uk/services/" },
    { name: "Cover-Up Tattoos", url: "https://www.angeltattooz.co.uk/services/cover-up-tattoos/" },
    { name: "Best Tattoo Cover Up Studio London" },
  ])

  const faqs = [
    {
      question: "Can dark, heavy black tattoos be covered successfully?",
      answer: "Yes. By strategically utilizing depth, contrast, textures, and anatomical flow—such as Japanese irezumi motifs, dark floral elements, or heavy black & grey realism—we can mask existing ink completely.",
    },
    {
      question: "Do I need laser tattoo removal before getting a cover-up?",
      answer: "In the vast majority of cases, no. Our artists specialize in clever concealment designs that eliminate the time, pain, and high costs of laser sessions.",
    },
    {
      question: "How much larger will the new tattoo need to be?",
      answer: "Cover-ups typically require an area approximately 2 to 3 times the size of the original ink to incorporate sufficient background gradients and distracting visual textures.",
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
              <Wand2 className="w-4 h-4" /> Award-Winning Cover-Up Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-hey text-[#FAD5E6] leading-tight mb-6">
              Best Tattoo Cover-Up Studio in London
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
              Don't settle for living with a tattoo you no longer love. At Angel Tattooz, we transform mistakes, faded ink, and outdated names into stunning bespoke masterpieces you will proudly wear forever.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-[#D4C59D] hover:bg-white text-zinc-950 font-semibold px-8 py-6 text-base">
                <Link href="/bookings/">Book Cover-Up Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-base">
                <Link href="/services/cover-up-tattoos/">View Cover-Up Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-[#121212]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-hey text-[#FAD5E6] text-center mb-12">
              Our Advanced Concealment Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <EyeOff className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Total Concealment</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Strategic ink saturation and shading that permanently masks old lines without muddying the fresh artwork.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <Wand2 className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Creative Vision</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Every cover-up is custom designed around your existing ink shape to turn problem areas into visual focal points.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <Shield className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Laser Alternative</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Avoid months of painful, expensive laser treatments. Walk out of our studio with complete, healed art you adore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 bg-zinc-950/60 border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-hey text-[#FAD5E6] text-center mb-12">
              Tattoo Cover-Up FAQs
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
