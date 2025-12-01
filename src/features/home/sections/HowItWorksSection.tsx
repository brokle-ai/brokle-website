import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play } from "lucide-react"
import Link from "next/link"

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Streamlined Workflow</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How Brokle Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From data import to model training, Brokle makes the entire process fast and simple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-background rounded-xl p-8 border shadow-sm h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Upload Data</h3>
                <p className="text-muted-foreground mb-4">
                  Import your data from cloud storage, local files, or connect directly to your data pipeline.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Multiple data sources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Automatic preprocessing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Batch importing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
              <ArrowRight className="h-8 w-8 text-primary/50" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-background rounded-xl p-8 border shadow-sm h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Annotate</h3>
                <p className="text-muted-foreground mb-4">
                  Label your data with AI assistance, collaboration tools, and specialized annotation interfaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>AI-assisted labeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Quality assurance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
              <ArrowRight className="h-8 w-8 text-primary/50" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-background rounded-xl p-8 border shadow-sm h-full">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Export & Train</h3>
                <p className="text-muted-foreground mb-4">
                  Export your labeled data in various formats or connect directly to your ML training pipeline.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Multiple export formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>ML framework integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Continuous training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            <Link href="/platform" className="flex items-center gap-2">
              See How It Works <Play className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
