const fs = require('fs');

const content = `import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { servicesData } from '@/app/services/[slug]/page'
import { stylesData } from '@/app/styles/[slug]/page'
import { aftercareGuides } from '@/app/aftercare/[slug]/page'
import { getAllServiceAreaSlugs } from '@/config/service-areas.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts = [];
  try {
    posts = await client.fetch(
      groq\`*[_type == "post" && !(_id in path("drafts.**"))]{ "slug": slug.current, publishedAt }\`
    );
  } catch (err) {
    console.error("Failed to fetch Sanity blog posts for sitemap:", err);
  }

  const blogUrls = posts.map((post: any) => ({
    url: \`https://www.angeltattooz.co.uk/blog/\${post.slug}\`,
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
    '/styles',
    '/aftercare',
    '/privacy-and-terms',
    '/payments'
  ].map((route) => ({
    url: \`https://www.angeltattooz.co.uk\${route}\`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceUrls = Object.keys(servicesData).map(slug => ({
    url: \`https://www.angeltattooz.co.uk/services/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const styleUrls = Object.keys(stylesData).map(slug => ({
    url: \`https://www.angeltattooz.co.uk/styles/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const aftercareUrls = Object.keys(aftercareGuides).map(slug => ({
    url: \`https://www.angeltattooz.co.uk/aftercare/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const areaUrls = getAllServiceAreaSlugs().map(slug => ({
    url: \`https://www.angeltattooz.co.uk/areas/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticUrls,
    ...blogUrls,
    ...serviceUrls,
    ...styleUrls,
    ...aftercareUrls,
    ...areaUrls
  ] as MetadataRoute.Sitemap;
}
`

fs.writeFileSync('app/sitemap.ts', content);
