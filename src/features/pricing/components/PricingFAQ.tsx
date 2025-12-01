'use client';

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, Play } from "lucide-react"
import Link from "next/link"

export default function PricingFAQ() {
  return (
    <>
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
