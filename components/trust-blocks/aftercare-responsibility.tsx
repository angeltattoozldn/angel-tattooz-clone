import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AftercareResponsibilityBlock() {
  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-semibold text-foreground">Aftercare & Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your tattoo journey doesn't end when you leave the studio. We provide comprehensive aftercare support to
              ensure your tattoo heals beautifully.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Detailed written aftercare instructions</li>
              <li>• Recommended aftercare products available in-studio</li>
              <li>• Ongoing support via phone, WhatsApp, or email</li>
              <li>• Free touch-ups within the first year</li>
              <li>• Healing check-in after 2 weeks</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/aftercare">Aftercare Guide</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/aftercare/healing-timeline">Healing Timeline</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
