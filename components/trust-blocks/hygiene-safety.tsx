import { Shield, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function HygieneSafetyBlock() {
  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-semibold text-foreground">Hygiene & Safety First</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your safety is our top priority. We follow strict hygiene protocols and use only the highest quality,
              sterile equipment.
            </p>
            <ul className="space-y-2">
              {[
                "Single-use, sterile needles for every client",
                "Autoclave sterilization of all reusable equipment",
                "Premium quality inks from trusted suppliers",
                "Clean, sanitized studio environment",
                "Fully licensed and insured artists",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
