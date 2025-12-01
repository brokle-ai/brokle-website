'use client'

import { CareersHero } from "./components/CareersHero"
import { BenefitsSection } from "./components/BenefitsSection"
import { OpenPositions } from "./components/OpenPositions"
import { CultureSection } from "./components/CultureSection"
import { TestimonialsSection } from "./components/TestimonialsSection"

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <BenefitsSection />
      <OpenPositions />
      <CultureSection />
      <TestimonialsSection />
    </>
  )
}
