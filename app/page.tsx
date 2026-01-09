import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateOrganizationSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <SchemaScript schema={organizationSchema} />
      <SiteHeader />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/images/screencapture-angeltattooz-co-uk-2026-01-09-08-57-39.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-primary mb-8 text-balance leading-tight">
              Art You
              <br />
              Can Wear
            </h1>
            <Button size="lg" asChild className="text-base px-8 py-6">
              <Link href="/book">Book Your Appointment Now</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=600&width=450&query=man with face tattoos portrait professional"
                    alt="Portrait with tattoos"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded bg-secondary/50 flex items-center justify-center p-8">
                  <h2 className="font-display text-4xl text-center text-primary">Art You Can Wear</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative bg-secondary/50 rounded p-8 flex flex-col items-center justify-center min-h-[300px]">
                  <h3 className="font-display text-3xl text-primary mb-4 text-center">Be Inkspired</h3>
                  <p className="text-center text-muted-foreground mb-6 leading-relaxed">
                    Step into a realm of inspiration. Our gallery showcases a fusion of styles and stories. Find the
                    perfect design to express your individuality.
                  </p>
                  <Button variant="outline" asChild className="bg-transparent">
                    <Link href="/gallery">Ink Showcase</Link>
                  </Button>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=600&width=450&query=detailed arm sleeve tattoo close up"
                    alt="Detailed tattoo work"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=450&width=600&query=woman with back tattoo sunset bedroom"
                    alt="Woman with tattoo"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded bg-secondary/50 flex items-center justify-center p-8">
                  <h2 className="font-display text-3xl text-center text-primary">You Think It We Ink It</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Stay in the Loop — Join Our Newsletter!
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Be the first to know about our latest designs, artist features, and special updates. Subscribe now and
              never miss an update from Angel Tattooz!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input type="email" placeholder="Email" className="flex-1 bg-muted/50 border-muted-foreground/20" />
              <Button className="sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <Link href="/services/custom-tattoo-design" className="group">
                <h3 className="font-display text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  Custom Tattoo Design
                </h3>
              </Link>
              <Link href="/services/black-gray-tattoos" className="group">
                <h3 className="font-display text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  Black & Gray Tattoos
                </h3>
              </Link>
              <Link href="/services/color-tattoos" className="group">
                <h3 className="font-display text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  Colour Tattoos
                </h3>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-12">
              <Link href="/services/cover-up-tattoos" className="group">
                <h3 className="font-display text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  Cover-Up Tattoos
                </h3>
              </Link>
              <Link href="/services/tattoo-consultations" className="group">
                <h3 className="font-display text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  Tattoo Consultations
                </h3>
              </Link>
              <Link href="/services" className="group">
                <h3 className="font-display text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  View All Services
                </h3>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url('/.jpg?height=1080&width=1920&query=tattoo artist working dark moody studio')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Ready to Get Inked?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your tattoo journey. Secure your spot or inquire about our services. Let's
              bring your ink dreams to life.
            </p>
            <Button size="lg" asChild className="text-base px-8 py-6">
              <Link href="/book">BOOK NOW</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-8">About Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Angel Tattooz, we pride ourselves on providing a comfortable, safe, and creative environment for all
              your tattoo needs. Our talented team of professional tattoo artists is dedicated to bringing your vision
              to life. Whether you're after a bespoke design or a flash from our portfolio, you can count on us for
              high-quality service and impeccable attention to detail. Let us help you wear your art with pride. Visit
              us in North London or reach out to schedule your consultation. We're excited to ink your next great story!
            </p>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/about">READ MORE</Link>
            </Button>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=tattoo machine close up artist working"
                  alt="Tattoo work"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=detailed tattoo design colorful work"
                  alt="Tattoo design"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=small back tattoo on woman detailed"
                  alt="Back tattoo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <img
                  src="/.jpg?height=400&width=400&query=woman with tattoos portrait artistic"
                  alt="Tattoo portrait"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-5xl md:text-6xl text-center text-primary mb-16">Ink-Credible Stories</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="text-6xl text-primary/20 mb-4">"</div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Absolutely in love with my new piece! The whole experience incredibly comfortable. Angle Tattoz
                  definitely lives up to the 'Ready To Get Inked' motto!
                </p>
                <p className="font-display text-xl text-primary">Lisa Edwards</p>
              </div>

              <div className="relative">
                <div className="text-6xl text-primary/20 mb-4">"</div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'd been wanting a tattoo for years but was nervous to find the right artist. From the moment I walked
                  into Angle Tattoz, I knew I was in good hands.
                </p>
                <p className="font-display text-xl text-primary">David Lee</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/contact">Share Your Tattoo Story</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=300&width=400&query=skeleton ribcage tattoo detailed black and gray"
                    alt="Tattoo work example"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-display text-2xl text-primary">
                  Top 10 Most Popular Tattoo Styles in 2024: Find Your Next Design Inspiration
                </h3>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="/blog">READ MORE →</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=300&width=400&query=ancient tattoo history traditional designs"
                    alt="Tattoo history"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-display text-2xl text-primary">
                  The History of Tattoos: From Ancient Traditions to Modern Art
                </h3>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="/blog">READ MORE →</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <img
                    src="/.jpg?height=300&width=400&query=diverse tattoo styles collage different cultures"
                    alt="Diverse tattoo styles"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-display text-2xl text-primary">
                  Discover the Diverse Tattoo Styles at Angel Tattooz in London
                </h3>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="/blog">READ MORE →</Link>
                </Button>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/blog">View More Posts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
