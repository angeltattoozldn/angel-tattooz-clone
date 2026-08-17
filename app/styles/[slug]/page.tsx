"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"
import { notFound } from "next/navigation"

const stylesData: Record<
  string,
  {
    name: string
    description: string
    longDescription: string
    characteristics: string[]
    bestFor: string[]
    galleryImages: Array<{ query: string; title: string }>
  }
> = {
  realism: {
    name: "Realism",
    description: "Photorealistic tattoos that capture intricate details and lifelike imagery",
    longDescription:
      "Realism tattooing is the art of creating photorealistic images on skin. This style requires exceptional technical skill, attention to detail, and mastery of shading techniques. Our artists specialize in portraits, wildlife, and realistic imagery that looks like photographs on your skin. Whether black and gray or full color, realism tattoos are stunning works of art.",
    characteristics: [
      "Photorealistic detail",
      "Expert shading techniques",
      "Lifelike depth and dimension",
      "Precise line work",
      "Natural color gradients",
    ],
    bestFor: ["Portrait tattoos", "Wildlife and animals", "Landscapes", "Memorial pieces", "Photographic recreations"],
    galleryImages: [
      { query: "realistic portrait tattoo face detailed black and gray", title: "Portrait" },
      { query: "realistic lion tattoo detailed fur shading", title: "Wildlife" },
      { query: "realistic eye tattoo close up detailed iris", title: "Eye Detail" },
      { query: "realistic rose tattoo detailed petals shading", title: "Floral Realism" },
      { query: "realistic clock tattoo mechanical gears detailed", title: "Mechanical" },
      { query: "realistic landscape tattoo mountains trees", title: "Landscape" },
    ],
  },
  traditional: {
    name: "Traditional",
    description: "Bold lines, vibrant colors, and classic American tattoo iconography",
    longDescription:
      "Traditional American tattooing, also known as Old School, features bold black outlines, limited color palette, and iconic imagery like anchors, roses, eagles, and pin-ups. This timeless style has remained popular for over a century due to its bold impact and excellent aging characteristics. The thick lines and solid colors ensure these tattoos look great for decades.",
    characteristics: [
      "Bold black outlines",
      "Limited color palette",
      "Iconic imagery",
      "Flat, 2D appearance",
      "Excellent aging properties",
    ],
    bestFor: [
      "Nautical themes",
      "Roses and flowers",
      "Eagles and animals",
      "Pin-up girls",
      "Skulls and daggers",
      "Classic Americana",
    ],
    galleryImages: [
      { query: "traditional american tattoo anchor rope bold lines", title: "Anchor" },
      { query: "traditional rose tattoo bold red petals leaves", title: "Rose" },
      { query: "traditional eagle tattoo bold wings american", title: "Eagle" },
      { query: "traditional ship tattoo sailing vessel waves", title: "Ship" },
      { query: "traditional dagger tattoo bold red handle", title: "Dagger" },
      { query: "traditional pin up girl tattoo vintage style", title: "Pin-Up" },
    ],
  },
  japanese: {
    name: "Japanese",
    description: "Traditional irezumi style with dragons, koi, cherry blossoms, and waves",
    longDescription:
      "Japanese tattooing, or Irezumi, is one of the oldest and most respected tattoo traditions. This style features bold imagery like dragons, koi fish, tigers, phoenixes, and cherry blossoms, often combined with traditional backgrounds like waves, clouds, and wind bars. Japanese tattoos are known for their rich symbolism, flowing composition, and stunning large-scale pieces.",
    characteristics: [
      "Rich symbolism and meaning",
      "Flowing composition",
      "Traditional motifs",
      "Bold colors and black",
      "Background elements",
    ],
    bestFor: [
      "Full sleeves",
      "Back pieces",
      "Large-scale work",
      "Dragons and koi",
      "Cherry blossoms",
      "Cultural imagery",
    ],
    galleryImages: [
      { query: "japanese dragon tattoo traditional clouds scales", title: "Dragon" },
      { query: "japanese koi fish tattoo swimming waves colorful", title: "Koi Fish" },
      { query: "japanese cherry blossom tattoo sakura petals", title: "Cherry Blossom" },
      { query: "japanese tiger tattoo traditional bold stripes", title: "Tiger" },
      { query: "japanese waves tattoo traditional water flowing", title: "Waves" },
      { query: "japanese phoenix tattoo bird flames feathers", title: "Phoenix" },
    ],
  },
  geometric: {
    name: "Geometric",
    description: "Sacred geometry, mandalas, and precise mathematical patterns",
    longDescription:
      "Geometric tattooing combines mathematical precision with artistic vision. This style features mandalas, sacred geometry, dot work, and precise patterns that create mesmerizing visual effects. Geometric tattoos can stand alone or be combined with other styles to create unique, contemporary pieces that are both meaningful and visually striking.",
    characteristics: [
      "Precise line work",
      "Mathematical patterns",
      "Sacred geometry",
      "Mandala designs",
      "Symmetrical composition",
    ],
    bestFor: ["Mandalas", "Sacred geometry", "Sleeve compositions", "Dot work", "Modern designs", "Spiritual symbols"],
    galleryImages: [
      { query: "geometric mandala tattoo intricate patterns symmetrical", title: "Mandala" },
      { query: "geometric sacred geometry tattoo precise lines dots", title: "Sacred Geometry" },
      { query: "geometric animal tattoo wolf triangles polygons", title: "Geometric Animal" },
      { query: "geometric sleeve tattoo patterns flowing composition", title: "Sleeve" },
      { query: "geometric dot work tattoo stippling shading", title: "Dot Work" },
      { query: "geometric flower of life tattoo circles sacred", title: "Flower of Life" },
    ],
  },
  watercolor: {
    name: "Watercolor",
    description: "Soft, artistic brushstroke effects with vibrant color blending",
    longDescription:
      "Watercolor tattoos mimic the fluid, spontaneous look of watercolor paintings. This contemporary style features soft color gradients, splashes, and brushstroke effects that create a painted-on-skin appearance. Often combined with subtle line work, watercolor tattoos are perfect for those seeking artistic, colorful designs with a softer aesthetic.",
    characteristics: [
      "Soft color gradients",
      "Paint splash effects",
      "Brushstroke appearance",
      "Minimal outlines",
      "Artistic freedom",
    ],
    bestFor: [
      "Flowers and nature",
      "Animals and pets",
      "Abstract designs",
      "Colorful portraits",
      "Artistic expression",
    ],
    galleryImages: [
      { query: "watercolor flower tattoo colorful splashes brushstrokes", title: "Flower" },
      { query: "watercolor bird tattoo vibrant colors flowing paint", title: "Bird" },
      { query: "watercolor abstract tattoo colors blending artistic", title: "Abstract" },
      { query: "watercolor butterfly tattoo soft colors delicate", title: "Butterfly" },
      { query: "watercolor landscape tattoo mountains colors sunset", title: "Landscape" },
      { query: "watercolor pet portrait tattoo dog colorful artistic", title: "Pet Portrait" },
    ],
  },
  tribal: {
    name: "Tribal",
    description: "Bold black patterns inspired by indigenous tattoo traditions",
    longDescription:
      "Tribal tattooing encompasses various indigenous tattoo traditions from Polynesia, Maori, and other cultures. This style features bold black patterns, geometric shapes, and cultural symbolism. Modern tribal tattoos respect traditional designs while adapting them for contemporary aesthetics. The bold solid black ensures excellent longevity and visual impact.",
    characteristics: [
      "Bold solid black",
      "Geometric patterns",
      "Cultural symbolism",
      "Flowing composition",
      "Strong visual impact",
    ],
    bestFor: ["Shoulder and arm pieces", "Cultural heritage", "Masculine designs", "Full sleeves", "Back pieces"],
    galleryImages: [
      { query: "tribal polynesian tattoo bold black patterns geometric", title: "Polynesian" },
      { query: "tribal maori tattoo traditional patterns cultural", title: "Maori" },
      { query: "tribal sleeve tattoo bold black flowing patterns", title: "Sleeve" },
      { query: "tribal shoulder tattoo geometric bold design", title: "Shoulder" },
      { query: "tribal back tattoo large scale bold patterns", title: "Back Piece" },
      { query: "tribal band tattoo armband bold black geometric", title: "Armband" },
    ],
  },
  "fine-line": {
    name: "Fine Line",
    description: "Delicate, minimalist designs with precise single-needle work",
    longDescription:
      "Fine line tattooing uses single needles to create delicate, intricate designs with minimal bold outlines. This contemporary style is perfect for minimalist aesthetics, detailed illustrations, and subtle tattoos. Fine line work requires exceptional precision and steady hands, resulting in elegant pieces that are both sophisticated and understated.",
    characteristics: [
      "Single-needle precision",
      "Delicate line work",
      "Minimalist aesthetic",
      "Subtle details",
      "Contemporary style",
    ],
    bestFor: [
      "Small detailed tattoos",
      "Minimalist designs",
      "Text and lettering",
      "Botanical illustrations",
      "Subtle placements",
    ],
    galleryImages: [
      { query: "fine line flower tattoo delicate petals minimalist", title: "Floral" },
      { query: "fine line portrait tattoo detailed face single needle", title: "Portrait" },
      { query: "fine line geometric tattoo precise lines minimal", title: "Geometric" },
      { query: "fine line script tattoo elegant lettering delicate", title: "Script" },
      { query: "fine line nature tattoo leaves branches detailed", title: "Nature" },
      { query: "fine line constellation tattoo stars dots delicate", title: "Constellation" },
    ],
  },
  "neo-traditional": {
    name: "Neo-Traditional",
    description: "Modern twist on traditional style with enhanced detail and color",
    longDescription:
      "Neo-traditional tattooing takes the bold foundation of traditional American tattoos and enhances it with modern techniques, expanded color palettes, and more intricate detailing. This style maintains the strong outlines and bold imagery of traditional work while incorporating contemporary shading, realistic elements, and diverse subject matter.",
    characteristics: [
      "Bold outlines",
      "Enhanced shading",
      "Expanded color range",
      "Detailed imagery",
      "Modern subject matter",
    ],
    bestFor: ["Animals and nature", "Portraits", "Floral designs", "Fantasy imagery", "Contemporary icons"],
    galleryImages: [
      { query: "neo traditional rose tattoo detailed shading vibrant colors", title: "Rose" },
      { query: "neo traditional animal tattoo wolf detailed bold", title: "Animal" },
      { query: "neo traditional portrait tattoo woman detailed colors", title: "Portrait" },
      { query: "neo traditional owl tattoo bird detailed feathers", title: "Owl" },
      { query: "neo traditional skull tattoo decorative detailed bold", title: "Skull" },
      { query: "neo traditional ship tattoo detailed rigging colors", title: "Ship" },
    ],
  },
  blackwork: {
    name: "Blackwork",
    description: "Bold solid black designs, patterns, and ornamental work",
    longDescription:
      "Blackwork tattooing uses large areas of solid black ink to create dramatic, high-contrast designs. This style includes ornamental patterns, geometric shapes, illustrative designs, and bold statements. Blackwork can range from minimalist solid shapes to intricate detailed patterns, all unified by the use of black ink as the primary element.",
    characteristics: [
      "Solid black areas",
      "High contrast",
      "Bold visual impact",
      "Ornamental patterns",
      "Excellent longevity",
    ],
    bestFor: ["Cover-ups", "Large-scale pieces", "Ornamental designs", "Geometric patterns", "Bold statements"],
    galleryImages: [
      { query: "blackwork ornamental tattoo mandala solid black patterns", title: "Ornamental" },
      { query: "blackwork geometric tattoo solid black bold shapes", title: "Geometric" },
      { query: "blackwork sleeve tattoo solid black intricate patterns", title: "Sleeve" },
      { query: "blackwork illustrative tattoo bold black design", title: "Illustrative" },
      { query: "blackwork dotwork tattoo stippling patterns black", title: "Dotwork" },
      { query: "blackwork abstract tattoo solid shapes bold design", title: "Abstract" },
    ],
  },
}

export default async function StylePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const style = stylesData[slug]
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!style) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-linear-to-b from-background to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="font-display text-5xl md:text-6xl text-primary text-balance">{style.name}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{style.description}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{style.longDescription}</p>
                <Button size="lg" asChild className="text-lg">
                  <Link href="/bookings/">Book Consultation</Link>
                </Button>
              </div>
              <div className="relative aspect-4/5 rounded overflow-hidden">
                <img
                  src={`/.jpg?height=700&width=560&query=${style.galleryImages[0].query}`}
                  alt={`${style.name} tattoo style`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Key Characteristics</h2>
                <ul className="space-y-3">
                  {style.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{char}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Best For</h2>
                <ul className="space-y-3">
                  {style.bestFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Portfolio Gallery</h2>
              <p className="text-lg text-muted-foreground">Explore our {style.name.toLowerCase()} tattoo work</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {style.galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="relative aspect-square overflow-hidden rounded group cursor-pointer"
                >
                  <img
                    src={`/.jpg?height=500&width=500&query=${image.query}`}
                    alt={`${style.name} ${image.title}`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">{image.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Love This Style?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book a consultation to discuss your {style.name.toLowerCase()} tattoo with our expert artists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/bookings/">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/styles">View All Styles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={`/.jpg?height=900&width=900&query=${style.galleryImages[selectedImage].query}`}
            alt={`${style.name} ${style.galleryImages[selectedImage].title}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}

      <SiteFooter />
    </>
  )
}
