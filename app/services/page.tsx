import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tattoo Services | Custom Designs, Color & Black & Gray | Angel Tattooz",
  description:
    "Explore our comprehensive tattoo services in North London. Custom designs, black & gray, color tattoos, cover-ups, and consultations. Book your appointment today.",
}

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Services" },
  ])

  const services = [
    { title: "Custom Tattoo Design", slug: "custom-tattoo-design" },
    { title: "Watercolor Tattoos", slug: "watercolor-tattoos" },
    { title: "Realism Tattoos", slug: "realism-tattoos" },
    { title: "Geometric Tattoos", slug: "geometric-tattoos" },
    { title: "Colour Tattoos", slug: "color-tattoos" },
    { title: "Minimalist Tattoos", slug: "minimalist-tattoos" },
    { title: "Traditional Tattooing", slug: "traditional-tattoos" },
    { title: "Tattoo Aftercare Instructions", slug: "aftercare" },
    { title: "Black and Grey Tattoos", slug: "black-gray-tattoos" },
    { title: "Fine Line Tattoos", slug: "fine-line-tattoos" },
    { title: "Cover-Up Tattoos", slug: "cover-up-tattoos" },
    { title: "Tattoo Flash Designs", slug: "flash-designs" },
    { title: "Tattoo Consultations", slug: "tattoo-consultations" },
    { title: "Portrait Tattoos", slug: "portrait-tattoos" },
    { title: "Tattoo Touch-Ups", slug: "tattoo-touch-ups" },
    { title: "Tribal Tattoos", slug: "tribal-tattoos" },
  ]

  const additionalStyles = [
    "Japanese Tattoos",
    "Script and Lettering Tattoos",
    "Abstract Tattoos",
    "Illustrative Tattoos",
    "Biomechanical Tattoos",
    "New School Tattoos",
    "Trash Polka Tattoos",
    "Surrealism Tattoos",
    "Henna Tattoos",
    "Gothic Tattoos",
    "Structural Tattoos (e.g., Celtic)",
    "Ethnic Tattoos (e.g., Celtic)",
    "LGBTQ+ Pride Tattoos",
    "Animal Tattoos",
    "Nature Tattoos",
    "Feminine Tattoos",
    "Masculine Tattoos",
    "Small Tattoos",
    "Large Tattoos",
    "Full Sleeve Tattoos",
    "Half Sleeve Tattoos",
    "Fantasy Tattoos",
    "Horror Tattoos",
    "Ear Tattoos",
    "Neck Tattoos",
    "Rib Cage Tattoos",
    "Back Tattoos",
    "Foot Tattoos",
    "Collaborative Tattoos (2+ Artists)",
    "Hand Tattoos",
    "Finger Tattoos",
    "Leg Tattoos",
  ]

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <section
          className="relative py-32 flex items-center justify-center overflow-hidden bg-background"
          style={{
            backgroundImage: `url('/.jpg?height=600&width=1920&query=tattoo artist working close up detailed professional')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <h1 className="font-display text-6xl md:text-7xl text-primary text-center">Services</h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Angel Tattooz, we offer a wide range of tattoo services to cater to every style and preference. Our
              skilled artists are here to help you express your unique identity through beautiful and meaningful body
              art.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between p-6 rounded bg-secondary/30 hover:bg-secondary/50 border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-6 w-6 text-primary">
                        {/* Simple icon placeholder */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-foreground font-medium">{service.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-foreground mb-8">
              We also do the following style of tattoos:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-3">
              {additionalStyles.map((style, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground text-sm">{style}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Ready to Get Inked?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take the first step towards your tattoo journey. Secure your spot or inquire about our services. Let's
              bring your ink dreams to life.
            </p>
            <Button size="lg" asChild className="text-base px-8 py-6">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
