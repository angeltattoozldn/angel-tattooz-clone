const fs = require('fs');

let content = fs.readFileSync('app/[slug]/page.tsx', 'utf-8');

if (!content.includes('export async function generateMetadata')) {
    const toInsert = `
import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let post = null;
  try {
    post = await client.fetch(
      groq\`*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
        title,
        excerpt
      }\`,
      { slug }
    );
  } catch (err) {
    console.error("Failed to fetch Sanity post for metadata:", err);
  }

  if (!post) {
    return { title: 'Post Not Found | Angel Tattooz' };
  }

  return {
    title: \`\${post.title} | Angel Tattooz\`,
    description: post.excerpt || "Read the latest from Angel Tattooz.",
  };
}
`;

    // Insert after "interface PageProps { params: Promise<{ slug: string }>; }"
    const anchor = 'interface PageProps {\n  params: Promise<{ slug: string }>;\n}\n';
    content = content.replace(anchor, anchor + toInsert);
}

fs.writeFileSync('app/[slug]/page.tsx', content);
