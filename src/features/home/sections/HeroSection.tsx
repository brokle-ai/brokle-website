import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DisplayHeading, IsometricIllustration } from "@/components/shared"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Asymmetric Layout: Text (60%) left, Illustration (40%) right */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Large Serif Headline */}
            <DisplayHeading as="h1" className="mb-6 leading-[1.1]">
              The observability platform for{" "}
              <span className="text-foreground/80">AI teams</span>
            </DisplayHeading>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Debug, evaluate, and optimize your LLM applications with complete visibility.
              Open source, OpenTelemetry-native, enterprise-ready.
            </p>

            {/* CTAs - Simple, Clean */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="gap-2 h-13 px-8 text-base" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-13 px-8 text-base" asChild>
                <Link href="https://docs.brokle.ai" target="_blank" rel="noopener noreferrer">
                  Take a Tour
                </Link>
              </Button>
            </div>

            {/* Trust Line - Subtle */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>No credit card required</span>
              <span className="text-border">|</span>
              <span>Self-host available</span>
              <span className="text-border">|</span>
              <span>SOC 2 compliant</span>
            </div>
          </div>

          {/* Right Column - Isometric Illustration */}
          <div className="hidden lg:block relative">
            <IsometricIllustration className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
