import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, Lock, Shield, Users } from "lucide-react"
import Image from "next/image"

export function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">SOC 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="SOC 2 Certification"
                    width={100}
                    height={100}
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">GDPR</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="GDPR Compliance"
                    width={100}
                    height={100}
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">HIPAA</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="HIPAA Compliance"
                    width={100}
                    height={100}
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">ISO 27001</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="ISO 27001 Certification"
                    width={100}
                    height={100}
                    className="h-16 w-auto mx-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Badge className="mb-4">Security</Badge>
            <h2 className="text-3xl font-bold mb-6">Security & Access Control</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your sensitive data with enterprise-grade security features and granular access controls.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Role-Based Access Control</h3>
                  <p className="text-muted-foreground">
                    Granular permissions to ensure users only access what they need with custom roles and policies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Enterprise Security</h3>
                  <p className="text-muted-foreground">
                    SOC 2, GDPR, and HIPAA compliance with end-to-end encryption and security controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Audit Logs</h3>
                  <p className="text-muted-foreground">
                    Comprehensive logging of all system activities for security and compliance purposes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">SSO Integration</h3>
                  <p className="text-muted-foreground">
                    Single Sign-On with SAML, OAuth, and other identity providers for secure authentication.
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-8 gap-2">
              <Link href="/enterprise" className="flex items-center gap-2">
                Learn About Enterprise Security <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

