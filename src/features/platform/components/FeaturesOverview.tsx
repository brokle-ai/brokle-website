import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Brain, Users, Shield } from "lucide-react"

export function FeaturesOverview() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4">Why Brokle?</Badge>
          <h2 className="text-3xl font-bold mb-4">Creating Better Training Data at Scale</h2>
          <p className="text-xl text-muted-foreground">
            Brokle removes the bottlenecks in your AI training workflow with advanced automation,
            intuitive collaboration tools, and enterprise-ready infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" /> AI-Powered Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our AI-assisted labeling reduces annotation time by up to 80%. Pre-label your data
                automatically and focus human effort on validation and edge cases.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> Team Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Multiple annotators, reviewers, and project managers can work simultaneously with
                role-based permissions, quality control, and performance metrics.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" /> Enterprise-Grade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Built for scale with SOC 2 compliance, RBAC, audit logs, and integration with your
                existing infrastructure. Deploy in your own cloud environment if needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
