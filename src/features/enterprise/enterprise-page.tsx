import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Database, 
  Cloud, 
  Shield, 
  FileText,
  Play,
  Code,
  Zap,
  BarChart3,
  MessageSquare,
  Mic,
  Settings,
  Brain,
  Server,
  Headset,
  Lock,
  Image
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function EnterprisePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Enterprise Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise-Grade AI Labeling at Scale</h1>
            <p className="text-xl text-muted-foreground">
              Secure, scalable, and built for teams working on AI, ML, and large-scale data annotation projects.
            </p>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground font-medium">Trusted by leading enterprises worldwide</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Enterprise logos - using placeholders */}
            <div className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src="/placeholder.svg?height=40&width=120" alt="Enterprise 1" className="h-full" />
            </div>
            <div className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src="/placeholder.svg?height=40&width=120" alt="Enterprise 2" className="h-full" />
            </div>
            <div className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src="/placeholder.svg?height=40&width=120" alt="Enterprise 3" className="h-full" />
            </div>
            <div className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src="/placeholder.svg?height=40&width=120" alt="Enterprise 4" className="h-full" />
            </div>
            <div className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src="/placeholder.svg?height=40&width=120" alt="Enterprise 5" className="h-full" />
            </div>
          </div>
        </div>
      </section>


      {/* Why Enterprises Choose Brokle */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Enterprises Choose Brokle</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful enterprise features designed for scale, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Brain className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Assisted Labeling at Scale</h3>
                <p className="text-muted-foreground mb-4">
                  Accelerate annotation with intelligent pre-labeling and auto-labeling that scales with your data
                  volume.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Reduce manual labeling by up to 80%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Custom model integration for domain-specific tasks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Server className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Deployment Options</h3>
                <p className="text-muted-foreground mb-4">
                  Choose between cloud, private cloud, or on-premises deployment to meet your security requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Air-gapped environments for sensitive data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>VPC and private network support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Shield className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground mb-4">
                  Protect sensitive data with comprehensive security controls and compliance features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Detailed audit logging and compliance reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Enable seamless collaboration across large teams with specialized roles and workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Multi-team workspaces with custom permissions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Advanced review and QA workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4">Security & Compliance</Badge>
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Brokle is built with security at its core, providing the controls and compliance features that
                enterprises require.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">End-to-End Encryption</h3>
                    <p className="text-muted-foreground">
                      Data encrypted in transit and at rest with industry-standard protocols to protect your sensitive
                      information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Compliance Ready</h3>
                    <p className="text-muted-foreground">
                      GDPR, HIPAA, and SOC 2 compliance with comprehensive documentation and controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Advanced Authentication</h3>
                    <p className="text-muted-foreground">
                      Single Sign-On (SSO), Multi-Factor Authentication (MFA), and detailed audit logging for security
                      oversight.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 gap-2">
                <Link href="#" className="flex items-center gap-2">
                  Security Whitepaper <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">SOC 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="SOC 2 Certification"
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">GDPR</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="GDPR Compliance"
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">HIPAA</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="HIPAA Compliance"
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">ISO 27001</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="ISO 27001 Certification"
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scalability & Performance */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="relative rounded-xl border bg-background shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Scalability Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-medium">Millions of annotations per day</span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Badge className="mb-4">Performance</Badge>
              <h2 className="text-3xl font-bold mb-6">Scalability & Performance</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Handle massive datasets with ease using our high-performance infrastructure designed for enterprise
                scale.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Massive Dataset Support</h3>
                    <p className="text-muted-foreground">
                      Efficiently handle millions of annotations with optimized storage and retrieval systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Auto-Scaling Infrastructure</h3>
                    <p className="text-muted-foreground">
                      Dynamically scale resources based on workload to maintain performance during high-load projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Parallel Processing</h3>
                    <p className="text-muted-foreground">
                      Distribute annotation tasks across multiple workers for maximum throughput on large datasets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-4">
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-semibold text-lg">Performance Metrics</h4>
                    <p className="text-muted-foreground">
                      Our enterprise customers process an average of 5M+ annotations per day with 99.99% reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom AI & ML Model Integration */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Integration</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Custom AI & ML Model Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly connect your existing ML infrastructure with Brokle's annotation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <CardTitle>API-First Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive REST API for programmatic control of all platform features and integration with your ML
                  pipelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Webhook support for event-driven workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>SDKs for Python, JavaScript, and more</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <CardTitle>Custom Model Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect your proprietary ML models to assist with annotation and continuously improve them with
                  feedback.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Model-assisted pre-labeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Human-in-the-loop feedback for model improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <CardTitle>Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create custom annotation workflows with automated task assignment, review, and export processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>CI/CD pipeline integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Automated quality control gates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Integration Example</h3>
              </div>
              <div className="p-6 bg-muted/30">
                <pre className="bg-background p-4 rounded-md overflow-x-auto text-sm font-mono">
                  {`// Connect your ML model to Brokle for pre-labeling
const response = await fetch('https://api.brokle.ai/v1/models', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    name: 'Custom Object Detector',
    endpoint: 'https://your-ml-service.com/predict',
    task_type: 'object_detection',
    confidence_threshold: 0.7,
    project_ids: ['proj_123456']
  })
});

const model = await response.json();
console.log(\`Registered model: \${model.id}\`);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & SLA */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4">Enterprise Support</Badge>
              <h2 className="text-3xl font-bold mb-6">Support & SLA</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enterprise-grade support with dedicated resources to ensure your success.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dedicated Account Management</h3>
                    <p className="text-muted-foreground">
                      A dedicated account manager who understands your business and technical needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">99.9% Uptime Guarantee</h3>
                    <p className="text-muted-foreground">
                      Enterprise SLA with guaranteed uptime and performance metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Headset className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">24/7 Premium Support</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock support with priority response times for critical issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Enterprise SLA Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <span className="text-3xl font-bold text-primary">99.9%</span>
                    <span className="text-sm text-muted-foreground">Uptime Guarantee</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <span className="text-3xl font-bold text-primary">1 hr</span>
                    <span className="text-sm text-muted-foreground">Critical Response Time</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <span className="text-3xl font-bold text-primary">24/7</span>
                    <span className="text-sm text-muted-foreground">Support Coverage</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <span className="text-3xl font-bold text-primary">4 hrs</span>
                    <span className="text-sm text-muted-foreground">Issue Resolution Target</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Enterprise Support Tiers</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Standard Enterprise Support</h4>
                      <p className="text-muted-foreground">
                        Business hours support with 8-hour response time for critical issues and dedicated
                        implementation assistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Premium Enterprise Support</h4>
                      <p className="text-muted-foreground">
                        24/7 support with 4-hour response time, dedicated account manager, and quarterly business
                        reviews.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Elite Enterprise Support</h4>
                      <p className="text-muted-foreground">
                        24/7 support with 1-hour response time, dedicated technical account manager, and custom SLA
                        terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Deployment</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Flexible Deployment Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the deployment model that best fits your organization's requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Cloud className="h-6 w-6" />
                </div>
                <CardTitle>Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Fully managed by Brokle with automatic updates and global availability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No infrastructure management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automatic updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>99.9% uptime SLA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Global availability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle>Private Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Dedicated infrastructure in your cloud account with enhanced security.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>VPC integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom network config</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Managed by Brokle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle>On-Premises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Deploy in your own data center with complete control over your infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complete data control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Air-gapped environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom hardware utilization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Self-managed updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Domains Support */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Comprehensive Support</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade Support for All AI Domains</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle Enterprise provides specialized tools and workflows for every AI domain and data type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Image className="h-6 w-6" width={24} height={24} />
                </div>
                <CardTitle>Computer Vision 🖼️</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precise visual data labeling with AI-powered automation.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Semantic Segmentation (Polygons, Masks)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Object Detection (Bounding Boxes, Ellipses)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Keypoint Labeling & Image Classification</span>
                  </li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto gap-1">
                  <Link href="/features#data-types" className="flex items-center gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>NLP & Text 📝</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Advanced text annotation and language model training.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Question Answering & Named Entity Recognition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Sentiment Analysis & Text Classification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Text Summarization & Machine Translation</span>
                  </li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto gap-1">
                  <Link href="/features#data-types" className="flex items-center gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <CardTitle>LLM Fine-Tuning 🧠</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Power up LLMs with precision fine-tuning and human feedback.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Supervised LLM Fine-Tuning & RLHF Data Collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>RAG Retrieval for LLMs & Response Grading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Side-by-Side LLM Output Comparison</span>
                  </li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto gap-1">
                  <Link href="/features#data-types" className="flex items-center gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2 mx-auto">
                  <Mic className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm">Audio & Speech 🎙️</h3>
                <p className="text-xs text-muted-foreground mt-1">ASR, Speaker Diarization</p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2 mx-auto">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm">Conversational AI 🤖</h3>
                <p className="text-xs text-muted-foreground mt-1">Intent & Entity Recognition</p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2 mx-auto">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm">Ranking & Scoring 📊</h3>
                <p className="text-xs text-muted-foreground mt-1">Search & Retrieval Optimization</p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2 mx-auto">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm">Structured Data 📑</h3>
                <p className="text-xs text-muted-foreground mt-1">PDF & Form Extraction</p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2 mx-auto">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm">Time Series ⏳</h3>
                <p className="text-xs text-muted-foreground mt-1">Anomaly & Change Detection</p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2 mx-auto">
                  <Play className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm">Video Annotation 🎥</h3>
                <p className="text-xs text-muted-foreground mt-1">Object Tracking & Segmentation</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              <Link href="/features#data-types" className="flex items-center gap-2">
                Explore All AI Domains <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Global Reach</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise Support Worldwide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices and support teams across the globe, we provide enterprise-grade service wherever you operate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Americas</h3>
                <p className="text-muted-foreground">
                  24/7 support with teams in San Francisco, New York, and Toronto.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Europe</h3>
                <p className="text-muted-foreground">
                  Support centers in London, Berlin, and Paris with multilingual teams.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Asia Pacific</h3>
                <p className="text-muted-foreground">Regional support from Singapore, Tokyo, and Sydney offices.</p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Global Infrastructure</h3>
                <p className="text-muted-foreground">
                  Data centers in 6 regions ensuring low-latency access worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sales Form */}
      <section id="contact-sales" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">Get in Touch</Badge>
              <h2 className="text-3xl font-bold mb-6">Talk to Our Enterprise Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our enterprise team is ready to help you implement Brokle at scale. Fill out the form and we'll be in
                touch shortly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Custom Pricing</h3>
                    <p className="text-muted-foreground">
                      Get a tailored quote based on your specific needs and scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Demo</h3>
                    <p className="text-muted-foreground">See how Brokle can address your specific use cases.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Implementation Planning</h3>
                    <p className="text-muted-foreground">
                      Get expert guidance on deploying Brokle in your organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Job Title</Label>
                    <Input id="role" placeholder="CTO" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="team-size">Company Size</Label>
                    <Select>
                      <SelectTrigger id="team-size">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-100">50-100 employees</SelectItem>
                        <SelectItem value="101-500">101-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1001-5000">1001-5000 employees</SelectItem>
                        <SelectItem value="5001+">5001+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" placeholder="Tell us about your specific needs and requirements" rows={4} />
                  </div>

                  <Button type="submit" className="w-full">
                    Contact Sales
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-primary">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Solve Your Data Labeling Challenges?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our solutions team to discuss your specific use case and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Solutions Team <ArrowRight className="h-4 w-4" />
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