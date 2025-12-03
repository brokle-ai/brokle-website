import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Eye, Github, Scale, Shield, Users, Heart, Lightbulb, Zap } from "lucide-react"
import Link from "next/link"
import { DisplayHeading, SectionHeader, CTASection } from "@/components/shared"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
            <DisplayHeading as="h1" className="mb-6">About Brokle</DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We&apos;re building the open-source observability platform that helps teams
              understand, debug, and improve their LLM applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Making AI Systems Observable</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As LLMs become central to software applications, teams need visibility into how
                their AI systems behave. Traditional monitoring tools weren&apos;t built for the
                unique challenges of LLM applications—non-deterministic outputs, complex prompt
                chains, and opaque model behavior.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brokle provides the observability layer that makes LLM applications transparent,
                debuggable, and improvable. We believe that open-source infrastructure is
                essential for building trustworthy AI systems.
              </p>
            </div>

            <div className="relative rounded-lg border bg-background p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Full Visibility</h3>
                    <p className="text-sm text-muted-foreground">See every LLM call, chain, and decision</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Developer-First</h3>
                    <p className="text-sm text-muted-foreground">Built by engineers, for engineers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Scale Without Limits</h3>
                    <p className="text-sm text-muted-foreground">From prototype to production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            description="These principles guide how we build our product and work with our community."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-none bg-muted/30">
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                  <Github className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Open Source First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our core is MIT licensed. We believe observability infrastructure should be
                  transparent, auditable, and community-driven. No vendor lock-in, ever.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-muted/30">
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Privacy by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Self-host to keep all data on your infrastructure. We never see your prompts,
                  completions, or business data. Your data stays yours.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-muted/30">
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                  <Users className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our roadmap is shaped by the community. We listen to feedback, welcome
                  contributions, and build what teams actually need.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Built Brokle */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Built Brokle</h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We started building LLM applications in 2023 and quickly hit a wall. When something
                went wrong—hallucinations, slow responses, unexpected costs—we had no way to
                understand what happened inside our AI pipelines.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Traditional APM tools showed us HTTP requests and database queries, but they
                couldn&apos;t tell us which prompt variant performed better, why a chain failed
                midway, or how much we were spending per feature.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Brokle to solve this problem—first for ourselves, then for every team
                building with LLMs. We made it open-source because we believe the infrastructure
                that powers AI applications should be transparent and accessible to everyone.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, Brokle helps thousands of teams debug, evaluate, and improve their LLM
                applications. Whether you&apos;re building a chatbot or a complex AI agent,
                Brokle gives you the visibility you need to ship with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <SectionHeader
            badge="Open Source"
            title="Built in the Open"
            description="Brokle is open-source at its core. Inspect the code, contribute features, or self-host on your own infrastructure."
          />

          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mb-12">
            <div className="p-6 rounded-lg bg-muted/30">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">MIT</div>
              <p className="text-muted-foreground font-medium">Licensed Core</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/30">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground font-medium">Contributors</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/30">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5K+</div>
              <p className="text-muted-foreground font-medium">GitHub Stars</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8" asChild>
              <Link href="https://github.com/brokle-ai/brokle" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 max-w-[1600px]">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with thousands of developers building LLM applications. Share knowledge,
              get help, and contribute to the future of AI observability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 h-12 px-8" asChild>
                <Link href="https://discord.gg/brokle" target="_blank" rel="noopener noreferrer">
                  Join Discord <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href="https://github.com/brokle-ai/brokle" target="_blank" rel="noopener noreferrer">
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection
        title="Get in Touch"
        description="Have questions about Brokle? Want to discuss enterprise requirements or partnership opportunities? We'd love to hear from you."
        primaryCTA={{
          label: "Contact Us",
          href: "/contact",
        }}
        secondaryCTA={{
          label: "Try Brokle Free",
          href: "https://app.brokle.ai/signup",
        }}
      />
    </>
  )
}
