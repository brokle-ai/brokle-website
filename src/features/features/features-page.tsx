import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Play,
} from "lucide-react"
import { AiAssistedSection } from "./components/ai-assisted-section"
import { AiDomainsSection } from "./components/ai-domains-section"
import { CollaborationSection } from "./components/collaboration-section"
import { IntegrationsSection } from "./components/integrations-section"
import { QualityControlSection } from "./components/quality-control-section"
import { SecuritySection } from "./components/security-section"
import { FeatureFaq } from "./components/feature-faq"

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Platform Features</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful, AI-Assisted Data Annotation for Every Use Case</h1>
            <p className="text-xl text-muted-foreground">
                Brokle provides cutting-edge features to streamline AI and ML training workflows.
            </p>
          </div>
        </div>
      </section>

      {/* TODO: Add Feature Tabs */}

     <AiAssistedSection />

     <AiDomainsSection />

     <CollaborationSection  />

     <IntegrationsSection />

     <QualityControlSection />

     <SecuritySection />

     <FeatureFaq />


      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Labeling?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of teams already using Brokle to accelerate their AI development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
               Start Free Trail <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Book a Demo <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}