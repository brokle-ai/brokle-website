import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  DollarSign,
  Clock,
  TrendingUp,
  PieChart,
  Bell,
  Download,
  Code,
  BarChart3,
  Calculator,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { DisplayHeading, SectionHeader, CTASection, FeatureGrid, CodeBlock } from "@/components/shared";

export const metadata: Metadata = {
  title: "Cost & Latency Analytics - Brokle",
  description: "Track LLM costs across providers. Monitor latency, identify expensive calls, and optimize your AI spend.",
  openGraph: {
    title: "Cost & Latency Analytics - Brokle",
    description: "Track LLM costs across providers. Monitor latency and optimize your AI spend.",
    url: "https://brokle.ai/analytics",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description: "See exactly how much each LLM call costs. Track spend across providers, models, and use cases.",
  },
  {
    icon: Clock,
    title: "Latency Monitoring",
    description: "Monitor response times with p50, p95, and p99 latencies. Catch performance regressions early.",
  },
  {
    icon: TrendingUp,
    title: "Usage Trends",
    description: "Understand how your LLM usage grows over time. Forecast costs and capacity needs.",
  },
  {
    icon: PieChart,
    title: "Breakdown by Model",
    description: "See which models and providers drive your costs. Compare performance across providers.",
  },
  {
    icon: Bell,
    title: "Budget Alerts",
    description: "Set spending limits and get notified before you exceed them. Prevent surprise bills.",
  },
  {
    icon: Download,
    title: "Export & Reports",
    description: "Export detailed reports for billing, compliance, and analysis. Schedule recurring exports.",
  },
];

const useCases = [
  {
    icon: Calculator,
    title: "Cost Optimization",
    description: "Identify expensive calls and switch to more cost-effective models where appropriate.",
  },
  {
    icon: BarChart3,
    title: "Capacity Planning",
    description: "Forecast usage growth and plan for scaling your AI infrastructure.",
  },
  {
    icon: Wallet,
    title: "Budget Management",
    description: "Set team and project budgets. Track actual spend against allocations.",
  },
];

const integrations = [
  { name: "OpenAI", logo: "/integrations/openai.svg" },
  { name: "Anthropic", logo: "/integrations/anthropic.svg" },
  { name: "Google AI", logo: "/integrations/google.svg" },
  { name: "Azure OpenAI", logo: "/integrations/azure.svg" },
  { name: "AWS Bedrock", logo: "/integrations/aws.svg" },
  { name: "Custom Models", logo: "/integrations/custom.svg" },
];

const codeExample = `from brokle import Brokle

brokle = Brokle()

# Get cost breakdown for the last 30 days
report = brokle.analytics.costs(
    period="30d",
    group_by=["model", "project"]
)

print(f"Total cost: \${report.total_cost:.2f}")
print(f"Most expensive model: \{report.top_model}")

# Set up budget alerts
brokle.analytics.set_budget(
    monthly_limit=1000,
    alert_at=[0.5, 0.8, 0.95]
)`;

export default function AnalyticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Cost & Latency Analytics
              </Badge>
              <DisplayHeading as="h1" className="mb-6">
                Know where every{" "}
                <span className="text-primary">dollar goes</span>
              </DisplayHeading>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Track costs across every LLM provider. Monitor latency, identify expensive calls,
                and optimize your AI spend with actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 h-12 px-8" asChild>
                  <Link href="https://app.brokle.ai/signup">
                    Start Tracking Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="https://docs.brokle.ai/analytics" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Preview Placeholder */}
            <div className="relative rounded-lg border bg-muted/30 overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Cost Analytics Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Integration Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Quick Start"
                title="Automatic cost tracking"
                description="Brokle automatically calculates costs for every LLM call. No configuration needed."
                centered={false}
              />
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <span className="text-muted-foreground">Enable tracing for your LLM calls</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <span className="text-muted-foreground">Costs are calculated automatically per call</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <span className="text-muted-foreground">View breakdowns and set budget alerts</span>
                </li>
              </ul>
            </div>
            <div>
              <CodeBlock code={codeExample} language="python" title="analytics.py" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeader
            badge="Features"
            title="Complete visibility into LLM costs"
            description="Stop guessing. Start optimizing with real data."
          />
          <FeatureGrid features={features} columns={3} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeader
            badge="Use Cases"
            title="Optimize your AI economics"
            description="Make data-driven decisions about your LLM spending."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="border-0 shadow-none bg-background">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <useCase.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeader
            badge="Providers"
            title="Track costs across all providers"
            description="Automatic cost calculation for all major LLM providers with up-to-date pricing."
          />
          <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-background"
              >
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                  <Code className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/integrations">
                View All Integrations <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to optimize your LLM costs?"
        description="Get complete visibility into your AI spend. Identify optimization opportunities today."
        primaryCTA={{
          label: "Get Started Free",
          href: "https://app.brokle.ai/signup",
        }}
        secondaryCTA={{
          label: "View Documentation",
          href: "https://docs.brokle.ai/analytics",
        }}
        features={["No credit card required", "Real-time cost tracking", "Budget alerts included"]}
        variant="muted"
      />
    </>
  );
}
