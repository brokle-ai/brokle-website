import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DisplayHeading } from "@/components/shared"

const providers = [
  "OpenAI",
  "Anthropic",
  "Google AI",
  "Azure OpenAI",
  "AWS Bedrock",
  "Cohere",
  "Mistral",
  "Groq",
  "Together AI",
  "Fireworks",
  "Replicate",
  "Ollama",
]

const frameworks = [
  "LangChain",
  "LlamaIndex",
  "Vercel AI",
  "OpenTelemetry",
  "Instructor",
  "DSPy",
]

const sdks = [
  { name: "Python", command: "pip install brokle" },
  { name: "TypeScript", command: "npm i @brokle/sdk" },
  { name: "REST API", command: "OpenAPI 3.0" },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            Works with your entire stack
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Native integrations with every major AI provider and framework.
            Drop-in compatibility with your existing code.
          </p>
        </div>

        {/* Providers */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 text-center">
            AI Providers
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {providers.map((provider) => (
              <span
                key={provider}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 text-center">
            Frameworks & Standards
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
            {frameworks.map((framework) => (
              <span
                key={framework}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 text-center">
            Official SDKs
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="text-center">
                <span className="text-sm font-semibold block mb-1">{sdk.name}</span>
                <code className="text-xs text-muted-foreground font-mono">
                  {sdk.command}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
          >
            View all integrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
