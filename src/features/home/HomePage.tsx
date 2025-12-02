import { HeroSection } from "./sections/HeroSection"
import { LogoBarSection } from "./sections/LogoBarSection"
import { StatsSection } from "./sections/StatsSection"
import { ResearchSection } from "./sections/ResearchSection"
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"
import { UseCasesSection } from "./sections/UseCasesSection"
import { IntegrationsSection } from "./sections/IntegrationsSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Asymmetric layout with IsometricIllustration */}
      <HeroSection />

      {/* 2. Logo Bar - Marquee animation with company logos */}
      <LogoBarSection />

      {/* 3. Stats Bar - Traction metrics */}
      <StatsSection />

      {/* 4. Research/Innovation - Engineering pillars */}
      <ResearchSection />

      {/* 5. Platform Overview - Cloud vs Self-hosted */}
      <PlatformOverviewSection />

      {/* 6. Features with Interactive Tabs - Code examples + UI previews */}
      <FeatureTabsSection />

      {/* 7. Use Cases Grid - Target audiences */}
      <UseCasesSection />

      {/* 8. Integrations - Provider logos and SDKs */}
      <IntegrationsSection />

      {/* 9. Testimonials - Social proof quotes */}
      <TestimonialsSection />

      {/* 10. Final CTA */}
      <FinalCTASection />
    </>
  )
}
