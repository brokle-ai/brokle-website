import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bug, Code, FileText, Lightbulb, Settings, Zap } from "lucide-react"

export default function ChangelogPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Product Updates</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Changelog</h1>
            <p className="text-xl text-muted-foreground">
              Stay up to date with the latest features, improvements, and bug fixes in Brokle.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge variant="outline" className="mb-2">
                  Latest Release
                </Badge>
                <h2 className="text-3xl font-bold">Version 2.4.0</h2>
                <p className="text-muted-foreground">Released on March 10, 2025</p>
              </div>
              <Button variant="outline" className="gap-2">
                Release Notes <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle>New Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Advanced AI-Assisted Labeling</h3>
                  <p className="text-muted-foreground">
                    We&apos;ve completely revamped our AI-assisted labeling system with more accurate predictions and support
                    for custom models.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Collaborative Workspaces</h3>
                  <p className="text-muted-foreground">
                    New team workspaces feature allows better organization of projects and improved collaboration.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Enhanced API</h3>
                  <p className="text-muted-foreground">
                    Our API now supports bulk operations and webhook notifications for better integration with your
                    workflows.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <CardTitle>Improvements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Performance Optimization</h3>
                  <p className="text-muted-foreground">
                    Significant performance improvements for large datasets, with up to 40% faster loading times.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">UI Refinements</h3>
                  <p className="text-muted-foreground">
                    Redesigned annotation interface with improved ergonomics and keyboard shortcuts.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Enhanced Security</h3>
                  <p className="text-muted-foreground">
                    Added support for SAML SSO and improved role-based access controls.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" />
                  <CardTitle>Bug Fixes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Export Format Issues</h3>
                  <p className="text-muted-foreground">Fixed issues with COCO format exports for segmentation tasks.</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Review Workflow</h3>
                  <p className="text-muted-foreground">
                    Fixed a bug in the review workflow that could cause assignments to be incorrectly distributed.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Dashboard Analytics</h3>
                  <p className="text-muted-foreground">
                    Fixed incorrect calculation of completion rates in the dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Releases */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Previous Releases</h2>

            <div className="space-y-12">
              {/* Version 2.3.0 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Version 2.3.0</h3>
                    <p className="text-muted-foreground">Released on February 15, 2025</p>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Video Annotation Improvements</span>
                      <p className="text-muted-foreground">
                        Enhanced video annotation with object tracking and temporal segmentation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Cloud Storage Integration</span>
                      <p className="text-muted-foreground">
                        Added support for Azure Blob Storage and improved AWS S3 integration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Bug className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Multiple Bug Fixes</span>
                      <p className="text-muted-foreground">
                        Fixed issues with user permissions, data import, and export formats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version 2.2.0 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Version 2.2.0</h3>
                    <p className="text-muted-foreground">Released on January 20, 2025</p>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">LLM Evaluation Tools</span>
                      <p className="text-muted-foreground">
                        New tools for evaluating and fine-tuning large language models.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Performance Dashboard</span>
                      <p className="text-muted-foreground">
                        Redesigned analytics dashboard with new metrics and visualizations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">SDK Updates</span>
                      <p className="text-muted-foreground">
                        Major updates to Python and JavaScript SDKs with new features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version 2.1.0 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Version 2.1.0</h3>
                    <p className="text-muted-foreground">Released on December 5, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Audio Annotation</span>
                      <p className="text-muted-foreground">
                        New audio annotation features with waveform visualization and speaker diarization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Bulk Operations</span>
                      <p className="text-muted-foreground">Added support for bulk editing and labeling operations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Documentation</span>
                      <p className="text-muted-foreground">
                        Completely revamped documentation with new tutorials and examples.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">View All Releases</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Coming Soon</Badge>
              <h2 className="text-3xl font-bold mb-4">Product Roadmap</h2>
              <p className="text-xl text-muted-foreground">
                Get a sneak peek at what we&apos;re working on for future releases.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <CardTitle>Q2 2025</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">3D Point Cloud Annotation</h3>
                    <p className="text-muted-foreground">
                      Support for annotating 3D point cloud data for autonomous vehicles and robotics.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Advanced Model Training</h3>
                    <p className="text-muted-foreground">
                      Built-in model training capabilities for faster iteration cycles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Mobile App</h3>
                    <p className="text-muted-foreground">
                      Native mobile applications for iOS and Android for on-the-go labeling.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <CardTitle>Q3 2025</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Multimodal Annotation</h3>
                    <p className="text-muted-foreground">
                      Tools for annotating multimodal datasets combining text, images, and audio.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Advanced Workflow Automation</h3>
                    <p className="text-muted-foreground">
                      Visual workflow builder for creating custom annotation pipelines.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Enterprise Compliance Pack</h3>
                    <p className="text-muted-foreground">Enhanced compliance features for regulated industries.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Have a feature request? We&apos;d love to hear from you!</p>
              <Button>Submit Feature Request</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to our newsletter to get notified about new releases and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

