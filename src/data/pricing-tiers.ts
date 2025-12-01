import type { PricingTier, AddOn } from "@/types/pricing"

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: {
      monthly: 0,
      annual: 0,
    },
    priceDisplay: {
      monthly: "$0",
      annual: "$0",
    },
    description: "Perfect for individuals and small projects.",
    highlighted: false,
    features: [
      "Up to 5,000 annotations",
      "1 user",
      "Basic annotation tools",
      "5 projects",
      "Community support",
    ],
    cta: {
      text: "Get Started",
      href: "/start-labeling",
      variant: "outline",
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 49,
      annual: 39,
    },
    priceDisplay: {
      monthly: "$49",
      annual: "$39",
    },
    description: "For teams that need advanced features and collaboration.",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited annotations",
      "Up to 10 users",
      "Advanced annotation tools",
      "AI-assisted labeling",
      "Unlimited projects",
      "API access",
      "Email & chat support",
    ],
    cta: {
      text: "Start Free Trial",
      href: "/start-labeling",
      variant: "default",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: null,
      annual: null,
    },
    priceDisplay: {
      monthly: "Custom",
      annual: "Custom",
    },
    description: "For organizations with advanced security and scaling needs.",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited users",
      "SSO & advanced security",
      "Custom integrations",
      "On-premises deployment option",
      "Dedicated account manager",
      "Custom SLA",
    ],
    cta: {
      text: "Contact Sales",
      href: "/contact",
      variant: "outline",
    },
  },
]

export const addOns: AddOn[] = [
  {
    id: "additional-users",
    name: "Additional Users",
    price: 10,
    priceUnit: "/user/month",
    description: "Add more users to your Pro plan beyond the included limit.",
    features: [
      "Full access to all features",
      "Individual user analytics",
    ],
  },
  {
    id: "advanced-ai",
    name: "Advanced AI",
    price: 99,
    priceUnit: "/month",
    description: "Unlock more powerful AI-assisted labeling capabilities.",
    features: [
      "Custom model training",
      "Advanced auto-labeling",
      "Active learning workflows",
    ],
  },
  {
    id: "premium-support",
    name: "Premium Support",
    price: 199,
    priceUnit: "/month",
    description: "Get priority support and dedicated assistance.",
    features: [
      "24/7 priority support",
      "Dedicated support engineer",
      "Monthly check-in calls",
      "Custom training sessions",
    ],
  },
]
