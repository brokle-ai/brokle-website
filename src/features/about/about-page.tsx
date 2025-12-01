import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Heart, Lightbulb, Play, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Brokle</h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re on a mission to make data labeling faster, more accurate, and more accessible for AI teams of all
              sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold mb-6">Accelerating AI Development Through Better Data</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Brokle, we believe that high-quality training data is the foundation of successful AI. Our mission is
                to provide the tools and infrastructure that enable teams to create better datasets faster, ultimately
                accelerating the development of AI that benefits humanity.
              </p>
              <p className="text-lg text-muted-foreground">
                We&apos;re committed to making advanced data labeling technology accessible to organizations of all sizes,
                from startups to enterprises, and supporting the entire AI development lifecycle.
              </p>
            </div>

            <div className="relative rounded-lg border bg-background p-1 shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Brokle Team Collaboration"
                width={600}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do, from product development to customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We&apos;re constantly pushing the boundaries of what&apos;s possible in data labeling, leveraging the latest
                    advances in AI to make our platform more powerful and efficient.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We believe in the power of teams working together. Our platform is designed to facilitate seamless
                    collaboration across organizations of all sizes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle>Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our customers&apos; success is our success. We&apos;re dedicated to providing exceptional support and building
                    features that address real-world needs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Journey</Badge>
              <h2 className="text-3xl font-bold mb-4">The Brokle Story</h2>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-2">
                    <span className="font-bold">2021</span>
                  </div>
                  <div className="w-1 bg-border h-full hidden md:block mt-2"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground mb-4">
                    Brokle was founded by a team of AI researchers and engineers who experienced firsthand the
                    challenges of creating high-quality training datasets. Frustrated by the limitations of existing
                    tools, they set out to build a better solution.
                  </p>
                  <div className="relative rounded-lg border overflow-hidden aspect-[2/1]">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Brokle Founding Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-2">
                    <span className="font-bold">2022</span>
                  </div>
                  <div className="w-1 bg-border h-full hidden md:block mt-2"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Early Growth</h3>
                  <p className="text-muted-foreground mb-4">
                    After launching our beta product, we quickly gained traction with AI startups and research labs.
                    Their feedback was invaluable in shaping our platform and prioritizing features that solved real
                    problems.
                  </p>
                  <div className="relative rounded-lg border overflow-hidden aspect-[2/1]">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Brokle Early Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-2">
                    <span className="font-bold">2023</span>
                  </div>
                  <div className="w-1 bg-border h-full hidden md:block mt-2"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Enterprise Expansion</h3>
                  <p className="text-muted-foreground mb-4">
                    As our platform matured, we began working with larger enterprises and expanded our feature set to
                    include advanced security, compliance, and collaboration capabilities. This period saw rapid growth
                    in our team and customer base.
                  </p>
                  <div className="relative rounded-lg border overflow-hidden aspect-[2/1]">
                    <Image src="/placeholder.svg?height=300&width=600" alt="Brokle Office" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-2">
                    <span className="font-bold">2024</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Today & Beyond</h3>
                  <p className="text-muted-foreground mb-4">
                    Today, Brokle is used by thousands of organizations worldwide, from startups to Fortune 500
                    companies. We&apos;re continuing to innovate and expand our platform, with a focus on AI-assisted
                    labeling, multimodal data support, and enterprise features.
                  </p>
                  <div className="relative rounded-lg border overflow-hidden aspect-[2/1]">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Brokle Team Today"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Team</Badge>
              <h2 className="text-3xl font-bold mb-4">Leadership</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the team driving Brokle&apos;s mission forward.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full overflow-hidden w-32 h-32 mb-4 relative">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Sarah Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Sarah Chen</CardTitle>
                  <CardDescription className="text-base">Co-Founder & CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Former AI research lead with 10+ years of experience in computer vision and machine learning.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full overflow-hidden w-32 h-32 mb-4 relative">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Michael Rodriguez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Michael Rodriguez</CardTitle>
                  <CardDescription className="text-base">Co-Founder & CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Software architect with expertise in building scalable cloud platforms and AI infrastructure.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full overflow-hidden w-32 h-32 mb-4 relative">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Emily Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Emily Johnson</CardTitle>
                  <CardDescription className="text-base">Chief Product Officer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Product leader with a background in UX design and a passion for creating intuitive user experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Global Presence</Badge>
              <h2 className="text-3xl font-bold mb-4">We&apos;re Worldwide</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                With offices and team members across the globe, we support customers in over 50 countries.
              </p>
            </div>

            <div className="relative rounded-lg border bg-background p-4 shadow-lg">
              <div className="flex items-center justify-center">
                <Globe className="h-64 w-64 text-primary/20" />
              </div>

              <div className="absolute top-1/4 left-1/4 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm">
                San Francisco
              </div>

              <div className="absolute top-1/3 right-1/3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm">
                London
              </div>

              <div className="absolute bottom-1/3 right-1/4 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm">
                Singapore
              </div>

              <div className="absolute bottom-1/4 left-1/3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm">
                Sydney
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Careers</Badge>
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We&apos;re always looking for talented individuals who are passionate about AI and data labeling.
            </p>
            <Button size="lg" className="gap-2">
              View Open Positions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about Brokle or want to learn more about our company? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Book a Demo <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

