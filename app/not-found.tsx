import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Compass, Calendar, Home } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh] flex items-center justify-center bg-black text-white px-4 py-20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
          <span className="font-hey text-6xl md:text-8xl text-red-500 font-bold tracking-wider">
            404
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Lost Your Way?
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            The page you are looking for doesn't exist or has moved. Explore our custom tattoo services or head back to the studio homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full sm:w-auto border-neutral-700 hover:bg-neutral-800 text-white px-6 py-2.5">
              <Link href="/services">
                <Compass className="mr-2 h-4 w-4" />
                Our Services
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full sm:w-auto border-neutral-700 hover:bg-neutral-800 text-white px-6 py-2.5">
              <Link href="/bookings">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
