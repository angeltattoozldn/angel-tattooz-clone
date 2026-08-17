import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CoverUpTattoosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-20 text-white">
        <h1 className="text-4xl font-bold mb-8">Cover Up Tattoos</h1>
        <div className="prose prose-invert max-w-none">
          <p>Service content goes here.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
