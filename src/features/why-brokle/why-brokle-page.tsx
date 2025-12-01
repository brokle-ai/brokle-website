import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Briefcase, CheckCircle, Database, Fingerprint, Layers, Lightbulb, Rocket, Shield, Users } from "lucide-react"

export default function WhyBroklePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Brokle?</h1>
            <p className="text-xl text-muted-foreground">
              The next-generation AI-powered data labeling platform designed for teams that demand accuracy, 
              speed, and scalability in their machine learning workflows.
            </p>
          </div>

          {/* Key Benefits Overview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>10x Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Accelerate your labeling workflows with AI-assisted automation and intuitive interfaces designed for speed.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Any Data Type</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Label images, text, audio, video, time-series data and more within a single unified platform.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Built for teams of all sizes with powerful collaboration tools, role-based access, and real-time updates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced AI Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">AI-Powered</Badge>
                <h2 className="text-3xl font-bold mb-6">Advanced ML-Assisted Labeling</h2>
                <p className="text-lg mb-6">
                  Brokle transforms data labeling with intelligent automation that learns from your team&apos;s work, becoming more accurate over time.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Active Learning</span>
                      <p className="text-muted-foreground">Prioritize the most valuable data points for manual review while automating the rest.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Pre-labeling</span>
                      <p className="text-muted-foreground">Start with AI-generated annotations that your team can quickly verify and refine.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Transfer Learning</span>
                      <p className="text-muted-foreground">Apply knowledge from one dataset to another, dramatically reducing labeling time.</p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-8 gap-2">
                  See AI Features <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-background rounded-lg p-8 shadow-lg border">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <Lightbulb className="h-24 w-24 text-primary/20" />
                  {/* This would be an image or animation in production */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Versatility</Badge>
            <h2 className="text-3xl font-bold mb-4">One Platform for All Data Types</h2>
            <p className="text-xl text-muted-foreground">
              No more juggling between specialized tools. Brokle handles all your annotation needs in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  Image Annotation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bounding boxes, polygons, segmentation masks, keypoints, and more for computer vision tasks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  Text Classification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Entity recognition, sentiment analysis, document classification, and relationship annotation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  Audio Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transcription, speaker identification, sound classification, and audio event detection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  Video Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Object tracking, scene segmentation, activity recognition, and temporal annotations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  Time-Series Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Anomaly detection, pattern recognition, and event labeling for sensor and machine data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  Custom Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Easily configure custom labeling interfaces for specialized data types and unique annotation needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Enterprise-Ready</Badge>
            <h2 className="text-3xl font-bold mb-4">Built for Scale and Security</h2>
            <p className="text-xl text-muted-foreground">
              Powerful features that make Brokle the preferred choice for enterprise teams and mission-critical projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade security with SSO, RBAC, audit logs, and data encryption.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">SAML & OIDC support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Granular permissions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Compliance certifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive tools for organizing teams, managing workflows, and tracking progress.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Role-based access control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Workflow automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Quality assurance tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rich dashboards and reporting tools to monitor progress and optimize performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Performance metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Quality assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Dataset insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>ML Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Seamlessly integrate with your existing ML tools, platforms, and workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Cloud storage connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">ML framework support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">CI/CD pipeline integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Source Foundation Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-background rounded-lg p-8 shadow-lg border">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <Fingerprint className="h-24 w-24 text-primary/20" />
                  {/* This would be an image or animation in production */}
                </div>
              </div>
              <div>
                <Badge className="mb-4">Best of Both Worlds</Badge>
                <h2 className="text-3xl font-bold mb-6">Built on a Robust Foundation</h2>
                <p className="text-lg mb-6">
                  Brokle enhances and extends a proven open-source framework with enterprise-grade features, giving you the security of open standards with the power of commercial support.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Community-Tested Core</span>
                      <p className="text-muted-foreground">Benefit from a foundation that&apos;s been battle-tested by thousands of organizations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Enhanced Capabilities</span>
                      <p className="text-muted-foreground">We&apos;ve extended the core with powerful features for enterprise teams and advanced use cases.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">No Vendor Lock-in</span>
                      <p className="text-muted-foreground">Your data remains portable with open formats and standards-based architecture.</p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-8 gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Trusted By Teams</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of ML teams already transforming their annotation workflows with Brokle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-6">
                  &quot;Brokle reduced our annotation time by 75% while improving accuracy. The AI-assisted labeling is a game-changer for our computer vision projects.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Jane Davies</p>
                    <p className="text-sm text-muted-foreground">AI Research Lead, TechVision Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="mb-6">
                  &quot;The enterprise features made all the difference for our team. We can now collaborate across departments while maintaining strict access controls.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, DataStream Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="mb-6">
                  &quot;Being able to handle all our data types in one platform has streamlined our entire ML pipeline. Brokle is now central to our annotation strategy.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">SP</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Park</p>
                    <p className="text-sm text-muted-foreground">ML Operations Manager, HealthAI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Labeling?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the leading teams already using Brokle to build better datasets faster and accelerate their machine learning pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}