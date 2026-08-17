import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs, generateHowToSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react"

const aftercareGuides: Record<
  string,
  {
    title: string
    description: string
    steps: Array<{ name: string; text: string; details: string }>
    dos: string[]
    donts: string[]
    timeline: Array<{ day: string; what: string }>
  }
> = {
  "healing-timeline": {
    title: "Tattoo Healing Timeline: What to Expect",
    description: "A complete guide to the tattoo healing process from day 1 to full recovery.",
    steps: [
      {
        name: "Days 1-3: Initial Healing",
        text: "The first few days are critical for preventing infection and ensuring proper healing.",
        details:
          "Your tattoo will be covered with a bandage. Remove it after 2-4 hours (or as advised by your artist). Gently wash with antibacterial soap and pat dry. Apply a thin layer of recommended ointment. Expect redness, swelling, and fluid discharge.",
      },
      {
        name: "Days 4-6: Peeling Begins",
        text: "Your tattoo will start to peel like a sunburn. This is completely normal.",
        details:
          "Continue washing 2-3 times daily. Switch from ointment to unscented lotion. DO NOT pick or scratch the peeling skin. The color may appear dull or faded - this is temporary.",
      },
      {
        name: "Days 7-14: Continued Peeling",
        text: "Peeling continues and itching may intensify. Stay strong and don't scratch!",
        details:
          "Keep moisturizing regularly. Tap the tattoo gently if it itches. Avoid tight clothing over the area. The top layer of skin is healing but deeper layers are still recovering.",
      },
      {
        name: "Weeks 3-4: Surface Healing Complete",
        text: "The tattoo looks healed on the surface but is still healing underneath.",
        details:
          "Continue moisturizing daily. You can resume normal activities but be gentle. Colors will continue to settle and brighten. Schedule your touch-up appointment if needed.",
      },
      {
        name: "Months 2-3: Full Healing",
        text: "Your tattoo is now fully healed and showing its true colors.",
        details:
          "Continue using sunscreen to protect your tattoo. Moisturize regularly to keep skin healthy. Book your free touch-up if needed within the first year.",
      },
    ],
    dos: [
      "Wash your hands before touching your tattoo",
      "Keep it clean and moisturized",
      "Use unscented, gentle products",
      "Wear loose, breathable clothing",
      "Stay hydrated and eat well",
      "Use sunscreen after healing (SPF 30+)",
      "Follow your artist's specific instructions",
    ],
    donts: [
      "Don't pick, scratch, or peel the tattoo",
      "Don't submerge in water (pools, baths, ocean)",
      "Don't expose to direct sunlight",
      "Don't wear tight clothing over the area",
      "Don't use alcohol-based products",
      "Don't exercise excessively in the first week",
      "Don't let pets lick or touch the tattoo",
    ],
    timeline: [
      { day: "Day 1-3", what: "Redness, swelling, fluid discharge, tenderness" },
      { day: "Day 4-6", what: "Peeling begins, itching starts, color appears dull" },
      { day: "Day 7-14", what: "Continued peeling, more itching, skin feels tight" },
      { day: "Week 3-4", what: "Surface healing complete, colors settling" },
      { day: "Month 2-3", what: "Fully healed, true colors visible" },
    ],
  },
  "first-week": {
    title: "First Week Aftercare: Critical Care Period",
    description: "Essential aftercare steps for the crucial first week after getting your tattoo.",
    steps: [
      {
        name: "Remove Bandage Properly",
        text: "Remove the initial bandage after 2-4 hours, or as directed by your artist.",
        details:
          "Wash your hands first. Gently remove the bandage. If it sticks, wet it with warm water. Immediately wash the tattoo with lukewarm water and antibacterial soap.",
      },
      {
        name: "Wash Correctly",
        text: "Wash your tattoo 2-3 times daily with antibacterial soap.",
        details:
          "Use lukewarm water and gentle antibacterial soap. Use your clean hands (not a washcloth). Gently pat the area in circular motions. Rinse thoroughly and pat dry with a clean paper towel.",
      },
      {
        name: "Apply Ointment Sparingly",
        text: "Apply a thin layer of recommended ointment after washing.",
        details:
          "Use only a thin layer - less is more. Too much ointment can suffocate the tattoo. We recommend fragrance-free products. Apply 2-3 times daily for the first 3-5 days.",
      },
      {
        name: "Protect While Sleeping",
        text: "Keep your tattoo protected during sleep in the first few nights.",
        details:
          "Use clean, old sheets (in case of ink transfer). Avoid sleeping directly on the tattoo. Consider wrapping it loosely in cling film for the first 2-3 nights. Ensure good air circulation.",
      },
    ],
    dos: [
      "Wash hands before touching tattoo",
      "Use antibacterial soap only",
      "Pat dry with clean paper towels",
      "Apply thin layers of ointment",
      "Wear loose clothing",
      "Sleep on clean sheets",
    ],
    donts: [
      "Don't rebandage after initial removal",
      "Don't use harsh soaps or alcohol",
      "Don't soak in water",
      "Don't expose to sun",
      "Don't pick at any scabs",
      "Don't exercise heavily",
    ],
    timeline: [
      { day: "Day 1", what: "Remove bandage, first wash, begin ointment" },
      { day: "Day 2-3", what: "Continue washing 2-3x daily, expect some swelling" },
      { day: "Day 4-5", what: "Switch to lotion, peeling may begin" },
      { day: "Day 6-7", what: "Continue care routine, itching may increase" },
    ],
  },
  "long-term-care": {
    title: "Long-Term Tattoo Care: Keeping Your Ink Vibrant",
    description: "How to maintain your tattoo's appearance for years to come.",
    steps: [
      {
        name: "Sun Protection is Essential",
        text: "UV rays are the #1 enemy of tattoo longevity. Always use sunscreen.",
        details:
          "Use SPF 30+ sunscreen whenever exposed to sun. Reapply every 2 hours outdoors. Consider covering tattoos with clothing in intense sun. UV exposure causes fading and blurring over time.",
      },
      {
        name: "Keep Skin Moisturized",
        text: "Healthy, hydrated skin keeps tattoos looking fresh.",
        details:
          "Use unscented lotion daily on tattooed areas. Drink plenty of water for skin health. Avoid products with alcohol or fragrance. Well-moisturized skin maintains tattoo clarity.",
      },
      {
        name: "Touch-Ups When Needed",
        text: "Most tattoos benefit from touch-ups every 5-10 years.",
        details:
          "We offer free touch-ups within the first year. After that, touch-ups may be needed for color boost. Black and gray tattoos age better than color. Schedule touch-ups as needed to maintain vibrancy.",
      },
      {
        name: "Healthy Lifestyle Helps",
        text: "Your overall health affects tattoo appearance.",
        details:
          "Stay hydrated for healthy skin. Maintain a stable weight (fluctuation affects tattoos). Eat a balanced diet rich in vitamins. Avoid excessive sun exposure and smoking.",
      },
    ],
    dos: [
      "Use sunscreen (SPF 30+) daily on tattoos",
      "Moisturize tattooed skin regularly",
      "Stay hydrated and maintain healthy skin",
      "Schedule touch-ups as needed",
      "Exfoliate gently to remove dead skin",
      "Visit dermatologist for skin health checks",
    ],
    donts: [
      "Don't let tattoos get sunburned",
      "Don't use tanning beds",
      "Don't neglect daily skincare",
      "Don't ignore significant fading",
      "Don't use harsh exfoliants on tattoos",
      "Don't gain/lose weight rapidly",
    ],
    timeline: [
      { day: "Year 1", what: "Tattoo at its most vibrant, maintain with care" },
      { day: "Years 2-5", what: "Minor fading possible, especially with sun exposure" },
      { day: "Years 5-10", what: "Consider touch-up to refresh colors and lines" },
      { day: "10+ Years", what: "Regular touch-ups maintain original appearance" },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(aftercareGuides).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = aftercareGuides[slug]

  if (!guide) {
    return { title: "Guide Not Found | Angel Tattooz" }
  }

  return {
    title: `${guide.title} | Angel Tattooz Aftercare`,
    description: guide.description,
  }
}

export default async function AftercarePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = aftercareGuides[slug]

  if (!guide) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Aftercare", url: "https://www.angeltattooz.co.uk/aftercare" },
    { name: guide.title },
  ])

  const howToSchema = generateHowToSchema({
    name: guide.title,
    description: guide.description,
    steps: guide.steps.map((step) => ({ name: step.name, text: step.text })),
  })

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={howToSchema} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-linear-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">{guide.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">{guide.description}</p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Step-by-Step Guide</h2>
            <div className="space-y-8">
              {guide.steps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xl font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">{step.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/30 p-4 rounded">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Do's and Don'ts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">DO</h3>
                  </div>
                  <ul className="space-y-3">
                    {guide.dos.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Don'ts */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <XCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">DON'T</h3>
                  </div>
                  <ul className="space-y-3">
                    {guide.donts.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Timeline Overview</h2>
            <div className="space-y-4">
              {guide.timeline.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="min-w-32 font-semibold text-primary">{item.day}</div>
                  <div className="flex-1 text-muted-foreground">{item.what}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-orange-500/50">
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <AlertCircle className="h-8 w-8 text-orange-500 shrink-0" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">When to Seek Medical Attention</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contact a doctor if you experience: excessive swelling that worsens after day 3, pus or
                      green/yellow discharge, red streaks extending from the tattoo, fever or chills, severe pain that
                      increases over time, or signs of allergic reaction.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      You can also contact us anytime for aftercare advice and support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-linear-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Need More Guidance?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're always here to help with your aftercare questions and concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact-us/">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <Link href="/aftercare">All Aftercare Guides</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
