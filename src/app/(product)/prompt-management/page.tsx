import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  GitBranch,
  History,
  FlaskConical,
  Rocket,
  Users,
  Lock,
  Code,
  FileText,
  Shuffle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { DisplayHeading, SectionHeader, CTASection, FeatureGrid, CodeBlock } from "@/components/shared";

export const metadata: Metadata = {
  title: "Prompt Management - Brokle",
  description: "Version, test, and deploy prompts with confidence. Track changes, compare performance, and roll back instantly.",
  openGraph: {
    title: "Prompt Management - Brokle",
    description: "Version, test, and deploy prompts with confidence. Track changes and roll back instantly.",
    url: "https://brokle.ai/prompt-management",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Track every change to your prompts with full version history and diff views.",
  },
  {
    icon: History,
    title: "Instant Rollback",
    description: "Roll back to any previous version with one click. No code deployments needed.",
  },
  {
    icon: FlaskConical,
    title: "A/B Testing",
    description: "Test prompt variations in production with automatic traffic splitting and metrics.",
  },
  {
    icon: Rocket,
    title: "Hot Swapping",
    description: "Update prompts in production without code changes or deployments.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Review prompts with your team. Comment, approve, and track who changed what.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Control who can view, edit, and deploy prompts with role-based permissions.",
  },
];

const useCases = [
  {
    icon: FileText,
    title: "Prompt Engineering",
    description: "Iterate on prompts quickly without touching your codebase or redeploying.",
  },
  {
    icon: Shuffle,
    title: "Gradual Rollouts",
    description: "Test new prompts with a small percentage of traffic before full deployment.",
  },
  {
    icon: Settings,
    title: "Environment Management",
    description: "Manage different prompt versions for dev, staging, and production.",
  },
];

const integrations = [
  { name: "OpenAI", logo: "/integrations/openai.svg" },
  { name: "Anthropic", logo: "/integrations/anthropic.svg" },
  { name: "LangChain", logo: "/integrations/langchain.svg" },
  { name: "Vercel AI", logo: "/integrations/vercel.svg" },
  { name: "REST API", logo: "/integrations/api.svg" },
  { name: "Python SDK", logo: "/integrations/python.svg" },
];

const codeExample = `from brokle import Brokle

brokle = Brokle()

# Fetch the latest prompt version
prompt = brokle.prompts.get(
    name="customer-support-v2",
    environment="production"
)

# Use it with any LLM
response = openai.chat.completions.create(
    model=prompt.model,
    messages=[
        {"role": "system", "content": prompt.system},
        {"role": "user", "content": user_message}
    ],
    **prompt.parameters
)`;

export default function PromptManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Prompt Management
              </Badge>
              <DisplayHeading as="h1" className="mb-6">
                Ship prompts with{" "}
                <span className="text-primary">confidence</span>
              </DisplayHeading>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Version, test, and deploy prompts without touching your codebase.
                A/B test in production, roll back instantly when things go wrong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 h-12 px-8" asChild>
                  <Link href="https://app.brokle.ai/signup">
                    Get Started Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="https://docs.brokle.ai/prompts" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Preview Placeholder */}
            <div className="relative rounded-lg border bg-muted/30 overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <GitBranch className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Prompt Version Control Preview</p>
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
                title="Decouple prompts from code"
                description="Fetch prompts at runtime. Update them in the dashboard without touching your codebase."
                centered={false}
              />
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <span className="text-muted-foreground">Create your prompt in the dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <span className="text-muted-foreground">Fetch with <code className="text-sm bg-muted px-2 py-0.5 rounded">brokle.prompts.get()</code></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <span className="text-muted-foreground">Update prompts anytime, no redeploys</span>
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
            title="Prompts as a first-class citizen"
            description="Everything you need to manage prompts at scale, from solo developers to enterprise teams."
          />
          <FeatureGrid features={features} columns={3} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Use Cases"
            title="Built for production workflows"
            description="From rapid iteration to enterprise governance."
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
            title="Works with any LLM"
            description="Fetch prompts via SDK or REST API. Use with any model provider."
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
        title="Ready to manage your prompts?"
        description="Stop hardcoding prompts. Start versioning, testing, and deploying with confidence."
        primaryCTA={{
          label: "Get Started Free",
          href: "https://app.brokle.ai/signup",
        }}
        secondaryCTA={{
          label: "View Documentation",
          href: "https://docs.brokle.ai/prompts",
        }}
        features={["No credit card required", "Version history included", "Team collaboration"]}
        variant="muted"
      />
    </>
  );
}
