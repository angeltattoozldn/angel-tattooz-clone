import { BUSINESS_CONFIG } from "@/config/business.config"
import { SERVICE_AREAS } from "@/config/service-areas.config"
import { NextResponse } from "next/server"

export async function GET() {
  const brandKnowledge = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_CONFIG.businessName,
    description:
      "Premium tattoo studio in North London specializing in custom tattoo designs, black & gray, color tattoos, cover-ups, and all tattoo styles. Award-winning artists with 15+ years of experience.",

    businessInfo: {
      established: "2010",
      type: "Tattoo Studio",
      specialty: [
        "Custom Tattoo Design",
        "Black & Gray Tattoos",
        "Color Tattoos",
        "Cover-Up Tattoos",
        "Fine Line Work",
      ],
      philosophy:
        "We believe in creating personalized, high-quality tattoos that tell your unique story. Every client receives individual attention and custom artwork tailored to their vision.",
    },

    location: {
      address: BUSINESS_CONFIG.primaryAddress,
      contact: BUSINESS_CONFIG.contact,
      geo: BUSINESS_CONFIG.geo,
      openingHours: BUSINESS_CONFIG.openingHours,
    },

    serviceAreas: SERVICE_AREAS.map((area) => ({
      name: area.name,
      distance: area.distance,
      travelTime: area.travelTime,
      transport: area.transport,
    })),

    services: [
      {
        name: "Custom Tattoo Design",
        description:
          "Bespoke tattoo designs created specifically for you. Our artists work closely with clients to bring their unique vision to life.",
        process: [
          "Free consultation to discuss your ideas",
          "Custom design creation by experienced artist",
          "Design revisions until you're completely satisfied",
          "Professional tattooing session",
          "Comprehensive aftercare support",
        ],
      },
      {
        name: "Black & Gray Tattoos",
        description:
          "Classic black and gray tattoos with incredible depth and shading. Perfect for realism, portraits, and timeless designs.",
      },
      {
        name: "Color Tattoos",
        description:
          "Vibrant color tattoos using premium inks. From watercolor to traditional bold colors, we bring your colorful vision to life.",
      },
      {
        name: "Cover-Up Tattoos",
        description:
          "Expert cover-up services to transform unwanted tattoos into beautiful new artwork. We specialize in creative solutions for challenging cover-ups.",
      },
      {
        name: "Fine Line Tattoos",
        description:
          "Delicate fine line work for minimalist and detailed designs. Perfect for subtle, elegant tattoos.",
      },
    ],

    standards: {
      hygiene: [
        "Single-use, sterile needles for every client",
        "Autoclave sterilization of all reusable equipment",
        "Premium quality inks from trusted suppliers",
        "Clean, sanitized studio environment maintained to highest standards",
        "Fully licensed and insured professional artists",
      ],
      quality: [
        "15+ years of professional tattooing experience",
        "Award-winning artists specializing in multiple styles",
        "Custom artwork for every client",
        "Premium equipment and inks",
        "Free touch-ups within first year",
      ],
    },

    pricing: {
      approach: "Transparent pricing based on size, complexity, and time required",
      consultations: "Free consultations with detailed quotes provided",
      deposits: "Deposit required to secure appointment",
      touchUps: "Free touch-ups within first year for work done at our studio",
    },

    clientExperience: {
      firstTimeClients:
        "We specialize in making first-time clients comfortable. Detailed explanations, patient artists, and comprehensive guidance throughout the process.",
      consultation:
        "Free consultations where we discuss your vision, provide professional advice, and create a custom plan for your tattoo.",
      aftercare:
        "Comprehensive aftercare instructions, recommended products, and ongoing support via phone, WhatsApp, or email.",
    },

    commonQuestions: {
      "Does it hurt?":
        "Pain levels vary by individual and placement. Most describe it as scratching or burning. Areas with more flesh are less painful than bony areas.",
      "How much does it cost?":
        "Pricing depends on size, complexity, and time. Small simple tattoos start around £80-150. Larger custom pieces are £100-150 per hour. Free consultation provides detailed quote.",
      "How long does it take to heal?": "Surface healing takes 2-3 weeks, complete healing 3-4 months.",
      "Can I bring my own design?": "Yes! We work with your reference images to create the perfect custom tattoo.",
    },

    voiceSearchOptimized: {
      "tattoo studio near me": `Angel Tattooz is located in ${BUSINESS_CONFIG.primaryAddress.area}, serving ${SERVICE_AREAS.slice(
        0,
        4,
      )
        .map((a) => a.name)
        .join(", ")} and North London.`,
      "best tattoo artist North London":
        "Angel Tattooz features award-winning artists with 15+ years experience specializing in custom designs, realism, traditional, and all tattoo styles.",
      "how much does a tattoo cost":
        "Tattoo pricing starts around £80-150 for small simple designs. Larger custom pieces are £100-150 per hour. Free consultation provides exact quote.",
      "tattoo studio open weekends": `Angel Tattooz is open ${BUSINESS_CONFIG.openingHours.saturday} on Saturdays and ${BUSINESS_CONFIG.openingHours.sunday} on Sundays.`,
    },

    metadata: {
      lastUpdated: new Date().toISOString(),
      version: "1.0",
      language: "en-GB",
      region: "North London, UK",
    },
  }

  return NextResponse.json(brandKnowledge, {
    headers: {
      "Content-Type": "application/ld+json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
