import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Users,
  Brain,
  Database,
  Workflow,
  Cloud,
  Shield,
  BarChart,
  Server,
  FileText,
  Play,
  Mic,
  Image as ImageIcon,
  Download,
  CheckSquare,
  Pen,
  Layers,
  UploadCloud,
  BarChart3
} from "lucide-react"
import Image from "next/image"

export function DetailedFeatures() {
  return (
    <>
      {/* Key Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Key Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Everything You Need for Data Labeling</h2>
            <p className="text-xl text-muted-foreground">
              Our comprehensive platform delivers the tools and capabilities to handle any data labeling challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Multi-User Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Team workspaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conflict resolution tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Brain className="h-10 w-10 text-primary mb-3" />
                <CardTitle>AI-Assisted Labeling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pre-labeling with ML models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Active learning workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Model-in-the-loop annotation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Database className="h-10 w-10 text-primary mb-3" />
                <CardTitle>All Data Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Images, video, audio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Text & NLP datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Time-series data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Workflow className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Customizable Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom annotation schemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multi-stage review pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automation rules</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Cloud className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Cloud & Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>AWS S3, GCP, Azure storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Webhooks & event triggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>REST API & Python SDK</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>SOC 2 certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>SSO & SAML authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Detailed audit logging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <BarChart className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Analytics & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Annotator performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Quality & consistency scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Project progress dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Server className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Handle millions of data points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>On-premises deployment option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Elastic resource scaling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">How It Works</Badge>
            <h2 className="text-3xl font-bold mb-4">Streamlined Data Labeling Process</h2>
            <p className="text-xl text-muted-foreground">
              From raw data to high-quality training datasets in five simple steps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <UploadCloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Import Data</h3>
                <p className="text-sm text-muted-foreground">
                  Upload from your computer or connect to cloud storage services like AWS S3, GCP, or Azure.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Create Project</h3>
                <p className="text-sm text-muted-foreground">
                  Define your project parameters, annotation schema, and team assignments.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Pen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Annotate</h3>
                <p className="text-sm text-muted-foreground">
                  Label data manually or leverage AI-assisted pre-labeling to accelerate the process.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <CheckSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Review & QA</h3>
                <p className="text-sm text-muted-foreground">
                  Validate annotations with multi-stage reviews and quality assurance workflows.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">5. Export</h3>
                <p className="text-sm text-muted-foreground">
                  Export in multiple formats ready for ML model training or integration with your pipeline.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg" className="gap-2">
                Watch Platform Demo <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview with Tabs */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="annotate" className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">Platform Overview</h2>
                <TabsList className="inline-flex">
                  <TabsTrigger value="annotate">Annotate</TabsTrigger>
                  <TabsTrigger value="manage">Manage</TabsTrigger>
                  <TabsTrigger value="automate">Automate</TabsTrigger>
                  <TabsTrigger value="analyze">Analyze</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="annotate">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Powerful Annotation Tools</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Brokle provides specialized annotation tools for every data type, designed for speed, accuracy,
                      and ease of use.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Computer Vision</span>
                          <p className="text-muted-foreground">
                            Classification, object detection, segmentation, keypoints, and more.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">NLP & Text</span>
                          <p className="text-muted-foreground">
                            Named entity recognition, sentiment analysis, text classification, and QA datasets.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Audio & Video</span>
                          <p className="text-muted-foreground">
                            Transcription, speaker diarization, object tracking, and action recognition.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Time-series</span>
                          <p className="text-muted-foreground">
                            Segmentation, event detection, and anomaly labeling for sensor data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Annotation Interface"
                      width={500}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="manage">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Project & Team Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Organize your projects, manage your team, and ensure quality with powerful management tools.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Workspaces</span>
                          <p className="text-muted-foreground">
                            Organize projects by team, department, or client with collaborative workspaces.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Role-Based Access</span>
                          <p className="text-muted-foreground">
                            Control who can view, edit, and manage projects with granular permissions.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Quality Assurance</span>
                          <p className="text-muted-foreground">
                            Multi-stage review workflows, consensus mechanisms, and quality metrics.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Task Assignment</span>
                          <p className="text-muted-foreground">
                            Intelligent task distribution based on expertise, availability, and performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Project Management Dashboard"
                      width={500}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automate">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">AI-Powered Automation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Leverage machine learning to automate repetitive tasks and accelerate your labeling workflow.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Pre-labeling</span>
                          <p className="text-muted-foreground">
                            Automatically generate initial labels using pre-trained models.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Active Learning</span>
                          <p className="text-muted-foreground">
                            Prioritize the most informative samples to maximize annotation efficiency.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Model Integration</span>
                          <p className="text-muted-foreground">
                            Connect your own models to assist with labeling and improve over time.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Workflow Automation</span>
                          <p className="text-muted-foreground">
                            Create automated workflows for data import, labeling, review, and export.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="AI Automation Interface"
                      width={500}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analyze">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Gain valuable insights into your data, team performance, and project progress.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Performance Metrics</span>
                          <p className="text-muted-foreground">
                            Track annotator speed, accuracy, and consistency with detailed metrics.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Dataset Analysis</span>
                          <p className="text-muted-foreground">
                            Analyze class distribution, annotation density, and other dataset characteristics.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Progress Tracking</span>
                          <p className="text-muted-foreground">
                            Monitor project completion, milestone achievement, and resource utilization.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Custom Reports</span>
                          <p className="text-muted-foreground">
                            Generate customized reports for stakeholders with key metrics and visualizations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Analytics Dashboard"
                      width={500}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Data Types</Badge>
            <h2 className="text-3xl font-bold mb-4">One Platform for All Your Data</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle supports a wide range of data types with specialized annotation tools for each.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <ImageIcon className="h-6 w-6" />
              <span>Images</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Text</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <Mic className="h-6 w-6" />
              <span>Audio</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <Play className="h-6 w-6" />
              <span>Video</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              <span>Time-series</span>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Computer Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground mb-4">
                  Comprehensive tools for all types of image and video annotation tasks.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Classification & tagging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Bounding boxes & object detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Semantic & instance segmentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Keypoints & skeletons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Polylines & polygons</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>NLP & Text</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground mb-4">
                  Specialized tools for natural language processing and text annotation.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Named entity recognition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Text classification & sentiment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Question answering datasets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>LLM fine-tuning datasets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Document annotation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <CardTitle>Audio & Speech</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground mb-4">
                  Tools for annotating audio data for speech recognition and sound classification.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Transcription & alignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Speaker diarization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Sound event detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Emotion & intent labeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Audio classification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Time-series & Sensor Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground mb-4">
                  Specialized tools for annotating time-series data from sensors and IoT devices.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Time-series segmentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Event detection & labeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Anomaly marking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Multi-sensor correlation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Pattern classification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
