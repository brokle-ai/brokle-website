import Link from "next/link"
import { Button } from '@/components/ui/button'
import { 
  Card, 
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter 
} from '@/components/ui/card'

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-3xl text-lg text-primary-foreground/90">
            Comprehensive digital solutions tailored to help your business grow and succeed.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Custom websites and web applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  From responsive websites to complex web applications, we create solutions that stand out. Our development team uses the latest technologies to build fast, secure, and scalable web solutions.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>E-commerce websites</li>
                  <li>Business websites</li>
                  <li>Web applications</li>
                  <li>Progressive Web Apps (PWAs)</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Native and cross-platform apps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Reach your customers on any device with our mobile app development services. We build native and cross-platform applications that provide seamless user experiences.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>iOS applications</li>
                  <li>Android applications</li>
                  <li>Cross-platform solutions</li>
                  <li>App maintenance and updates</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card>
              <CardHeader>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>User-centered design solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Great design is more than aesthetics—it's about creating intuitive, engaging user experiences that convert visitors into customers. Our design team focuses on both form and function.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>User experience research</li>
                  <li>Interface design</li>
                  <li>Usability testing</li>
                  <li>Design systems</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card>
              <CardHeader>
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>Increase your online visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Building a great product is just the beginning. Our digital marketing services help you reach your target audience and convert them into loyal customers.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click (PPC) advertising</li>
                  <li>Social media marketing</li>
                  <li>Content marketing</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Solutions</CardTitle>
                <CardDescription>Sell products and services online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Transform your business with our comprehensive e-commerce solutions. We build online stores that are designed to convert and provide a seamless shopping experience.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Online store development</li>
                  <li>Payment gateway integration</li>
                  <li>Inventory management</li>
                  <li>Customer experience optimization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card>
              <CardHeader>
                <CardTitle>Maintenance & Support</CardTitle>
                <CardDescription>Keep your digital assets running smoothly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our relationship doesn't end after launch. We provide ongoing maintenance and support to ensure your digital solutions continue to perform at their best.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Regular updates and maintenance</li>
                  <li>Performance monitoring</li>
                  <li>Security audits</li>
                  <li>Technical support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Process</h2>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">1</div>
                <div className="mt-4 md:ml-6 md:mt-0">
                  <h3 className="text-xl font-semibold">Discovery</h3>
                  <p className="text-muted-foreground">We begin by understanding your business, goals, and requirements to ensure our solution aligns with your needs.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">2</div>
                <div className="mt-4 md:ml-6 md:mt-0">
                  <h3 className="text-xl font-semibold">Planning & Design</h3>
                  <p className="text-muted-foreground">We create detailed project plans and design mockups for your review and approval before moving to development.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">3</div>
                <div className="mt-4 md:ml-6 md:mt-0">
                  <h3 className="text-xl font-semibold">Development</h3>
                  <p className="text-muted-foreground">Our development team brings the designs to life, creating robust and scalable solutions that meet your requirements.</p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">4</div>
                <div className="mt-4 md:ml-6 md:mt-0">
                  <h3 className="text-xl font-semibold">Testing & Launch</h3>
                  <p className="text-muted-foreground">We thoroughly test all aspects of your solution to ensure quality, then manage a smooth launch process.</p>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">5</div>
                <div className="mt-4 md:ml-6 md:mt-0">
                  <h3 className="text-xl font-semibold">Support & Growth</h3>
                  <p className="text-muted-foreground">Our relationship continues after launch with ongoing support and strategic guidance to help your business grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Let's Build Something Amazing Together</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Ready to start your next project? Contact us today for a free consultation and quote.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}