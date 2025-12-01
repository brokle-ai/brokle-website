'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy } from "lucide-react"

const codeExamples = {
  python: `from brokle import Brokle

# Initialize the client
brokle = Brokle(api_key="bk_...")

# Wrap your OpenAI client
from openai import OpenAI
client = OpenAI()

# Automatic tracing - just use OpenAI as usual
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

# That's it! Traces appear in your dashboard`,
  typescript: `import { Brokle } from '@brokle/sdk';
import OpenAI from 'openai';

// Initialize Brokle
const brokle = new Brokle({ apiKey: 'bk_...' });

// Wrap your OpenAI client
const openai = new OpenAI();

// Automatic tracing - just use OpenAI as usual
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});

// That's it! Traces appear in your dashboard`,
  langchain: `from langchain_openai import ChatOpenAI
from brokle.integrations.langchain import BrokleCallbackHandler

# Initialize the callback handler
handler = BrokleCallbackHandler(api_key="bk_...")

# Use with any LangChain component
llm = ChatOpenAI(model="gpt-4", callbacks=[handler])

# All chains, agents, and tools are traced automatically
response = llm.invoke("What is LangChain?")

# View detailed traces with token counts and latency`,
}

export function CodeExampleSection() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const copyToClipboard = (code: string, tab: string) => {
    navigator.clipboard.writeText(code)
    setCopiedTab(tab)
    setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get Started in Minutes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Add observability with 2 lines of code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drop-in SDKs for Python and TypeScript. No code changes required.
            Your existing LLM calls are traced automatically.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="python" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList className="grid w-auto grid-cols-3">
                <TabsTrigger value="python" className="text-sm">
                  Python
                </TabsTrigger>
                <TabsTrigger value="typescript" className="text-sm">
                  TypeScript
                </TabsTrigger>
                <TabsTrigger value="langchain" className="text-sm">
                  LangChain
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(codeExamples).map(([key, code]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="relative rounded-lg border bg-zinc-950 text-zinc-50 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs text-zinc-400 ml-2">
                        {key === "python" && "app.py"}
                        {key === "typescript" && "app.ts"}
                        {key === "langchain" && "chain.py"}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800"
                      onClick={() => copyToClipboard(code, key)}
                    >
                      {copiedTab === key ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="font-mono">{code}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Features below code */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">&lt;5 min</div>
              <div className="text-sm text-muted-foreground">Setup time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">0%</div>
              <div className="text-sm text-muted-foreground">Code changes needed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Trace coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
