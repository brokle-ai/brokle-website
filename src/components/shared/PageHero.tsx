import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { DisplayHeading } from "./DisplayHeading"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  description: string
  primaryCTA?: {
    label: string
    href: string
    icon?: boolean
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  centered?: boolean
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  centered = true,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("py-16 md:py-24 lg:py-28", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
        <div className={cn("max-w-4xl", centered && "mx-auto text-center")}>
          {badge && (
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {badge}
            </Badge>
          )}
          <DisplayHeading as="h1" className="mb-6">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-primary">{titleHighlight}</span>
              </>
            )}
          </DisplayHeading>
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed",
            centered && "max-w-2xl mx-auto"
          )}>
            {description}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className={cn(
              "flex flex-col sm:flex-row gap-4",
              centered && "justify-center"
            )}>
              {primaryCTA && (
                <Button size="lg" className="gap-2 h-12 px-8" asChild>
                  <Link href={primaryCTA.href}>
                    {primaryCTA.label}
                    {primaryCTA.icon !== false && <ArrowRight className="h-4 w-4" />}
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href={secondaryCTA.href}>
                    {secondaryCTA.label}
                  </Link>
                </Button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
