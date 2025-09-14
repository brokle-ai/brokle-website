import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ChevronRight, Database, Clock, Code2, Brain, Zap, Users, LineChart, ArrowRight, BarChart3, MessageSquare, CheckCircle, FileCheck, Layers, FileText, Play } from 'lucide-react'

export default function HomePage2() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <Badge className="mb-6" variant="outline">AI-Powered Data Annotation</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Label Data <span className="text-primary">10x Faster</span>, Build Better AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Brokle streamlines your annotation workflow with AI assistance, real-time collaboration, and powerful automation. The platform trusted by leading AI teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2 group">
                  Start Labeling Smarter 
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Watch Demo <Play className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                No credit card required • Free plan available • Set up in minutes
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative bg-background rounded-xl border shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center border-b px-4 py-2 bg-muted/50">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm font-mono text-muted-foreground">app.brokle.ai/projects/image-annotation</div>
                </div>
                <div className="p-2">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Brokle Platform Interface"
                    className="rounded-lg w-full h-auto shadow-sm"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-3 bg-primary text-primary-foreground rounded-md shadow-lg text-sm font-medium">
                  Powered by AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-muted/30 border-y">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">10x</p>
              <p className="text-sm text-muted-foreground">Faster Annotation</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Labeling Accuracy</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">15M+</p>
              <p className="text-sm text-muted-foreground">Annotations Completed</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</p>
              <p className="text-sm text-muted-foreground">AI Teams Trust Brokle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brokle Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Brokle</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Annotation That Powers AI Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle outperforms traditional labeling tools with deep AI integration, team collaboration, and seamless workflow automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-background to-muted/20 border transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">AI-Powered Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our AI pre-labeling and smart validation tools reduce annotation time by up to 90%. What took weeks now takes days.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Auto-classification suggestions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Intelligent segmentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Active learning capabilities</span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-background to-muted/20 border transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time collaboration with role-based access control lets your entire team work together seamlessly.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Multi-user annotation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Quality assurance workflows</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Performance analytics</span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-background to-muted/20 border transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integrate with your existing ML infrastructure. API-first design for automated pipeline integration.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Robust API & SDK</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Major cloud integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    <span>Custom export formats</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Brokle Difference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Brokle transforms your annotation workflow compared to traditional methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-destructive/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-destructive flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Without Brokle
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-destructive/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span>Manual labeling takes weeks for large datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-destructive/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span>Siloed tools require constant switching</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-destructive/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span>Quality control is difficult to enforce</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-destructive/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span>Scaling requires expensive outsourcing</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-destructive/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span>Limited version control and auditability</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                <Zap className="mr-2 h-5 w-5" /> With Brokle
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </span>
                  <span>AI pre-labeling reduces work by up to 90%</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </span>
                  <span>All-in-one platform for every data type</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </span>
                  <span>Built-in QA workflows and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </span>
                  <span>Scale efficiently with AI assistance and automation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </span>
                  <span>Complete version history and audit trails</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2">
              See How It Works
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Powerful Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Data Labeling</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle combines powerful annotation tools with AI assistance to accelerate your ML development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <CardTitle>AI-Assisted Labeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pre-label your data with AI models that learn from your annotations, getting smarter with every project.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Layers className="h-6 w-6" />
                </div>
                <CardTitle>Multi-format Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Label images, audio, video, text, and time-series data all in one unified platform.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborate in real-time with role-based access control, task assignment, and review workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Code2 className="h-6 w-6" />
                </div>
                <CardTitle>API & Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with your ML pipeline via REST API, Python SDK, and pre-built integrations for major platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle>Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track labeling performance, annotator agreement, and dataset quality with built-in analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <FileCheck className="h-6 w-6" />
                </div>
                <CardTitle>Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track changes, manage dataset versions, and maintain complete audit history of your annotations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Streamlined Workflow</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Brokle Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From data import to model training, Brokle makes the entire process fast and simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 relative">
                <Database className="h-6 w-6" />
                <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <h3 className="text-xl font-medium mb-2">Import Data</h3>
              <p className="text-muted-foreground">Upload from cloud storage or connect via API. Support for all major formats.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 relative">
                <Brain className="h-6 w-6" />
                <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <h3 className="text-xl font-medium mb-2">AI Pre-labeling</h3>
              <p className="text-muted-foreground">Our AI automatically suggests labels to accelerate the annotation process.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 relative">
                <FileCheck className="h-6 w-6" />
                <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <h3 className="text-xl font-medium mb-2">Review & Export</h3>
              <p className="text-muted-foreground">Quality assurance workflows ensure accuracy before exporting to any format.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 relative">
                <BarChart3 className="h-6 w-6" />
                <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
              </div>
              <h3 className="text-xl font-medium mb-2">Train AI Models</h3>
              <p className="text-muted-foreground">Use your high-quality labeled data to train and improve your ML models.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="gap-2">
              Watch Demo <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions & Use Cases */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Versatile Applications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions For Every AI Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle powers leading AI applications across industries with specialized annotation tools.
            </p>
          </div>

          <Tabs defaultValue="cv" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="cv">Computer Vision</TabsTrigger>
              <TabsTrigger value="nlp">NLP & Text</TabsTrigger>
              <TabsTrigger value="audio">Audio & Speech</TabsTrigger>
              <TabsTrigger value="video">Video Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="cv" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Computer Vision Annotation</h3>
                  <p className="mb-6 text-muted-foreground">
                    Comprehensive tools for image annotation, from classification to pixel-perfect segmentation. Perfect for object detection, autonomous vehicles, medical imaging, and more.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Bounding box, polygon, and keypoint tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>AI-assisted segmentation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Multi-class and hierarchical labeling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Batch processing for similar images</span>
                    </li>
                  </ul>
                  <Button className="gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-4 rounded-xl border">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Computer Vision Annotation"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nlp" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">NLP & Text Annotation</h3>
                  <p className="mb-6 text-muted-foreground">
                    Specialized tools for annotating and classifying text data. Ideal for sentiment analysis, named entity recognition, text classification, and LLM fine-tuning.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Entity recognition and relation labeling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Document classification workflows</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Sentiment and intent annotation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>LLM evaluation and benchmark creation</span>
                    </li>
                  </ul>
                  <Button className="gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-4 rounded-xl border">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="NLP Annotation"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audio" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Audio & Speech Annotation</h3>
                  <p className="mb-6 text-muted-foreground">
                    Powerful tools for annotating audio data. Perfect for speech recognition, speaker diarization, sound event detection, and audio classification.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Waveform and spectrogram visualization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Timestamp-based annotation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Speaker identification and transcription</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Emotion and tone classification</span>
                    </li>
                  </ul>
                  <Button className="gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-4 rounded-xl border">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Audio Annotation"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Video Annotation</h3>
                  <p className="mb-6 text-muted-foreground">
                    End-to-end video annotation tools for object tracking, action recognition, and scene analysis. Ideal for surveillance, sports analytics, and behavior analysis.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Object tracking with interpolation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Action and event annotation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Scene segmentation and classification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Multi-object tracking capabilities</span>
                    </li>
                  </ul>
                  <Button className="gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-4 rounded-xl border">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Video Annotation"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Seamless Ecosystem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations & API</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect Brokle with your existing ML infrastructure and tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 mb-16">
            <div className="bg-background rounded-lg border p-4 flex items-center justify-center h-24 hover:shadow-md transition-all">
              <img src="/placeholder.svg?height=60&width=120" alt="AWS Logo" className="max-h-12" />
            </div>
            <div className="bg-background rounded-lg border p-4 flex items-center justify-center h-24 hover:shadow-md transition-all">
              <img src="/placeholder.svg?height=60&width=120" alt="Google Cloud Logo" className="max-h-12" />
            </div>
            <div className="bg-background rounded-lg border p-4 flex items-center justify-center h-24 hover:shadow-md transition-all">
              <img src="/placeholder.svg?height=60&width=120" alt="PyTorch Logo" className="max-h-12" />
            </div>
            <div className="bg-background rounded-lg border p-4 flex items-center justify-center h-24 hover:shadow-md transition-all">
              <img src="/placeholder.svg?height=60&width=120" alt="TensorFlow Logo" className="max-h-12" />
            </div>
            <div className="bg-background rounded-lg border p-4 flex items-center justify-center h-24 hover:shadow-md transition-all">
              <img src="/placeholder.svg?height=60&width=120" alt="Hugging Face Logo" className="max-h-12" />
            </div>
            <div className="bg-background rounded-lg border p-4 flex items-center justify-center h-24 hover:shadow-md transition-all">
              <img src="/placeholder.svg?height=60&width=120" alt="Azure Logo" className="max-h-12" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center bg-background rounded-xl border p-6 md:p-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Powerful API & SDK</h3>
              <p className="mb-6 text-muted-foreground">
                Our REST API and Python SDK make it easy to integrate Brokle into your ML pipeline. Automate data import, export, and annotation workflows programmatically.
              </p>
              <Button className="gap-2">
                Explore API Docs <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 bg-muted p-4 rounded-lg">
              <div className="flex items-center border-b pb-2 mb-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm font-mono text-muted-foreground">brokle_api_example.py</div>
              </div>
              <pre className="text-sm font-mono p-4 overflow-x-auto">
                {`import brokle

# Initialize the client
client = brokle.Client(api_key="YOUR_API_KEY")

# Create a new project
project = client.create_project(
    name="Object Detection Dataset",
    task_type="object_detection",
    labels=["car", "pedestrian", "bicycle"]
)

# Import data from cloud storage
task_batch = client.import_data(
    project_id=project.id,
    source="s3://your-bucket/images/",
    auto_label=True  # Enable AI pre-labeling
)

# Get project statistics
stats = client.get_project_stats(project.id)
print(f"Total tasks: {stats.total_tasks}")
print(f"Completed: {stats.completed} ({stats.completion_rate}%)")`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by AI Teams Worldwide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how leading companies accelerate their AI development with Brokle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic mb-6 text-muted-foreground">
                  "Brokle reduced our annotation time by 70% while improving our model accuracy by 15%. The AI-assisted labeling is a game-changer for our computer vision pipeline."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Sarah Chen"
                    className="rounded-full w-12 h-12 mr-4 border-2 border-primary/10"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">ML Lead, TechVision AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic mb-6 text-muted-foreground">
                  "We evaluated several annotation platforms before choosing Brokle. The seamless API integration and collaboration features have made it an essential part of our ML infrastructure."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Michael Rodriguez"
                    className="rounded-full w-12 h-12 mr-4 border-2 border-primary/10"
                  />
                  <div>
                    <p className="font-semibold">Michael Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Data Science Director, HealthAI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic mb-6 text-muted-foreground">
                  "Scaling our annotation process was a major challenge until we found Brokle. Now we can handle 10x more data with the same team size thanks to the AI-assisted labeling features."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Emily Johnson"
                    className="rounded-full w-12 h-12 mr-4 border-2 border-primary/10"
                  />
                  <div>
                    <p className="font-semibold">Emily Johnson</p>
                    <p className="text-sm text-muted-foreground">AI Research Lead, DataCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <img src="/placeholder.svg?height=40&width=120" alt="Company Logo" className="h-10 opacity-70" />
              <img src="/placeholder.svg?height=40&width=120" alt="Company Logo" className="h-10 opacity-70" />
              <img src="/placeholder.svg?height=40&width=120" alt="Company Logo" className="h-10 opacity-70" />
              <img src="/placeholder.svg?height=40&width=120" alt="Company Logo" className="h-10 opacity-70" />
              <img src="/placeholder.svg?height=40&width=120" alt="Company Logo" className="h-10 opacity-70" />
            </div>
            <p className="text-xl font-medium">500+ AI teams trust Brokle for their data labeling</p>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your AI Development?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that's right for your team. From individual researchers to enterprise AI teams, we have you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-background border transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Perfect for individuals and small projects</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>5,000 annotations per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Basic AI pre-labeling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Core annotation tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>1 user</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-background border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg relative">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">For teams and growing projects</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>50,000 annotations per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Advanced AI assistance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Team collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Up to 5 users</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>API access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-background border transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">For organizations with advanced needs</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Unlimited annotations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Custom AI model integration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Enterprise security features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Unlimited users</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    Contact Sales <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-background border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our team to discuss your specific needs. We offer flexible plans for academic, research, and enterprise use cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Schedule a Demo <Play className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Contact Sales <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">Get Started Today</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Labeling Smarter with Brokle</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join over 500 AI teams who use Brokle to accelerate their annotation workflows and build better AI models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 group">
                Try Brokle for Free 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                See Documentation <FileText className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. 14-day free trial of all premium features.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
