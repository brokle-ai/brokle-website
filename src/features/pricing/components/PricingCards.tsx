'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { pricingTiers, addOns } from "@/data/pricing-tiers"

export default function PricingCards() {
  return (
    <>
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
                  {pricingTiers.map((tier) => (
                    <Card key={tier.id} className={tier.highlighted ? "border-primary relative" : ""}>
                      {tier.badge && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                          {tier.badge}
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{tier.name}</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                          {tier.priceDisplay.monthly}
                          {tier.price.monthly !== null && (
                            <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                          )}
                        </div>
                        <CardDescription className="mt-4">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant={tier.cta.variant as "default" | "outline"} className="w-full">
                          <Link href={tier.cta.href} className="w-full">
                            {tier.cta.text}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Annual Plans */}
              <TabsContent value="annual">
                <div className="grid md:grid-cols-3 gap-8">
                  {pricingTiers.map((tier) => (
                    <Card key={tier.id} className={tier.highlighted ? "border-primary relative" : ""}>
                      {tier.badge && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                          {tier.badge}
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{tier.name}</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                          {tier.priceDisplay.annual}
                          {tier.price.annual !== null && (
                            <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                          )}
                        </div>
                        <CardDescription className="mt-4">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant={tier.cta.variant as "default" | "outline"} className="w-full">
                          <Link href={tier.cta.href} className="w-full">
                            {tier.cta.text}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
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
            {addOns.map((addOn) => (
              <Card key={addOn.id}>
                <CardHeader>
                  <CardTitle>{addOn.name}</CardTitle>
                  <div className="mt-4 text-2xl font-bold">
                    ${addOn.price}
                    <span className="text-lg font-medium text-muted-foreground">{addOn.priceUnit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{addOn.description}</p>
                  <ul className="space-y-2">
                    {addOn.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
