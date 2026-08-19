import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { groq } from 'next-sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function BlogIndexPage() {
  const posts = await client.fetch(
    groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      category,
      publishedAt,
      author->{ name, role, image }
    }`
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Angel Tattooz Editorial
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Tattoo Insights, Aftercare & Guides
        </h1>
        <p className="text-zinc-400 text-base md:text-lg">
          Expert articles from our Cockfosters studio covering custom ink, cover-up solutions, and healing advice.
        </p>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="text-center py-20 border border-zinc-800 rounded-2xl bg-zinc-900/40">
          <p className="text-zinc-400 text-lg">New articles coming soon! Check back shortly.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => {
            const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;
            return (
              <article
                key={post._id}
                className="border border-zinc-800/80 rounded-2xl overflow-hidden bg-zinc-900/50 flex flex-col hover:border-amber-500/40 transition-colors group"
              >
                {imageUrl && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                    <Image alt={post.mainImage?.alt || post.title} className="object-cover group-hover:scale-105 transition-transform duration-500" fill src={imageUrl} />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {post.category || 'Guide'}
                    </span>
                    <h2 className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-amber-400 transition-colors">
                      <Link href={`/${post.slug}/`}>{post.title}</Link>
                    </h2>
                    <p className="text-zinc-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-xs text-zinc-500 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <span>By {post.author?.name || 'Angel Tattooz Collective'}</span>
                    <span>
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
