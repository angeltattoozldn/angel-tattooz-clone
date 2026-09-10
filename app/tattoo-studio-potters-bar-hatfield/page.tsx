import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Navigation, Award, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Tattoo Studio Near Potters Bar & Hatfield | Angel Tattooz",
  description: "Looking for an elite tattoo studio near Potters Bar and Hatfield? Angel Tattooz is conveniently located in Cockfosters on the EN4 border, with free parking and direct transport.",
  alternates: {
    canonical: "https://www.angeltattooz.co.uk/tattoo-studio-potters-bar-hatfield/",
  },
}

export default function TattooStudioPottersBarHatfieldPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Service Areas", url: "https://www.angeltattooz.co.uk/#service-areas" },
    { name: "Tattoo Studio Potters Bar & Hatfield" },
  ])

  const faqs = [
    {
      question: "How far is Angel Tattooz from Potters Bar and Hatfield?",
      answer: "We are just 8 to 12 minutes drive down the A111 (Cockfosters Road) from Potters Bar, and approximately 18 minutes from Hatfield. We are also reachable via the 298 bus route.",
    },
    {
      question: "Is free parking available for clients driving from Hertfordshire?",
      answer: "Yes, free street parking is available along Station Parade and immediate adjoining residential streets right by our studio entrance.",
    },
    {
      question: "What tattoo styles do you specialize in?",
      answer: "Our award-winning artists cover black & grey realism, fine line, illustrative color, Japanese irezumi sleeves, script lettering, and complex cover-up projects.",
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
              <MapPin className="w-4 h-4" /> Premier Studio for Hertfordshire Clients
            </span>
            <h1 className="text-4xl md:text-6xl font-hey text-[#FAD5E6] leading-tight mb-6">
              Premier Tattoo Studio Serving Potters Bar & Hatfield
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
              Experience London-caliber tattoo artistry without the central London congestion. Located in Cockfosters right on the Hertfordshire border with free parking and direct road access.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-[#D4C59D] hover:bg-white text-zinc-950 font-semibold px-8 py-6 text-base">
                <Link href="/bookings/">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-base">
                <Link href="/contact-us/">Get Directions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Travel Info */}
        <section className="py-20 px-4 bg-[#121212]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-hey text-[#FAD5E6] text-center mb-12">
              Fast, Convenient Travel from Hertfordshire
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <Navigation className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Direct Road Access</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Direct drive down the A111 (Cockfosters Road). Just 8 minutes from Potters Bar and 18 minutes from Hatfield via the A1(M) / M25 J24.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <MapPin className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Hassle-Free Free Parking</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Enjoy hassle-free free parking directly on Station Parade, right next door to Costa Coffee and steps from our studio door.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-white/10">
                <Award className="w-10 h-10 text-[#D4C59D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Award-Winning Quality</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Access 15+ years of tattoo mastery with 127+ 5-star Google reviews right on your local North London doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 bg-zinc-950/60 border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-hey text-[#FAD5E6] text-center mb-12">
              Hertfordshire Travel FAQs
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
