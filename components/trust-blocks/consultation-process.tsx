import { MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ConsultationProcessBlock() {
  const steps = [
    {
      title: "Book Your Consultation",
      description: "Schedule online, by phone, or via WhatsApp",
    },
    {
      title: "Discuss Your Vision",
      description: "Share your ideas, inspirations, and placement preferences",
    },
    {
      title: "Get Expert Guidance",
      description: "Our artists provide professional advice on design, size, and placement",
    },
    {
      title: "Receive Your Quote",
      description: "Transparent pricing with no hidden fees",
    },
    {
      title: "Schedule Your Session",
      description: "Book your tattoo appointment at a time that suits you",
    },
  ]

  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Our Consultation Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe in collaboration. Here's how we transform your vision into reality.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
