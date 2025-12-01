import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Check, X } from "lucide-react"
import Link from "next/link"

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Feature Comparison</Badge>
            <h2 className="text-3xl font-bold mb-4">Compare Plan Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what&apos;s included in each plan to find the right fit for your team.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="border rounded-lg bg-background">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Feature</TableHead>
                  <TableHead className="text-center">Free</TableHead>
                  <TableHead className="text-center bg-primary/5">Pro</TableHead>
                  <TableHead className="text-center">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Data Volume */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Data Volume</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Annotations</TableCell>
                  <TableCell className="text-center">5,000</TableCell>
                  <TableCell className="text-center bg-primary/5">Unlimited</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Projects</TableCell>
                  <TableCell className="text-center">5</TableCell>
                  <TableCell className="text-center bg-primary/5">Unlimited</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Storage</TableCell>
                  <TableCell className="text-center">5 GB</TableCell>
                  <TableCell className="text-center bg-primary/5">100 GB</TableCell>
                  <TableCell className="text-center">Custom</TableCell>
                </TableRow>

                {/* Team & Collaboration */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Team & Collaboration</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Team Members</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center bg-primary/5">Up to 10</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Workspaces</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center bg-primary/5">Multiple</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Role-Based Access Control</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Review Workflows</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* AI Features */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>AI Features</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Pre-labeling</TableCell>
                  <TableCell className="text-center">Basic</TableCell>
                  <TableCell className="text-center bg-primary/5">Advanced</TableCell>
                  <TableCell className="text-center">Custom</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Auto-labeling</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Active Learning</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">Basic</TableCell>
                  <TableCell className="text-center">Advanced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Custom Model Integration</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">Limited</TableCell>
                  <TableCell className="text-center">Full</TableCell>
                </TableRow>

                {/* Data Types */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Data Types</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Images</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Text</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Audio</TableCell>
                  <TableCell className="text-center">Basic</TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Video</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Time-series</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* Integrations */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Integrations</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">API Access</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Cloud Storage</TableCell>
                  <TableCell className="text-center">Limited</TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">ML Framework Integration</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Custom Integrations</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* Security */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Security</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">SSO Integration</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Audit Logs</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">Basic</TableCell>
                  <TableCell className="text-center">Advanced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Compliance Features</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">Limited</TableCell>
                  <TableCell className="text-center">Full</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">On-premises Deployment</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* Support */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Support</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Community Support</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Email Support</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Chat Support</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Dedicated Account Manager</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Custom SLA</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="gap-2">
              <Link href="/start-labeling" className="flex items-center gap-2">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
