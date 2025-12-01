import { HeroSection } from "./sections/HeroSection"
import { SocialProofSection } from "./sections/SocialProofSection"
import { KeyFeaturesSection } from "./sections/KeyFeaturesSection"
import { IntegrationsSection } from "./sections/IntegrationsSection"
import { CodeExampleSection } from "./sections/CodeExampleSection"
import { OpenSourceSection } from "./sections/OpenSourceSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <KeyFeaturesSection />
      <IntegrationsSection />
      <CodeExampleSection />
      <OpenSourceSection />
      <FinalCTASection />
    </>
  )
}
