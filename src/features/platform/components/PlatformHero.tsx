import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function PlatformHero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4">Platform</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Future of Data Labeling & AI Training</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Supercharge your machine learning workflow with automated labeling, team collaboration,
            and enterprise-grade security. All in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Labeling Today <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Request a Demo <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
