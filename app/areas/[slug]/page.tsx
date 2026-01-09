import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema, generateServiceSchema } from "@/lib/schema"
import { getServiceAreaBySlug, getAllServiceAreaSlugs } from "@/config/service-areas.config"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { MapPin, Train, Bus, Car, Phone, Navigation } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getServiceAreaBySlug(slug)

  if (!area) {
    return {
      title: "Area Not Found | Angel Tattooz",
    }
  }

  return {
    title: `Tattoo Studio Serving ${area.name} | ${area.distance} Away | Angel Tattooz`,
    description: `${area.description} Located ${area.travelTime} from ${area.name}. Expert tattoo services near ${area.nearestStation}. Book your free consultation today.`,
    keywords: [
      `tattoo ${area.name}`,
      `tattoo studio ${area.name}`,
      `tattoo artist ${area.name}`,
      "custom tattoos",
      "North London tattoo",
    ],
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getServiceAreaBySlug(slug)

  if (!area) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Service Areas", url: "https://www.angeltattooz.co.uk/#service-areas" },
    { name: area.name },
  ])

  const serviceSchema = generateServiceSchema({
    name: `Tattoo Services Serving ${area.name}`,
    description: area.description,
    area: area.name,
  })

  const faqSchema = generateFAQSchema(area.localFAQs)

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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">
                Tattoo Studio Serving {area.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance mb-4">{area.description}</p>
              <p className="text-lg text-foreground">
                <strong>{area.travelTime}</strong> from {area.nearestStation}
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Distance</h3>
                  <p className="text-sm text-muted-foreground">{area.distance}</p>
                  <p className="text-sm text-primary font-medium">{area.travelTime}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <Train className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Nearest Station</h3>
                  <p className="text-sm text-muted-foreground">{area.nearestStation}</p>
                  <p className="text-sm text-muted-foreground">{area.stationLine}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <Car className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Parking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.transport.parking}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transport Options */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
                Getting to Angel Tattooz from {area.name}
              </h2>
              <p className="text-lg text-muted-foreground">Multiple convenient transport options available</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {area.transport.tube && (
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Train className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">By Tube</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.transport.tube}</p>
                  </CardContent>
                </Card>
              )}
              {area.transport.train && (
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Train className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">By Train</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.transport.train}</p>
                  </CardContent>
                </Card>
              )}
              {area.transport.bus && (
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bus className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">By Bus</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.transport.bus}</p>
                  </CardContent>
                </Card>
              )}
              {area.transport.car && (
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Car className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">By Car</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.transport.car}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Landmarks */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Local Landmarks Near {area.name}</h2>
              <p className="text-muted-foreground">We're conveniently located near these {area.name} landmarks</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {area.landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
                >
                  <Navigation className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{landmark}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
                Tattoo Services for {area.name} Residents
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert tattoo artistry available to the {area.name} community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Custom Tattoo Design", slug: "custom-tattoo-design" },
                { name: "Black & Gray Tattoos", slug: "black-gray-tattoos" },
                { name: "Colour Tattoos", slug: "color-tattoos" },
                { name: "Cover-Up Tattoos", slug: "cover-up-tattoos" },
                { name: "Fine Line Tattoos", slug: "fine-line-tattoos" },
                { name: "Realism Tattoos", slug: "realism-tattoos" },
              ].map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:border-primary transition-colors group">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Professional {service.name.toLowerCase()} for {area.name} residents
                      </p>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">{area.name} Tattoo Studio FAQs</h2>
              <p className="text-lg text-muted-foreground">Common questions from {area.name} residents</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {area.localFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Have more questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/book">Book Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Ready to Get Inked?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of satisfied clients from {area.name}. Book your free consultation today and let's bring
              your tattoo vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 py-6">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 bg-transparent">
                <a href="tel:+442082163400">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
