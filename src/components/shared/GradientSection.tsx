import { cn } from "@/lib/utils"

type GradientVariant = "warm" | "cool" | "dark" | "none"

interface GradientSectionProps {
  children: React.ReactNode
  variant?: GradientVariant
  className?: string
  containerClassName?: string
  as?: "section" | "div"
}

const gradientStyles: Record<GradientVariant, string> = {
  warm: "bg-gradient-to-br from-gradient-warm-from to-gradient-warm-to",
  cool: "bg-gradient-to-br from-gradient-cool-from to-gradient-cool-to",
  dark: "bg-gradient-to-br from-gradient-dark-from to-gradient-dark-to text-white",
  none: "bg-background",
}

export function GradientSection({
  children,
  variant = "none",
  className,
  containerClassName,
  as: Component = "section",
}: GradientSectionProps) {
  return (
    <Component
      className={cn(
        "py-20 md:py-28 lg:py-32",
        gradientStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          "container px-4 mx-auto max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  )
}
