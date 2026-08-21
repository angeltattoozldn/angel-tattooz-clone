import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Aftercare | Angel Tattooz",
  description: "Proper aftercare is crucial for ensuring the best healing and longevity of your tattoo.",
}

export default function AftercarePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#121212] text-zinc-100 pb-20">
        {/* Full-Width Hero Section */}
        <section className="relative w-full h-[40vh] min-h-75 flex items-center justify-center border-b border-zinc-800/60 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Angel Tattooz Aftercare"
              className="object-cover"
              fill
              priority
              src="/images/home/Angle-Tattooz-Website-Hero-Image.webp"
            />
            <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-[#121212] via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 pt-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hey text-[#FAD5E6] tracking-wide leading-tight max-w-5xl mx-auto drop-shadow-lg">
              Aftercare
            </h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12">
          
          <div className="text-center mb-16 text-zinc-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            <p>
              Congratulations on your new tattoo! Proper aftercare is crucial for ensuring the best healing and longevity of your tattoo. Please carefully read and follow these instructions:
            </p>
          </div>

          <div className="space-y-12 text-zinc-300 text-sm md:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="font-display text-[45px] font-normal text-[#FAD5E6] mb-6">Got Inked?</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Leave the Film on your tattoo for 2-4 hours after the tattooing process.</li>
                <li>After removing the film, very gently wash your tattoo with mild soap and lukewarm water. Pat dry with a clean paper towel.</li>
                <li>Apply a thin layer of fragrance-free, antibacterial ointment to your tattoo. Use a product recommended by your tattoo artist.</li>
                <li>Repeat this process 2-3 times a day for the first 3 days.</li>
              </ol>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-[45px] font-normal text-[#FAD5E6] mb-6">General Aftercare:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Keep your tattoo clean and dry. Avoid soaking it in water including swimming pools, hot tubs, and baths, for at least 2 weeks.</li>
                <li>Avoid exposing your tattoo to direct sunlight or tanning beds during the healing process. Wear loose clothing to prevent irritation.</li>
                <li>Do not scratch or pick at your tattoo, as this can cause scarring and affect the healing process.</li>
                <li>Avoid applying lotions, creams, or oils that contain fragrances, alcohol, or harsh chemicals to your tattoo.</li>
                <li>If your tattoo becomes red, swollen, or develops excessive drainage, consult a healthcare professional immediately.</li>
              </ol>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-[45px] font-normal text-[#FAD5E6] mb-6">Long-Term Care:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Keep your tattoo moisturized with a gentle, fragrance-free lotion after it has fully healed.</li>
                <li>Apply sunscreen with a high SPF to your tattoo whenever it will be exposed to the sun to prevent fading and damage.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-[45px] font-normal text-[#FAD5E6] mb-6">Important Notes:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Healing times vary depending on the size, location, and complexity of your tattoo. It may take 2-4 weeks for your tattoo to fully heal.</li>
                <li>Avoid submerging your tattoo in water until it has completely healed to prevent infections.</li>
                <li>If you have any concerns or questions about your tattoo&apos;s healing process, don&apos;t hesitate to contact your tattoo artist or seek medical advice.</li>
                <li>Keep away from all animals until the tattoo is fully healed.</li>
              </ol>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-[45px] font-normal text-[#FAD5E6] mb-6">Remember:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Your tattoo is a work of art, and proper aftercare is essential for preserving its beauty and vibrancy.</li>
                <li>Follow these aftercare instructions diligently to ensure the best results and minimize the risk of complications.</li>
              </ol>
              <p className="mt-6 italic">For any questions or concerns, please contact us.</p>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
