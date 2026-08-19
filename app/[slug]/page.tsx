import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { SchemaScript } from '@/components/schema-script';
import { portableTextComponents } from '@/components/portable-text';

interface PageProps {
  params: Promise<{ slug: string }>;
}



export default async function DynamicBlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      category,
      body,
      author->{ name, role, bio, image, instagram, knowsAbout },
      faqs
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  const heroImageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-20">
      <section className="relative w-full bg-gradient-to-b from-zinc-900/90 via-zinc-900/40 to-transparent pt-32 pb-16 px-4 border-b border-zinc-800/60">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
            {post.category || 'Styles Guide'}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-zinc-400">
            <span>By <strong className="text-zinc-200">{post.author?.name || 'Angel Tattooz Collective'}</strong></span>
            <span>•</span>
            <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8">
          {heroImageUrl && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl bg-zinc-950">
              <Image alt={post.mainImage?.alt || post.title} className="object-cover" fill priority src={heroImageUrl} />
            </div>
          )}

          <div className="prose prose-invert prose-amber max-w-none">
            <PortableText components={portableTextComponents} value={post.body} />
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 pt-10 border-t border-zinc-800">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {post.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <h4 className="font-semibold text-base md:text-lg text-amber-400">{faq.question}</h4>
                    <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-28 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-6">
            <div className="border-b border-zinc-800 pb-4">
              <h4 className="text-lg font-serif font-bold text-white">Angel Tattooz</h4>
              <p className="text-xs text-amber-400 mt-1">Cockfosters • Barnet • North London</p>
            </div>

            <div className="space-y-3 text-xs text-zinc-300">
              <p className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">📍</span>
                <span>Studio A, 15 Station Parade, Cockfosters, Barnet, EN4 0DL</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">📞</span>
                <span>+44 7949 123424</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">🕒</span>
                <span>Mon–Sat: 11:30 AM – 7:00 PM</span>
              </p>
            </div>

            <Link className="block w-full text-center py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-colors shadow-lg shadow-amber-500/10" href="/bookings/">
              Book Your Appointment
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
