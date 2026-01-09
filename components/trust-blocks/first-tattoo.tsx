import { Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FirstTattooBlock() {
  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-semibold text-foreground">First Tattoo? We've Got You</h3>
            <p className="text-muted-foreground leading-relaxed">
              Getting your first tattoo is exciting! We specialize in making first-time clients feel comfortable and
              confident throughout the entire process.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Free consultation to discuss your ideas and concerns</li>
              <li>• Detailed explanation of the process before we begin</li>
              <li>• Patient, experienced artists who prioritize your comfort</li>
              <li>• Comprehensive aftercare guidance</li>
            </ul>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/faq">First Tattoo FAQ</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
