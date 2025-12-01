'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cloud,
  Code,
  Layers,
  Lock,
  Play,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react"
import TestimonialCard from "./components/testimonial-card"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "@/components/custom/motion"
import { BackgroundPattern } from "@/components/custom/hero/background-pattern"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <BackgroundPattern />
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Next-Generation Data Labeling
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Powerful Data Annotation, Reimagined.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate your AI development with real-time collaboration, advanced ML integrations, and streamlined project management — all in one powerful annotation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Labeling Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Book a Demo <Play className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
                No credit card required • Free plan available • Set up in minutes
            </div>
          </div>

          {/* <div className="relative mx-auto mt-12 max-w-5xl rounded-lg border bg-background shadow-lg">
            <div className="flex items-center border-b px-4 py-2">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-2 md:p-6">
              <img
                src="/placeholder.svg?height=600&width=1000"
                alt="Brokle Platform Interface"
                className="rounded border shadow-sm w-full h-auto"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Supercharge Your Data Labeling</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to streamline your workflow with powerful AI assistance and flexible tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Assisted Annotation</h3>
                <p className="text-muted-foreground">
                  Leverage machine learning to automate up to 80% of your labeling tasks with intelligent pre-labeling
                  and suggestions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Workspaces</h3>
                <p className="text-muted-foreground">
                  Work seamlessly with your team using real-time collaboration, role-based access control, and quality
                  assurance workflows.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-Format Support</h3>
                <p className="text-muted-foreground">
                  Label any data type with specialized tools for images, text, audio, video, and time-series data in one
                  unified platform.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automation & Workflows</h3>
                <p className="text-muted-foreground">
                  Create custom workflows with automated task assignment, review processes, and quality control to
                  maximize efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Code className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">API & Integrations</h3>
                <p className="text-muted-foreground">
                  Connect with your existing ML pipeline through our comprehensive API and pre-built integrations with
                  popular tools and services.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Shield className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Protect your sensitive data with SOC 2 compliance, end-to-end encryption, and granular access
                  controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Supported AI Domains Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Comprehensive Platform</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Supports AI across Vision, NLP, Audio & More</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One platform for all your AI data labeling needs, with specialized tools for every domain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border shadow-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-muted-foreground mb-3">
                Semantic segmentation, object detection, keypoint labeling, and image classification.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">Segmentation</Badge>
                <Badge variant="outline" className="bg-primary/5">Bounding Boxes</Badge>
                <Badge variant="outline" className="bg-primary/5">Keypoints</Badge>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border shadow-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-muted-foreground mb-3">
                Named entity recognition, sentiment analysis, text classification, and more.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">NER</Badge>
                <Badge variant="outline" className="bg-primary/5">Sentiment</Badge>
                <Badge variant="outline" className="bg-primary/5">Classification</Badge>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border shadow-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Audio & Speech</h3>
              <p className="text-muted-foreground mb-3">
                Speech recognition, sound event detection, speaker diarization, and audio classification.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">ASR</Badge>
                <Badge variant="outline" className="bg-primary/5">Diarization</Badge>
                <Badge variant="outline" className="bg-primary/5">Classification</Badge>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border shadow-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">LLM Fine-Tuning</h3>
              <p className="text-muted-foreground mb-3">
                Supervised fine-tuning, RLHF data collection, response grading, and RAG evaluation.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">RLHF</Badge>
                <Badge variant="outline" className="bg-primary/5">RAG</Badge>
                <Badge variant="outline" className="bg-primary/5">Evaluation</Badge>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border shadow-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Annotation</h3>
              <p className="text-muted-foreground mb-3">
                Video classification, timeline segmentation, object detection, and tracking.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">Tracking</Badge>
                <Badge variant="outline" className="bg-primary/5">Segmentation</Badge>
                <Badge variant="outline" className="bg-primary/5">Classification</Badge>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border shadow-sm"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversational AI</h3>
              <p className="text-muted-foreground mb-3">
                Response generation, intent classification, entity linking, and slot filling.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">Intent</Badge>
                <Badge variant="outline" className="bg-primary/5">Entity</Badge>
                <Badge variant="outline" className="bg-primary/5">Response</Badge>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              <Link href="/features" className="flex items-center gap-2">
                Explore All Features <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Streamlined Workflow</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How Brokle Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From data import to model training, Brokle makes the entire process fast and simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-background rounded-xl p-8 border shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Upload Data</h3>
                  <p className="text-muted-foreground mb-4">
                    Import your data from cloud storage, local files, or connect directly to your data pipeline.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Multiple data sources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Automatic preprocessing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Batch importing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-primary/50" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-background rounded-xl p-8 border shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Annotate</h3>
                  <p className="text-muted-foreground mb-4">
                    Label your data with AI assistance, collaboration tools, and specialized annotation interfaces.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>AI-assisted labeling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Quality assurance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-primary/50" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-background rounded-xl p-8 border shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Export & Train</h3>
                  <p className="text-muted-foreground mb-4">
                    Export your labeled data in various formats or connect directly to your ML training pipeline.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Multiple export formats</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>ML framework integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Continuous training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              <Link href="/platform" className="flex items-center gap-2">
                See How It Works <Play className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* AI & ML Integration */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Badge className="mb-4">AI & Machine Learning</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Supercharge Your ML Pipeline</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Brokle integrates seamlessly with your existing ML workflows, providing powerful tools to accelerate
                model training and evaluation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Pre-labeling & Auto-labeling</h3>
                    <p className="text-muted-foreground">
                      Automate annotation with AI to reduce manual work by up to 80%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">LLM Fine-Tuning</h3>
                    <p className="text-muted-foreground">
                      Label datasets for supervised fine-tuning or RLHF with specialized tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">LLM Evaluations</h3>
                    <p className="text-muted-foreground">
                      Response grading, moderation, and RAG evaluation in one platform.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-lg border bg-background p-1 shadow-lg">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="AI Integration Dashboard"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-medium">80% faster labeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Project & Workflow Management */}
        {/* <section className="py-24">
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
       */}

      {/* Use Cases / Solutions */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Industry Solutions</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powering AI Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brokle provides specialized solutions for a wide range of industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-t-4 border-t-primary">
              <div className="h-40 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Autonomous Vehicles"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Autonomous Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Specialized tools for labeling LiDAR, radar, and camera data for self-driving vehicles.
                </CardDescription>
                <Button variant="link" className="mt-2 p-0 h-auto gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-t-4 border-t-primary">
              <div className="h-40 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Healthcare AI"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Healthcare AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  HIPAA-compliant tools for medical imaging, clinical text, and genomic data annotation.
                </CardDescription>
                <Button variant="link" className="mt-2 p-0 h-auto gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-t-4 border-t-primary">
              <div className="h-40 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Robotics"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Robotics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Multi-sensor data annotation for robotic perception, manipulation, and navigation.
                </CardDescription>
                <Button variant="link" className="mt-2 p-0 h-auto gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-t-4 border-t-primary">
              <div className="h-40 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Natural Language Processing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Natural Language Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tools for NER, sentiment analysis, and creating datasets for LLM fine-tuning.
                </CardDescription>
                <Button variant="link" className="mt-2 p-0 h-auto gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Link href="/solutions" className="flex items-center gap-2">
                Explore All Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Why Brokle? (Differentiation) */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Brokle Difference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from other data labeling platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-background/60 backdrop-blur border">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <CardTitle>AI-Powered Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced AI assistance reduces manual labeling effort by up to 80%, with continuous learning that
                  improves over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Cloud className="h-6 w-6" />
                </div>
                <CardTitle>Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Handle millions of data points with high-performance cloud infrastructure that scales with your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur border">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <CardTitle>Enterprise-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SOC 2 compliance, end-to-end encryption, and granular access controls to protect your sensitive data.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Open-Source Flexibility + SaaS Convenience</h3>
                  <p className="text-muted-foreground mb-6">
                    Brokle combines the flexibility of open-source with the convenience of SaaS. Use our cloud platform
                    or deploy on your own infrastructure.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Extensible platform</span>
                        <p className="text-muted-foreground">
                          Customize and extend with your own components and integrations.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Deployment options</span>
                        <p className="text-muted-foreground">Cloud, private cloud, or on-premises deployment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Active community</span>
                        <p className="text-muted-foreground">
                          Benefit from a growing ecosystem of extensions and integrations.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 gap-2">
                    <Link href="/enterprise" className="flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-muted/30 flex items-center justify-center p-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Open Source + SaaS"
                    width={400}
                    height={400}
                    className="max-w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by AI Teams</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what data science and ML teams are saying about Brokle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Brokle has cut our data labeling time in half while improving accuracy. The AI-assisted labeling is a game-changer for our computer vision models."
              author="Sarah Chen"
              title="ML Lead at TechVision"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The flexibility to handle multiple data types in one platform has streamlined our entire ML pipeline. Brokle's enterprise features give us the security we need."
              author="Michael Rodriguez"
              title="Data Science Director at AI Innovations"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="We've tried several annotation platforms, but Brokle's collaboration features and intuitive UI have made it our team's favorite by far."
              author="Emily Johnson"
              title="AI Research Lead at DataCorp"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Labeling?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of data scientists and ML engineers who are building better models faster with Brokle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started for Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Schedule a Demo <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}