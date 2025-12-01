import { Badge } from "@/components/ui/badge"
import { BarChart3, MessageSquare, Settings, Users } from "lucide-react"
import Image from "next/image"

export function CollaborationSection() {
  return (
    <section id="collaboration" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl border bg-background shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Collaboration Dashboard"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Badge className="mb-4">Team Collaboration</Badge>
            <h2 className="text-3xl font-bold mb-6">Collaboration & Workflow Management</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enable seamless teamwork with powerful collaboration tools and customizable workflows.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Multi-user Workspaces</h3>
                  <p className="text-muted-foreground">
                    Organize projects and team members with dedicated collaborative spaces and custom roles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Custom Workflows</h3>
                  <p className="text-muted-foreground">
                    Create multi-stage annotation workflows with review processes and quality control gates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Real-time Collaboration</h3>
                  <p className="text-muted-foreground">
                    Work together in real-time with comments, annotations, and instant feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Performance Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor individual and team performance with detailed metrics and reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

