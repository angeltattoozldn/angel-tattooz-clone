import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, Banknote, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Payment Options | Angel Tattooz",
  description: "Secure payment options for your tattoo services. We accept cash, card, and digital payments.",
}

export default function PaymentsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-background">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/.jpg?height=600&width=1920&query=tattoo artist working detailed close up')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">Payment Options</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure and convenient payment methods for your tattoo services
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/30 rounded-lg p-8 border border-border">
                <CreditCard className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl text-primary mb-3">Card Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We accept all major credit and debit cards including Visa, Mastercard, and American Express.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8 border border-border">
                <Banknote className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl text-primary mb-3">Cash</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cash payments are welcome. Please note that we require a deposit to secure your booking.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8 border border-border">
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl text-primary mb-3">Digital Wallets</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We accept contactless payments including Apple Pay, Google Pay, and Samsung Pay.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8 border border-border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl text-primary mb-3">Secure Transactions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All payments are processed securely. We never store your card details.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-secondary/20 rounded-lg p-8 border border-border">
              <h2 className="font-display text-3xl text-primary mb-4">Deposit Policy</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>A non-refundable deposit is required to secure your appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Deposits are deducted from your final tattoo cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Full payment is required on the day of your session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Please contact us at least 48 hours in advance if you need to reschedule</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Have questions about payment or pricing?</p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
