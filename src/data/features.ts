import { Sparkles, Users, Layers, Zap, Code, Shield } from "lucide-react"
import { Feature } from "@/types/feature"

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI-Assisted Annotation",
    description:
      "Leverage machine learning to automate up to 80% of your labeling tasks with intelligent pre-labeling and suggestions.",
  },
  {
    icon: Users,
    title: "Collaborative Workspaces",
    description:
      "Work seamlessly with your team using real-time collaboration, role-based access control, and quality assurance workflows.",
  },
  {
    icon: Layers,
    title: "Multi-Format Support",
    description:
      "Label any data type with specialized tools for images, text, audio, video, and time-series data in one unified platform.",
  },
  {
    icon: Zap,
    title: "Automation & Workflows",
    description:
      "Create custom workflows with automated task assignment, review processes, and quality control to maximize efficiency.",
  },
  {
    icon: Code,
    title: "API & Integrations",
    description:
      "Connect with your existing ML pipeline through our comprehensive API and pre-built integrations with popular tools and services.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protect your sensitive data with SOC 2 compliance, end-to-end encryption, and granular access controls.",
  },
]
