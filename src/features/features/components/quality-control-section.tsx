import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Settings, Users } from "lucide-react"
import Image from "next/image"

export function QualityControlSection() {
  return (
    <section id="quality" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Badge className="mb-4">Quality Assurance</Badge>
            <h2 className="text-3xl font-bold mb-6">Advanced Review & Quality Control</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ensure high-quality annotations with comprehensive review workflows and quality metrics.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Human-in-the-loop Workflows</h3>
                  <p className="text-muted-foreground">
                    Create multi-stage review processes with specialized reviewer roles and approval gates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Consensus Scoring</h3>
                  <p className="text-muted-foreground">
                    Compare annotations from multiple annotators to identify disagreements and establish ground truth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Quality Metrics</h3>
                  <p className="text-muted-foreground">
                    Track annotator performance with detailed metrics on accuracy, consistency, and speed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">AI-Assisted QA</h3>
                  <p className="text-muted-foreground">
                    Use machine learning to identify potential errors and inconsistencies in annotations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border bg-background shadow-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Quality Control Dashboard"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

