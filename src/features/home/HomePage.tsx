import { HeroSection } from "./sections/HeroSection"
import { KeyFeaturesSection } from "./sections/KeyFeaturesSection"
import { AIDomainsSupportSection } from "./sections/AIDomainsSupportSection"
import { HowItWorksSection } from "./sections/HowItWorksSection"
import { UseCasesSection } from "./sections/UseCasesSection"
import { DifferentiationSection } from "./sections/DifferentiationSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyFeaturesSection />
      <AIDomainsSupportSection />
      <HowItWorksSection />
      <UseCasesSection />
      <DifferentiationSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
