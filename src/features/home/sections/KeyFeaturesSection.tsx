import { Badge } from "@/components/ui/badge"
import { features } from "@/data/features"

export function KeyFeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Features & Benefits</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Supercharge Your Data Labeling</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to streamline your workflow with powerful AI assistance and flexible tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
