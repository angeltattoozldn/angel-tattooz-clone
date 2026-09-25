import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'e1ur0uih',
  dataset: 'production',
  apiVersion: '2024-08-01',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

const authorRef = {
  _type: 'reference',
  _ref: 'author-angel-tattooz-team',
  _weak: true,
};

const posts = [
  // =========================================================================
  // POST 1: History of Tattoos
  // =========================================================================
  {
    _id: 'post-history-of-tattoos',
    _type: 'post',
    title: 'The History of Tattoos: From Ancient Traditions to Modern Art',
    slug: {
      _type: 'slug',
      current: 'the-history-of-tattoos-from-ancient-traditions-to-modern-art',
    },
    author: authorRef,
    category: 'Studio News',
    publishedAt: new Date('2026-09-02T10:00:00.000Z').toISOString(),
    excerpt:
      'From sacred Neolithic rituals and Polynesian Ta Moko to contemporary realism in London, explore the rich cultural history of tattooing and how ancient traditions evolved into fine modern art.',
    body: [
      {
        _key: 'h1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'h1c1',
            _type: 'span',
            text: 'Tattooing is one of humanity’s oldest forms of self-expression, ritual, and storytelling. Long before modern rotary machines and sterile studio environments, body art served as spiritual armor, rites of passage, status symbols, and cultural marks across global civilizations.',
          },
        ],
      },
      {
        _key: 'h2',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'h2c1',
            _type: 'span',
            text: 'Ancient Origins: Otzi and Early Civilizations',
          },
        ],
      },
      {
        _key: 'h3',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'h3c1',
            _type: 'span',
            text: 'The earliest physical evidence of tattoos dates back over 5,300 years with Ötzi the Iceman, whose preserved body revealed 61 geometric soot tattoos thought to be therapeutic treatments for joint pain. Similar ancient tattooing practices were uncovered in ancient Egypt, Nubia, and Scythian burial mounds across Eurasia.',
          },
        ],
      },
      {
        _key: 'h4',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'h4c1',
            _type: 'span',
            text: 'Sacred Tribal Traditions: Polynesia & Ta Moko',
          },
        ],
      },
      {
        _key: 'h5',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'h5c1',
            _type: 'span',
            text: 'In the Pacific Islands, tattooing was elevated to a profound spiritual craft. Polynesian tatau and Māori Tā Moko used bone chisels and natural pigments to permanently record an individual’s lineage, social rank, bravery, and spiritual power (mana). When European sailors encountered these traditions in the 18th century, the practice began its migration to the Western world.',
          },
        ],
      },
      {
        _key: 'h6',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'h6c1',
            _type: 'span',
            text: 'The 20th Century: Sailors, Rebellion & Subcultures',
          },
        ],
      },
      {
        _key: 'h7',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'h7c1',
            _type: 'span',
            text: 'Through maritime culture and pioneering artists like Sailor Jerry, American Traditional tattooing flourished. By the late 20th century, tattoos transformed from counter-culture rebellion into a celebrated medium of high art, individual identity, and creative freedom.',
          },
        ],
      },
      {
        _key: 'h8',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'h8c1',
            _type: 'span',
            text: 'Tattooing Today at Angel Tattooz',
          },
        ],
      },
      {
        _key: 'h9',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'h9c1',
            _type: 'span',
            text: 'Modern tattooing blends thousands of years of human heritage with state-of-the-art hygiene, precision rotary tech, and advanced artistic techniques. At Angel Tattooz in Cockfosters, Barnet (EN4 0DL), our artists honor this heritage by turning your personal stories into timeless custom art.',
          },
        ],
      },
    ],
    faqs: [
      {
        _key: 'faq-h1',
        question: 'What is the oldest known evidence of tattooing?',
        answer:
          'Ötzi the Iceman, dating back to approximately 3250 BCE (over 5,300 years ago), is the oldest preserved human body found with identifiable tattoos—61 carbon-based geometric markings across his joints.',
      },
      {
        _key: 'faq-h2',
        question: 'Where did the word "tattoo" originate?',
        answer:
          'The word originates from the Polynesian word "tatau", meaning to strike or mark, which was brought to Europe by Captain James Cook following his 18th-century voyages.',
      },
    ],
  },

  // =========================================================================
  // POST 2: Diverse Tattoo Styles at Angel Tattooz
  // =========================================================================
  {
    _id: 'post-diverse-tattoo-styles',
    _type: 'post',
    title: 'Discover the Diverse Tattoo Styles at Angel Tattooz in London',
    slug: {
      _type: 'slug',
      current: 'discover-the-diverse-tattoo-styles-at-angel-tattooz-in-london',
    },
    author: authorRef,
    category: 'Styles Guide',
    publishedAt: new Date('2026-09-08T10:00:00.000Z').toISOString(),
    excerpt:
      'Explore the signature tattoo styles mastered by the artists at Angel Tattooz in Cockfosters, Barnet—including fine line, black & grey realism, Japanese sleeves, and bespoke custom concepts.',
    body: [
      {
        _key: 'd1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'd1c1',
            _type: 'span',
            text: 'London is a global melting pot of artistic innovation, and Angel Tattooz stands at the intersection of timeless craftsmanship and contemporary style. Our studio offers a comprehensive range of disciplines to cater to every aesthetic.',
          },
        ],
      },
      {
        _key: 'd2',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'd2c1',
            _type: 'span',
            text: 'Fine Line & Micro Artwork',
          },
        ],
      },
      {
        _key: 'd3',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'd3c1',
            _type: 'span',
            text: 'Characterized by crisp, hair-thin lines and subtle elegance, fine line tattoos are perfect for delicate florals, geometric alignments, script, and minimalist concepts that demand surgical needle precision.',
          },
        ],
      },
      {
        _key: 'd4',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'd4c1',
            _type: 'span',
            text: 'Black & Grey Realism',
          },
        ],
      },
      {
        _key: 'd5',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'd5c1',
            _type: 'span',
            text: 'Our realism artists utilize smooth gradient ink washes, high-contrast black packing, and white highlight accents to bring portraits, statues, and wildlife to life with photographic depth.',
          },
        ],
      },
      {
        _key: 'd6',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'd6c1',
            _type: 'span',
            text: 'Japanese Irezumi & Large Scale Concepts',
          },
        ],
      },
      {
        _key: 'd7',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'd7c1',
            _type: 'span',
            text: 'For clients seeking full sleeves or back pieces, Japanese Irezumi provides unmatched flow and visual impact. Featuring dragons, koi fish, peonies, and waves, every piece is mapped directly to the client’s anatomy.',
          },
        ],
      },
    ],
    faqs: [
      {
        _key: 'faq-d1',
        question: 'Can I bring my own custom design to Angel Tattooz?',
        answer:
          'Yes. Our artists can work directly from your reference images or create a 100% bespoke custom concept tailored to your preferred style and placement.',
      },
    ],
  },

  // =========================================================================
  // POST 3: Laser Removal vs Cover-Ups
  // =========================================================================
  {
    _id: 'post-laser-vs-cover-ups',
    _type: 'post',
    title: 'The Dark Side of Laser Tattoo Removal: Why Cover-Ups Are a Better Bet',
    slug: {
      _type: 'slug',
      current: 'the-dark-side-of-laser-tattoo-removal-why-cover-ups-are-a-better-bet',
    },
    author: authorRef,
    category: 'Cover-Up Insights',
    publishedAt: new Date('2026-09-12T10:00:00.000Z').toISOString(),
    excerpt:
      'Unwanted tattoo? Before undergoing painful, expensive, and prolonged laser removal sessions, discover how a master cover-up artist can transform old ink into a fresh masterpiece.',
    body: [
      {
        _key: 'l1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'l1c1',
            _type: 'span',
            text: 'Tattoo regret is common, but the path to fixing it is often misunderstood. While laser removal is heavily marketed, many people are unprepared for the physical pain, exorbitant long-term costs, and unpredictable scarring that laser procedures often entail.',
          },
        ],
      },
      {
        _key: 'l2',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'l2c1',
            _type: 'span',
            text: 'The Hidden Realities of Laser Removal',
          },
        ],
      },
      {
        _key: 'l3',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'l3c1',
            _type: 'span',
            text: 'Laser removal requires shattering ink particles beneath the skin with intense pulses of light. This process frequently takes 8 to 15+ sessions spaced months apart, costing thousands of pounds without any guarantee that stubborn pigments (such as blues, greens, and dense blacks) will fully fade.',
          },
        ],
      },
      {
        _key: 'l4',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'l4c1',
            _type: 'span',
            text: 'Why a Custom Cover-Up Is the Superior Solution',
          },
        ],
      },
      {
        _key: 'l5',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'l5c1',
            _type: 'span',
            text: 'A skilled cover-up specialist does not simply paint over an old tattoo; they use intelligent design flow, dark pigment placement, and visual distraction to make the old ink completely vanish beneath a stunning new composition.',
          },
        ],
      },
      {
        _key: 'l6',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'l6c1',
            _type: 'span',
            text: 'With ',
          },
          {
            _key: 'l6c2',
            _type: 'span',
            marks: ['link-coverup'],
            text: 'our specialized cover-up process in North London',
          },
          {
            _key: 'l6c3',
            _type: 'span',
            text: ' at Angel Tattooz, you walk away with a piece of art you are proud to wear in just a fraction of the time and cost required by laser clinics.',
          },
        ],
        markDefs: [
          {
            _key: 'link-coverup',
            _type: 'link',
            href: '/best-tattoo-cover-up-studio-london/',
          },
        ],
      },
    ],
    faqs: [
      {
        _key: 'faq-l1',
        question: 'Does my old tattoo need to be completely black to be covered?',
        answer:
          'No. Through strategic placement of dark shading, rich colors, and textured motifs (like Japanese waves or realism flora), almost any tattoo can be successfully covered without laser treatment.',
      },
      {
        _key: 'faq-l2',
        question: 'How do I know if my tattoo can be covered?',
        answer:
          'Book an in-person consultation at our Cockfosters studio (EN4 0DL) with photos of your current piece. Our artists will assess ink saturation and design a bespoke cover-up concept.',
      },
    ],
  },

  // =========================================================================
  // POST 4: Ultimate Guide to Tattoo Aftercare
  // =========================================================================
  {
    _id: 'post-tattoo-aftercare-guide',
    _type: 'post',
    title: 'The Ultimate Guide to Tattoo Aftercare: Keeping Your Ink Fresh',
    slug: {
      _type: 'slug',
      current: 'the-ultimate-guide-to-tattoo-aftercare-keeping-your-ink-fresh',
    },
    author: authorRef,
    category: 'Aftercare Advice',
    publishedAt: new Date('2026-09-18T10:00:00.000Z').toISOString(),
    excerpt:
      'Proper healing is crucial for ink vibrancy and crisp lines. Follow the official Angel Tattooz aftercare protocol for washing, moisturizing, and protecting your new tattoo.',
    body: [
      {
        _key: 'a1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'a1c1',
            _type: 'span',
            text: 'Your tattoo session is only half the equation—how you care for your fresh ink during the first 2 to 4 weeks determines how sharp, vibrant, and clear it will remain for decades to come.',
          },
        ],
      },
      {
        _key: 'a2',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'a2c1',
            _type: 'span',
            text: 'The First 24 to 48 Hours: Cleanliness & Protection',
          },
        ],
      },
      {
        _key: 'a3',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'a3c1',
            _type: 'span',
            text: 'Leave your protective film or bandage on for the duration recommended by your artist. When removing it, wash gently with lukewarm water and mild antibacterial, fragrance-free soap. Pat dry with a clean paper towel—never rub with a bath towel.',
          },
        ],
      },
      {
        _key: 'a4',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'a4c1',
            _type: 'span',
            text: 'Days 3 to 14: Moisturization & Scab Management',
          },
        ],
      },
      {
        _key: 'a5',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'a5c1',
            _type: 'span',
            text: 'Apply a very thin layer of tattoo-specific aftercare ointment (such as Hustle Butter or Bepanthen Tattoo) 2–3 times daily. Avoid over-moisturizing. If flaking or light scabbing occurs, DO NOT scratch or pick at the skin—allow it to shed naturally.',
          },
        ],
      },
      {
        _key: 'a6',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'a6c1',
            _type: 'span',
            text: 'Golden Rules: What to Avoid',
          },
        ],
      },
      {
        _key: 'a7',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'a7c1',
            _type: 'span',
            text: 'No soaking (avoid baths, swimming pools, saunas, and hot tubs for at least 3 weeks). Keep fresh tattoos out of direct sunlight. Once healed, always apply SPF 50 sunscreen to maintain color longevity.',
          },
        ],
      },
    ],
    faqs: [
      {
        _key: 'faq-a1',
        question: 'Can I exercise after getting a tattoo?',
        answer:
          'Avoid intense workouts for the first 48–72 hours to prevent excessive sweating, friction, and bacteria exposure in gym environments.',
      },
      {
        _key: 'faq-a2',
        question: 'What should I do if my tattoo feels itchy?',
        answer:
          'Itching is a normal sign of healing. Do not scratch. Instead, apply a thin layer of recommended moisturizer or gently pat the area with clean hands.',
      },
    ],
  },

  // =========================================================================
  // POST 5: Ultimate Tattoo Experience at Angel Tattooz
  // =========================================================================
  {
    _id: 'post-ultimate-tattoo-experience',
    _type: 'post',
    title: 'Discover the Ultimate Tattoo Experience at Angel Tattooz',
    slug: {
      _type: 'slug',
      current: 'discover-the-ultimate-tattoo-experience-at-angel-tattooz',
    },
    author: authorRef,
    category: 'Studio News',
    publishedAt: new Date('2026-09-22T10:00:00.000Z').toISOString(),
    excerpt:
      'Step inside our premier studio at Studio A, 15 Station Parade, Cockfosters, Barnet, London, EN4 0DL (minutes’ walk from Cockfosters Underground Station, right next door to Costa Coffee on Station Parade). Experience unmatched artistic talent, hospital-grade hygiene, and a welcoming client-first consultation environment.',
    body: [
      {
        _key: 'e1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'e1c1',
            _type: 'span',
            text: 'Getting tattooed should be an empowering and unforgettable journey. At Angel Tattooz, we combine world-class craftsmanship with an inviting, comfortable studio atmosphere located right in the heart of Cockfosters, Barnet.',
          },
        ],
      },
      {
        _key: 'e2',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'e2c1',
            _type: 'span',
            text: 'Client-First Consultation Process',
          },
        ],
      },
      {
        _key: 'e3',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'e3c1',
            _type: 'span',
            text: 'Every great tattoo begins with an open conversation. We take the time to understand your inspiration, advise on ideal anatomical placement, and collaborate closely to refine custom artwork before any needle touches skin.',
          },
        ],
      },
      {
        _key: 'e4',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'e4c1',
            _type: 'span',
            text: 'Uncompromising Sterilization & Hygiene',
          },
        ],
      },
      {
        _key: 'e5',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'e5c1',
            _type: 'span',
            text: 'Your health and safety are our highest priorities. Our studio operates under full local health authority licensing, utilizing medical-grade autoclave sterilization, single-use sealed cartridges, and premium vegan-friendly inks.',
          },
        ],
      },
      {
        _key: 'e6',
        _type: 'block',
        style: 'h2',
        children: [
          {
            _key: 'e6c1',
            _type: 'span',
            text: 'Visit Our New Cockfosters Studio',
          },
        ],
      },
      {
        _key: 'e7',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'e7c1',
            _type: 'span',
            text: 'Conveniently situated at Studio A, 15 Station Parade, Cockfosters, Barnet, London, EN4 0DL (minutes’ walk from Cockfosters Underground Station, right next door to Costa Coffee on Station Parade), our doors are open for consultations and booked appointments. We are widely recognized as the ',
          },
          {
            _key: 'e7c2',
            _type: 'span',
            marks: ['link-first-tattoo'],
            text: 'best first tattoo studio in London (Southgate & Cockfosters)',
          },
          {
            _key: 'e7c3',
            _type: 'span',
            text: ', providing complete peace of mind for beginners.',
          },
        ],
        markDefs: [
          {
            _key: 'link-first-tattoo',
            _type: 'link',
            href: '/best-first-tattoo-studio-london-southgate/',
          },
        ],
      },
      {
        _key: 'e8',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'e8c1',
            _type: 'span',
            text: 'For clients traveling from Hertfordshire, we also serve as the ',
          },
          {
            _key: 'e8c2',
            _type: 'span',
            marks: ['link-potters-bar'],
            text: 'premier tattoo studio serving Potters Bar & Hatfield',
          },
          {
            _key: 'e8c3',
            _type: 'span',
            text: ' with direct transport connections and easy local parking.',
          },
        ],
        markDefs: [
          {
            _key: 'link-potters-bar',
            _type: 'link',
            href: '/tattoo-studio-potters-bar-hatfield/',
          },
        ],
      },
    ],
    faqs: [
      {
        _key: 'faq-e1',
        question: 'How do I book an appointment at Angel Tattooz?',
        answer:
          'Appointments can be booked online via our booking form with a £50 deposit, or by contacting our studio team directly via WhatsApp or phone at 07949 123424.',
      },
      {
        _key: 'faq-e2',
        question: 'Is the studio accessible via public transport?',
        answer:
          'Yes. We are located right next to Cockfosters Station at the end of the Piccadilly Line, making the studio easily accessible from anywhere across London and Hertfordshire.',
      },
    ],
  },
];

async function seedAll() {
  console.log('Seeding remaining 5 legacy blog posts...');

  for (const post of posts) {
    await client.createOrReplace(post);
    console.log(`✓ Seeded post: ${post.slug.current}`);
  }

  console.log('\nAll 5 legacy posts successfully seeded into Sanity!');
}

seedAll().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
