import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Code, Globe, Heart, MapPin, Rocket, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import { DisplayHeading, SectionHeader, CTASection } from "@/components/shared"

const openPositions = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Build scalable infrastructure for processing millions of LLM traces. Go, PostgreSQL, ClickHouse experience preferred.",
    href: "#",
  },
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Create intuitive interfaces for exploring and debugging LLM applications. React, TypeScript, and data visualization experience.",
    href: "#",
  },
  {
    title: "Developer Advocate",
    department: "Developer Relations",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Help developers succeed with Brokle. Create content, speak at conferences, and engage with the community.",
    href: "#",
  },
  {
    title: "Solutions Engineer",
    department: "Sales",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Work with enterprise customers to design and implement LLM observability solutions.",
    href: "#",
  },
]

const values = [
  {
    title: "Open Source First",
    description: "We build in the open. Our core is MIT licensed and we believe in transparency.",
    icon: Code,
  },
  {
    title: "Remote Native",
    description: "Work from anywhere. We're a distributed team across the globe.",
    icon: Globe,
  },
  {
    title: "Impact Driven",
    description: "Ship fast, learn faster. Every team member has direct impact on our product.",
    icon: Rocket,
  },
  {
    title: "Customer Obsessed",
    description: "We build what developers need. Customer feedback drives our roadmap.",
    icon: Heart,
  },
]

const benefits = [
  "Competitive salary + equity",
  "Remote-first culture",
  "Flexible working hours",
  "Unlimited PTO",
  "Health, dental, and vision",
  "Home office stipend",
  "Learning & development budget",
  "Annual team retreats",
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">We're Hiring</Badge>
            <DisplayHeading as="h1" className="mb-6">Join Our Team</DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Help us build the future of LLM observability. We're looking for talented
              people who are passionate about AI and developer tools.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeader
            badge="Values"
            title="Our Values"
            description="The principles that guide how we work together."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-none bg-background text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-20" id="positions">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Positions"
              title="Open Positions"
              description="Find your next role and help shape the future of AI observability."
            />

            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.title} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{position.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {position.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <Badge variant="secondary">{position.type}</Badge>
                        </div>
                      </div>
                      <Button className="gap-2" asChild>
                        <Link href={position.href}>
                          Apply Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for talented people.
              </p>
              <Button variant="outline" asChild>
                <Link href="mailto:careers@brokle.ai">
                  Send General Application
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              badge="Benefits"
              title="Benefits & Perks"
              description="We take care of our team so they can do their best work."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Team</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With Great People</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We're a small but growing team of engineers, designers, and business
                  people who are passionate about making AI systems more observable
                  and debuggable.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our team comes from companies like Google, Meta, Stripe, and Datadog.
                  We bring decades of experience in developer tools, infrastructure,
                  and machine learning.
                </p>
                <Button className="gap-2 h-12 px-8" asChild>
                  <Link href="/about">
                    Learn About Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Remote</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">MIT</div>
                      <div className="text-sm text-muted-foreground">Open Source</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Make an Impact?"
        description="Join us in building the observability platform that helps teams understand and improve their AI applications."
        primaryCTA={{
          label: "View Open Positions",
          href: "#positions",
        }}
        secondaryCTA={{
          label: "Learn About Brokle",
          href: "/about",
        }}
        variant="muted"
      />
    </>
  )
}
