import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Expanded provider list similar to Helicone
const providers = [
  { name: "OpenAI", abbr: "OAI" },
  { name: "Anthropic", abbr: "ANT" },
  { name: "Google AI", abbr: "GGL" },
  { name: "Azure OpenAI", abbr: "AZR" },
  { name: "AWS Bedrock", abbr: "AWS" },
  { name: "Cohere", abbr: "COH" },
  { name: "Mistral", abbr: "MIS" },
  { name: "Groq", abbr: "GRQ" },
  { name: "Together AI", abbr: "TOG" },
  { name: "Fireworks", abbr: "FWK" },
  { name: "Replicate", abbr: "REP" },
  { name: "Ollama", abbr: "OLL" },
]

const frameworks = [
  { name: "LangChain", abbr: "LC" },
  { name: "LlamaIndex", abbr: "LI" },
  { name: "Vercel AI", abbr: "VAI" },
  { name: "OpenTelemetry", abbr: "OTL" },
  { name: "Instructor", abbr: "INS" },
  { name: "DSPy", abbr: "DSP" },
]

const sdks = [
  { name: "Python", badge: "pip install brokle" },
  { name: "TypeScript", badge: "npm i @brokle/sdk" },
  { name: "REST API", badge: "OpenAPI 3.0" },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Works With Your Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One SDK for 100+ models
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Native integrations with every major AI provider and framework.
            Drop-in compatibility with your existing code.
          </p>
        </div>

        {/* Provider Cloud - Similar to Helicone's floating logos */}
        <div className="max-w-5xl mx-auto mb-10">
          <p className="text-sm font-medium text-muted-foreground mb-6 text-center uppercase tracking-wider">
            AI Providers
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border bg-background hover:border-foreground/20 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-foreground/70">{provider.abbr}</span>
                </div>
                <span className="text-sm font-medium">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks - Compact pills */}
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-sm font-medium text-muted-foreground mb-6 text-center uppercase tracking-wider">
            Frameworks & Standards
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((framework) => (
              <div
                key={framework.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border bg-background hover:border-foreground/20 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">{framework.abbr}</span>
                </div>
                <span className="text-sm font-medium">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SDKs - Highlighted */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-6 text-center uppercase tracking-wider">
            Official SDKs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sdks.map((sdk) => (
              <div
                key={sdk.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-background hover:border-primary/50 transition-colors"
              >
                <span className="font-semibold">{sdk.name}</span>
                <code className="text-xs px-2 py-1 rounded bg-muted font-mono text-muted-foreground">
                  {sdk.badge}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/integrations">
              View All Integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
