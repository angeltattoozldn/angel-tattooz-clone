import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tattoo Styles & Portfolio | Realism, Traditional, Japanese | Angel Tattooz",
  description:
    "Explore our diverse tattoo style portfolio. Realism, traditional, Japanese, geometric, watercolor, tribal, and more. North London's premier tattoo artists.",
}

export default function StylesPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Styles" },
  ])

  const styles = [
    {
      slug: "realism",
      name: "Realism",
      description: "Photorealistic tattoos that capture intricate details and lifelike imagery",
      imageQuery: "realistic portrait tattoo photorealistic detailed black and gray",
      featured: true,
    },
    {
      slug: "traditional",
      name: "Traditional",
      description: "Bold lines, vibrant colors, and classic American tattoo iconography",
      imageQuery: "traditional american tattoo bold lines colorful iconic",
      featured: true,
    },
    {
      slug: "japanese",
      name: "Japanese",
      description: "Traditional irezumi style with dragons, koi, cherry blossoms, and waves",
      imageQuery: "japanese irezumi tattoo dragon koi cherry blossom traditional",
      featured: true,
    },
    {
      slug: "geometric",
      name: "Geometric",
      description: "Sacred geometry, mandalas, and precise mathematical patterns",
      imageQuery: "geometric mandala tattoo sacred geometry precise patterns",
      featured: false,
    },
    {
      slug: "watercolor",
      name: "Watercolor",
      description: "Soft, artistic brushstroke effects with vibrant color blending",
      imageQuery: "watercolor tattoo artistic brushstrokes vibrant colors flowing",
      featured: false,
    },
    {
      slug: "tribal",
      name: "Tribal",
      description: "Bold black patterns inspired by indigenous tattoo traditions",
      imageQuery: "tribal tattoo bold black patterns polynesian maori",
      featured: false,
    },
    {
      slug: "fine-line",
      name: "Fine Line",
      description: "Delicate, minimalist designs with precise single-needle work",
      imageQuery: "fine line tattoo delicate minimalist single needle detailed",
      featured: false,
    },
    {
      slug: "neo-traditional",
      name: "Neo-Traditional",
      description: "Modern twist on traditional style with enhanced detail and color",
      imageQuery: "neo traditional tattoo modern bold colors detailed shading",
      featured: false,
    },
    {
      slug: "blackwork",
      name: "Blackwork",
      description: "Bold solid black designs, patterns, and ornamental work",
      imageQuery: "blackwork tattoo solid black bold patterns ornamental",
      featured: false,
    },
  ]

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">Tattoo Styles</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Explore our diverse portfolio of tattoo styles. From timeless classics to contemporary art, our artists
                master every technique.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Styles */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-foreground mb-8">Featured Styles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {styles
                .filter((style) => style.featured)
                .map((style, index) => (
                  <Link key={index} href={`/styles/${style.slug}`}>
                    <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={`/.jpg?height=600&width=480&query=${style.imageQuery}`}
                          alt={`${style.name} tattoo style`}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-display text-3xl text-primary mb-2">{style.name}</h3>
                          <p className="text-white/90 text-sm leading-relaxed">{style.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* All Styles */}
        <section className="py-12 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-foreground mb-8">All Styles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {styles
                .filter((style) => !style.featured)
                .map((style, index) => (
                  <Link key={index} href={`/styles/${style.slug}`}>
                    <Card className="h-full hover:border-primary transition-all duration-300 overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={`/.jpg?height=400&width=400&query=${style.imageQuery}`}
                          alt={`${style.name} tattoo style`}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-display text-2xl text-primary">{style.name}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 md:hidden">{style.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{style.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
