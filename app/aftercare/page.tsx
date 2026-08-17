import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, X, AlertTriangle, Droplets, Sun, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tattoo Aftercare Guide | Healing & Care Instructions | Angel Tattooz",
  description:
    "Complete tattoo aftercare guide. Learn how to care for your new tattoo, healing timeline, dos and don'ts, and expert tips for perfect results.",
}

export default function AftercarePage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Aftercare" },
  ])

  const healingTimeline = [
    {
      stage: "Day 1-3",
      title: "Initial Healing",
      description: "Tattoo will be red, swollen, and may ooze clear fluid or ink. This is completely normal.",
      care: ["Leave bandage on for 2-4 hours", "Wash gently with antibacterial soap", "Apply thin layer of ointment"],
    },
    {
      stage: "Day 4-7",
      title: "Peeling Stage",
      description: "Skin begins to peel and flake like a sunburn. Do not pick at it.",
      care: ["Continue gentle washing", "Moisturize regularly", "Avoid scratching or picking"],
    },
    {
      stage: "Week 2-3",
      title: "Surface Healed",
      description: "Tattoo appears healed on the surface but deeper layers are still healing.",
      care: ["Keep moisturizing", "Protect from sun", "Avoid swimming still"],
    },
    {
      stage: "Month 1-3",
      title: "Complete Healing",
      description: "Tattoo is fully healed in all layers of skin.",
      care: ["Use sunscreen", "Maintain skin health", "Schedule touch-up if needed"],
    },
  ]

  const dos = [
    "Wash hands before touching your tattoo",
    "Keep it clean and moisturized",
    "Wear loose, breathable clothing",
    "Pat dry gently with clean towel",
    "Use recommended aftercare products",
    "Sleep on clean sheets",
    "Keep well hydrated",
    "Follow all artist instructions",
  ]

  const donts = [
    "Don't scratch or pick at it",
    "Don't swim or soak in water",
    "Don't expose to direct sunlight",
    "Don't wear tight clothing over it",
    "Don't use scented lotions",
    "Don't share your aftercare products",
    "Don't exercise excessively initially",
    "Don't panic about normal healing signs",
  ]

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">Tattoo Aftercare</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Your complete guide to caring for your new tattoo and ensuring perfect healing
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Alert className="border-primary/50 bg-primary/10">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <AlertDescription className="text-foreground leading-relaxed">
                Proper aftercare is essential for optimal healing and vibrant results. Follow these instructions
                carefully for the first 2-3 weeks. If you have any concerns, contact us immediately.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Immediate Aftercare */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Immediate Aftercare</h2>
              <p className="text-lg text-muted-foreground">First 24 hours after getting your tattoo</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Bandage Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leave the protective bandage on for 2-4 hours (or overnight if applied late in the day). Remove
                    gently and wash immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">First Wash</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wash gently with lukewarm water and antibacterial soap. Pat dry with a clean towel - don't rub.
                    Apply thin layer of recommended ointment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Keep tattoo covered with loose clothing. Avoid direct sunlight, swimming pools, hot tubs, and
                    excessive sweating.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Healing Timeline */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Healing Timeline</h2>
              <p className="text-lg text-muted-foreground">What to expect during the healing process</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healingTimeline.map((stage, index) => (
                <Card key={index}>
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center">
                      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {stage.stage}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground text-center">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-2">Care Instructions:</p>
                      <ul className="space-y-1">
                        {stage.care.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dos and Don'ts */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Dos & Don'ts</h2>
              <p className="text-lg text-muted-foreground">Essential rules for proper tattoo healing</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/30">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">DO</h3>
                  </div>
                  <ul className="space-y-3">
                    {dos.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">DON'T</h3>
                  </div>
                  <ul className="space-y-3">
                    {donts.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Long-term Care */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Long-Term Care</h2>
              <p className="text-lg text-muted-foreground">Keeping your tattoo vibrant for years to come</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Sun Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    UV rays are the biggest threat to tattoo longevity. Always apply SPF 30+ sunscreen to your tattoo
                    when exposed to sun. Consider covering with clothing for extended outdoor exposure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Moisturization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Keep your skin hydrated with quality unscented moisturizer. Well-moisturized skin keeps tattoos
                    looking fresh and prevents premature fading.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Touch-Ups</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some fading over time is natural. We offer free touch-ups within the first year for work done at our
                    studio. Schedule a touch-up if colors fade or lines need refreshing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* When to Contact Us */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Alert className="border-destructive/50 bg-destructive/10 mb-8">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertDescription className="text-foreground leading-relaxed">
                <strong>Contact us immediately if you experience:</strong> Excessive swelling, extreme redness, pus or
                discharge with odor, fever, or signs of infection. While rare, infections require prompt attention.
              </AlertDescription>
            </Alert>

            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Need Aftercare Support?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're here to help throughout your healing process. Contact us with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="tel:+442012345678">Call Us: 020 1234 5678</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                  <Link href="/contact-us/">Contact Form</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
