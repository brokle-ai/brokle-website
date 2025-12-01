import { HeroSection } from "./sections/HeroSection"
import { LogoBarSection } from "./sections/LogoBarSection"
import { ResearchSection } from "./sections/ResearchSection"
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"
import { IntegrationsSection } from "./sections/IntegrationsSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Asymmetric layout with serif headline */}
      <HeroSection />

      {/* 2. Logo Bar - Enterprise trust signals */}
      <LogoBarSection />

      {/* 3. Research/Innovation - Warm gradient background */}
      <ResearchSection />

      {/* 4. Platform Overview - Two-column split */}
      <PlatformOverviewSection />

      {/* 5. Features with Interactive Tabs */}
      <FeatureTabsSection />

      {/* 6. Integrations - Logo cloud */}
      <IntegrationsSection />

      {/* 7. Final CTA */}
      <FinalCTASection />
    </>
  )
}
