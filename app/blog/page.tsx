import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tattoo Blog | Tips, Trends & Inspiration | Angel Tattooz",
  description:
    "Explore our tattoo blog for expert advice, style guides, aftercare tips, and the latest trends in tattoo artistry.",
}

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Blog" },
  ])

  const blogPosts = [
    {
      title: "Choosing Your First Tattoo: A Complete Guide",
      excerpt: "Everything you need to know before getting your first tattoo, from design selection to aftercare.",
      date: "January 5, 2026",
      category: "Beginner's Guide",
      slug: "choosing-your-first-tattoo",
      imageQuery: "person getting first tattoo consultation with artist",
    },
    {
      title: "Tattoo Aftercare: The Complete 2026 Guide",
      excerpt: "Essential aftercare instructions to ensure your tattoo heals perfectly and maintains its vibrancy.",
      date: "December 28, 2025",
      category: "Aftercare",
      slug: "tattoo-aftercare-guide-2026",
      imageQuery: "fresh tattoo with aftercare products healing process",
    },
    {
      title: "Realism vs Neo-Traditional: Which Style is Right for You?",
      excerpt: "Comparing two popular tattoo styles to help you choose the perfect aesthetic for your next piece.",
      date: "December 20, 2025",
      category: "Style Guide",
      slug: "realism-vs-neo-traditional",
      imageQuery: "comparison realism and neo traditional tattoo styles",
    },
    {
      title: "Cover-Up Tattoos: Transforming Regret into Art",
      excerpt: "How cover-up tattoos work, what's possible, and how to plan the perfect transformation piece.",
      date: "December 15, 2025",
      category: "Cover-Ups",
      slug: "cover-up-tattoos-guide",
      imageQuery: "tattoo cover up before and after transformation",
    },
    {
      title: "Top Tattoo Trends for 2026",
      excerpt: "The hottest tattoo styles, techniques, and design elements taking over the industry this year.",
      date: "December 10, 2025",
      category: "Trends",
      slug: "tattoo-trends-2026",
      imageQuery: "modern contemporary tattoo trends 2026 stylish",
    },
    {
      title: "Pain Management: Where Tattoos Hurt Most",
      excerpt: "An honest guide to tattoo pain levels by body placement and tips for managing discomfort.",
      date: "December 5, 2025",
      category: "Education",
      slug: "tattoo-pain-guide",
      imageQuery: "tattoo pain chart body placement guide diagram",
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
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">Tattoo Blog</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Expert advice, inspiration, and insights from our award-winning tattoo artists
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`/.jpg?height=300&width=500&query=${post.imageQuery}`}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-semibold">{post.category}</span>
                        <span className="text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
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
