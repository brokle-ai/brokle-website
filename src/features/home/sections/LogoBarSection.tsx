const companies = [
  "Acme AI",
  "TechFlow",
  "DataSync",
  "CloudBase",
  "NeuralOps",
  "Intellisoft",
  "QuantumLab",
  "AIForge",
]

export function LogoBarSection() {
  return (
    <section className="py-12 md:py-16 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by AI teams at leading companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 lg:gap-x-16 gap-y-4">
          {companies.map((company) => (
            <span
              key={company}
              className="text-sm font-medium text-foreground/40 hover:text-foreground/70 transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
