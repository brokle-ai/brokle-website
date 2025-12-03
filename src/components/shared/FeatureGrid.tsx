import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
  cardVariant?: "default" | "muted" | "outline"
}

export function FeatureGrid({
  features,
  columns = 3,
  className,
  cardVariant = "default",
}: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const cardStyles = {
    default: "border-0 shadow-none bg-background",
    muted: "border-0 shadow-none bg-muted/50",
    outline: "bg-background",
  }

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {features.map((feature) => (
        <Card key={feature.title} className={cardStyles[cardVariant]}>
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
