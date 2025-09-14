import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Brain, CheckCircle, Cloud, Code, Database, FileText, Image, LineChart, Lock, MessageSquare, Mic, Play, Settings, Shield, Timer, Users, Video, Webhook, Zap } from 'lucide-react'
import FeatureCard from "./components/feature-card"
import TestimonialCard from "./components/testimonial-card"
import CapabilityCard from "./components/capability-card"
import EnterpriseFeature from "./components/enterprise-feature"
import IntegrationCard from "./components/integration-card"

export default function HomePage3() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,255,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,255,0.05),transparent_60%)]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Next-Gen Data Annotation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Faster, Smarter, More Secure
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Accelerate your AI development with real-time collaboration, advanced ML integrations, and 
              streamlined project management — all in one powerful annotation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 group transition-all">
                Start for Free 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 group transition-all">
                Request a Demo 
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          
        </div>
      </section>

      {/* Why Brokle Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Brokle?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to streamline your data labeling workflow with powerful AI assistance and
              flexible tools for teams of any size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Multi-user Collaboration"
              description="Work together in real-time with enhanced team management and role-based permissions."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="AI-assisted Labeling"
              description="Reduce manual work by up to 80% with intelligent pre-labeling and automated suggestions."
            />
            <FeatureCard
              icon={<Database className="h-6 w-6" />}
              title="Universal Data Support"
              description="One platform for all data types: image, audio, text, video, time-series, and more."
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6" />}
              title="Advanced Workflow Tools"
              description="Customize project pipelines with automatic task assignment and quality control gates."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Enterprise-grade Security"
              description="RBAC, detailed activity logs, compliance features, and end-to-end encryption."
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="ML Pipeline Integration"
              description="Seamlessly connect with your existing ML infrastructure for continuous improvement."
            />
          </div>
        </div>
      </section>

      {/* AI & ML Integration */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Badge className="mb-4">AI & Machine Learning</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Supercharge Your ML Pipeline</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Brokle integrates seamlessly with your existing ML workflows, providing powerful tools to accelerate
                model training and evaluation with intelligent automation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Pre-labeling & Auto-labeling</h3>
                    <p className="text-muted-foreground">
                      Leverage existing models to automatically generate annotations, reducing manual work by up to 80% while maintaining quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">LLM Fine-Tuning</h3>
                    <p className="text-muted-foreground">
                      Specialized tools for creating high-quality datasets for supervised fine-tuning or RLHF with built-in quality metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Comprehensive Evaluations</h3>
                    <p className="text-muted-foreground">
                      Response grading, moderation, RAG evaluation, and model comparison tools in one unified platform.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-10 gap-2 group">
                Explore ML Features 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl border bg-background p-1 shadow-xl">
                <div className="absolute -top-3 -left-3 bg-primary/10 w-24 h-24 rounded-full blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="AI Integration Dashboard"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4" />
                    <span className="font-medium">80% faster labeling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labeling Capabilities */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Comprehensive Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Labeling Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One platform for all your data annotation needs, regardless of data type or use case.
            </p>
          </div>

          <Tabs defaultValue="vision" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 w-full max-w-4xl mx-auto">
              <TabsTrigger value="vision" className="gap-2">
                <Image className="h-4 w-4" />
                <span className="hidden sm:inline">Computer Vision</span>
                <span className="sm:hidden">Vision</span>
              </TabsTrigger>
              <TabsTrigger value="audio" className="gap-2">
                <Mic className="h-4 w-4" />
                <span className="hidden sm:inline">Audio & Speech</span>
                <span className="sm:hidden">Audio</span>
              </TabsTrigger>
              <TabsTrigger value="nlp" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">NLP & Text</span>
                <span className="sm:hidden">NLP</span>
              </TabsTrigger>
              <TabsTrigger value="robotics" className="gap-2">
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Robotics & IoT</span>
                <span className="sm:hidden">IoT</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="gap-2">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Video Annotation</span>
                <span className="sm:hidden">Video</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vision" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CapabilityCard
                  icon={<Image className="h-5 w-5" />}
                  title="Image Classification"
                  description="Categorize images with single or multi-label classification and hierarchical taxonomies."
                />
                <CapabilityCard
                  icon={<Image className="h-5 w-5" />}
                  title="Object Detection"
                  description="Identify and locate objects with bounding boxes, rotated boxes, and keypoints."
                />
                <CapabilityCard
                  icon={<Image className="h-5 w-5" />}
                  title="Segmentation"
                  description="Pixel-perfect semantic, instance, and panoptic segmentation with AI-assisted tools."
                />
              </div>
              
            </TabsContent>

            <TabsContent value="audio" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CapabilityCard
                  icon={<Mic className="h-5 w-5" />}
                  title="Speaker Diarization"
                  description="Identify who spoke when in multi-speaker audio with automatic speaker detection."
                />
                <CapabilityCard
                  icon={<Mic className="h-5 w-5" />}
                  title="Emotion Recognition"
                  description="Label emotional content in speech recordings with fine-grained sentiment analysis."
                />
                <CapabilityCard
                  icon={<Mic className="h-5 w-5" />}
                  title="Transcription"
                  description="Convert speech to text with timestamp alignment and multi-language support."
                />
              </div>
              
            </TabsContent>

            <TabsContent value="nlp" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CapabilityCard
                  icon={<FileText className="h-5 w-5" />}
                  title="Named Entity Recognition"
                  description="Identify and classify named entities in text with custom entity types and relations."
                />
                <CapabilityCard
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Question Answering"
                  description="Create QA datasets for training conversational AI with context-aware annotations."
                />
                <CapabilityCard
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Sentiment Analysis"
                  description="Label text with sentiment, emotional content, and intent classification."
                />
              </div>
             
            </TabsContent>

            <TabsContent value="robotics" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CapabilityCard
                  icon={<LineChart className="h-5 w-5" />}
                  title="Time-series Segmentation"
                  description="Segment and label time-series data for IoT applications with automated pattern detection."
                />
                <CapabilityCard
                  icon={<LineChart className="h-5 w-5" />}
                  title="Event Recognition"
                  description="Identify and classify events in sensor data streams with multi-sensor correlation."
                />
                <CapabilityCard
                  icon={<LineChart className="h-5 w-5" />}
                  title="Anomaly Detection"
                  description="Label anomalies in time-series data for predictive maintenance and monitoring systems."
                />
              </div>
             
            </TabsContent>

            <TabsContent value="video" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CapabilityCard
                  icon={<Video className="h-5 w-5" />}
                  title="Object Tracking"
                  description="Track objects across video frames with temporal consistency and automatic interpolation."
                />
                <CapabilityCard
                  icon={<Video className="h-5 w-5" />}
                  title="Frame-by-frame Labeling"
                  description="Annotate individual frames with precision controls and keyframe propagation."
                />
                <CapabilityCard
                  icon={<Video className="h-5 w-5" />}
                  title="Action Recognition"
                  description="Label temporal segments for action recognition models with hierarchical action taxonomies."
                />
              </div>
             
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Enterprise-Grade</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Scale and Security</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle provides the security, reliability, and scalability that enterprise teams need for mission-critical projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EnterpriseFeature
              icon={<Lock className="h-6 w-6" />}
              title="Advanced RBAC & Security"
              description="Granular role-based access control with SOC 2 compliance, SSO integration, and end-to-end encryption for sensitive data."
            />
            <EnterpriseFeature
              icon={<FileText className="h-6 w-6" />}
              title="Comprehensive Audit Trails"
              description="Track every action with detailed audit logs, compliance reporting, and data lineage for regulatory requirements."
            />
            <EnterpriseFeature
              icon={<Cloud className="h-6 w-6" />}
              title="Flexible Deployment Options"
              description="Deploy on your preferred infrastructure with cloud, on-premises, air-gapped, and hybrid hosting options."
            />
            <EnterpriseFeature
              icon={<CheckCircle className="h-6 w-6" />}
              title="Enterprise SLAs & Support"
              description="99.9% uptime guarantee with premium support, dedicated account management, and priority feature development."
            />
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="gap-2 group">
              Learn About Enterprise 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project & Workflow Management */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-xl border bg-background p-1 shadow-xl">
                <div className="absolute -bottom-3 -right-3 bg-primary/10 w-24 h-24 rounded-full blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Project Management Dashboard"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <Badge className="mb-4">Project Management</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamlined Workflows</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Organize, track, and optimize your labeling projects with powerful management tools designed for teams of any size.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Collaborative Workspaces</h3>
                    <p className="text-muted-foreground">
                      Organize projects by team and department with shared spaces, templates, and access controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Real-time Analytics</h3>
                    <p className="text-muted-foreground">
                      Monitor project timelines, annotator efficiency, and quality metrics with customizable dashboards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Intelligent Task Assignment</h3>
                    <p className="text-muted-foreground">
                      Improve labeling consistency and efficiency with AI-powered task distribution and load balancing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Advanced Batch Operations</h3>
                    <p className="text-muted-foreground">
                      Apply classifications to multiple tasks in seconds with intelligent batch operations and templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations & API */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Ecosystem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations & API</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect Brokle with your existing tools and infrastructure for a seamless workflow and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IntegrationCard
              title="ML Model Integration"
              description="Seamlessly connect ML pipelines with bidirectional data flow and model versioning."
              icon={<Brain className="h-8 w-8" />}
            />
            <IntegrationCard
              title="Webhooks & SDK"
              description="Programmatically manage annotations with our robust API and comprehensive SDKs."
              icon={<Webhook className="h-8 w-8" />}
            />
            <IntegrationCard
              title="Cloud Storage"
              description="Direct integration with AWS, GCP, Azure, and custom storage solutions."
              icon={<Cloud className="h-8 w-8" />}
            />
            <IntegrationCard
              title="CI/CD Pipeline"
              description="Automate data labeling as part of your CI/CD workflow with GitOps integration."
              icon={<Code className="h-8 w-8" />}
            />
          </div>

          <div className="mt-16 p-6 rounded-xl border bg-card shadow-md">
            <div className="flex items-center border-b pb-4 mb-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm font-mono">API Example</div>
            </div>
            <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm font-mono">
              {`// Create a new labeling task with AI pre-labeling
const response = await fetch('https://api.brokle.ai/v1/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    project_id: 'proj_123456',
    data_url: 's3://your-bucket/images/sample.jpg',
    task_type: 'image_classification',
    labels: ['cat', 'dog', 'bird'],
    options: {
      pre_label: true,
      model_id: 'model_vision_v2',
      confidence_threshold: 0.7
    }
  })
});

const task = await response.json();
console.log(\`Created task: \${task.id} with pre-labels\`);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading AI Teams</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how data science and ML teams are accelerating their development with Brokle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Brokle has cut our data labeling time in half while improving accuracy by 30%. The AI-assisted labeling and collaboration features have transformed how our team works."
              author="Sarah Chen"
              title="ML Engineering Lead at TechVision"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The flexibility to handle multiple data types in one platform has streamlined our entire ML pipeline. Brokle's enterprise features give us the security and scalability we need."
              author="Michael Rodriguez"
              title="Data Science Director at AI Innovations"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="After evaluating several annotation platforms, Brokle's collaboration features, intuitive UI, and powerful API have made it our team's favorite. Our model accuracy improved by 22%."
              author="Emily Johnson"
              title="AI Research Lead at DataCorp"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Labeling?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of data scientists and ML engineers who are building better models faster with Brokle's next-generation annotation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 group">
                Get Started for Free 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 group">
                Schedule a Demo 
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. Free plan includes up to 5,000 annotations per month.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
