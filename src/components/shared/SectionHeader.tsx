import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {badge && (
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-muted-foreground leading-relaxed",
          centered && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
