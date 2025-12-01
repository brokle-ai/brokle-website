'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Star } from "lucide-react"
import { BackgroundPattern } from "@/components/custom/hero/background-pattern"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <BackgroundPattern />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-primary/20">
            Open Source LLM Observability
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Debug and improve your{" "}
            <span className="text-primary">LLM applications</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Traces, evals, prompt management, and metrics to build reliable AI products.
            Open source, OpenTelemetry-native, enterprise-ready.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2 h-12 px-6" asChild>
              <Link href="https://app.brokle.ai/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-6" asChild>
              <Link href="https://docs.brokle.ai" target="_blank" rel="noopener noreferrer">
                View Documentation
              </Link>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>No credit card required</span>
            <span className="hidden sm:inline">•</span>
            <span>Self-host available</span>
            <span className="hidden sm:inline">•</span>
            <span>SOC 2 compliant</span>
          </div>

          {/* GitHub Stars */}
          <div className="mt-8">
            <Link
              href="https://github.com/brokle-ai/brokle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-sm"
            >
              <Github className="h-4 w-4" />
              <span>Star us on GitHub</span>
              <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                <Star className="h-3 w-3 mr-0.5 fill-current" />
                1.2k
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
