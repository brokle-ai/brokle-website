import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Labeling?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of data scientists and ML engineers who are building better models faster with Brokle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started for Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Schedule a Demo <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
