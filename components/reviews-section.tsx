"use client"

import { Star, ExternalLink, MessageSquarePlus } from "lucide-react"
import { BUSINESS_CONFIG } from "@/config/business.config"

interface ReviewItem {
  name: string
  rating: number
  date: string
  tag: string
  comment: string
}

const REVIEWS: ReviewItem[] = [
  {
    name: "Lisa Edwards",
    rating: 5,
    date: "Verified Google Review",
    tag: "Custom Design",
    comment:
      "Absolutely in love with my new piece! The whole experience was incredibly comfortable. Angel Tattooz definitely lives up to the 'Ready To Get Inked' motto! The artist listened to every detail of what I wanted.",
  },
  {
    name: "David Lee",
    rating: 5,
    date: "Verified Google Review",
    tag: "Fine Line & Realism",
    comment:
      "I'd been wanting a tattoo for years but was nervous to find the right artist. From the moment I walked into Angel Tattooz, I knew I was in good hands. The fine line detail and precision is phenomenal.",
  },
  {
    name: "Sarah Jenkins",
    rating: 5,
    date: "Verified Google Review",
    tag: "Custom Sleeve",
    comment:
      "Had a large custom piece done and the artistry blew me away. Super clean studio, calming atmosphere, and genuinely welcoming artists. Couldn't recommend them highly enough to anyone in London!",
  },
  {
    name: "Michael Roberts",
    rating: 5,
    date: "Verified Google Review",
    tag: "Cover-Up Tattoo",
    comment:
      "Transformed an old tattoo into an absolute masterpiece. The consultation was thorough and the execution was flawless. Hands down the best tattoo studio in North London.",
  },
]

function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  )
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "text-[#FBBC05] fill-[#FBBC05]"
              : "text-zinc-600 fill-zinc-600"
          }`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { googleRating, reviewCount, googleReviewUrl } = BUSINESS_CONFIG.reviews

  return (
    <section className="relative bg-[#121212] py-20 px-4 border-t border-white/5" id="reviews">
      <div className="container mx-auto max-w-285">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <GoogleGIcon className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              Google Reviews
            </span>
          </div>

          <h2 className="text-[#FAD5E6] font-hey text-[45px] md:text-[65px] leading-none font-normal mb-4">
            Ink-Credible Stories
          </h2>

          {/* Rating Summary Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-zinc-300">
            <span className="font-bold text-white text-lg">{googleRating.toFixed(1)}</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#FBBC05] fill-[#FBBC05]" />
              ))}
            </div>
            <span className="text-zinc-400">·</span>
            <span className="text-zinc-300 font-medium">Over {reviewCount}+ Five-Star Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#D4C59D]/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/50"
            >
              <div>
                {/* Header with stars & badge */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating count={review.rating} />
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#FAD5E6]/10 text-[#FAD5E6] border border-[#FAD5E6]/20">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-zinc-200 font-sans text-[15px] md:text-[16px] font-normal leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4C59D]/20 text-[#D4C59D] font-bold flex items-center justify-center text-sm border border-[#D4C59D]/30">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base leading-tight">
                      {review.name}
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                      <GoogleGIcon className="w-3.5 h-3.5" />
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons: View on Google & Leave a Review */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4C59D] text-zinc-950 font-semibold text-[15px] py-3.5 px-8 rounded-[3px] tracking-wide transition-all duration-300 hover:bg-white hover:text-black shadow-md"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Write a Google Review
          </a>

          <a
            href={BUSINESS_CONFIG.reviews.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#FAD5E6] border border-[#FAD5E6]/40 font-semibold text-[15px] py-3.5 px-8 rounded-[3px] tracking-wide transition-all duration-300 hover:bg-[#FAD5E6]/10 hover:border-[#FAD5E6]"
          >
            <ExternalLink className="w-4 h-4" />
            Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  )
}
