import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, CheckCircle, HelpCircle, Play, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
            Choose the plan that&apos;s right for your team, from startups to enterprise organizations. No hidden fees, no surprises.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
                </TabsList>
              </div>

              {/* Monthly Plans */}
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Free Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                        $0
                        <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">Perfect for individuals and small projects.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Up to 5,000 annotations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>1 user</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Basic annotation tools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>5 projects</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Community support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href="/start-labeling" className="w-full">
                          Get Started
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan - Highlighted */}
                  <Card className="border-primary relative">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                        $49
                        <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        For teams that need advanced features and collaboration.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Unlimited annotations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Up to 10 users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Advanced annotation tools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>AI-assisted labeling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Unlimited projects</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Email & chat support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Link href="/start-labeling" className="w-full">
                          Start Free Trial
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-extrabold">Custom</div>
                      <CardDescription className="mt-4">
                        For organizations with advanced security and scaling needs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Everything in Pro</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Unlimited users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>SSO & advanced security</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>On-premises deployment option</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Custom SLA</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href="/contact" className="w-full">
                          Contact Sales
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Annual Plans */}
              <TabsContent value="annual">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Free Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                        $0
                        <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">Perfect for individuals and small projects.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Up to 5,000 annotations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>1 user</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Basic annotation tools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>5 projects</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Community support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href="/start-labeling" className="w-full">
                          Get Started
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan - Highlighted */}
                  <Card className="border-primary relative">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                        $39
                        <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        For teams that need advanced features and collaboration.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Unlimited annotations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Up to 10 users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Advanced annotation tools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>AI-assisted labeling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Unlimited projects</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Email & chat support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Link href="/start-labeling" className="w-full">
                          Start Free Trial
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-extrabold">Custom</div>
                      <CardDescription className="mt-4">
                        For organizations with advanced security and scaling needs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Everything in Pro</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Unlimited users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>SSO & advanced security</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>On-premises deployment option</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Custom SLA</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href="/contact" className="w-full">
                          Contact Sales
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              All plans include a 14-day free trial. No credit card required to start.
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Add-ons</Badge>
            <h2 className="text-3xl font-bold mb-4">Customize Your Plan</h2>
            <p className="text-xl text-muted-foreground">
              Enhance your Brokle experience with these additional features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Additional Users</CardTitle>
                <div className="mt-4 text-2xl font-bold">
                  $10<span className="text-lg font-medium text-muted-foreground">/user/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Add more users to your Pro plan beyond the included limit.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full access to all features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Individual user analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced AI</CardTitle>
                <div className="mt-4 text-2xl font-bold">
                  $99<span className="text-lg font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Unlock more powerful AI-assisted labeling capabilities.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom model training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Advanced auto-labeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Active learning workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Support</CardTitle>
                <div className="mt-4 text-2xl font-bold">
                  $199<span className="text-lg font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Get priority support and dedicated assistance.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated support engineer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Monthly check-in calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom training sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Feature Comparison</Badge>
              <h2 className="text-3xl font-bold mb-4">Compare Plan Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See exactly what&apos;s included in each plan to find the right fit for your team.
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table className="border rounded-lg bg-background">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Feature</TableHead>
                    <TableHead className="text-center">Free</TableHead>
                    <TableHead className="text-center bg-primary/5">Pro</TableHead>
                    <TableHead className="text-center">Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Data Volume */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>Data Volume</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Annotations</TableCell>
                    <TableCell className="text-center">5,000</TableCell>
                    <TableCell className="text-center bg-primary/5">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Projects</TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center bg-primary/5">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Storage</TableCell>
                    <TableCell className="text-center">5 GB</TableCell>
                    <TableCell className="text-center bg-primary/5">100 GB</TableCell>
                    <TableCell className="text-center">Custom</TableCell>
                  </TableRow>

                  {/* Team & Collaboration */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>Team & Collaboration</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Team Members</TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center bg-primary/5">Up to 10</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Workspaces</TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center bg-primary/5">Multiple</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Role-Based Access Control</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Review Workflows</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>

                  {/* AI Features */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>AI Features</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Pre-labeling</TableCell>
                    <TableCell className="text-center">Basic</TableCell>
                    <TableCell className="text-center bg-primary/5">Advanced</TableCell>
                    <TableCell className="text-center">Custom</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Auto-labeling</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Active Learning</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">Basic</TableCell>
                    <TableCell className="text-center">Advanced</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Custom Model Integration</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">Limited</TableCell>
                    <TableCell className="text-center">Full</TableCell>
                  </TableRow>

                  {/* Data Types */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>Data Types</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Images</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Text</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Audio</TableCell>
                    <TableCell className="text-center">Basic</TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Video</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Time-series</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>

                  {/* Integrations */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>Integrations</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">API Access</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Cloud Storage</TableCell>
                    <TableCell className="text-center">Limited</TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">ML Framework Integration</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Custom Integrations</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>

                  {/* Security */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>Security</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">SSO Integration</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Audit Logs</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">Basic</TableCell>
                    <TableCell className="text-center">Advanced</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Compliance Features</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">Limited</TableCell>
                    <TableCell className="text-center">Full</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">On-premises Deployment</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>

                  {/* Support */}
                  <TableRow className="bg-muted/30 font-medium">
                    <TableCell>Support</TableCell>
                    <TableCell className="text-center"></TableCell>
                    <TableCell className="text-center bg-primary/5"></TableCell>
                    <TableCell className="text-center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Community Support</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Email Support</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Chat Support</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Dedicated Account Manager</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-8">Custom SLA</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-center mt-8">
              <Button className="gap-2">
                <Link href="/start-labeling" className="flex items-center gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the free trial work?</AccordionTrigger>
                <AccordionContent>
                  Our free trial gives you full access to the Pro plan for 14 days. No credit card is required to start.
                  At the end of the trial, you can choose to upgrade to a paid plan or continue with the Free plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change plans later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, the new features
                  will be available immediately. When downgrading, the changes will take effect at the end of your
                  current billing cycle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Enterprise
                  plans, we also offer invoicing with net-30 payment terms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens to my data if I cancel?</AccordionTrigger>
                <AccordionContent>
                  Your data remains accessible for 30 days after cancellation, during which time you can export it.
                  After 30 days, we permanently delete all your data in accordance with our data retention policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer discounts for academic or non-profit organizations?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer special pricing for academic institutions, non-profit organizations, and open-source
                  projects. Please contact our sales team to learn more about our discount programs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What&apos;s included in the Enterprise plan?</AccordionTrigger>
                <AccordionContent>
                  The Enterprise plan includes everything in the Pro plan plus unlimited users, SSO integration,
                  advanced security features, custom integrations, on-premises deployment options, a dedicated account
                  manager, and a custom SLA. Pricing is customized based on your specific needs and scale.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 p-4 bg-background rounded-lg border flex items-center gap-4">
              <div className="text-primary">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">Still have questions?</p>
                <p className="text-muted-foreground">Contact our sales team for personalized assistance.</p>
              </div>
              <Button variant="outline" className="ml-auto">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of teams already using Brokle to accelerate their data labeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Talk to Sales <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

