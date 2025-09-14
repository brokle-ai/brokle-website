import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Brain,
  FileText,
  Image,
  MessageSquare,
  Mic,
  Play,
} from "lucide-react";

export function AiDomainsSection() {
  return (
    <>
      <section id="data-types" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">AI Domains</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive Support for All AI Domains
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One platform for all your data annotation needs, regardless of
              data type or use case.
            </p>
          </div>

          <Tabs defaultValue="vision" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-9 mb-8 overflow-x-auto">
              <TabsTrigger value="vision">Computer Vision</TabsTrigger>
              <TabsTrigger value="nlp">NLP</TabsTrigger>
              <TabsTrigger value="audio">Audio & Speech</TabsTrigger>
              <TabsTrigger value="conversational">
                Conversational AI
              </TabsTrigger>
              <TabsTrigger value="ranking">Ranking & Scoring</TabsTrigger>
              <TabsTrigger value="structured">Structured Data</TabsTrigger>
              <TabsTrigger value="timeseries">Time Series</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="llm">LLM Fine-Tuning</TabsTrigger>
            </TabsList>

            {/* Computer Vision */}
            <TabsContent value="vision">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Image className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Computer Vision 🖼️</h3>
                    <p className="text-lg text-muted-foreground">
                      Brokle enables precise visual data labeling with
                      AI-powered automation.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {/* Grid-style cards with hover effects */}
                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Semantic Segmentation"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Pixel-perfect semantic, instance, and panoptic
                          segmentation with smart tools.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Semantic Segmentation</h4>
                      <p className="text-sm text-muted-foreground">
                        Polygons, Masks
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Object Detection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Bounding box annotation with automatic tracking and AI
                          assistance.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Object Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Bounding Boxes, Ellipses
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Keypoint Labeling"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Precise keypoint and skeleton annotation for pose
                          estimation.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Keypoint Labeling</h4>
                      <p className="text-sm text-muted-foreground">
                        Points, Skeletons
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Image Classification"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Single and multi-label image classification with
                          hierarchical categories.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Image Classification</h4>
                      <p className="text-sm text-muted-foreground">
                        Single & Multi-Image Classification
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Image Captioning & OCR"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Generate descriptive captions and extract text from
                          images.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Image Captioning & OCR</h4>
                      <p className="text-sm text-muted-foreground">
                        Text extraction and description
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Visual QA & Genome"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Create datasets for models that answer questions about
                          images.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Visual QA & Visual Genome</h4>
                      <p className="text-sm text-muted-foreground">
                        Question-answer pairs for images
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Object Detection with Ellipses"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Precise elliptical annotations for curved and rounded objects with automated assistance.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Object Detection with Ellipses</h4>
                      <p className="text-sm text-muted-foreground">
                        Elliptical annotations for curved objects
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Multi-Image Classification"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Classify multiple images simultaneously with comparative analysis and batch processing.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Multi-Image Classification</h4>
                      <p className="text-sm text-muted-foreground">
                        Compare and classify image groups
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Inventory Tracking"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          AI-assisted inventory management with visual recognition and automated counting capabilities.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Inventory Tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Visual product recognition and counting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* NLP */}
            <TabsContent value="nlp">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      Natural Language Processing (NLP) 📝
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Advanced text annotation and language model training.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Question Answering"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Create annotated question-answer pairs for training information retrieval and QA systems.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Question Answering</h4>
                      <p className="text-sm text-muted-foreground">
                        Extract answers from context
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Sentiment Analysis"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Categorize text by emotional tone with multi-level sentiment scales and aspect-based analysis.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Sentiment Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Emotional tone classification
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Named Entity Recognition"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Identify and classify named entities in text with customizable entity types and nested recognition.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Named Entity Recognition</h4>
                      <p className="text-sm text-muted-foreground">
                        Entity extraction and classification
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Taxonomy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Build hierarchical classification systems with multi-level taxonomies and ontology management.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Taxonomy</h4>
                      <p className="text-sm text-muted-foreground">
                        Hierarchical classification structures
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Relation Extraction"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Identify relationships between entities in text with directional and typed relation annotation.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Relation Extraction</h4>
                      <p className="text-sm text-muted-foreground">
                        Entity relationship mapping
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Text Summarization"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Create abstractive and extractive summaries of longer texts with controllable length and focus.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Text Summarization</h4>
                      <p className="text-sm text-muted-foreground">
                        Abstractive and extractive summaries
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Machine Translation"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Create parallel corpora for training machine translation systems with quality scoring and post-editing.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Machine Translation</h4>
                      <p className="text-sm text-muted-foreground">
                        Parallel translation datasets
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Text Classification"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Classify text into predefined categories with multi-label options and hierarchical classification.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Text Classification</h4>
                      <p className="text-sm text-muted-foreground">
                        Topic and category labeling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Audio & Speech */}
            <TabsContent value="audio">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      Audio & Speech Processing 🎙️
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Enhance AI's understanding of speech and sound.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Automatic Speech Recognition"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Transcribe speech to text with high accuracy across multiple languages and accents.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Automatic Speech Recognition</h4>
                      <p className="text-sm text-muted-foreground">
                        Speech-to-text transcription
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Sound Event Detection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Identify and classify specific sounds and acoustic events within audio recordings.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Sound Event Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Acoustic event identification
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="ASR with Segments"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Process speech recognition in smaller segments for improved accuracy in longer recordings.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">ASR with Segments</h4>
                      <p className="text-sm text-muted-foreground">
                        Segmented speech transcription
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Signal Quality Detection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Assess and rate audio signal quality to optimize processing and identify problematic recordings.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Signal Quality Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Audio quality assessment
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Speaker Diarization"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Identify and separate different speakers in conversation recordings with timestamp precision.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Speaker Diarization</h4>
                      <p className="text-sm text-muted-foreground">
                        Speaker identification and separation
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Dialogue Analysis"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Analyze conversation flow, turn-taking patterns, and speech overlaps in dialogues.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Dialogue Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Conversation pattern recognition
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Audio Classification"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Categorize audio files by content type, genre, or other custom classifiers.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Audio Classification</h4>
                      <p className="text-sm text-muted-foreground">
                        Audio content categorization
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Voice Activity Detection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                          Precisely identify speech segments within audio files to separate speech from noise or silence.
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Voice Activity Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Speech vs. non-speech identification
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Conversational AI */}
            <TabsContent value="conversational">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Conversational AI 🤖</h3>
                    <p className="text-lg text-muted-foreground">
                    Train AI for smart, human-like conversations.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Response Generation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Create training data for AI systems to generate contextually appropriate and natural language responses.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Response Generation</h4>
                    <p className="text-sm text-muted-foreground">
                        Natural language response creation
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Response Selection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Train models to select the most appropriate response from a set of candidates based on conversation context.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Response Selection</h4>
                    <p className="text-sm text-muted-foreground">
                        Optimal response identification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Coreference Resolution and Entity Linking"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Improve conversation continuity by identifying when different expressions refer to the same entity across dialogue turns.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Coreference Resolution & Entity Linking</h4>
                    <p className="text-sm text-muted-foreground">
                        Cross-reference entity identification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Slot Filling and Intent Classification"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Extract structured information from user queries while identifying the underlying user intent for task-oriented dialogues.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Slot Filling & Intent Classification</h4>
                    <p className="text-sm text-muted-foreground">
                        Structured information extraction with intent detection
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </TabsContent>

            {/* Ranking & Scoring */}
            <TabsContent value="ranking">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                    <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Ranking & Scoring 📊</h3>
                    <p className="text-lg text-muted-foreground">
                    Optimize AI ranking and retrieval models.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Pairwise Regression"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Train models to predict relative numerical scores between pairs of items, enabling fine-grained ranking and preference learning.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Pairwise Regression</h4>
                    <p className="text-sm text-muted-foreground">
                        Relative numerical scoring
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Document Retrieval"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Optimize retrieval systems to find the most relevant documents for a given query with precise ranking mechanisms.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Document Retrieval</h4>
                    <p className="text-sm text-muted-foreground">
                        Query-based content ranking
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Pairwise Classification"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Train models to decide which item in a pair is better, supporting preference-based ranking and sorting algorithms.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Pairwise Classification</h4>
                    <p className="text-sm text-muted-foreground">
                        Binary preference comparison
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Content-based Image Retrieval"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Build systems that find and rank similar images based on visual content rather than metadata.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Content-based Image Retrieval</h4>
                    <p className="text-sm text-muted-foreground">
                        Visual similarity search
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Website Rating"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Create training data for models that evaluate website quality, credibility, and user experience.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Website Rating</h4>
                    <p className="text-sm text-muted-foreground">
                        Web quality assessment
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="ASR Hypotheses Selection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Train models to select the most accurate transcription from multiple speech recognition hypotheses.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">ASR Hypotheses Selection</h4>
                    <p className="text-sm text-muted-foreground">
                        Optimal transcription ranking
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Text-to-Image Generation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Score and rank AI-generated images based on their fidelity to text prompts and overall quality.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Text-to-Image Generation</h4>
                    <p className="text-sm text-muted-foreground">
                        Generated image quality assessment
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Search Page Ranking"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Train models to optimize search result ordering for maximum relevance and user satisfaction.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Search Page Ranking</h4>
                    <p className="text-sm text-muted-foreground">
                        Search result optimization
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Visual Ranker"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Create systems that rank images based on aesthetics, composition, and visual appeal for improved content curation.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Visual Ranker</h4>
                    <p className="text-sm text-muted-foreground">
                        Aesthetic and quality-based image ranking
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </TabsContent>

            {/* Structured Data Parsing */}
            <TabsContent value="structured">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">
                    Structured Data Parsing 📑
                    </h3>
                    <p className="text-lg text-muted-foreground">
                    Extract, classify, and organize structured data.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Freeform Metadata"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Extract structured information from unstructured text with customizable schema definitions.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Freeform Metadata</h4>
                    <p className="text-sm text-muted-foreground">
                        Unstructured to structured conversion
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="PDF Classification"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Categorize PDF documents based on content, structure, and metadata with high accuracy.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">PDF Classification</h4>
                    <p className="text-sm text-muted-foreground">
                        Document type categorization
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Tabular Data"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Process, normalize, and validate tabular data for machine learning applications.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Tabular Data</h4>
                    <p className="text-sm text-muted-foreground">
                        Table extraction and normalization
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="HTML Entity Recognition"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Extract structured information from web pages by identifying key elements and their relationships.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">HTML Entity Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                        Web element identification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="HTML Classification"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Categorize web pages based on content type, structure, and purpose for improved web indexing.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">HTML Classification</h4>
                    <p className="text-sm text-muted-foreground">
                        Web page type identification
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </TabsContent>

            {/* Time Series Analysis */}
            <TabsContent value="timeseries">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                    <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">
                    Time Series Analysis ⏳
                    </h3>
                    <p className="text-lg text-muted-foreground">
                    Analyze trends, anomalies, and predictive patterns.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Time Series Forecasting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Build datasets to train predictive models for future values based on historical patterns.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Time Series Forecasting</h4>
                    <p className="text-sm text-muted-foreground">
                        Future value prediction
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Change Point Detection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Identify significant shifts in time series data patterns for trend analysis.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Change Point Detection</h4>
                    <p className="text-sm text-muted-foreground">
                        Pattern shift identification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Activity Recognition"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Classify human activities from sensor data and temporal patterns for health and fitness applications.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Activity Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                        Behavioral pattern classification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Signal Quality"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Evaluate and rate the quality of time-series signals for data validation and preprocessing.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Signal Quality</h4>
                    <p className="text-sm text-muted-foreground">
                        Temporal data quality assessment
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Outliers and Anomaly Detection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Identify abnormal patterns and data points that deviate from expected behavior for security and monitoring.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Outliers and Anomaly Detection</h4>
                    <p className="text-sm text-muted-foreground">
                        Abnormal pattern identification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Time Series Classification"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Categorize entire sequences of time series data based on patterns and characteristics.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Time Series Classification</h4>
                    <p className="text-sm text-muted-foreground">
                        Sequence pattern categorization
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Time Series Labeling"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Annotate segments within time series data with relevant labels and tags for supervised learning.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Time Series Labeling</h4>
                    <p className="text-sm text-muted-foreground">
                        Temporal segment annotation
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </TabsContent>

            {/* Video Annotation */}
            <TabsContent value="video">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Play className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Video Annotation 🎥</h3>
                    <p className="text-lg text-muted-foreground">
                    Frame-by-frame and real-time video analysis.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Classification"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Categorize videos by content type, genre, or custom taxonomies with multi-label classification.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Video Classification</h4>
                    <p className="text-sm text-muted-foreground">
                        Content type and genre categorization
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Timeline Segmentation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Divide videos into logical segments with precise timestamp marking and segment classification.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Video Timeline Segmentation</h4>
                    <p className="text-sm text-muted-foreground">
                        Scene and segment identification
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Object Detection and Tracking"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Track objects across video frames with persistent identification and automated trajectory analysis.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Video Object Detection and Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                        Multi-frame object persistence
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Action Recognition"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Identify and label specific actions and movements performed in videos with timestamp precision.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Video Action Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                        Human activity and motion labeling
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Captioning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Generate descriptive captions for video content with scene-by-scene annotation capabilities.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Video Captioning</h4>
                    <p className="text-sm text-muted-foreground">
                        Descriptive text generation for videos
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Anomaly Detection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Identify unusual events or behaviors in video footage with automated flagging and classification.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Video Anomaly Detection</h4>
                    <p className="text-sm text-muted-foreground">
                        Unusual event identification
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </TabsContent>

            {/* LLM Fine-Tuning */}
            <TabsContent value="llm">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">
                    LLM Fine-Tuning & Evaluations 🧠
                    </h3>
                    <p className="text-lg text-muted-foreground">
                    Power up LLMs with precision fine-tuning and human feedback.
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Supervised LLM Fine-Tuning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Create high-quality prompt-completion pairs to fine-tune language models for specific tasks and domains.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Supervised LLM Fine-Tuning</h4>
                    <p className="text-sm text-muted-foreground">
                        Task-specific training data creation
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Human Preferences collection for RLHF"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Collect human preference judgments between model outputs to enable Reinforcement Learning from Human Feedback.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Human Preferences for RLHF</h4>
                    <p className="text-sm text-muted-foreground">
                        Preference data collection and ranking
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="RAG Retrieval"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Optimize retrieval augmented generation by scoring and ranking document relevance for specific queries.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">RAG Retrieval</h4>
                    <p className="text-sm text-muted-foreground">
                        Document relevance assessment
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="LLM Response Moderation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Evaluate and flag LLM outputs for toxicity, bias, safety issues, and other content policy violations.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">LLM Response Moderation</h4>
                    <p className="text-sm text-muted-foreground">
                        Safety and policy compliance review
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="LLM Response Grading"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Assess quality of LLM outputs against multiple criteria such as accuracy, helpfulness, and coherence.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">LLM Response Grading</h4>
                    <p className="text-sm text-muted-foreground">
                        Multi-dimensional quality assessment
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Side-by-Side LLM Output Comparison"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Compare outputs from different models or model versions for direct quality comparisons and A/B testing.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Side-by-Side LLM Comparison</h4>
                    <p className="text-sm text-muted-foreground">
                        Comparative model evaluation
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Evaluate RAG with Human Feedback"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Assess RAG system performance with human evaluators judging relevance, accuracy and helpfulness.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Evaluate RAG with Human Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                        Human assessment of RAG outputs
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Evaluate RAG with Ragas"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Use the Ragas framework to systematically evaluate retrieval-augmented generation systems with automated metrics.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Evaluate RAG with Ragas</h4>
                    <p className="text-sm text-muted-foreground">
                        Structured RAG evaluation framework
                    </p>
                    </div>
                </div>

                <div className="group relative rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Custom Training Data Creation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-sm">
                        Build domain-specific datasets for specialized LLM training with expert annotation and validation.
                        </p>
                    </div>
                    </div>
                    <div className="p-4">
                    <h4 className="font-medium">Custom Training Data Creation</h4>
                    <p className="text-sm text-muted-foreground">
                        Domain-specific dataset building
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
