import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to ship reliable AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers using Brokle to debug, evaluate,
            and improve their LLM applications. Start for free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2 h-12 px-8" asChild>
              <Link href="https://app.brokle.ai/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8" asChild>
              <Link
                href="https://github.com/brokle-ai/brokle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Free tier available</span>
            <span className="hidden sm:inline">•</span>
            <span>Self-host option</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  )
}
