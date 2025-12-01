'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "@/components/custom/motion"

const providers = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Google AI", logo: "/logos/google.svg" },
  { name: "Azure OpenAI", logo: "/logos/azure.svg" },
  { name: "Cohere", logo: "/logos/cohere.svg" },
  { name: "Mistral", logo: "/logos/mistral.svg" },
]

const frameworks = [
  { name: "LangChain", logo: "/logos/langchain.svg" },
  { name: "LangGraph", logo: "/logos/langgraph.svg" },
  { name: "LlamaIndex", logo: "/logos/llamaindex.svg" },
  { name: "Vercel AI SDK", logo: "/logos/vercel.svg" },
  { name: "Haystack", logo: "/logos/haystack.svg" },
  { name: "OpenTelemetry", logo: "/logos/opentelemetry.svg" },
]

const sdks = [
  { name: "Python", badge: "pip install brokle" },
  { name: "TypeScript", badge: "npm i @brokle/sdk" },
  { name: "REST API", badge: "OpenAPI 3.0" },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Works With Your Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integrates with every LLM provider and framework
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Native integrations with popular AI providers and frameworks.
            Get started in minutes with a few lines of code.
          </p>
        </div>

        {/* Providers */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
            AI Providers
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {providers.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-4 rounded-lg border bg-background hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 mb-2 flex items-center justify-center text-muted-foreground">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center text-xs font-medium">
                    {provider.name.slice(0, 2)}
                  </div>
                </div>
                <span className="text-xs font-medium text-center">{provider.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
            Frameworks & Standards
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-4 rounded-lg border bg-background hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 mb-2 flex items-center justify-center text-muted-foreground">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center text-xs font-medium">
                    {framework.name.slice(0, 2)}
                  </div>
                </div>
                <span className="text-xs font-medium text-center">{framework.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
            Official SDKs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {sdks.map((sdk) => (
              <div
                key={sdk.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background"
              >
                <span className="font-medium text-sm">{sdk.name}</span>
                <Badge variant="secondary" className="text-xs font-mono">
                  {sdk.badge}
                </Badge>
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
