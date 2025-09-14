'use client'

import Link from 'next/link'
import { useState, useEffect } from "react"
import { Menu, Plus, Globe, Users } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from '@/components/custom/mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-lg p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary-foreground"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </div>
              <span className="font-bold text-xl">Brokle</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    <span className="flex items-center gap-1">
                      Product
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                            href="/product/platform"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Brokle Platform
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              The complete solution for your business needs with powerful integrations and analytics.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/features" title="Features">
                        Discover all the powerful features that make Brokle unique
                      </ListItem>
                      <ListItem href="/solutions" title="Solutions">
                        Tailored approaches for different industries and use cases
                      </ListItem>
                      <ListItem href="/enterprise" title="Enterprise">
                        Custom solutions with dedicated support for large organizations
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    <span className="flex items-center gap-1">
                      Resources
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <ListItem href="/documentation" title="Documentation">
                        Comprehensive guides and reference materials for developers
                      </ListItem>
                      <ListItem href="/blog" title="Blog">
                        Latest news, tips, and insights from the Brokle team
                      </ListItem>
                      <ListItem href="/community" title="Community">
                        Join our community of users and contribute to Brokle's growth
                      </ListItem>
                      <ListItem href="/support" title="Support">
                        Get help from our customer support team
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    <span className="flex items-center gap-1">
                      Company
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem href="/about" title="About Us">
                        Learn about our mission, vision, and the team behind Brokle
                      </ListItem>
                      <ListItem href="/careers" title="Careers">
                        Join our team and help us build the future of SaaS
                      </ListItem>
                      <ListItem href="/contact" title="Contact">
                        Get in touch with our team for any inquiries
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">Sign Up Free</Button>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col h-full">
                  <div className="px-2 py-6">
                    <Link href="/" className="flex items-center space-x-2">
                      <div className="bg-primary rounded-lg p-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-primary-foreground"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                      </div>
                      <span className="font-bold text-xl">Brokle</span>
                    </Link>
                  </div>
                  
                  <Accordion type="single" collapsible className="flex-1 overflow-auto">
                    <AccordionItem value="product">
                      <AccordionTrigger className="px-2 py-3 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          <Plus className="h-4 w-4" />
                          Product
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 px-2 py-1">
                          <Link href="/features" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Features
                          </Link>
                          <Link href="/solutions" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Solutions
                          </Link>
                          <Link href="/enterprise" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Enterprise
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <Link href="/pricing" className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors">
                      Pricing
                    </Link>
                    
                    <AccordionItem value="resources">
                      <AccordionTrigger className="px-2 py-3 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Resources
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 px-2 py-1">
                          <Link href="/documentation" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Documentation
                          </Link>
                          <Link href="/blog" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Blog
                          </Link>
                          <Link href="/community" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Community
                          </Link>
                          <Link href="/support" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Support
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="company">
                      <AccordionTrigger className="px-2 py-3 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Company
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 px-2 py-1">
                          <Link href="/about" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            About Us
                          </Link>
                          <Link href="/careers" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Careers
                          </Link>
                          <Link href="/contact" className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors">
                            Contact
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="mt-auto px-2 py-4 border-t">
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" className="w-full justify-center">
                        Log In
                      </Button>
                      <Button className="w-full justify-center">
                        Sign Up Free
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

// TypeScript interface for ListItem props
interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children: React.ReactNode;
  href: string;
  className?: string;
}

// ListItem component for navigation menu with TypeScript
const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}