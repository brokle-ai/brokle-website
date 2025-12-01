import { cn } from "@/lib/utils"

interface IsometricIllustrationProps {
  className?: string
}

// Modern isometric illustration showing AI observability flow
// Design principles: layered depth, subtle gradients, refined geometry
export function IsometricIllustration({ className }: IsometricIllustrationProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[300px] md:min-h-[400px]", className)}>
      <svg
        viewBox="0 0 440 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Definitions for gradients and filters */}
        <defs>
          {/* Subtle grid pattern */}
          <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-foreground/[0.04]"
            />
          </pattern>

          {/* Soft shadow filter */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.06" />
          </filter>

          {/* Gradient for central hub */}
          <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-foreground/12" />
            <stop offset="100%" stopColor="currentColor" className="text-foreground/4" />
          </linearGradient>

          {/* Gradient for cards */}
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-foreground/6" />
            <stop offset="100%" stopColor="currentColor" className="text-foreground/2" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <rect width="440" height="380" fill="url(#heroGrid)" />

        {/* === AMBIENT GLOW (background atmosphere) === */}
        <circle cx="220" cy="175" r="100" className="fill-foreground/[0.015]" />
        <circle cx="220" cy="175" r="60" className="fill-foreground/[0.02]" />

        {/* === CONNECTION LINES (draw first, behind everything) === */}
        {/* All lines connect to inner ellipse edge (center: 220,165, rx:28, ry:15) */}
        {/* Ellipse bounds: Left ~192, Right ~248, Top ~150, Bottom ~180 */}
        <g className="text-foreground/[0.12]">
          {/* Input to Hub - from bottom-center of Input card to top-left of inner ellipse */}
          <path
            id="pathInputToHub"
            d="M 82 95 Q 140 125, 195 155"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Output to Hub - from bottom-center of Output card to top-right of inner ellipse */}
          <path
            id="pathOutputToHub"
            d="M 357 95 Q 300 125, 245 155"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Prompts to Hub - from top-center of Prompts card to bottom-left of inner ellipse */}
          <path
            id="pathPromptsToHub"
            d="M 95 255 Q 140 210, 195 175"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Metrics to Hub - from top of Metrics card to bottom edge of hub platform surface */}
          <path
            id="pathMetricsToHub"
            d="M 220 280 L 220 193"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Evaluation to Hub - from top-center of Evaluation card to bottom-right of inner ellipse */}
          <path
            id="pathEvaluationToHub"
            d="M 345 255 Q 300 210, 245 175"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </g>

        {/* === CENTRAL HUB - 3D Isometric Platform === */}
        <g transform="translate(220, 175)" filter="url(#softShadow)">
          {/* Platform shadow */}
          <ellipse cx="0" cy="20" rx="55" ry="30" className="fill-foreground/[0.04]" />

          {/* Platform base (3D sides) */}
          <path
            d="M -50 0 L 0 28 L 50 0 L 50 -10 L 0 18 L -50 -10 Z"
            className="fill-foreground/[0.06]"
          />

          {/* Platform top surface */}
          <path
            d="M -50 -10 L 0 18 L 50 -10 L 0 -38 Z"
            fill="url(#hubGradient)"
            className="stroke-foreground/[0.12]"
            strokeWidth="1"
          />

          {/* Inner ring on platform */}
          <ellipse
            cx="0"
            cy="-10"
            rx="28"
            ry="15"
            className="fill-none stroke-foreground/[0.15]"
            strokeWidth="1"
            strokeDasharray="3 2"
          />

          {/* Central indicator dot */}
          <circle cx="0" cy="-10" r="6" className="fill-foreground/[0.15]" />
          <circle cx="0" cy="-10" r="3" className="fill-foreground/30">
            <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* === INPUT NODE (Top Left) === */}
        <g transform="translate(40, 35)" filter="url(#softShadow)">
          {/* Card */}
          <rect
            x="0"
            y="0"
            width="85"
            height="60"
            rx="8"
            fill="url(#cardGradient)"
            className="stroke-foreground/[0.08]"
            strokeWidth="1"
          />

          {/* Card header bar */}
          <rect x="10" y="10" width="35" height="5" rx="2.5" className="fill-foreground/[0.12]" />

          {/* Card content lines */}
          <rect x="10" y="22" width="60" height="3" rx="1.5" className="fill-foreground/[0.06]" />
          <rect x="10" y="30" width="45" height="3" rx="1.5" className="fill-foreground/[0.05]" />
          <rect x="10" y="38" width="52" height="3" rx="1.5" className="fill-foreground/[0.04]" />

          {/* Label */}
          <text
            x="42"
            y="55"
            textAnchor="middle"
            className="fill-foreground/30"
            fontSize="8"
            fontFamily="ui-monospace, monospace"
          >
            Input
          </text>
        </g>

        {/* === OUTPUT NODE (Top Right) === */}
        <g transform="translate(315, 35)" filter="url(#softShadow)">
          {/* Card */}
          <rect
            x="0"
            y="0"
            width="85"
            height="60"
            rx="8"
            fill="url(#cardGradient)"
            className="stroke-foreground/[0.08]"
            strokeWidth="1"
          />

          {/* Card header bar */}
          <rect x="10" y="10" width="35" height="5" rx="2.5" className="fill-foreground/[0.12]" />

          {/* Card content lines */}
          <rect x="10" y="22" width="60" height="3" rx="1.5" className="fill-foreground/[0.06]" />
          <rect x="10" y="30" width="50" height="3" rx="1.5" className="fill-foreground/[0.05]" />
          <rect x="10" y="38" width="55" height="3" rx="1.5" className="fill-foreground/[0.04]" />

          {/* Label */}
          <text
            x="42"
            y="55"
            textAnchor="middle"
            className="fill-foreground/30"
            fontSize="8"
            fontFamily="ui-monospace, monospace"
          >
            Output
          </text>
        </g>

        {/* === PROMPTS NODE (Bottom Left) === */}
        <g transform="translate(45, 255)" filter="url(#softShadow)">
          {/* Card */}
          <rect
            x="0"
            y="0"
            width="100"
            height="55"
            rx="8"
            fill="url(#cardGradient)"
            className="stroke-foreground/[0.08]"
            strokeWidth="1"
          />

          {/* Prompt template icon - document with lines */}
          <rect x="18" y="15" width="20" height="24" rx="2" className="fill-foreground/[0.06] stroke-foreground/[0.12]" strokeWidth="1" />
          <rect x="22" y="20" width="12" height="2" rx="1" className="fill-foreground/20" />
          <rect x="22" y="25" width="10" height="2" rx="1" className="fill-foreground/15" />
          <rect x="22" y="30" width="8" height="2" rx="1" className="fill-foreground/10" />

          {/* Version indicator */}
          <text x="80" y="18" textAnchor="middle" className="fill-foreground/25" fontSize="7" fontWeight="500">v2.1</text>

          {/* Template variables */}
          <rect x="46" y="22" width="40" height="3" rx="1.5" className="fill-foreground/[0.08]" />
          <rect x="46" y="30" width="30" height="3" rx="1.5" className="fill-foreground/[0.06]" />

          {/* Label */}
          <text
            x="50"
            y="50"
            textAnchor="middle"
            className="fill-foreground/25"
            fontSize="7"
            fontFamily="ui-monospace, monospace"
          >
            Prompts
          </text>
        </g>

        {/* === METRICS NODE (Bottom Center) === */}
        <g transform="translate(165, 280)" filter="url(#softShadow)">
          {/* Card */}
          <rect
            x="0"
            y="0"
            width="110"
            height="70"
            rx="8"
            fill="url(#cardGradient)"
            className="stroke-foreground/[0.08]"
            strokeWidth="1"
          />

          {/* Mini bar chart */}
          <g transform="translate(15, 15)">
            <rect x="0" y="22" width="10" height="18" rx="2" className="fill-foreground/[0.1]" />
            <rect x="14" y="14" width="10" height="26" rx="2" className="fill-foreground/[0.14]" />
            <rect x="28" y="18" width="10" height="22" rx="2" className="fill-foreground/[0.08]" />
            <rect x="42" y="6" width="10" height="34" rx="2" className="fill-foreground/[0.18]">
              <animate attributeName="opacity" values="0.18;0.28;0.18" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="56" y="12" width="10" height="28" rx="2" className="fill-foreground/[0.12]" />
          </g>

          {/* Label */}
          <text
            x="55"
            y="64"
            textAnchor="middle"
            className="fill-foreground/25"
            fontSize="7"
            fontFamily="ui-monospace, monospace"
          >
            Metrics
          </text>
        </g>

        {/* === EVALUATION NODE (Bottom Right) === */}
        <g transform="translate(295, 255)" filter="url(#softShadow)">
          {/* Card */}
          <rect
            x="0"
            y="0"
            width="100"
            height="55"
            rx="8"
            fill="url(#cardGradient)"
            className="stroke-foreground/[0.08]"
            strokeWidth="1"
          />

          {/* Check circle */}
          <circle cx="26" cy="24" r="12" className="fill-foreground/[0.08] stroke-foreground/[0.15]" strokeWidth="1" />
          <path
            d="M 20 24 L 24 28 L 32 19"
            className="stroke-foreground/30"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Score display */}
          <text x="68" y="22" textAnchor="middle" className="fill-foreground/40" fontSize="11" fontWeight="600">0.94</text>
          <rect x="48" y="28" width="36" height="3" rx="1.5" className="fill-foreground/[0.08]" />
          <rect x="48" y="28" width="32" height="3" rx="1.5" className="fill-foreground/[0.15]" />

          {/* Label */}
          <text
            x="50"
            y="50"
            textAnchor="middle"
            className="fill-foreground/25"
            fontSize="7"
            fontFamily="ui-monospace, monospace"
          >
            Evaluation
          </text>
        </g>

        {/* === ANIMATED DATA PARTICLES (following curved paths) === */}
        {/* All particles uniform size r="2" */}
        {/* Particle: Input to Hub - follows the curve path */}
        <circle r="2" className="fill-foreground/30">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#pathInputToHub" />
          </animateMotion>
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Particle: Output to Hub - follows the curve path */}
        <circle r="2" className="fill-foreground/30">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#pathOutputToHub" />
          </animateMotion>
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.2s" repeatCount="indefinite" />
        </circle>

        {/* Particle: Prompts to Hub - follows the curve path */}
        <circle r="2" className="fill-foreground/30">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#pathPromptsToHub" />
          </animateMotion>
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* Particle: Metrics to Hub - follows the curve path */}
        <circle r="2" className="fill-foreground/30">
          <animateMotion
            dur="2.8s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#pathMetricsToHub" />
          </animateMotion>
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Particle: Evaluation to Hub - follows the curve path */}
        <circle r="2" className="fill-foreground/30">
          <animateMotion
            dur="3.3s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#pathEvaluationToHub" />
          </animateMotion>
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.3s" repeatCount="indefinite" />
        </circle>

        {/* === DECORATIVE DOTS === */}
        <circle cx="30" cy="180" r="1.5" className="fill-foreground/[0.08]" />
        <circle cx="410" cy="180" r="1.5" className="fill-foreground/[0.08]" />
        <circle cx="220" cy="360" r="1.5" className="fill-foreground/[0.08]" />
      </svg>
    </div>
  )
}
