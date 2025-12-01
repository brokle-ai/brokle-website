import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Lock, Users } from "lucide-react"
import Image from "next/image"

export function IntegrationsSection() {
  return (
    <>
      {/* Integrations */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Integrations</Badge>
            <h2 className="text-3xl font-bold mb-4">Connect with Your Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle integrates seamlessly with your existing tools and infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Flexible Integration Options</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Connect Brokle with your existing tools and workflows through our comprehensive API and pre-built
                integrations.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium">Cloud Storage</span>
                    <p className="text-muted-foreground">
                      Direct integration with AWS S3, Google Cloud Storage, and Azure Blob Storage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium">ML Frameworks</span>
                    <p className="text-muted-foreground">
                      Seamless connection with TensorFlow, PyTorch, and other ML frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium">API & SDK</span>
                    <p className="text-muted-foreground">
                      Comprehensive REST API and client libraries for Python, JavaScript, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium">Webhooks</span>
                    <p className="text-muted-foreground">
                      Event-based notifications to trigger external workflows and automations.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-6 gap-2">
                View All Integrations <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-background rounded-lg border p-4 flex items-center justify-center h-20">
                  <div className="text-muted-foreground text-sm">Integration {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">Security & Compliance</Badge>
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Brokle is built with security at its core, providing the controls and compliance features that
                enterprises require.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">SOC 2 Compliance</h3>
                    <p className="text-muted-foreground">
                      Independently verified security, availability, and confidentiality controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">GDPR Compliance</h3>
                    <p className="text-muted-foreground">
                      Tools and processes to help you maintain regulatory compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">End-to-End Encryption</h3>
                    <p className="text-muted-foreground">
                      Data encrypted in transit and at rest with industry-standard protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Role-Based Access Control</h3>
                    <p className="text-muted-foreground">
                      Granular permissions to ensure users only access what they need.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 gap-2">
                Security Whitepaper <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background p-6">
                <h3 className="text-lg font-semibold mb-4">SOC 2</h3>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="SOC 2 Certification"
                  width={100}
                  height={100}
                  className="h-16 w-auto mx-auto"
                />
              </Card>

              <Card className="bg-background p-6">
                <h3 className="text-lg font-semibold mb-4">GDPR</h3>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="GDPR Compliance"
                  width={100}
                  height={100}
                  className="h-16 w-auto mx-auto"
                />
              </Card>

              <Card className="bg-background p-6">
                <h3 className="text-lg font-semibold mb-4">HIPAA</h3>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="HIPAA Compliance"
                  width={100}
                  height={100}
                  className="h-16 w-auto mx-auto"
                />
              </Card>

              <Card className="bg-background p-6">
                <h3 className="text-lg font-semibold mb-4">ISO 27001</h3>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="ISO 27001 Certification"
                  width={100}
                  height={100}
                  className="h-16 w-auto mx-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
