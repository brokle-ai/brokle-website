'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import { BackgroundPattern } from "@/components/custom/hero/background-pattern"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <BackgroundPattern />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Next-Generation Data Labeling
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Powerful Data Annotation, Reimagined.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accelerate your AI development with real-time collaboration, advanced ML integrations, and streamlined project management — all in one powerful annotation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Labeling Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Book a Demo <Play className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            No credit card required • Free plan available • Set up in minutes
          </div>
        </div>
      </div>
    </section>
  )
}
