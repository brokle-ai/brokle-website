import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  Layers,
  Clock,
  Zap,
  Bug,
  LineChart,
  Code,
  Terminal,
  GitBranch,
  Cpu,
  Database,
  Workflow
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DisplayHeading, SectionHeader, CTASection, FeatureGrid, CodeBlock } from "@/components/shared";

export const metadata: Metadata = {
  title: "Tracing & Debugging - Brokle",
  description: "Debug your LLM applications with detailed traces. See every LLM call, chain execution, and agent step. OpenTelemetry-native tracing for AI applications.",
  openGraph: {
    title: "Tracing & Debugging - Brokle",
    description: "Debug your LLM applications with detailed traces. OpenTelemetry-native tracing for AI.",
    url: "https://brokle.ai/tracing",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: Search,
    title: "Deep Visibility",
    description: "See every LLM call with inputs, outputs, model parameters, and metadata in a single view.",
  },
  {
    icon: Layers,
    title: "Nested Spans",
    description: "Visualize complex chains and agents with hierarchical span views showing the full execution flow.",
  },
  {
    icon: Clock,
    title: "Latency Breakdown",
    description: "Identify bottlenecks with detailed timing for each operation in your LLM pipeline.",
  },
  {
    icon: Zap,
    title: "Real-time Streaming",
    description: "Watch traces appear as they happen with live streaming support for async operations.",
  },
  {
    icon: Bug,
    title: "Error Tracking",
    description: "Catch failures with detailed error messages, stack traces, and retry information.",
  },
  {
    icon: LineChart,
    title: "Token Counting",
    description: "Track token usage per call with automatic cost calculation across providers.",
  },
];

const useCases = [
  {
    icon: Terminal,
    title: "Debug Chatbots",
    description: "Understand conversation flow and identify where responses go wrong.",
  },
  {
    icon: GitBranch,
    title: "Track Agent Steps",
    description: "See every decision your AI agent makes and why it chose each action.",
  },
  {
    icon: Workflow,
    title: "Optimize RAG Pipelines",
    description: "Monitor retrieval quality and generation accuracy end-to-end.",
  },
];

const integrations = [
  { name: "OpenAI", logo: "/integrations/openai.svg" },
  { name: "Anthropic", logo: "/integrations/anthropic.svg" },
  { name: "LangChain", logo: "/integrations/langchain.svg" },
  { name: "LlamaIndex", logo: "/integrations/llamaindex.svg" },
  { name: "Vercel AI", logo: "/integrations/vercel.svg" },
  { name: "OpenTelemetry", logo: "/integrations/opentelemetry.svg" },
];

const codeExample = `from brokle import Brokle

brokle = Brokle()

@brokle.trace()
def chat_with_ai(message: str):
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": message}]
    )
    return response.choices[0].message.content

# All calls are automatically traced
result = chat_with_ai("Hello, how are you?")`;

export default function TracingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Tracing & Debugging
              </Badge>
              <DisplayHeading as="h1" className="mb-6">
                See inside every{" "}
                <span className="text-primary">LLM call</span>
              </DisplayHeading>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Debug complex chains and agents with detailed traces. Understand exactly
                what your LLM applications are doing, one span at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 h-12 px-8" asChild>
                  <Link href="https://app.brokle.ai/signup">
                    Start Tracing Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="https://docs.brokle.ai/tracing" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Preview Placeholder */}
            <div className="relative rounded-lg border bg-muted/30 overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Layers className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Trace Visualization Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Integration Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Quick Start"
                title="Add tracing in 5 minutes"
                description="One decorator, zero configuration. Brokle automatically captures LLM calls, token usage, and latency."
                centered={false}
              />
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <span className="text-muted-foreground">Install the SDK: <code className="text-sm bg-muted px-2 py-0.5 rounded">pip install brokle</code></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <span className="text-muted-foreground">Add the <code className="text-sm bg-muted px-2 py-0.5 rounded">@brokle.trace()</code> decorator</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <span className="text-muted-foreground">View traces in your dashboard</span>
                </li>
              </ul>
            </div>
            <div>
              <CodeBlock code={codeExample} language="python" title="app.py" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Features"
            title="Everything you need to debug LLMs"
            description="Built on OpenTelemetry standards, designed for AI applications."
          />
          <FeatureGrid features={features} columns={3} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Use Cases"
            title="Built for modern AI applications"
            description="From simple chatbots to complex multi-agent systems."
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Integrations"
            title="Works with your stack"
            description="Native support for popular LLM providers and frameworks."
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
        title="Ready to debug your LLM apps?"
        description="Add tracing to your application in under 5 minutes. No code changes required."
        primaryCTA={{
          label: "Get Started Free",
          href: "https://app.brokle.ai/signup",
        }}
        secondaryCTA={{
          label: "View Documentation",
          href: "https://docs.brokle.ai/tracing",
        }}
        features={["No credit card required", "OpenTelemetry native", "Self-hosting available"]}
        variant="muted"
      />
    </>
  );
}
