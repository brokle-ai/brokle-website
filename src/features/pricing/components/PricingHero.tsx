import { Badge } from "@/components/ui/badge"
import { DisplayHeading } from "@/components/shared"
import { TrustBadges } from "@/components/shared"

export default function PricingHero() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pricing
          </Badge>
          <DisplayHeading as="h1" className="mb-6">
            Simple, usage-based pricing
          </DisplayHeading>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no per-seat pricing.
            Pay only for the traces you use.
          </p>
          <TrustBadges variant="compact" className="mt-8" />
        </div>
      </div>
    </section>
  )
}
