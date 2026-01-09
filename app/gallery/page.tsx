import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tattoo Gallery | Our Best Work | Angel Tattooz North London",
  description:
    "Browse our extensive tattoo gallery featuring custom designs, realism, traditional, Japanese, and more. See why Angel Tattooz is North London's top-rated studio.",
}

export default function GalleryPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Gallery" },
  ])

  const galleryImages = [
    { query: "realistic portrait tattoo detailed black and gray face", style: "Realism" },
    { query: "traditional rose tattoo bold red vibrant", style: "Traditional" },
    { query: "japanese dragon tattoo sleeve colorful scales", style: "Japanese" },
    { query: "geometric mandala tattoo intricate patterns", style: "Geometric" },
    { query: "watercolor butterfly tattoo colorful artistic", style: "Watercolor" },
    { query: "tribal polynesian tattoo bold black shoulder", style: "Tribal" },
    { query: "fine line flower tattoo delicate minimalist", style: "Fine Line" },
    { query: "neo traditional wolf tattoo detailed bold", style: "Neo-Traditional" },
    { query: "blackwork ornamental tattoo solid black geometric", style: "Blackwork" },
    { query: "realistic lion tattoo detailed fur shading", style: "Realism" },
    { query: "traditional ship tattoo nautical bold lines", style: "Traditional" },
    { query: "japanese koi fish tattoo swimming waves", style: "Japanese" },
    { query: "geometric sacred geometry tattoo precise lines", style: "Geometric" },
    { query: "watercolor landscape tattoo mountains sunset", style: "Watercolor" },
    { query: "tribal maori tattoo traditional cultural patterns", style: "Tribal" },
    { query: "fine line constellation tattoo stars delicate", style: "Fine Line" },
    { query: "neo traditional skull tattoo decorative bold", style: "Neo-Traditional" },
    { query: "blackwork sleeve tattoo solid black intricate", style: "Blackwork" },
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
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">Gallery</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Explore our portfolio of exceptional tattoo work. Every piece tells a unique story.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded group cursor-pointer">
                  <img
                    src={`/.jpg?height=500&width=500&query=${image.query}`}
                    alt={`${image.style} tattoo`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">{image.style}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
