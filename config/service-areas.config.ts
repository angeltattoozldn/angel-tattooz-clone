export interface ServiceArea {
  name: string
  slug: string
  distance: string
  travelTime: string
  description: string
  nearestStation: string
  stationLine: string
  landmarks: string[]
  transport: {
    tube?: string
    train?: string
    bus?: string
    car?: string
    parking?: string
  }
  localFAQs: Array<{
    question: string
    answer: string
  }>
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Barnet",
    slug: "barnet",
    distance: "0.5 miles",
    travelTime: "5 minutes",
    description:
      "Angel Tattooz is perfectly located to serve tattoo enthusiasts in Barnet. Just a short walk from High Barnet Station, we're your local destination for premium tattoo artistry.",
    nearestStation: "High Barnet",
    stationLine: "Northern Line",
    landmarks: ["The Spires Shopping Centre", "Barnet Museum", "Church Passage"],
    transport: {
      tube: "High Barnet Station (Northern Line) - 5 minute walk",
      bus: "Routes 34, 84, 234, 263, 326 - Stop outside studio",
      car: "Free street parking available on Station Parade and surrounding streets",
      parking: "Multiple public car parks within 5 minutes walk",
    },
    localFAQs: [
      {
        question: "How do I get to Angel Tattooz from Barnet town centre?",
        answer:
          "We're just a 5 minute walk from High Barnet Station. Exit the station, head down Barnet Hill, and you'll find us at Studio A, 15 Station Parade.",
      },
      {
        question: "Is there parking near your Barnet studio?",
        answer:
          "Yes! Free street parking is available on Station Parade and surrounding streets. There are also several public car parks within 5 minutes walk.",
      },
      {
        question: "Do you serve walk-in customers in Barnet?",
        answer:
          "We recommend booking in advance to ensure availability. However, contact us to check if we can accommodate walk-ins on the day.",
      },
      {
        question: "What tattoo styles are most popular in Barnet?",
        answer:
          "Our Barnet clients love a mix of styles! Fine line, minimalist, and geometric tattoos are very popular, along with traditional custom designs.",
      },
      {
        question: "How long has Angel Tattooz been serving Barnet?",
        answer:
          "Angel Tattooz has been proudly serving the Barnet community with high-quality tattoo artistry since 2010.",
      },
    ],
  },
  {
    name: "Cockfosters",
    slug: "cockfosters",
    distance: "0.3 miles",
    travelTime: "3 minutes",
    description:
      "Located right in Cockfosters, Angel Tattooz is your neighborhood tattoo studio. We're proud to serve the local community with exceptional tattoo artistry.",
    nearestStation: "Cockfosters",
    stationLine: "Piccadilly Line",
    landmarks: ["Trent Park", "Cockfosters Station", "Chalk Lane"],
    transport: {
      tube: "Cockfosters Station (Piccadilly Line) - 3 minute walk",
      bus: "Routes 298, 384 - Stop at Cockfosters Station",
      car: "Easy access via A111 Cockfosters Road",
      parking: "Free parking available directly outside studio",
    },
    localFAQs: [
      {
        question: "Where exactly is Angel Tattooz in Cockfosters?",
        answer:
          "We're at Studio A, 15 Station Parade, Cockfosters - next to Cockfosters Tube Station (end of Piccadilly Line).",
      },
      {
        question: "Can I park at your Cockfosters location?",
        answer: "Yes! We have free parking available right outside the studio on Station Parade.",
      },
      {
        question: "Do you offer consultations in Cockfosters?",
        answer: "We offer free consultations at our Cockfosters studio. Book online or call us to schedule yours.",
      },
      {
        question: "What makes Angel Tattooz the best choice in Cockfosters?",
        answer:
          "We're a community-focused studio with award-winning artists, premium equipment, and a tranquil atmosphere. Our local reputation speaks for itself!",
      },
      {
        question: "Are you open weekends in Cockfosters?",
        answer:
          "Yes! We're open Saturday 11:30 AM - 6:30 PM and Sunday by appointment only. Check our booking page for availability.",
      },
    ],
  },
  {
    name: "Southgate",
    slug: "southgate",
    distance: "1.2 miles",
    travelTime: "10 minutes",
    description:
      "Angel Tattooz serves the Southgate community with easy access via the Piccadilly Line. Just 10 minutes away, we're your local choice for professional tattoo artistry.",
    nearestStation: "Southgate",
    stationLine: "Piccadilly Line",
    landmarks: ["Southgate Station", "Waterfall Road", "Grovelands Park"],
    transport: {
      tube: "Southgate Station (Piccadilly Line) - One stop to Cockfosters, then 3 min walk",
      bus: "Routes 121, 299, 307, W6 connect to Cockfosters",
      car: "10 minute drive via A111",
      parking: "Free parking at studio",
    },
    localFAQs: [
      {
        question: "How do I travel from Southgate to Angel Tattooz?",
        answer:
          "Take the Piccadilly Line from Southgate to Cockfosters (one stop, 5 mins), then it's a 3 minute walk to our studio.",
      },
      {
        question: "Is Angel Tattooz convenient for Southgate residents?",
        answer: "We're just one tube stop away, making us easily accessible for all your tattoo needs in Southgate.",
      },
      {
        question: "Do you have clients from Southgate?",
        answer:
          "Yes! We serve many clients from Southgate who appreciate our convenient location and high-quality work.",
      },
      {
        question: "Can I book a same-day appointment from Southgate?",
        answer: "Contact us to check availability. We do our best to accommodate last-minute bookings when possible.",
      },
      {
        question: "What's your cancellation policy for Southgate clients?",
        answer: "We require 24 hours notice for cancellations. Please see our booking terms for full details.",
      },
    ],
  },
  {
    name: "Enfield",
    slug: "enfield",
    distance: "3 miles",
    travelTime: "15 minutes",
    description:
      "Angel Tattooz is proud to serve the Enfield community. Located just 15 minutes away, we're your trusted destination for premium tattoos in North London.",
    nearestStation: "Enfield Town / Enfield Chase",
    stationLine: "Great Northern",
    landmarks: ["Enfield Town Centre", "Palace Gardens", "Civic Centre"],
    transport: {
      train: "Enfield Town or Enfield Chase to Gordon Hill, then bus 307 to Cockfosters",
      bus: "Route 307 from Enfield Town to Cockfosters - 20 minutes",
      car: "15 minute drive via A110",
      parking: "Free parking available",
    },
    localFAQs: [
      {
        question: "How far is Angel Tattooz from Enfield?",
        answer:
          "We're approximately 3 miles from Enfield Town Centre, about 15 minutes by car or 20 minutes by bus (307).",
      },
      {
        question: "Do you serve customers from Enfield?",
        answer:
          "Yes! We have many regular clients from Enfield who travel to us for our exceptional tattoo artistry and service.",
      },
      {
        question: "Is it worth traveling from Enfield to your studio?",
        answer:
          "Our clients from Enfield consistently tell us the quality of our work and service makes the short journey worthwhile.",
      },
      {
        question: "Can I see your portfolio before visiting from Enfield?",
        answer:
          "Yes! Check our gallery page or Instagram @angeltattooz to see our work. We also offer free consultations to discuss your ideas.",
      },
      {
        question: "Do you offer any discounts for Enfield residents?",
        answer:
          "We occasionally run special promotions. Follow us on social media or join our newsletter to stay updated on offers.",
      },
    ],
  },
  {
    name: "Potters Bar",
    slug: "potters-bar",
    distance: "2.5 miles",
    travelTime: "12 minutes",
    description:
      "Angel Tattooz welcomes clients from Potters Bar. Just a short drive or bus ride away, we're your nearby choice for professional tattoo services.",
    nearestStation: "Potters Bar",
    stationLine: "Great Northern",
    landmarks: ["Potters Bar Station", "Darkes Lane", "King George V Playing Fields"],
    transport: {
      train: "Potters Bar Station to Hadley Wood, then bus 298 to Cockfosters",
      bus: "Route 298 from Potters Bar to Cockfosters - 15 minutes",
      car: "12 minute drive via A1000",
      parking: "Free parking at studio",
    },
    localFAQs: [
      {
        question: "How do I get to Angel Tattooz from Potters Bar?",
        answer:
          "You can drive (12 mins via A1000) or take bus 298 from Potters Bar to Cockfosters (15 mins), then walk 3 minutes to our studio.",
      },
      {
        question: "Is Angel Tattooz the nearest tattoo studio to Potters Bar?",
        answer:
          "We're one of the closest professional studios to Potters Bar, offering premium quality work and excellent service.",
      },
      {
        question: "Do you have experience with clients from Potters Bar?",
        answer: "Yes! We serve many satisfied clients from Potters Bar and the surrounding Hertfordshire area.",
      },
      {
        question: "Can I book online if I'm coming from Potters Bar?",
        answer:
          "Yes! Use our online booking system or call us directly. We make it easy for Potters Bar residents to secure appointments.",
      },
      {
        question: "What if I need aftercare advice after returning to Potters Bar?",
        answer:
          "We provide comprehensive aftercare instructions and are always available by phone, WhatsApp, or email if you have questions.",
      },
    ],
  },
  {
    name: "Finchley",
    slug: "finchley",
    distance: "3.5 miles",
    travelTime: "18 minutes",
    description:
      "Angel Tattooz serves tattoo enthusiasts across Finchley (East, Central, and North). We're easily accessible and worth the journey for exceptional tattoo artistry.",
    nearestStation: "East Finchley / Finchley Central",
    stationLine: "Northern Line",
    landmarks: ["East Finchley Station", "Victoria Park", "Finchley Central"],
    transport: {
      tube: "Northern Line to High Barnet, then 5 minute walk",
      bus: "Routes 263, 326 from Finchley to Barnet/Cockfosters",
      car: "18 minute drive via A1000",
      parking: "Free parking available",
    },
    localFAQs: [
      {
        question: "How long does it take to get to Angel Tattooz from Finchley?",
        answer: "About 18 minutes by car or 25 minutes by Northern Line (to High Barnet station) then a 5 minute walk.",
      },
      {
        question: "Do you accept clients from Finchley?",
        answer: "We have a strong client base from East Finchley, Finchley Central, and North Finchley.",
      },
      {
        question: "Why should I choose Angel Tattooz over Finchley studios?",
        answer:
          "Our award-winning artists, premium equipment, tranquil atmosphere, and exceptional reviews set us apart. Many Finchley clients prefer us!",
      },
      {
        question: "Can I combine my tattoo session with aftercare purchases?",
        answer:
          "Yes! We sell recommended aftercare products at the studio so you can start caring for your tattoo immediately.",
      },
      {
        question: "Do you offer group bookings for Finchley clients?",
        answer: "Yes! If you and friends want tattoos, contact us to arrange group consultation and booking slots.",
      },
    ],
  },
  {
    name: "Hertsmere",
    slug: "hertsmere",
    distance: "4 miles",
    travelTime: "20 minutes",
    description:
      "Angel Tattooz proudly serves the Hertsmere borough including Borehamwood, Bushey, and Radlett. We're your trusted North London tattoo destination.",
    nearestStation: "Elstree & Borehamwood",
    stationLine: "Thameslink",
    landmarks: ["Elstree Studios", "Borehamwood Town Centre", "Aldenham Country Park"],
    transport: {
      train: "Thameslink to Potters Bar or Gordon Hill, then bus/taxi",
      bus: "Multiple routes connect via Barnet or Potters Bar",
      car: "20 minute drive via A1/A1000",
      parking: "Free parking at studio",
    },
    localFAQs: [
      {
        question: "Do you serve customers from Hertsmere borough?",
        answer: "Yes! We welcome clients from Borehamwood, Bushey, Potters Bar, Radlett, and all of Hertsmere.",
      },
      {
        question: "How far is Angel Tattooz from Borehamwood?",
        answer: "We're about 4 miles from Borehamwood, approximately 20 minutes by car via the A1/A1000.",
      },
      {
        question: "Is your studio worth visiting from Hertsmere?",
        answer:
          "Definitely! Our clients from Hertsmere appreciate our quality, professionalism, and the personal attention we provide.",
      },
      {
        question: "Can I see examples of work you've done for Hertsmere clients?",
        answer:
          "Check our gallery and Instagram. We've created stunning tattoos for many Hertsmere residents across all styles.",
      },
      {
        question: "Do you offer free consultations for Hertsmere residents?",
        answer: "Yes! All consultations are free, whether you're from Hertsmere, North London, or anywhere else.",
      },
    ],
  },
  {
    name: "Hertfordshire",
    slug: "hertfordshire",
    distance: "Varies",
    travelTime: "20-40 minutes",
    description:
      "Angel Tattooz is North London's premier tattoo studio serving Hertfordshire residents. Easy access from across the county makes us your ideal tattoo destination.",
    nearestStation: "Various",
    stationLine: "Great Northern / Thameslink",
    landmarks: ["Hertfordshire border", "North London gateway"],
    transport: {
      train: "Great Northern and Thameslink services connect Hertfordshire to nearby stations",
      car: "Easy access via A1(M), M25, A1000",
      parking: "Free parking at studio",
    },
    localFAQs: [
      {
        question: "Do you accept clients from across Hertfordshire?",
        answer:
          "Yes! We welcome clients from all over Hertfordshire including St Albans, Watford, Welwyn Garden City, and Stevenage.",
      },
      {
        question: "Is Angel Tattooz convenient for Hertfordshire residents?",
        answer:
          "We're located just over the border in North London with excellent road and rail links from Hertfordshire.",
      },
      {
        question: "Why do Hertfordshire residents choose Angel Tattooz?",
        answer:
          "Our combination of award-winning artists, premium quality, competitive pricing, and convenient location makes us a top choice.",
      },
      {
        question: "Can I book a longer session if traveling from Hertfordshire?",
        answer:
          "We offer full-day sessions for larger pieces. This maximizes your visit if you're traveling from further afield.",
      },
      {
        question: "Do you have a portfolio I can review before traveling?",
        answer: "Yes! Visit our gallery page or Instagram @angeltattooz to see our diverse portfolio of work.",
      },
    ],
  },
]

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug)
}

export function getAllServiceAreaSlugs(): string[] {
  return SERVICE_AREAS.map((area) => area.slug)
}
