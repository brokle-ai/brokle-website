import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cloud, Lock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function DifferentiationSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Brokle Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What sets us apart from other data labeling platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-background/60 backdrop-blur border">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <CardTitle>AI-Powered Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our advanced AI assistance reduces manual labeling effort by up to 80%, with continuous learning that
                improves over time.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur border">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <Cloud className="h-6 w-6" />
              </div>
              <CardTitle>Scalable Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Handle millions of data points with high-performance cloud infrastructure that scales with your needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur border">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <CardTitle>Enterprise-Grade Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                SOC 2 compliance, end-to-end encryption, and granular access controls to protect your sensitive data.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Open-Source Flexibility + SaaS Convenience</h3>
                <p className="text-muted-foreground mb-6">
                  Brokle combines the flexibility of open-source with the convenience of SaaS. Use our cloud platform
                  or deploy on your own infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium">Extensible platform</span>
                      <p className="text-muted-foreground">
                        Customize and extend with your own components and integrations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium">Deployment options</span>
                      <p className="text-muted-foreground">Cloud, private cloud, or on-premises deployment.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium">Active community</span>
                      <p className="text-muted-foreground">
                        Benefit from a growing ecosystem of extensions and integrations.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="mt-6 gap-2">
                  <Link href="/enterprise" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-muted/30 flex items-center justify-center p-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Open Source + SaaS"
                  width={400}
                  height={400}
                  className="max-w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
