import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateFAQSchema, generateServiceSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { MapPin, Train, Car, Clock, Phone, Star } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const areasData: Record<
  string,
  {
    name: string
    description: string
    distance: string
    driveTime: string
    publicTransport: {
      station: string
      line: string
      walkTime: string
    }
    parking: string
    landmarks: string[]
    faqs: Array<{ question: string; answer: string }>
  }
> = {
  barnet: {
    name: "Barnet",
    description:
      "Serving Barnet with premium tattoo services. Our studio is conveniently located in the heart of Barnet, making us the go-to choice for residents seeking exceptional tattoo artistry.",
    distance: "Located in Barnet",
    driveTime: "5 mins from Barnet town centre",
    publicTransport: {
      station: "High Barnet Station",
      line: "Northern Line",
      walkTime: "8 minutes walk",
    },
    parking: "Free street parking available nearby. Multiple car parks within 5 minutes walk.",
    landmarks: ["Barnet Church", "The Spires Shopping Centre", "High Barnet Station", "Barnet General Hospital"],
    faqs: [
      {
        question: "How far is Angel Tattooz from Barnet town centre?",
        answer:
          "We're located just 5 minutes from Barnet town centre, making us easily accessible for all Barnet residents.",
      },
      {
        question: "Is there parking near your Barnet studio?",
        answer: "Yes, there's free street parking nearby and several car parks within a 5-minute walk.",
      },
      {
        question: "Do you serve clients from all of Barnet?",
        answer:
          "We serve clients from all Barnet neighborhoods including High Barnet, New Barnet, East Barnet, and surrounding areas.",
      },
      {
        question: "What makes Angel Tattooz the best choice in Barnet?",
        answer:
          "We combine award-winning artistry with 15+ years of experience, premium equipment, and exceptional customer service. Our convenient Barnet location and flexible hours make us the top choice for local residents.",
      },
      {
        question: "Can I book a same-day consultation in Barnet?",
        answer:
          "Yes! We offer same-day consultations subject to availability. Call us or book online to check availability.",
      },
    ],
  },
  cockfosters: {
    name: "Cockfosters",
    description:
      "Expert tattoo services for Cockfosters residents. Just minutes from Cockfosters Station on the Piccadilly Line, we're your local destination for custom tattoos and expert artistry.",
    distance: "2.5 miles from Cockfosters",
    driveTime: "8 mins drive",
    publicTransport: {
      station: "Cockfosters Station",
      line: "Piccadilly Line",
      walkTime: "12 minutes walk",
    },
    parking: "Free parking available. Easy access from Cockfosters Road.",
    landmarks: ["Cockfosters Station", "Trent Park", "Cockfosters Road", "Chalk Lane"],
    faqs: [
      {
        question: "How do I get to Angel Tattooz from Cockfosters Station?",
        answer:
          "We're a 12-minute walk from Cockfosters Station (Piccadilly Line). Exit the station and head south on Cockfosters Road, or take a short 5-minute bus ride.",
      },
      {
        question: "Do you have clients from Cockfosters?",
        answer:
          "Yes! Many of our regular clients are from Cockfosters and the surrounding area. We're proud to be Cockfosters' preferred tattoo studio.",
      },
      {
        question: "What tattoo styles are popular with Cockfosters clients?",
        answer:
          "Our Cockfosters clients love realism, fine line work, and custom designs. We specialize in all styles to match your vision.",
      },
      {
        question: "Can I park near your studio when coming from Cockfosters?",
        answer: "Yes, there's ample free parking available, making it easy to drive from Cockfosters.",
      },
      {
        question: "Do you offer evening appointments for Cockfosters residents?",
        answer: "Yes, we offer flexible scheduling including evening appointments to accommodate your schedule.",
      },
    ],
  },
  southgate: {
    name: "Southgate",
    description:
      "Premium tattoo studio serving Southgate. Conveniently located near Southgate Station with excellent transport links, we provide exceptional custom tattoo services to the Southgate community.",
    distance: "1.8 miles from Southgate",
    driveTime: "7 mins drive",
    publicTransport: {
      station: "Southgate Station",
      line: "Piccadilly Line",
      walkTime: "10 minutes walk",
    },
    parking: "Street parking and car parks nearby. Easy access from Chase Road.",
    landmarks: ["Southgate Station", "Southgate Circus", "Grovelands Park", "Chase Road"],
    faqs: [
      {
        question: "How close are you to Southgate Station?",
        answer:
          "We're only a 10-minute walk from Southgate Station on the Piccadilly Line, making us very accessible for Southgate residents.",
      },
      {
        question: "Do you work with first-time tattoo clients from Southgate?",
        answer:
          "We specialize in making first-time clients comfortable. We'll guide you through every step of the process.",
      },
      {
        question: "What's your pricing for Southgate clients?",
        answer:
          "Our pricing is the same for all clients and depends on size, complexity, and time. We provide free consultations with detailed quotes.",
      },
      {
        question: "Can I see examples of work you've done for Southgate residents?",
        answer: "Yes! Visit our gallery page or Instagram to see our extensive portfolio of work for local clients.",
      },
      {
        question: "Do you offer payment plans for Southgate clients?",
        answer:
          "For larger pieces, we can split sessions and payments. Discuss options during your consultation appointment.",
      },
    ],
  },
  enfield: {
    name: "Enfield",
    description:
      "Tattoo services for Enfield residents. Easily accessible from all Enfield areas, we're the trusted choice for custom tattoos, cover-ups, and expert tattoo artistry across Enfield.",
    distance: "3 miles from Enfield",
    driveTime: "12 mins drive",
    publicTransport: {
      station: "Enfield Chase Station",
      line: "Great Northern",
      walkTime: "15 minutes walk or 5 min bus",
    },
    parking: "Multiple parking options available. Easy access from A110.",
    landmarks: ["Enfield Chase Station", "Enfield Town", "Forty Hall", "A110 Great Cambridge Road"],
    faqs: [
      {
        question: "Do you serve all of Enfield?",
        answer:
          "Yes! We serve clients from Enfield Town, Enfield Chase, Enfield Lock, Enfield Highway, and all surrounding Enfield areas.",
      },
      {
        question: "How do I get to your studio from Enfield?",
        answer:
          "We're accessible by car (12 mins via A110) or train from Enfield Chase Station (15-min walk or short bus ride).",
      },
      {
        question: "What makes you different from other Enfield tattoo studios?",
        answer:
          "Our 15+ years of experience, award-winning artists, premium equipment, and commitment to excellence set us apart. We're Enfield's top-rated studio.",
      },
      {
        question: "Do you offer consultations for Enfield residents?",
        answer: "Yes, free consultations are available for all Enfield clients. Book online or call to schedule.",
      },
      {
        question: "Can you do large pieces for Enfield clients?",
        answer:
          "We specialize in large-scale work including full sleeves, back pieces, and chest pieces. Multiple sessions can be scheduled.",
      },
    ],
  },
  "potters-bar": {
    name: "Potters Bar",
    description:
      "Quality tattoo services for Potters Bar. Conveniently located near Potters Bar Station, we're your local experts in custom tattoo design and professional tattoo artistry.",
    distance: "4 miles from Potters Bar",
    driveTime: "10 mins drive",
    publicTransport: {
      station: "Potters Bar Station",
      line: "Great Northern",
      walkTime: "18 minutes walk or 8 min bus",
    },
    parking: "Ample free parking. Easy access from A1000.",
    landmarks: ["Potters Bar Station", "Darkes Lane", "The Broadway", "Wyllyotts Centre"],
    faqs: [
      {
        question: "How far is Angel Tattooz from Potters Bar?",
        answer: "We're just 4 miles from Potters Bar, about 10 minutes by car or a short train and bus journey.",
      },
      {
        question: "Do many Potters Bar residents use your services?",
        answer:
          "Yes! We have a loyal client base from Potters Bar who appreciate our quality work and convenient location.",
      },
      {
        question: "What styles are you best at for Potters Bar clients?",
        answer:
          "We excel in all styles including realism, traditional, Japanese, geometric, and custom designs. Our artists are versatile and experienced.",
      },
      {
        question: "Is there parking for Potters Bar visitors?",
        answer: "Yes, we have ample free parking available, making it easy to drive from Potters Bar.",
      },
      {
        question: "Can I bring a friend from Potters Bar to my appointment?",
        answer: "Yes, you're welcome to bring a friend or family member for support during your tattoo session.",
      },
    ],
  },
  finchley: {
    name: "Finchley",
    description:
      "Premium tattoo studio serving Finchley. Convenient access from North Finchley, East Finchley, and West Finchley. We're your local destination for exceptional custom tattoos.",
    distance: "2.2 miles from Finchley",
    driveTime: "9 mins drive",
    publicTransport: {
      station: "High Barnet / Finchley Central",
      line: "Northern Line",
      walkTime: "12 minutes walk",
    },
    parking: "Free parking available nearby.",
    landmarks: ["Finchley Central Station", "North Finchley", "Victoria Park", "Ballards Lane"],
    faqs: [
      {
        question: "Do you serve all Finchley areas?",
        answer:
          "Yes! We serve North Finchley, East Finchley, West Finchley, and Church End. We're conveniently located for all Finchley residents.",
      },
      {
        question: "How do I book an appointment from Finchley?",
        answer: "You can book online through our website, call us, or message us on WhatsApp. We respond quickly!",
      },
      {
        question: "What's the best way to reach you from Finchley?",
        answer:
          "By car (9 mins) or Northern Line to High Barnet with a short walk. Very convenient from anywhere in Finchley.",
      },
      {
        question: "Do you have experience with Finchley clients?",
        answer: "Many of our regular clients are from Finchley, and we're proud to be a trusted part of the community.",
      },
      {
        question: "Can you do touch-ups for Finchley residents?",
        answer:
          "Yes, we offer touch-ups for work done at our studio. Free within the first year for our original work.",
      },
    ],
  },
  hertsmere: {
    name: "Hertsmere",
    description:
      "Tattoo services for Hertsmere residents. Serving Borehamwood, Bushey, Elstree, and all Hertsmere areas with award-winning tattoo artistry and custom design services.",
    distance: "5-7 miles from Hertsmere",
    driveTime: "15-20 mins drive",
    publicTransport: {
      station: "Elstree & Borehamwood Station",
      line: "Thameslink",
      walkTime: "Train + short bus or taxi",
    },
    parking: "Free parking available.",
    landmarks: ["Borehamwood", "Bushey", "Elstree", "Radlett"],
    faqs: [
      {
        question: "Do you serve all of Hertsmere?",
        answer:
          "Yes! We welcome clients from Borehamwood, Bushey, Elstree, Radlett, Shenley, and all Hertsmere areas. Many Hertsmere residents choose us for our quality work.",
      },
      {
        question: "How far is your studio from Borehamwood?",
        answer:
          "We're approximately 15 minutes by car from Borehamwood, making us easily accessible for Hertsmere residents.",
      },
      {
        question: "Do you have clients from Bushey and Elstree?",
        answer:
          "Yes! We have many satisfied clients from across Hertsmere including Bushey, Elstree, and surrounding areas.",
      },
      {
        question: "Can I get a custom tattoo design for Hertsmere clients?",
        answer: "All our clients receive personalized service with custom design options tailored to their vision.",
      },
      {
        question: "What's parking like for Hertsmere visitors?",
        answer: "We have free parking available, making it convenient to drive from anywhere in Hertsmere.",
      },
    ],
  },
  hertfordshire: {
    name: "Hertfordshire",
    description:
      "Premier tattoo services for Hertfordshire. Serving clients across Hertfordshire with exceptional custom tattoos, expert artistry, and premium service.",
    distance: "Accessible across Hertfordshire",
    driveTime: "Varies by location",
    publicTransport: {
      station: "Multiple stations",
      line: "Thameslink, Great Northern",
      walkTime: "Varies",
    },
    parking: "Free parking available for all visitors.",
    landmarks: ["North London border", "M25 access", "A1(M) corridor"],
    faqs: [
      {
        question: "Do you work with clients from across Hertfordshire?",
        answer:
          "Yes! We welcome clients from all Hertfordshire areas. Many travel to us for our award-winning work and experienced artists.",
      },
      {
        question: "How do Hertfordshire clients reach your studio?",
        answer:
          "We're easily accessible by car via M25 and A1(M), or by train to High Barnet or nearby stations. Free parking available.",
      },
      {
        question: "Why do Hertfordshire residents choose Angel Tattooz?",
        answer:
          "Our 15+ years of experience, diverse style expertise, premium equipment, and exceptional results make us worth the trip for Hertfordshire clients.",
      },
      {
        question: "Can you accommodate Hertfordshire clients' schedules?",
        answer:
          "Yes! We offer flexible appointment times including evenings and weekends to accommodate clients traveling from Hertfordshire.",
      },
      {
        question: "Do you offer large projects for Hertfordshire clients?",
        answer:
          "We specialize in large-scale projects and can schedule multiple sessions to complete ambitious pieces.",
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = areasData[slug]

  if (!area) {
    return {
      title: "Area Not Found | Angel Tattooz",
    }
  }

  return {
    title: `Tattoo Studio ${area.name} | Custom Tattoos Near You | Angel Tattooz`,
    description: `${area.description} ${area.distance} - ${area.driveTime}. Book your consultation today.`,
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areasData[slug]

  if (!area) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Service Areas", url: "https://www.angeltattooz.co.uk/areas" },
    { name: area.name },
  ])

  const serviceSchema = generateServiceSchema({
    name: `Tattoo Services in ${area.name}`,
    description: area.description,
    area: area.name,
  })

  const faqSchema = generateFAQSchema(area.faqs)

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
                Tattoo Studio {area.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">{area.description}</p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Distance</h3>
                  <p className="text-sm text-muted-foreground">{area.distance}</p>
                  <p className="text-sm text-muted-foreground">{area.driveTime}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <Train className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Public Transport</h3>
                  <p className="text-sm text-muted-foreground">{area.publicTransport.station}</p>
                  <p className="text-sm text-muted-foreground">{area.publicTransport.line}</p>
                  <p className="text-sm text-muted-foreground">{area.publicTransport.walkTime}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <Car className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Parking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.parking}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Area */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Our Services in {area.name}</h2>
              <p className="text-lg text-muted-foreground">Expert tattoo services for {area.name} residents</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: "Custom Tattoo Design", slug: "custom-tattoo-design" },
                { name: "Black & Gray Tattoos", slug: "black-gray-tattoos" },
                { name: "Color Tattoos", slug: "color-tattoos" },
                { name: "Cover-Up Tattoos", slug: "cover-up-tattoos" },
              ].map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:border-primary transition-colors">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                      <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="text-lg">
                <Link href="/book">Book Your {area.name} Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-foreground">Getting Here from {area.name}</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Car className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">By Car</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {area.driveTime}. {area.parking}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Train className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">By Public Transport</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {area.publicTransport.station} ({area.publicTransport.line}) - {area.publicTransport.walkTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Nearby Landmarks</h3>
                  <ul className="space-y-2">
                    {area.landmarks.map((landmark, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">123 High Street, Barnet, London EN5 5XY</p>
                    <Button variant="outline" asChild size="sm">
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">{area.name} FAQ</h2>
              <p className="text-lg text-muted-foreground">Common questions from {area.name} clients</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {area.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-semibold text-foreground">Contact Us from {area.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ready to book your tattoo? Get in touch with us today
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+442012345678" className="hover:text-primary transition-colors">
                        020 1234 5678
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Tue-Fri 10am-7pm, Sat 10am-6pm</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" asChild>
                      <Link href="/book">Book Consultation</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="bg-transparent">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reviews from Area */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Reviews from {area.name} Clients</h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground">4.9 stars from local clients</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({
    slug,
  }))
}
