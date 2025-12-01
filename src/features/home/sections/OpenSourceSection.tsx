'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Star, GitFork, Users, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "@/components/custom/motion"

const stats = [
  { icon: Star, label: "GitHub Stars", value: "1.2k+" },
  { icon: GitFork, label: "Forks", value: "150+" },
  { icon: Users, label: "Contributors", value: "25+" },
]

const benefits = [
  {
    title: "Self-Host Anywhere",
    description: "Run Brokle on your own infrastructure. Docker, Kubernetes, or bare metal.",
  },
  {
    title: "No Vendor Lock-in",
    description: "Your data stays yours. Export everything, migrate anytime.",
  },
  {
    title: "Community Driven",
    description: "Shape the roadmap. Contribute features. Join the discussion.",
  },
  {
    title: "Enterprise Ready",
    description: "Same open-source core with enterprise features for teams.",
  },
]

export function OpenSourceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Open Source
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built in the open, for everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Brokle is open-source at its core. Inspect the code, self-host on your
              infrastructure, or contribute to the project. No black boxes.
            </p>

            {/* GitHub Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50"
                >
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2" asChild>
                <Link
                  href="https://github.com/brokle-ai/brokle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="https://docs.brokle.ai/self-hosting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Self-Hosting Guide <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-none bg-muted/50">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by teams building production AI applications
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Badge variant="outline" className="px-4 py-2">
              SOC 2 Type II
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              HIPAA Ready
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              OpenTelemetry Native
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
