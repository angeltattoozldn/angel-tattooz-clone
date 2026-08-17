import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateServiceSchema, generateFAQSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Check, Clock, DollarSign, Shield } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const servicesData: Record<
  string,
  {
    title: string
    description: string
    longDescription: string
    features: string[]
    process: Array<{ title: string; description: string }>
    pricing: string
    duration: string
    faqs: Array<{ question: string; answer: string }>
    relatedServices: Array<{ title: string; slug: string }>
    imageQuery: string
  }
> = {
  "custom-tattoo-design": {
    title: "Custom Tattoo Design",
    description: "One-of-a-kind designs tailored specifically to your vision and story",
    longDescription:
      "Our custom tattoo design service is perfect for clients who want truly unique artwork. We work closely with you to understand your vision, personal story, and aesthetic preferences, then create original designs that are exclusively yours. Whether you have a clear idea or need creative guidance, our artists will craft a piece that exceeds your expectations.",
    features: [
      "Personalized design consultation",
      "Original custom artwork",
      "Unlimited design revisions",
      "Digital mockups for approval",
      "Size and placement guidance",
      "Professional design portfolio",
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "We discuss your ideas, inspiration, and vision for the tattoo",
      },
      { title: "Design Creation", description: "Our artist creates custom artwork based on your specifications" },
      { title: "Review & Revisions", description: "We refine the design together until it's perfect" },
      { title: "Final Approval", description: "You approve the final design before your appointment" },
    ],
    pricing: "From £150",
    duration: "3-6 hours",
    faqs: [
      {
        question: "How long does the custom design process take?",
        answer:
          "Typically 1-2 weeks from initial consultation to final design approval. Rush services available for an additional fee.",
      },
      {
        question: "Can I bring my own design ideas?",
        answer:
          "We welcome reference images and sketches. Our artists will use them as inspiration to create your custom piece.",
      },
      {
        question: "How many revisions can I request?",
        answer: "We offer unlimited revisions until you're completely satisfied with the design.",
      },
      {
        question: "Do you charge a deposit for custom designs?",
        answer: "Yes, we require a £50 deposit which goes toward your final tattoo cost.",
      },
    ],
    relatedServices: [
      { title: "Black & Gray Tattoos", slug: "black-gray-tattoos" },
      { title: "Color Tattoos", slug: "color-tattoos" },
    ],
    imageQuery: "custom tattoo design sketch detailed artwork",
  },
  "black-gray-tattoos": {
    title: "Black & Gray Tattoos",
    description: "Timeless artistry using shading techniques for stunning depth and realism",
    longDescription:
      "Black and gray tattoos are a timeless art form that relies on masterful shading techniques to create depth, dimension, and stunning realism. This classic style is perfect for portraits, realistic imagery, and designs that require subtle gradations and fine detail work. Our artists specialize in the intricate techniques needed to achieve photorealistic results.",
    features: [
      "Photorealistic portrait work",
      "Expert shading techniques",
      "Fine detail execution",
      "Classic aesthetic appeal",
      "Versatile design options",
      "Aging gracefully over time",
    ],
    process: [
      { title: "Design Planning", description: "We discuss your vision and create the perfect composition" },
      { title: "Stencil Application", description: "Precise placement and sizing on your chosen body area" },
      { title: "Tattooing", description: "Gradual building of layers for depth and realism" },
      { title: "Final Details", description: "Finishing touches for maximum impact" },
    ],
    pricing: "From £100/hour",
    duration: "2-8 hours",
    faqs: [
      {
        question: "Do black and gray tattoos fade faster than color?",
        answer:
          "No, black and gray tattoos actually tend to age very well. Black ink is the most stable and longest-lasting tattoo pigment.",
      },
      {
        question: "Can you add color to a black and gray tattoo later?",
        answer: "Yes, color can be added later if you decide you want to incorporate it into your existing piece.",
      },
      {
        question: "What subjects work best for black and gray?",
        answer:
          "Portraits, realistic imagery, religious iconography, and designs requiring subtle shading work beautifully in black and gray.",
      },
    ],
    relatedServices: [
      { title: "Custom Tattoo Design", slug: "custom-tattoo-design" },
      { title: "Portrait Tattoos", slug: "portrait-tattoos" },
    ],
    imageQuery: "black and gray realistic tattoo portrait detailed shading",
  },
  "color-tattoos": {
    title: "Color Tattoos",
    description: "Vibrant, long-lasting color work using premium inks and expert techniques",
    longDescription:
      "Color tattoos allow for vibrant, eye-catching artwork that makes a bold statement. We use only premium, long-lasting inks and employ expert color theory to create pieces that maintain their vibrancy for years. From subtle watercolor effects to bold traditional colors, our artists have mastered the full spectrum of color tattooing techniques.",
    features: [
      "Premium quality color inks",
      "Expert color theory application",
      "Bold, vibrant results",
      "UV-resistant pigments",
      "Wide color palette options",
      "Touch-up warranty included",
    ],
    process: [
      { title: "Color Consultation", description: "We select the perfect color palette for your design" },
      { title: "Outlining", description: "Creating the framework for your tattoo" },
      { title: "Color Application", description: "Layering colors for depth and vibrancy" },
      { title: "Blending & Details", description: "Final touches for a polished result" },
    ],
    pricing: "From £120/hour",
    duration: "3-10 hours",
    faqs: [
      {
        question: "How long do color tattoos last?",
        answer:
          "With proper care and quality inks, color tattoos can maintain their vibrancy for decades. Some fading is natural over time.",
      },
      {
        question: "Which colors fade the fastest?",
        answer:
          "Lighter colors like yellow, white, and pastels tend to fade faster than darker, more saturated colors like red, blue, and black.",
      },
      {
        question: "Do you offer touch-ups for color tattoos?",
        answer: "Yes, we offer free touch-ups within the first year for all our color work.",
      },
    ],
    relatedServices: [
      { title: "Custom Tattoo Design", slug: "custom-tattoo-design" },
      { title: "Watercolor Tattoos", slug: "watercolor-tattoos" },
    ],
    imageQuery: "vibrant color tattoo artwork bold colors saturated",
  },
  "cover-up-tattoos": {
    title: "Cover-Up Tattoos",
    description: "Transform old or unwanted ink into beautiful new artwork",
    longDescription:
      "Cover-up tattoos are a specialized art form that requires expert planning and execution. Our artists excel at concealing old or unwanted tattoos by creating new designs that strategically incorporate or completely transform the existing ink. We'll work with you to design something beautiful that gives you a fresh start.",
    features: [
      "Expert concealment techniques",
      "Creative design solutions",
      "Strategic color application",
      "Size and placement optimization",
      "Before/after consultation",
      "Transformation guarantee",
    ],
    process: [
      { title: "Assessment", description: "We evaluate your existing tattoo and discuss possibilities" },
      { title: "Design Strategy", description: "Creating a new design that effectively covers the old ink" },
      { title: "Color Planning", description: "Selecting colors that will provide optimal coverage" },
      { title: "Application", description: "Expert execution of your new tattoo" },
    ],
    pricing: "From £150/hour",
    duration: "4-12 hours",
    faqs: [
      {
        question: "Can any tattoo be covered up?",
        answer:
          "Most tattoos can be covered, though some may require laser lightening first. We'll assess your specific situation during consultation.",
      },
      {
        question: "Will the old tattoo show through?",
        answer:
          "With proper design and technique, old tattoos can be completely concealed. Strategic use of darker colors and placement ensures optimal coverage.",
      },
      {
        question: "How much bigger does the new tattoo need to be?",
        answer:
          "Cover-ups typically need to be 2-3 times larger than the original tattoo for complete coverage, though this varies by design.",
      },
    ],
    relatedServices: [
      { title: "Custom Tattoo Design", slug: "custom-tattoo-design" },
      { title: "Color Tattoos", slug: "color-tattoos" },
    ],
    imageQuery: "tattoo cover up transformation before and after",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    return {
      title: "Service Not Found | Angel Tattooz",
    }
  }

  return {
    title: `${service.title} | Tattoo Services | Angel Tattooz North London`,
    description: `${service.description}. Professional ${service.title.toLowerCase()} services in North London. ${service.pricing} - ${service.duration}. Book your consultation today.`,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Services", url: "https://www.angeltattooz.co.uk/services" },
    { name: service.title },
  ])

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
  })

  const faqSchema = generateFAQSchema(service.faqs)

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={faqSchema} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="font-display text-5xl md:text-6xl text-primary text-balance">{service.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <p className="text-sm text-muted-foreground">Pricing</p>
                    <p className="font-semibold text-foreground">{service.pricing}</p>
                  </div>
                  <div className="space-y-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{service.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <p className="text-sm text-muted-foreground">Warranty</p>
                    <p className="font-semibold text-foreground">Included</p>
                  </div>
                </div>
                <Button size="lg" asChild className="text-lg">
                  <Link href="/bookings/">Book Consultation</Link>
                </Button>
              </div>
              <div className="relative aspect-square rounded overflow-hidden">
                <img
                  src={`/.jpg?height=600&width=600&query=${service.imageQuery}`}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-foreground">About This Service</h2>
                <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Our proven process ensures exceptional results</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-block">
                    <span className="font-display text-6xl text-primary/20">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about {service.title.toLowerCase()}
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Services */}
        {service.relatedServices.length > 0 && (
          <section className="py-24 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-foreground mb-8">Related Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.relatedServices.map((related, index) => (
                  <Link key={index} href={`/services/${related.slug}`}>
                    <Card className="hover:border-primary transition-colors">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{related.title}</h3>
                        <Button variant="outline" className="mt-4 bg-transparent">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book your free consultation to discuss your {service.title.toLowerCase()} with our expert artists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/bookings/">Book Now</Link>
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

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}
