import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCases } from "@/data/use-cases"

export function UseCasesSection() {
  return (
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
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-t-primary">
              <div className="h-40 overflow-hidden relative">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {useCase.description}
                </CardDescription>
                <Button variant="link" className="mt-2 p-0 h-auto gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/solutions">
              Explore All Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
