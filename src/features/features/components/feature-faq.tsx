import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FeatureFaq() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Brokle's features and capabilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does AI-assisted labeling work?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Brokle's AI-assisted labeling uses pre-trained models to automatically generate initial labels for
                  your data. These pre-labels are then presented to human annotators for review and correction,
                  significantly reducing manual work. The system continuously learns from corrections to improve over
                  time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I use my own custom models for pre-labeling?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, Brokle supports integration with your own custom models. You can connect your models via our API
                  to use them for pre-labeling tasks. This is especially useful for domain-specific data where generic
                  models may not perform as well.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How does Brokle handle large datasets?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Brokle is built to scale with your data needs. Our platform can handle millions of data points with
                  optimized storage and retrieval systems. For very large datasets, we offer batch processing,
                  distributed annotation workflows, and cloud storage integration to ensure smooth performance.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What export formats are supported?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Brokle supports a wide range of export formats including COCO, Pascal VOC, YOLO, TFRecord, and JSON
                  for computer vision; CoNLL, JSONL for NLP; and various custom formats. We also provide SDK support for
                  direct integration with popular ML frameworks like TensorFlow and PyTorch.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How does Brokle ensure annotation quality?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Brokle offers multiple quality control mechanisms including consensus scoring (comparing annotations
                  from multiple annotators), review workflows with approval gates, quality metrics tracking, and
                  AI-assisted error detection. These tools help maintain high annotation accuracy and consistency.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is Brokle suitable for sensitive or regulated data?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, Brokle is designed with security and compliance in mind. We offer SOC 2, GDPR, and HIPAA
                  compliance features, end-to-end encryption, role-based access control, and audit logging. For highly
                  sensitive data, we also provide on-premises deployment options.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

