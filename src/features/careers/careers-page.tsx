'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Linkedin,
  Twitter,
  Upload,
  Clock,
  BriefcaseIcon,
  MapPin
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"

// Sample job listings
const jobListings = [
  {
    id: 1,
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Join our core ML team to develop cutting-edge AI-assisted labeling algorithms that power our platform.",
    posted: "2 weeks ago",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "London, UK",
    type: "Full-time",
    remote: "Remote",
    description: "Help design intuitive interfaces for complex data annotation workflows and visualization tools.",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY",
    type: "Full-time",
    remote: "In-Office",
    description: "Work directly with enterprise customers to ensure they get maximum value from our platform.",
    posted: "1 month ago",
  },
  {
    id: 4,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: "Remote",
    description: "Build responsive and accessible user interfaces using React, Next.js, and modern web technologies.",
    posted: "1 week ago",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Singapore",
    type: "Full-time",
    remote: "Hybrid",
    description: "Manage our cloud infrastructure and help scale our platform to handle millions of annotations daily.",
    posted: "2 days ago",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description: "Drive growth through content marketing, SEO, and digital campaigns focused on AI and ML audiences.",
    posted: "3 weeks ago",
  },
]


export default function CareersPage() {
  const [department, setDepartment] = useState("all")
  const [location, setLocation] = useState("all")
  const [jobType, setJobType] = useState("all")
  const [showNoOpenings, setShowNoOpenings] = useState(false)

  // Filter jobs based on selected filters
  const filteredJobs = jobListings.filter((job) => {
    return (
      (department === "all" || job.department === department) &&
      (location === "all" || job.location.includes(location)) &&
      (jobType === "all" || job.type === jobType)
    )
  })

  // For demo purposes, we can toggle between showing jobs and showing "no openings"
  const displayedJobs = showNoOpenings ? [] : filteredJobs

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Careers</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team & Shape the Future!</h1>
            <p className="text-xl text-muted-foreground mb-8">
                At Brokle, we're building the next generation of AI data labeling tools. Join us in our mission to accelerate AI development through better data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <a href="#open-positions" className="flex items-center gap-2">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <a href="#culture" className="flex items-center gap-2">
                  Our Culture <Users className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Join Us */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Why Join Us</Badge>
              <h2 className="text-3xl font-bold mb-4">What Makes Brokle Special</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just building a product, we're building a team that values innovation, collaboration, and
                impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Work alongside talented individuals who are passionate about AI and data labeling. We value diverse
                    perspectives and open communication.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-brain"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
                    </svg>
                  </div>
                  <CardTitle>Cutting-Edge Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Work on the forefront of AI and machine learning, solving complex problems with innovative solutions
                    that impact thousands of AI teams worldwide.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-rocket"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <CardTitle>Growth & Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We're growing rapidly, offering abundant opportunities for career advancement and the chance to make
                    a meaningful impact on the future of AI.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Join Our Team</Badge>
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find your perfect role and help us build the future of data labeling.
              </p>

              {/* Toggle for demo purposes */}
              <div className="mt-4">
                <Button variant="outline" onClick={() => setShowNoOpenings(!showNoOpenings)} className="text-xs">
                  {showNoOpenings ? "Show Sample Jobs" : "Show 'No Openings' View"}
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <Label htmlFor="department-filter">Department</Label>
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger id="department-filter">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Customer Success">Customer Success</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location-filter">Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location-filter">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="San Francisco">San Francisco</SelectItem>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="London">London</SelectItem>
                    <SelectItem value="Singapore">Singapore</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type-filter">Job Type</Label>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger id="type-filter">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Listings */}
            {displayedJobs.length > 0 ? (
              <div className="space-y-6">
                {displayedJobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[1fr_auto] gap-4">
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="bg-primary/5">
                                {job.department}
                              </Badge>
                              <Badge variant="outline" className="bg-primary/5">
                                {job.remote}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BriefcaseIcon className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground">{job.description}</p>
                        </div>

                        <div className="flex items-center justify-center p-6 bg-muted/20">
                          <Button>Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // No Openings View
              <Card className="border-dashed">
                <CardHeader className="text-center">
                  <CardTitle>We're not hiring at the moment, but we'd love to stay in touch!</CardTitle>
                  <CardDescription>
                    Join our talent pool to be notified when new positions open up that match your skills and interests.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Preferred Department</Label>
                      <Select>
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="product">Product</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="customer-success">Customer Success</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Upload Resume</Label>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" className="w-full">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose File
                        </Button>
                        <span className="text-sm text-muted-foreground">No file chosen</span>
                      </div>
                      <p className="text-xs text-muted-foreground">PDF, DOCX, or TXT. Max 5MB.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Tell us about your skills and interests..." rows={4} />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="notify" className="rounded border-gray-300" />
                      <Label htmlFor="notify" className="text-sm font-normal">
                        Notify me about future job openings that match my profile
                      </Label>
                    </div>

                    <Button type="submit" className="w-full">
                      Join Talent Pool
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Employee Stories & Culture */}
      <section id="culture" className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Culture</Badge>
              <h2 className="text-3xl font-bold mb-4">Life at Brokle</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get to know our team, culture, and what makes working at Brokle special.
              </p>
            </div>

            {/* Team Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team building activity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Office environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team lunch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Company offsite"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Employee Testimonials */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-background/60 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Sarah Chen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Sarah Chen</h4>
                        <p className="text-sm text-muted-foreground mb-4">Senior ML Engineer, 2 years at Brokle</p>
                        <p className="text-muted-foreground">
                          "Working at Brokle has been the highlight of my career. I get to solve challenging ML problems
                          while collaborating with brilliant minds who are passionate about AI."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Michael Rodriguez"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Michael Rodriguez</h4>
                        <p className="text-sm text-muted-foreground mb-4">Product Designer, 1.5 years at Brokle</p>
                        <p className="text-muted-foreground">
                          "The culture at Brokle encourages creativity and innovation. I've grown so much as a designer
                          by working on complex problems and getting feedback from our amazing users."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Benefits & Perks</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart-pulse"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        <path d="M3.22 12H9.5l.5-1 2 4 .5-1h8.78" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Health & Wellness</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive health insurance and wellness programs
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar-days"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M3 10h18" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Flexible PTO</h4>
                    <p className="text-sm text-muted-foreground">Take time off when you need it</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-graduation-cap"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Learning Budget</h4>
                    <p className="text-sm text-muted-foreground">Resources for professional development</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-laptop"
                      >
                        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Remote Flexibility</h4>
                    <p className="text-sm text-muted-foreground">Work from anywhere options</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-utensils"
                      >
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                        <path d="M7 2v20" />
                        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Free Meals</h4>
                    <p className="text-sm text-muted-foreground">Catered lunches and snacks</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-piggy-bank"
                      >
                        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                        <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                        <path d="M16 11h0" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Equity</h4>
                    <p className="text-sm text-muted-foreground">Competitive equity packages</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-party-popper"
                      >
                        <path d="M5.8 11.3 2 22l10.7-3.79" />
                        <path d="M4 3h.01" />
                        <path d="M22 8h.01" />
                        <path d="M15 2h.01" />
                        <path d="M22 20h.01" />
                        <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                        <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
                        <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
                        <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Team Events</h4>
                    <p className="text-sm text-muted-foreground">Regular team building activities</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-home"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Home Office</h4>
                    <p className="text-sm text-muted-foreground">Stipend for your workspace</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Stay Connected</Badge>
              <h2 className="text-3xl font-bold mb-4">Follow Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated on company news, events, and job openings by following us on social media.
              </p>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Twitter className="h-5 w-5" />
                Twitter
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQs & Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQs</Badge>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our hiring process and working at Brokle.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the hiring process like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Our hiring process typically includes an initial screening call with a recruiter, followed by a
                    technical or role-specific interview, and a final interview with the team you'll be working with.
                    For engineering roles, we also include a technical assessment. The entire process usually takes 2-3
                    weeks.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer remote work options?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we offer flexible work arrangements including fully remote, hybrid, and in-office options
                    depending on the role and team. We have offices in San Francisco, New York, London, and Singapore
                    for those who prefer to work in-person.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What's the onboarding process like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    New team members go through a comprehensive onboarding program that includes product training,
                    company culture sessions, and team introductions. You'll be paired with a buddy who will help you
                    navigate your first few weeks at Brokle.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you sponsor work visas?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we do sponsor work visas for exceptional candidates. Please note your visa requirements in your
                    application, and we'll discuss the details during the interview process.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What's the company culture like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We value collaboration, innovation, and impact. Our team is passionate about AI and data labeling,
                    and we work together to solve complex problems. We maintain a healthy work-life balance and
                    celebrate our successes together.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our open positions and take the next step in your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <a href="#open-positions" className="flex items-center gap-2">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <a href="#" className="flex items-center gap-2">
                  Join Talent Pool <Users className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}