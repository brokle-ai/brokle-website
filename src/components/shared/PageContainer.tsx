import { cn } from "@/lib/utils"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section"
  background?: "default" | "muted"
}

export function PageContainer({
  children,
  className,
  as: Component = "section",
  background = "default",
}: PageContainerProps) {
  return (
    <Component
      className={cn(
        "py-16 md:py-20",
        background === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
        {children}
      </div>
    </Component>
  )
}
