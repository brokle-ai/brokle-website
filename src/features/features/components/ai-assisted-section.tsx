import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Settings, Zap } from "lucide-react"
import Image from "next/image"

export function AiAssistedSection() {
  return (
    <section id="ai-assisted" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Badge className="mb-4">AI-Powered</Badge>
            <h2 className="text-3xl font-bold mb-6">AI-Assisted Labeling</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Leverage machine learning to automate and accelerate your annotation workflow with intelligent assistance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Pre-labeling</h3>
                  <p className="text-muted-foreground">
                    Automatically generate initial labels using pre-trained models to reduce manual work by up to 80%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Auto-labeling</h3>
                  <p className="text-muted-foreground">
                    Automatically label routine data while routing edge cases to human annotators for review.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Active Learning</h3>
                  <p className="text-muted-foreground">
                    Intelligently prioritize the most informative samples to maximize the value of human annotation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-4">
                <BarChart3 className="h-10 w-10 text-primary" />
                <div>
                  <h4 className="font-semibold text-lg">Efficiency Metrics</h4>
                  <p className="text-muted-foreground">
                    Our AI assistance typically reduces annotation time by 65-80% while maintaining or improving
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border bg-background shadow-lg overflow-hidden">
            <Image src="/placeholder.svg?height=500&width=600" alt="AI-Assisted Labeling" width={600} height={500} className="w-full h-auto" />
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <span className="font-medium">80% faster labeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

