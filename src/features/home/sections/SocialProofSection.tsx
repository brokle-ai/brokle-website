import { Star, Download, Users, GitBranch } from "lucide-react"

// Placeholder customer logos - similar to Helicone/Phoenix patterns
const customers = [
  { name: "Acme AI", initials: "AI" },
  { name: "TechCorp", initials: "TC" },
  { name: "DataFlow", initials: "DF" },
  { name: "MLOps Inc", initials: "ML" },
  { name: "ScaleAI", initials: "SA" },
  { name: "NeuralNet", initials: "NN" },
]

// Metrics similar to Phoenix/Langfuse
const metrics = [
  { icon: Star, value: "1.2K+", label: "GitHub Stars" },
  { icon: Download, value: "50K+", label: "Monthly Downloads" },
  { icon: Users, value: "500+", label: "Teams" },
  { icon: GitBranch, value: "100%", label: "Open Source" },
]

export function SocialProofSection() {
  return (
    <section className="py-12 border-y bg-muted/20">
      <div className="container px-4 mx-auto">
        {/* Metrics Row - Similar to Phoenix */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Logos */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by teams building production AI applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-background/50 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground/70">{customer.initials}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{customer.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
