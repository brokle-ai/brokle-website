import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  features?: string[]
  className?: string
  variant?: "default" | "muted"
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  features,
  className,
  variant = "default",
}: CTASectionProps) {
  return (
    <section className={cn(
      "py-16 md:py-20",
      variant === "muted" && "bg-muted/30",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 h-12 px-8" asChild>
              <Link href={primaryCTA.href}>
                {primaryCTA.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.label}
                </Link>
              </Button>
            )}
          </div>
          {features && features.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
              {features.map((feature, index) => (
                <span key={feature} className="flex items-center gap-2">
                  {index > 0 && <span className="text-border">|</span>}
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
