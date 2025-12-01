import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Info, Lock, Shield, Star } from "lucide-react"
import { RequestAccessForm } from "./request-access-form"

export default function RequestAccessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request Free Access</h1>
            <p className="text-xl text-muted-foreground">
              Get early access to our platform and start exploring our powerful annotation tools.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <Card className="md:order-1 order-2">
              <CardHeader>
                <CardTitle>Request Access</CardTitle>
                <CardDescription>Fill out the form below to get started with your free access.</CardDescription>
              </CardHeader>
              <CardContent>
                <RequestAccessForm />
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="md:order-2 order-1">
              <div className="bg-muted/30 p-8 rounded-lg mb-8">
                <Badge className="mb-4">Free Access</Badge>
                <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">14-day unlimited access</span>
                      <p className="text-muted-foreground">Full access to all features with no restrictions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Up to 5 team members</span>
                      <p className="text-muted-foreground">Collaborate with your colleagues during the trial</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">10,000 annotations</span>
                      <p className="text-muted-foreground">Get started with a generous annotation limit</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Personalized onboarding</span>
                      <p className="text-muted-foreground">30-minute session with our product specialist</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">No Credit Card Required</h3>
                    <p className="text-muted-foreground">Start your free access without any payment information.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Enterprise-Grade Security</h3>
                    <p className="text-muted-foreground">Your data is protected with industry-leading security measures.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Priority Support</h3>
                    <p className="text-muted-foreground">Get help from our team whenever you need it during your trial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Trusted By</Badge>
            <h2 className="text-3xl font-bold mb-6">Join Leading Organizations</h2>
            <p className="text-xl text-muted-foreground">
              See why thousands of teams trust our platform for their annotation needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Logo placeholders */}
            <div className="h-16 bg-background rounded-md flex items-center justify-center">
              <div className="text-xl font-bold text-muted-foreground">Company 1</div>
            </div>
            <div className="h-16 bg-background rounded-md flex items-center justify-center">
              <div className="text-xl font-bold text-muted-foreground">Company 2</div>
            </div>
            <div className="h-16 bg-background rounded-md flex items-center justify-center">
              <div className="text-xl font-bold text-muted-foreground">Company 3</div>
            </div>
            <div className="h-16 bg-background rounded-md flex items-center justify-center">
              <div className="text-xl font-bold text-muted-foreground">Company 4</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {/* Rating stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="mb-6">
                  &quot;The platform has transformed our annotation workflow. We&apos;ve been able to reduce our annotation time by 60% while improving quality.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">Data Science Lead, Tech Co</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {/* Rating stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="mb-6">
                  &quot;The AI-assisted labeling has been a game-changer for our research team. It&apos;s intuitive, powerful, and incredibly accurate.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Research Director, University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {/* Rating stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="mb-6">
                  &quot;Our team was up and running in minutes. The interface is clean, the tools are powerful, and the support is excellent.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="font-medium">AJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Product Manager, AI Startup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Questions?</Badge>
              <h2 className="text-3xl font-bold mb-4">About Free Access</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our free access program.
              </p>
            </div>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  How long will it take to get access?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We review all access requests within 24-48 business hours. Once approved, you&apos;ll receive an email with instructions to set up your account and get started.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  What happens after the free access period?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  At the end of your free access period, you can choose to upgrade to a paid plan or downgrade to our free tier. We&apos;ll send you a reminder before your access expires so you can make a decision.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Can I invite my team members during the trial?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, you can invite up to 5 team members to collaborate during your free access period. Each team member will create their own account linked to your organization.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  What kind of support will I receive?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  During your free access period, you&apos;ll have access to our email support, documentation, and a 30-minute onboarding session with one of our product specialists to help you get started.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Labeling?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Request free access today and experience the power of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Request Access Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}