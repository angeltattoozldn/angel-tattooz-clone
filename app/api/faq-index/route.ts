import { NextResponse } from "next/server"
import { BUSINESS_CONFIG } from "@/config/business.config"

export async function GET() {
  const faqs = {
    categories: [
      {
        category: "General",
        questions: [
          {
            id: "does-it-hurt",
            question: "Does getting a tattoo hurt?",
            answer:
              "Pain levels vary by individual and placement. Most describe it as scratching or burning sensation. Areas with more flesh (like upper arms or thighs) are generally less painful than bony areas (like ribs or ankles). Our experienced artists work to make you as comfortable as possible.",
            keywords: ["pain", "hurt", "uncomfortable"],
          },
          {
            id: "how-much-cost",
            question: "How much does a tattoo cost?",
            answer:
              "Pricing depends on size, complexity, and time required. Small simple tattoos typically start around £80-150. Larger custom pieces are priced at £100-150 per hour. We provide detailed quotes during your free consultation.",
            keywords: ["price", "cost", "expensive", "cheap"],
          },
          {
            id: "how-long",
            question: "How long does a tattoo take?",
            answer:
              "Small simple designs can take 1-2 hours. Medium pieces typically take 3-5 hours. Large detailed work may require multiple sessions. We'll provide a time estimate during your consultation.",
            keywords: ["duration", "time", "session"],
          },
        ],
      },
      {
        category: "Booking",
        questions: [
          {
            id: "how-to-book",
            question: "How do I book an appointment?",
            answer:
              `Contact us via phone (${BUSINESS_CONFIG.contact.phoneDisplay}), WhatsApp, or our online booking form. We'll schedule a free consultation to discuss your design and book your tattoo session.`,
            keywords: ["appointment", "booking", "schedule"],
          },
          {
            id: "deposit-required",
            question: "Do I need to pay a deposit?",
            answer:
              "Yes, a non-refundable deposit is required to secure your appointment. The deposit is deducted from your final tattoo cost. This ensures commitment from both parties.",
            keywords: ["deposit", "payment", "upfront"],
          },
        ],
      },
      {
        category: "Aftercare",
        questions: [
          {
            id: "healing-time",
            question: "How long does a tattoo take to heal?",
            answer:
              "Surface healing takes 2-3 weeks. Complete healing of all skin layers takes 3-4 months. Follow our detailed aftercare instructions for best results.",
            keywords: ["heal", "healing", "recovery"],
          },
          {
            id: "aftercare-instructions",
            question: "What aftercare do I need?",
            answer:
              "Keep it clean and moisturized, avoid sun exposure, don't scratch or pick, avoid swimming for 2-3 weeks. We provide comprehensive aftercare instructions and product recommendations.",
            keywords: ["care", "maintenance", "healing"],
          },
        ],
      },
      {
        category: "Design",
        questions: [
          {
            id: "bring-own-design",
            question: "Can I bring my own design?",
            answer:
              "Bring reference images, sketches, or ideas. Our artists will work with you to refine and create the perfect custom tattoo based on your vision.",
            keywords: ["custom", "own design", "reference"],
          },
          {
            id: "cover-up-possible",
            question: "Can you cover up my old tattoo?",
            answer:
              "Yes, we specialize in cover-ups. During consultation, we'll assess your existing tattoo and create a design that effectively covers it while creating beautiful new artwork.",
            keywords: ["cover-up", "hide", "old tattoo"],
          },
        ],
      },
    ],
    metadata: {
      totalQuestions: 11,
      lastUpdated: new Date().toISOString(),
      version: "1.0",
    },
  }

  return NextResponse.json(faqs, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
