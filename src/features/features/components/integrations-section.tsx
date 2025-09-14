import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Cloud, Code, Layers } from "lucide-react"

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Integrations</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Cloud & API Integrations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect Brokle with your existing tools and infrastructure for a seamless workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-background/60 backdrop-blur">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <Cloud className="h-6 w-6" />
              </div>
              <CardTitle>Cloud Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Direct integration with major cloud storage providers for seamless data import and export.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>AWS S3 integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Google Cloud Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Azure Blob Storage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle>API & SDKs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive API and client libraries for programmatic access to all platform features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>RESTful API</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Python & JavaScript SDKs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Webhook support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <CardTitle>ML Framework Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Seamless connection with popular ML frameworks and platforms for end-to-end workflows.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>TensorFlow & PyTorch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Hugging Face integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>MLflow compatibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">API Example</h3>
            </div>
            <div className="p-6 bg-muted/30">
              <pre className="bg-background p-4 rounded-md overflow-x-auto text-sm font-mono">
                {`// Create a new labeling task via the API
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
  labels: ['cat', 'dog', 'bird']
})
});

const task = await response.json();
console.log(\`Created task: \${task.id}\`);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

