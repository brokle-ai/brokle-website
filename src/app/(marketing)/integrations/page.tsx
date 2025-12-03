import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Code, Boxes, Terminal } from "lucide-react";
import Link from "next/link";
import { DisplayHeading, SectionHeader, CTASection } from "@/components/shared";

export const metadata: Metadata = {
  title: "Integrations - Brokle",
  description: "Native integrations with every major LLM provider and framework. OpenAI, Anthropic, LangChain, LlamaIndex, and more.",
  openGraph: {
    title: "Integrations - Brokle",
    description: "Native integrations with every major LLM provider and framework.",
    url: "https://brokle.ai/integrations",
    siteName: "Brokle",
    type: "website",
  },
};

const providers = [
  {
    name: "OpenAI",
    description: "Full support for GPT-4, GPT-3.5, embeddings, and function calling.",
    docs: "https://docs.brokle.ai/integrations/openai",
  },
  {
    name: "Anthropic",
    description: "Complete integration with Claude 3, Claude 2, and all Anthropic models.",
    docs: "https://docs.brokle.ai/integrations/anthropic",
  },
  {
    name: "Google AI",
    description: "Support for Gemini Pro, PaLM 2, and Google's AI platform.",
    docs: "https://docs.brokle.ai/integrations/google",
  },
  {
    name: "Azure OpenAI",
    description: "Enterprise-ready integration with Azure OpenAI Service.",
    docs: "https://docs.brokle.ai/integrations/azure",
  },
  {
    name: "AWS Bedrock",
    description: "Native support for Claude, Titan, and all Bedrock models.",
    docs: "https://docs.brokle.ai/integrations/bedrock",
  },
  {
    name: "Cohere",
    description: "Native support for Command, Embed, and Rerank models.",
    docs: "https://docs.brokle.ai/integrations/cohere",
  },
  {
    name: "Mistral AI",
    description: "Integration with Mistral models including Mixtral.",
    docs: "https://docs.brokle.ai/integrations/mistral",
  },
  {
    name: "Groq",
    description: "High-speed inference tracing for Groq-hosted models.",
    docs: "https://docs.brokle.ai/integrations/groq",
  },
  {
    name: "Together AI",
    description: "Open-source model hosting with full tracing support.",
    docs: "https://docs.brokle.ai/integrations/together",
  },
];

const frameworks = [
  {
    name: "LangChain",
    description: "First-class support for chains, agents, and tools. Automatic span creation for complex workflows.",
    docs: "https://docs.brokle.ai/integrations/langchain",
  },
  {
    name: "LangGraph",
    description: "Visualize and debug LangGraph state machines with full execution traces.",
    docs: "https://docs.brokle.ai/integrations/langgraph",
  },
  {
    name: "LlamaIndex",
    description: "Trace RAG pipelines, index queries, and retrieval operations.",
    docs: "https://docs.brokle.ai/integrations/llamaindex",
  },
  {
    name: "Vercel AI SDK",
    description: "Stream-aware tracing for Next.js and React applications.",
    docs: "https://docs.brokle.ai/integrations/vercel",
  },
  {
    name: "Haystack",
    description: "Integration with Haystack pipelines and components.",
    docs: "https://docs.brokle.ai/integrations/haystack",
  },
  {
    name: "OpenTelemetry",
    description: "Native OTLP support for custom instrumentation and existing telemetry.",
    docs: "https://docs.brokle.ai/integrations/opentelemetry",
  },
];

const sdks = [
  {
    name: "Python SDK",
    install: "pip install brokle",
    description: "Full-featured Python SDK with async support, decorators, and automatic instrumentation.",
    docs: "https://docs.brokle.ai/sdk/python",
    icon: Terminal,
  },
  {
    name: "TypeScript SDK",
    install: "npm install @brokle/sdk",
    description: "Modern TypeScript SDK with full type safety and framework integrations.",
    docs: "https://docs.brokle.ai/sdk/typescript",
    icon: Code,
  },
  {
    name: "REST API",
    install: "OpenAPI 3.0",
    description: "RESTful API for custom integrations and any programming language.",
    docs: "https://docs.brokle.ai/api",
    icon: Boxes,
  },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Integrations
            </Badge>
            <DisplayHeading as="h1" className="mb-6">
              Works with your{" "}
              <span className="text-primary">entire stack</span>
            </DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Native integrations with every major LLM provider and framework.
              Add observability in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 h-12 px-8" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href="https://docs.brokle.ai/integrations" target="_blank" rel="noopener noreferrer">
                  View All Integrations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="LLM Providers"
            title="Every AI provider, one integration"
            description="Automatic tracing for all major AI providers with real-time cost tracking."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {providers.map((provider) => (
              <Card key={provider.name} className="border-0 shadow-none bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {provider.name}
                    <Link
                      href={provider.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{provider.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Frameworks"
            title="First-class framework support"
            description="Deep integration with popular AI frameworks for complete visibility into your pipelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {frameworks.map((framework) => (
              <Card key={framework.name} className="border-0 shadow-none bg-muted/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {framework.name}
                    <Link
                      href={framework.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="SDKs"
            title="Official SDKs"
            description="Full-featured SDKs for your favorite languages with complete documentation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sdks.map((sdk) => (
              <Card key={sdk.name} className="bg-background shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <sdk.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{sdk.name}</CardTitle>
                  <code className="text-sm font-mono bg-muted px-3 py-1.5 rounded inline-block">
                    {sdk.install}
                  </code>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sdk.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={sdk.docs} target="_blank" rel="noopener noreferrer">
                      View Docs <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Don't see your stack?"
        description="We support OpenTelemetry, so you can integrate with any language or framework. Or reach out and let us know what you need."
        primaryCTA={{
          label: "OpenTelemetry Guide",
          href: "https://docs.brokle.ai/integrations/opentelemetry",
        }}
        secondaryCTA={{
          label: "Request Integration",
          href: "/contact",
        }}
        features={["OpenTelemetry native", "Custom instrumentation", "Any language"]}
      />
    </>
  );
}
