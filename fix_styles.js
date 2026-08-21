const fs = require('fs');

let content = fs.readFileSync('app/styles/[slug]/page.tsx', 'utf-8');

// add metadata import
if (!content.includes('import type { Metadata } from "next"')) {
    content = content.replace('import { notFound } from "next/navigation"', 'import { notFound } from "next/navigation"\nimport type { Metadata } from "next"');
}

// add generateMetadata and generateStaticParams before default export
if (!content.includes('export async function generateMetadata')) {
    const defaultExportIndex = content.indexOf('export default async function StylePage');
    const toInsert = `
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const style = stylesData[slug]

  if (!style) {
    return { title: "Style Not Found" }
  }

  return {
    title: \`\${style.name} Tattoos | Angel Tattooz\`,
    description: style.description,
  }
}

export async function generateStaticParams() {
  return Object.keys(stylesData).map((slug) => ({ slug }))
}

`;
    content = content.slice(0, defaultExportIndex) + toInsert + content.slice(defaultExportIndex);
}

// remove selectedImage state
content = content.replace('const [selectedImage, setSelectedImage] = useState<number | null>(null)', '');
content = content.replace(/<button[^>]*onClick=\{\(\) => setSelectedImage\(index\)\}[^>]*>/g, '<div className="relative aspect-square overflow-hidden rounded group">');
content = content.replace(/<\/button>/g, '</div>');

// remove lightbox
const lightboxRegex = /\{\/\* Lightbox \*\/\}.*?(?=<SiteFooter \/>)/s;
content = content.replace(lightboxRegex, '');

fs.writeFileSync('app/styles/[slug]/page.tsx', content);
