import PricingHero from "./components/PricingHero"
import PricingCards from "./components/PricingCards"
import ComparisonTable from "./components/ComparisonTable"
import PricingFAQ from "./components/PricingFAQ"
import { CTASection } from "@/components/shared"

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <PricingFAQ />
      <CTASection
        title="Ready to get started?"
        description="Start with the free Hobby plan and upgrade as you grow. No credit card required."
        primaryCTA={{
          label: "Get Started Free",
          href: "https://app.brokle.ai/signup",
        }}
        secondaryCTA={{
          label: "Talk to Sales",
          href: "/contact",
        }}
        features={["No credit card required", "14-day free trial", "Self-hosting available"]}
        variant="muted"
      />
    </>
  )
}
