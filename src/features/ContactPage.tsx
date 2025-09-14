import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-lg text-primary-foreground/90">
            Have a question or ready to start your project? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-muted-foreground">
                We'd love to hear from you. Fill out the form or use our contact information below to reach us.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <address className="not-italic text-muted-foreground">
                      123 Business Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">info@yourbrand.com</p>
                    <p className="text-muted-foreground">support@yourbrand.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                    <p className="text-muted-foreground">+1 (123) 456-7891</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
                <table className="w-full text-muted-foreground">
                  <tbody>
                    <tr>
                      <td className="py-2">Monday - Friday:</td>
                      <td className="py-2">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Saturday:</td>
                      <td className="py-2">10:00 AM - 4:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday:</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="mb-6 text-xl font-semibold">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone (Optional)
                      </label>
                      <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-2xl font-bold">Find Us</h2>
          <div className="h-96 w-full overflow-hidden rounded-lg bg-gray-200"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto grid max-w-4xl gap-6">
            <div className="rounded-lg bg-card p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">How soon can you start on my project?</h3>
              <p className="text-muted-foreground">
                Typically, we can begin new projects within 1-2 weeks of finalizing the contract. For urgent requests, we may be able to accommodate faster timelines.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">What are your payment terms?</h3>
              <p className="text-muted-foreground">
                We usually require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">Do you provide ongoing maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, we offer various maintenance packages to keep your digital assets running smoothly after launch. Ask us about our monthly maintenance plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}