import { Badge } from "@/components/ui/badge"
import TestimonialCard from "../components/testimonial-card"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
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
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
