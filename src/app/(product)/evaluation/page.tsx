import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckSquare,
  Brain,
  Gauge,
  GitCompare,
  Workflow,
  BarChart3,
  Code,
  FileCheck,
  Beaker,
  Target,
} from "lucide-react";
import Link from "next/link";
import { DisplayHeading, SectionHeader, CTASection, FeatureGrid, CodeBlock } from "@/components/shared";

export const metadata: Metadata = {
  title: "Evaluation Framework - Brokle",
  description: "Automated LLM evaluation with LLM-as-judge. Build custom evaluators, run A/B tests, and score outputs at scale.",
  openGraph: {
    title: "Evaluation Framework - Brokle",
    description: "Automated LLM evaluation with LLM-as-judge. Build custom evaluators and score outputs at scale.",
    url: "https://brokle.ai/evaluation",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: Brain,
    title: "LLM-as-Judge",
    description: "Use LLMs to evaluate LLM outputs. Score for relevance, helpfulness, safety, and custom criteria.",
  },
  {
    icon: CheckSquare,
    title: "Custom Evaluators",
    description: "Build your own evaluators with code or natural language. Define what quality means for your use case.",
  },
  {
    icon: Gauge,
    title: "Scoring at Scale",
    description: "Evaluate thousands of outputs automatically. Get scores, explanations, and aggregate metrics.",
  },
  {
    icon: GitCompare,
    title: "Model Comparison",
    description: "Compare models side-by-side with the same evaluation criteria. Find the best model for your task.",
  },
  {
    icon: Workflow,
    title: "CI/CD Integration",
    description: "Run evaluations in your pipeline. Catch quality regressions before they reach production.",
  },
  {
    icon: BarChart3,
    title: "Quality Dashboards",
    description: "Track quality over time with visual dashboards. Set alerts for quality degradation.",
  },
];

const useCases = [
  {
    icon: FileCheck,
    title: "Regression Testing",
    description: "Ensure prompt changes don't degrade output quality across your test suite.",
  },
  {
    icon: Beaker,
    title: "A/B Experiments",
    description: "Compare model versions and prompts with statistical significance testing.",
  },
  {
    icon: Target,
    title: "Production Monitoring",
    description: "Continuously evaluate production outputs and catch quality issues early.",
  },
];

const integrations = [
  { name: "pytest", logo: "/integrations/pytest.svg" },
  { name: "GitHub Actions", logo: "/integrations/github.svg" },
  { name: "LangChain", logo: "/integrations/langchain.svg" },
  { name: "OpenAI Evals", logo: "/integrations/openai.svg" },
  { name: "Weights & Biases", logo: "/integrations/wandb.svg" },
  { name: "CI/CD Pipelines", logo: "/integrations/cicd.svg" },
];

const codeExample = `from brokle import Brokle
from brokle.evals import LLMJudge, relevance

brokle = Brokle()

# Create an evaluator
evaluator = LLMJudge(
    criteria="Is the response helpful and accurate?",
    model="gpt-4"
)

# Run evaluation on your outputs
results = brokle.evaluate(
    evaluator=evaluator,
    dataset="my_test_cases",
    output_column="response"
)

print(f"Average score: {results.mean_score}")`;

export default function EvaluationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Evaluation Framework
              </Badge>
              <DisplayHeading as="h1" className="mb-6">
                Measure what{" "}
                <span className="text-primary">matters</span>
              </DisplayHeading>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Automated evaluations that go beyond vibes. Score outputs with LLM-as-judge,
                run A/B tests, and ship with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 h-12 px-8" asChild>
                  <Link href="https://app.brokle.ai/signup">
                    Start Evaluating Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="https://docs.brokle.ai/evaluation" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Preview Placeholder */}
            <div className="relative rounded-lg border bg-muted/30 overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Gauge className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Evaluation Dashboard Preview</p>
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
                title="Evaluate in minutes, not days"
                description="Define your criteria, point to your data, and get quality scores automatically."
                centered={false}
              />
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <span className="text-muted-foreground">Install the SDK: <code className="text-sm bg-muted px-2 py-0.5 rounded">pip install brokle</code></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <span className="text-muted-foreground">Define your evaluation criteria</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <span className="text-muted-foreground">Run <code className="text-sm bg-muted px-2 py-0.5 rounded">brokle.evaluate()</code> on your dataset</span>
                </li>
              </ul>
            </div>
            <div>
              <CodeBlock code={codeExample} language="python" title="eval.py" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Features"
            title="Beyond manual testing"
            description="Systematic evaluation that scales with your application and team."
          />
          <FeatureGrid features={features} columns={3} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Use Cases"
            title="Evaluate at every stage"
            description="From development to production, ensure quality throughout your LLM lifecycle."
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
            title="Fits into your workflow"
            description="Native integrations with testing frameworks and CI/CD pipelines."
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
        title="Ready to evaluate your LLM outputs?"
        description="Stop guessing about quality. Start measuring with automated evaluations."
        primaryCTA={{
          label: "Get Started Free",
          href: "https://app.brokle.ai/signup",
        }}
        secondaryCTA={{
          label: "View Documentation",
          href: "https://docs.brokle.ai/evaluation",
        }}
        features={["No credit card required", "Built-in evaluators", "CI/CD ready"]}
        variant="muted"
      />
    </>
  );
}
