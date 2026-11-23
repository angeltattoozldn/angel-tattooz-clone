import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedContactLink } from '@/components/tracked-contact-link';

interface AreaConfig {
  name: string;
  borough: string;
  postcode: string;
  tubeJourney: string;
  drivingRoute: string;
  drivingTime: string;
  originCoords: string;
}

const AREAS: Record<string, AreaConfig> = {
  southgate: {
    name: 'Southgate',
    borough: 'London Borough of Enfield',
    postcode: 'N14',
    tubeJourney: 'Direct transit via the Piccadilly Line northbound from Southgate Station to Cockfosters Station (2 stops, approx. 4 minutes). Studio A is located directly across at 15 Station Parade.',
    drivingRoute: 'Head north along Chase Side (A111) straight into Cockfosters Road.',
    drivingTime: '6–8 minutes',
    originCoords: 'Southgate, London N14',
  },
  barnet: {
    name: 'High Barnet',
    borough: 'London Borough of Barnet',
    postcode: 'EN5',
    tubeJourney: 'Direct transit via the 384 or 84 bus routes towards Cockfosters Station, or Northern Line connecting via High Barnet.',
    drivingRoute: 'Head east via Wood Street and Barnet Road onto Cockfosters Road (A111).',
    drivingTime: '8–10 minutes',
    originCoords: 'High Barnet, Barnet EN5',
  },
  enfield: {
    name: 'Enfield',
    borough: 'London Borough of Enfield',
    postcode: 'EN1 / EN2',
    tubeJourney: 'Take the 121 or 307 bus routes directly connecting Enfield Town to Oakwood or Cockfosters Station.',
    drivingRoute: 'Westbound via Windmill Hill and Slades Hill onto Bramley Road and Cockfosters Road.',
    drivingTime: '10–12 minutes',
    originCoords: 'Enfield Town, Enfield EN2',
  },
  'potters-bar': {
    name: 'Potters Bar',
    borough: 'Hertfordshire',
    postcode: 'EN6',
    tubeJourney: 'Take the 298 bus route south directly to Cockfosters Station terminal.',
    drivingRoute: 'Head south on the A111 (Cockfosters Road) directly past Trent Park.',
    drivingTime: '7–9 minutes',
    originCoords: 'Potters Bar, Hertfordshire EN6',
  },
  'welwyn-garden-city': {
    name: 'Welwyn Garden City',
    borough: 'Hertfordshire',
    postcode: 'AL7 / AL8',
    tubeJourney: 'Direct Great Northern rail transit to Potters Bar or Finsbury Park, connecting directly to Cockfosters Station via bus route 298 or Piccadilly Line.',
    drivingRoute: 'Head south via the A1(M) and A111 (Cockfosters Road) directly past Trent Park to Station Parade.',
    drivingTime: '18–22 minutes',
    originCoords: 'Welwyn Garden City, Hertfordshire AL8',
  },
};

export async function generateStaticParams() {
  return Object.keys(AREAS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS[slug];
  if (!area) return {};

  return {
    title: `Visiting Angel Tattooz from ${area.name} (${area.postcode}) | Private Studio Sanctuary`,
    description: `Transit and route directions to Angel Tattooz from ${area.name} (${area.borough}). Just ${area.drivingTime} away at 15 Station Parade, Cockfosters EN4 0DL. Studio-led custom cover-ups, fine-line, and realism.`,
    alternates: {
      canonical: `https://www.angeltattooz.co.uk/areas-we-serve/${slug}/`,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = AREAS[slug];

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 max-w-4xl mx-auto font-sans">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6">
        <Link className="hover:text-sky-400" href="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="hover:text-sky-400">Areas We Serve</span>
        <span className="mx-2">/</span>
        <span className="text-slate-200">{area.name}</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs uppercase tracking-widest text-sky-400 font-bold bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          Transit & Regional Route • {area.postcode}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 text-white">
          Visiting Angel Tattooz from {area.name}
        </h1>
        <p className="mt-4 text-slate-300 text-base leading-relaxed">
          Angel Tattooz delivers private, consultation-led custom tattooing within our sanctuary at <strong>15 Station Parade, Cockfosters, London EN4 0DL</strong>. Clients visiting from {area.name} can reach our doors in under {area.drivingTime}.
        </p>
      </header>

      {/* TRANSIT & INFRASTRUCTURE SECTION */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Route & Transit Information</h2>
        <div className="space-y-4 text-sm text-slate-300">
          <div>
            <strong className="text-sky-400 block mb-1">🚇 Underground & Public Transit:</strong>
            <p>{area.tubeJourney}</p>
          </div>
          <div>
            <strong className="text-sky-400 block mb-1">🚗 Driving Directions ({area.drivingTime}):</strong>
            <p>{area.drivingRoute} Pay-and-display parking is available along Station Parade.</p>
          </div>
        </div>

        {/* GOOGLE MAPS TRANSIT ROUTE EMBED */}
        <div className="mt-6 aspect-video w-full rounded-lg overflow-hidden border border-slate-700">
          <iframe
            title={`Transit route from ${area.name} to Angel Tattooz Cockfosters`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodeURIComponent(area.originCoords)}+to+15+Station+Parade,+Cockfosters,+Barnet+EN4+0DL&output=embed`}
          />
        </div>
      </section>

      {/* STUDIO CAPABILITIES */}
      <section className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">Dedicated Consultations</h3>
          <p className="text-sm text-slate-400">
            One-on-one appointments tailored for stress-free first tattoos and extensive custom cover-up design planning.
          </p>
        </div>
        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">Clinical Sterilization</h3>
          <p className="text-sm text-slate-400">
            Strict autoclave sterilization protocols, single-use cartridges, and private consultation booths.
          </p>
        </div>
      </section>

      <div className="text-center mt-10">
        <TrackedContactLink
          event="contact_whatsapp"
          location="areas_we_serve_page"
          href="https://wa.me/447949123424"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg shadow-lg shadow-sky-500/25 transition-all"
        >
          Book Consultation from {area.name}
        </TrackedContactLink>
      </div>
    </main>
  );
}
