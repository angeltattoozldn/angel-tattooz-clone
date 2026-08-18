import { notFound } from 'next/navigation';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { SchemaScript } from '@/components/schema-script';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function DynamicBlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post = null;
  try {
    post = await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
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
      <main className="min-h-screen bg-background py-16 px-4 md:px-8 max-w-4xl mx-auto">
        
        <header className="mb-10 text-center">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{post.category}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">{post.title}</h1>
          {post.author && (
            <p className="text-sm text-muted-foreground">
              Written by <span className="text-foreground font-medium">{post.author.name}</span> ({post.author.role})
            </p>
          )}
        </header>

        {post.mainImage && (
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-10">
            <Image alt={post.mainImage.alt || post.title} className="object-cover" fill priority src={urlForImage(post.mainImage).url()} />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none prose-gold leading-relaxed mb-16">
          <PortableText value={post.body} />
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-border/50">
            <h2 className="text-3xl font-display mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((faq: any, idx: number) => (
                <div key={idx} className="p-6 rounded-lg bg-card/40 border border-border/40">
                  <h3 className="font-semibold text-xl text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
