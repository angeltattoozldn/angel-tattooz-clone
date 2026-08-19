import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts = [];
  try {
    posts = await client.fetch(
      groq`*[_type == "post" && !(_id in path("drafts.**"))]{ "slug": slug.current, publishedAt }`
    );
  } catch (err) {
    console.error("Failed to fetch Sanity blog posts for sitemap:", err);
  }

  const blogUrls = posts.map((post: any) => ({
    url: `https://www.angeltattooz.co.uk/${post.slug}`,
    lastModified: new Date(post.publishedAt || Date.now()),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticUrls = [
    '',
    '/about-us',
    '/bookings',
    '/contact-us',
    '/faq',
    '/gallery',
    '/services',
    '/blog',
  ].map((route) => ({
    url: `https://www.angeltattooz.co.uk${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...blogUrls] as MetadataRoute.Sitemap;
}
