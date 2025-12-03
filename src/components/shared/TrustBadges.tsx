import { Shield, Lock, Award, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadge {
  icon: React.ElementType
  label: string
}

const defaultBadges: TrustBadge[] = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "GDPR Compliant" },
  { icon: Award, label: "ISO 27001" },
  { icon: CheckCircle, label: "HIPAA Ready" },
]

interface TrustBadgesProps {
  badges?: TrustBadge[]
  className?: string
  variant?: "default" | "compact"
}

export function TrustBadges({
  badges = defaultBadges,
  className,
  variant = "default",
}: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground", className)}>
        {badges.map((badge, index) => (
          <span key={badge.label} className="flex items-center gap-2">
            {index > 0 && <span className="text-border">|</span>}
            <badge.icon className="h-4 w-4" />
            {badge.label}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-8", className)}>
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/30"
        >
          <badge.icon className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
