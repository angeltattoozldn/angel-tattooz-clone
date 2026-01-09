import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Award-Winning Tattoo Studio Since 2010 | Angel Tattooz",
  description:
    "Learn about Angel Tattooz, North London's premier tattoo studio since 2010. Meet our award-winning artists and discover our commitment to excellence.",
}

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "About" },
  ])

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <section
          className="relative py-32 flex items-center justify-center overflow-hidden bg-background"
          style={{
            backgroundImage: `url('/images/screencapture-angeltattooz-co-uk-about-us-2026-01-09-09-27-02.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h1 className="font-display text-6xl md:text-7xl text-primary text-center">About Us</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Images */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=500&width=600&query=professional tattoo artist working on client detailed"
                    alt="Tattoo artist at work"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative aspect-video overflow-hidden rounded">
                  <img
                    src="/.jpg?height=300&width=500&query=tattooed hands with rings close up artistic"
                    alt="Tattooed hands detail"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="font-display text-4xl md:text-5xl text-primary">Your Premier London Tattoo Studio</h2>
                <h3 className="text-xl font-semibold text-foreground">Your Premier Tattoo Studio In North London</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Angel Tattooz, your top destination for tattoo artistry in Cockfosters, Barnet, and North
                  London. Whether it's your first tattoo or an addition to your collection, we promise an outstanding
                  experience from start to finish.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Why Choose Angel Tattooz?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Angel Tattooz is more than just a studio—it's a community of skilled artists dedicated to bringing
                    your ideas to life. Catering to everyone from first-timers to seasoned enthusiasts, we are your
                    go-to for personalized, high-quality tattoos. If you're searching for "best tattoo studio North
                    London" or "top tattoo artists Barnet," look no further.
                  </p>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Peaceful Location:</strong> Our tranquil, nature-surrounded
                        studio offers a calming atmosphere.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Top-Quality Equipment:</strong> We use the latest equipment
                        for precision and safety.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Premium Inks:</strong> Our high-quality inks ensure vibrant
                        colours and lasting results.
                      </span>
                    </li>
                  </ul>

                  <details className="group">
                    <summary className="cursor-pointer text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                      <span>Read More</span>
                      <span className="text-xl group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Our artists specialize in a wide range of styles, from traditional and neo-traditional to
                        realism, watercolor, and fine-line work. Each piece is custom-designed to reflect your unique
                        personality and story.
                      </p>
                      <p>
                        We maintain the highest standards of hygiene and safety, using single-use needles and sterilized
                        equipment. Your health and comfort are our top priorities.
                      </p>
                      <p>
                        Located conveniently in North London, we're easily accessible from Barnet, Cockfosters,
                        Southgate, Enfield, and surrounding areas. Book your consultation today and experience the Angel
                        Tattooz difference.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
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

        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=tattoo machine close up artist working detailed"
                  alt="Tattoo work"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=colorful tattoo design vibrant ink work"
                  alt="Tattoo design"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=small back tattoo on woman elegant design"
                  alt="Back tattoo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=woman with tattoos portrait professional artistic"
                  alt="Tattoo portrait"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
