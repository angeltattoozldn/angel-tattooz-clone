import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaScript } from "@/components/schema-script"
import { generateBreadcrumbs } from "@/lib/schema"

export const metadata: Metadata = {
  title: 'Custom Tattoo Artists Welwyn Garden City & Borehamwood | Angel Tattooz',
  description:
    'Premium custom tattooing on the Hertfordshire border. Serving Welwyn Garden City, Borehamwood, and Cheshunt. Specialized in fine line, realism, and custom cover-ups.',
  alternates: {
    canonical: 'https://www.angeltattooz.co.uk/tattoo-artists-welwyn-garden-city/',
  },
};

export default function WelwynGardenCityPage() {
  const breadcrumbSchema = generateBreadcrumbs([
    { name: "Home", url: "https://www.angeltattooz.co.uk" },
    { name: "Service Areas", url: "https://www.angeltattooz.co.uk/#service-areas" },
    { name: "Tattoo Artists Welwyn Garden City & Borehamwood" },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-neutral-100">
      <SchemaScript schema={breadcrumbSchema} />
      <SiteHeader />

      <main className="flex-1 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#FAD5E6] font-hey">
            Premier Custom Tattooing Serving Welwyn Garden City &amp; The Herts Border
          </h1>
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            For residents across Welwyn Garden City, Borehamwood, and Cheshunt, finding an elite custom
            studio that doesn&apos;t compromise on hygiene or artistry can be a challenge. Angel Tattooz
            bridges that gap. Located perfectly on the North London/Hertfordshire border next to
            Cockfosters Station, our licensed studio delivers world-class tattooing with unparalleled client care.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#FAD5E6]">Our Specialized Studio Disciplines</h2>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside mb-8">
            <li><strong>Elite Fine Line &amp; Micro-Realism:</strong> Ultra-sharp details, geometric patterns, and fine-needle texturing.</li>
            <li><strong>Vivid Colour Work &amp; Illustrative Art:</strong> Custom modern illustrative designs and bold traditional elements.</li>
            <li><strong>Tattoo Reworks &amp; Cover-Ups:</strong> Consultative dermal ink analysis to reconstruct and transform existing tattoos.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#FAD5E6]">A Sterile, Welcoming, and Safe Environment</h2>
          <p className="text-neutral-300 mb-6 leading-relaxed">
            Angel Tattooz is heavily celebrated for its ultra-clean facilities, soothing studio vibe, and
            non-intimidating approach. We operate as a dedicated LGBTQ+ friendly and transgender safe space,
            ensuring an environment of absolute respect, privacy, and safety for all communities across Herts and London.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
            <p className="font-semibold text-white">Angel Tattooz</p>
            <p className="text-neutral-400">Studio A, 15 Station Parade, Cockfosters, EN4 0DL</p>
            <p className="text-amber-400 text-sm mt-1">
              Minutes’ walk from Cockfosters Underground Station, right next door to Costa Coffee.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact-us/"
              className="inline-block bg-[#D4C59D] text-zinc-950 font-semibold px-6 py-3 rounded-lg hover:bg-white transition duration-300"
            >
              Secure Your Consultation Spot – Book Now
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
