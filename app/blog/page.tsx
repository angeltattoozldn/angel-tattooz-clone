import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SchemaScript } from '@/components/schema-script';
import { generateBreadcrumbs } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tattoo Blog | Tips, Trends & Inspiration | Angel Tattooz",
  description: "Explore our tattoo blog for expert advice, style guides, aftercare tips, and the latest trends in tattoo artistry.",
}

const postsQuery = groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  category,
  publishedAt,
  author->{ name, role, image }
}`;

export default async function BlogIndexPage() {
  let posts = [];
  try {
    posts = await client.fetch(postsQuery);
  } catch (err) {
    console.error("Failed to fetch Sanity blog posts:", err);
  }

  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Blog" },
  ])

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SiteHeader />
      <main className="min-h-screen bg-background py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 text-balance">
            Tattoo Insights, Aftercare & Guides
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            Expert articles from our artists covering custom ink, cover-up solutions, and healing advice.
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article key={post._id} className="border border-border/50 rounded-lg overflow-hidden bg-card/40 flex flex-col hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                {post.mainImage && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image alt={post.mainImage.alt || post.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" fill src={urlForImage(post.mainImage).url()} />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                      <span className="text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-bold mt-2 mb-3">
                      <Link className="hover:text-primary transition-colors before:absolute before:inset-0" href={`/${post.slug}/`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    By {post.author?.name || 'Angel Tattooz Team'}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-card/40 border border-border/50 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">New Articles Coming Soon</h2>
            <p className="text-muted-foreground">Our artists are currently working on fresh insights and guides. Check back later!</p>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
