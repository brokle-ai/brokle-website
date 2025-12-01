import { PlatformHero } from "./components/PlatformHero"
import { FeaturesOverview } from "./components/FeaturesOverview"
import { DetailedFeatures } from "./components/DetailedFeatures"
import { IntegrationsSection } from "./components/IntegrationsSection"
import { TestimonialsSection } from "./components/TestimonialsSection"

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <FeaturesOverview />
      <DetailedFeatures />
      <IntegrationsSection />
      <TestimonialsSection />
    </>
  )
}
