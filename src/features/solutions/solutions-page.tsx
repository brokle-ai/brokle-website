import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Database, 
  Cloud, 
  Image,
  Shield, 
  FileText,
  Play,
  Code,
  Zap,
  BarChart3,
  MessageSquare,
  Mic,
  Settings
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tailored Solutions for Your AI Workflow</h1>
            <p className="text-xl text-muted-foreground">
              Discover how Brokle can address your specific use cases and industry challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ML Pipeline */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">ML Pipeline</Badge>
              <h2 className="text-3xl font-bold mb-6">Supercharge Your ML Pipeline</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Brokle integrates seamlessly with your existing ML workflows, providing powerful tools to accelerate
                model training and evaluation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Data Preparation</h3>
                    <p className="text-muted-foreground">
                      Import, organize, and prepare your raw data for annotation with powerful preprocessing tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Annotation & Labeling</h3>
                    <p className="text-muted-foreground">
                      Create high-quality training datasets with AI-assisted labeling and quality control.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Model Training</h3>
                    <p className="text-muted-foreground">
                      Export labeled data directly to your training pipeline or use our integrated training
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Model Evaluation</h3>
                    <p className="text-muted-foreground">
                      Assess model performance with specialized evaluation tools and human-in-the-loop validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Continuous Improvement</h3>
                    <p className="text-muted-foreground">
                      Iterate and improve your models with active learning and error analysis workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg border bg-background p-1 shadow-lg">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="ML Pipeline Diagram"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Industry Solutions</Badge>
            <h2 className="text-3xl font-bold mb-4">Solutions for Every Industry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle provides specialized solutions for a wide range of industries and use cases.
            </p>
          </div>

          <Tabs defaultValue="healthcare" className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="automotive">Automotive</TabsTrigger>
              </TabsList>
            </div>


            <TabsContent value="healthcare">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Healthcare & Life Sciences</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Accelerate medical AI development with specialized tools for healthcare data annotation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Medical Imaging</span>
                        <p className="text-muted-foreground">
                          Specialized tools for annotating X-rays, CT scans, MRIs, and other medical images.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Clinical Text</span>
                        <p className="text-muted-foreground">
                          NLP annotation tools for medical records, clinical notes, and research papers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Genomic Data</span>
                        <p className="text-muted-foreground">
                          Tools for annotating genomic sequences and biomarker data.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">HIPAA Compliance</span>
                        <p className="text-muted-foreground">
                          Secure infrastructure and workflows designed for healthcare compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-6 gap-2">
                    Healthcare Solution Brief <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Healthcare Solution"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retail">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Retail & E-commerce</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Build better shopping experiences with AI powered by high-quality labeled data.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Product Categorization</span>
                        <p className="text-muted-foreground">
                          Tools for creating training data for product classification systems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Visual Search</span>
                        <p className="text-muted-foreground">
                          Image annotation for visual search and recommendation engines.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Customer Sentiment</span>
                        <p className="text-muted-foreground">
                          Text annotation for sentiment analysis and customer feedback processing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Inventory Management</span>
                        <p className="text-muted-foreground">
                          Object detection training data for automated inventory systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-6 gap-2">
                    Retail Solution Brief <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <img src="/placeholder.svg?height=400&width=500" alt="Retail Solution" className="w-full h-auto" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manufacturing">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Manufacturing & Industry 4.0</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Enhance quality control and automate processes with AI trained on expertly labeled data.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Defect Detection</span>
                        <p className="text-muted-foreground">
                          Image annotation for visual inspection and quality control systems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Predictive Maintenance</span>
                        <p className="text-muted-foreground">
                          Time-series annotation for equipment monitoring and failure prediction.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Supply Chain Optimization</span>
                        <p className="text-muted-foreground">
                          Data labeling for demand forecasting and inventory optimization models.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Worker Safety</span>
                        <p className="text-muted-foreground">
                          Video annotation for safety monitoring and compliance systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-6 gap-2">
                    Manufacturing Solution Brief <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Manufacturing Solution"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="finance">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Develop AI for risk assessment, fraud detection, and customer service with secure data labeling.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Document Processing</span>
                        <p className="text-muted-foreground">
                          Tools for annotating financial documents, statements, and forms.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Fraud Detection</span>
                        <p className="text-muted-foreground">
                          Transaction data labeling for fraud detection and prevention models.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Customer Service</span>
                        <p className="text-muted-foreground">
                          Text and audio annotation for chatbots and virtual assistants.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Regulatory Compliance</span>
                        <p className="text-muted-foreground">
                          Secure infrastructure designed for financial services compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-6 gap-2">
                    Financial Services Solution Brief <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Financial Services Solution"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automotive">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Automotive & Transportation</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Build safer and more efficient autonomous systems with comprehensive data labeling.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Autonomous Driving</span>
                        <p className="text-muted-foreground">
                          Specialized tools for annotating LiDAR, radar, and camera data for self-driving vehicles.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Driver Monitoring</span>
                        <p className="text-muted-foreground">
                          Video annotation for driver attention and behavior monitoring systems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Fleet Management</span>
                        <p className="text-muted-foreground">
                          Data labeling for predictive maintenance and route optimization.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Traffic Analysis</span>
                        <p className="text-muted-foreground">
                          Video and sensor data annotation for traffic monitoring and analysis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-6 gap-2">
                    Automotive Solution Brief <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Automotive Solution"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Use Cases</Badge>
            <h2 className="text-3xl font-bold mb-4">Common Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore how organizations are using Brokle to solve specific challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Image className="h-6 w-6" />
                </div>
                <CardTitle>Computer Vision Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create high-quality training datasets for object detection, segmentation, and classification models.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle>LLM Fine-tuning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Build datasets for supervised fine-tuning and RLHF to improve large language model performance.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle>Predictive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Label sensor data to train models that predict equipment failures before they occur.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create training data for intelligent document processing systems that extract and classify
                  information.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Mic className="h-6 w-6" />
                </div>
                <CardTitle>Speech Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Build high-quality datasets for training and improving speech recognition systems.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Content Moderation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create training data for AI systems that detect and filter inappropriate content.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scale & Security */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">Scale & Security</Badge>
              <h2 className="text-3xl font-bold mb-6">Built for Enterprise Scale</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Brokle provides the security, reliability, and scalability that enterprise teams need for
                mission-critical AI projects.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Enterprise-Grade Security</h3>
                    <p className="text-muted-foreground">
                      SOC 2 compliance, end-to-end encryption, and comprehensive security controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Team Scalability</h3>
                    <p className="text-muted-foreground">
                      Support for large teams with role-based access control and collaboration features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Data Volume Handling</h3>
                    <p className="text-muted-foreground">
                      Process millions of data points with high performance and reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Cloud className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Flexible Deployment</h3>
                    <p className="text-muted-foreground">
                      Choose between cloud-hosted, private cloud, or on-premises deployment.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 gap-2">
                Learn About Enterprise <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative rounded-lg border bg-background p-1 shadow-lg">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Enterprise Scale"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl font-bold mb-4">Customer Success</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how organizations are achieving their goals with Brokle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="TechVision Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge>Computer Vision</Badge>
                  <span className="text-sm text-muted-foreground">3 min read</span>
                </div>
                <CardTitle className="text-xl mt-2">TechVision: 65% Faster Annotation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  How TechVision reduced annotation time by 65% while improving model accuracy by 23%.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="MedAI Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge>Healthcare</Badge>
                  <span className="text-sm text-muted-foreground">4 min read</span>
                </div>
                <CardTitle className="text-xl mt-2">MedAI: Scaling Medical Imaging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  How MedAI built a scalable workflow for annotating medical images with Brokle.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="FinTech Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge>Finance</Badge>
                  <span className="text-sm text-muted-foreground">5 min read</span>
                </div>
                <CardTitle className="text-xl mt-2">FinTech: Fraud Detection at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  How a leading fintech company improved fraud detection accuracy with better training data.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto gap-2">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2">
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Solve Your Data Labeling Challenges?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our solutions team to discuss your specific use case and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Solutions Team <ArrowRight className="h-4 w-4" />
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