import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { SchemaScript } from '@/components/schema-script';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { portableTextComponents } from '@/components/portable-text';

interface PageProps {
  params: Promise<{ slug: string }>;
}



export default async function DynamicBlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post = null;
  try {
    post = await client.fetch(
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
  } catch (err) {
    console.error("Failed to fetch Sanity post:", err);
  }

  if (!post) {
    notFound();
  }

  // Generate dynamic Article + FAQ Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Angel Tattooz',
      jobTitle: post.author?.role,
      sameAs: post.author?.instagram ? [post.author.instagram] : undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Angel Tattooz',
      url: 'https://www.angeltattooz.co.uk',
    },
  };

  return (
    <>
      <SchemaScript schema={articleSchema} />
      <SiteHeader />
      
      <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-20">
        {/* 1. Full-Width Hero Section with Background Image */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center border-b border-zinc-800/60 overflow-hidden">
          {post.mainImage && (
            <div className="absolute inset-0 z-0">
              <Image 
                alt={post.mainImage.alt || post.title} 
                className="object-cover" 
                fill 
                priority 
                src={urlForImage(post.mainImage).url()} 
              />
              <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/30" />
            </div>
          )}
          
          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 pt-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hey text-[#ffe4e6] tracking-wide leading-tight max-w-5xl mx-auto drop-shadow-lg">
              {post.title}
            </h1>
          </div>
        </section>

        {/* 2. Main Content Grid (Content 70% | Sidebar 30%) */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Article Body */}
          <article className="lg:col-span-8">
            <div className="mb-6 text-sm text-zinc-400">
              Welcome to Angel Tattooz, your go-to source for the latest tattoo trends in 2024. Whether you're a seasoned tattoo enthusiast or a first-timer looking for inspiration, we've got you covered.
            </div>

            {/* Portable Text Body with Custom Component Styling */}
            <div className="prose prose-invert max-w-none prose-headings:font-sans prose-headings:font-bold prose-h2:text-xl md:prose-h2:text-2xl prose-h2:text-white prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base">
              <PortableText components={portableTextComponents} value={post.body} />
            </div>

            {/* Bottom CTA Card */}
            <div className="mt-16 text-center">
              <Link href="/blog" className="text-zinc-400 hover:text-zinc-200 text-sm flex items-center justify-center gap-2 mb-16">
                <span>←</span> Back to Home
              </Link>
              <h3 className="text-6xl md:text-7xl font-hey text-[#ffe4e6] mb-4">Ready to Get Inked?</h3>
              <p className="text-zinc-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
                Take the first step towards your tattoo journey. Secure your spot or inquire about our services. Let's bring your ink dreams to life.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link className="px-8 py-3 bg-[#c2a278] hover:bg-[#b08f65] text-black font-semibold text-sm transition-colors rounded-sm" href="/bookings/">
                  Book Now
                </Link>
              </div>
            </div>

            {/* FAQ Accordion Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16 pt-10 border-t border-zinc-800">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {post.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <h4 className="font-semibold text-base md:text-lg text-zinc-100">{faq.question}</h4>
                      <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Studio CTA Card */}
            <div className="sticky top-28 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-6">
              <div className="border-b border-zinc-800 pb-4">
                <h4 className="text-lg font-serif font-bold text-white">Angel Tattooz</h4>
                <p className="text-xs text-zinc-400 mt-1">Cockfosters • Barnet • North London</p>
              </div>
              
              <div className="space-y-3 text-xs text-zinc-300">
                <p className="flex items-start gap-2">
                  <span className="text-zinc-100 font-bold">📍</span>
                  <span>Studio A, 15 Station Parade, Cockfosters, Barnet, EN4 0DL</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-100 font-bold">📞</span>
                  <span>+44 7949 123424</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-100 font-bold">🕒</span>
                  <span>Mon–Sat: 11:30 AM – 7:00 PM</span>
                </p>
              </div>

              <Link className="block w-full text-center py-3 rounded-sm bg-[#c2a278] hover:bg-[#b08f65] text-black font-semibold text-sm transition-colors" href="/bookings/">
                Book Your Appointment
              </Link>
            </div>
          </aside>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
