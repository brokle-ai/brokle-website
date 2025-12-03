import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Server, Eye, FileCheck, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { DisplayHeading, SectionHeader, CTASection, FeatureGrid } from "@/components/shared";

export const metadata: Metadata = {
  title: "Security & Compliance - Brokle",
  description: "Enterprise-grade security with SOC 2 Type II, GDPR, and HIPAA compliance. Self-host option for complete data control.",
  openGraph: {
    title: "Security & Compliance - Brokle",
    description: "Enterprise-grade security with SOC 2 Type II, GDPR, and HIPAA compliance.",
    url: "https://brokle.ai/security",
    siteName: "Brokle",
    type: "website",
  },
};

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Annual audit verifying our security controls for data protection, availability, and confidentiality.",
    icon: Shield,
  },
  {
    name: "GDPR Compliant",
    description: "Full compliance with EU data protection regulations including data deletion and portability.",
    icon: FileCheck,
  },
  {
    name: "HIPAA Ready",
    description: "BAA available for healthcare organizations. HIPAA-compliant data handling and storage.",
    icon: Lock,
  },
  {
    name: "ISO 27001",
    description: "Information security management system certified to international standards.",
    icon: Shield,
  },
];

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256). Your traces never touch unencrypted storage.",
    icon: Lock,
  },
  {
    title: "Self-Hosting Option",
    description: "Deploy Brokle on your own infrastructure. Keep all data within your security perimeter.",
    icon: Server,
  },
  {
    title: "Data Residency",
    description: "Choose where your data lives. US, EU, or your own data centers with self-hosting.",
    icon: Shield,
  },
  {
    title: "Audit Logs",
    description: "Complete audit trail of all actions. Know who accessed what and when.",
    icon: Eye,
  },
  {
    title: "SSO & SAML",
    description: "Enterprise SSO with SAML 2.0, OIDC, and OAuth2. Integrate with your identity provider.",
    icon: Users,
  },
  {
    title: "Role-Based Access",
    description: "Granular permissions for teams. Control who can view, edit, and manage resources.",
    icon: FileCheck,
  },
];

const practices = [
  {
    title: "Vulnerability Management",
    description: "Regular security scanning, penetration testing, and responsible disclosure program.",
  },
  {
    title: "Incident Response",
    description: "24/7 security monitoring with documented incident response procedures.",
  },
  {
    title: "Employee Security",
    description: "Background checks, security training, and least-privilege access for all employees.",
  },
  {
    title: "Vendor Security",
    description: "Rigorous security assessment of all vendors and subprocessors.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Security & Compliance
            </Badge>
            <DisplayHeading as="h1" className="mb-6">
              Enterprise-grade{" "}
              <span className="text-primary">security</span>
            </DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Your data security is our top priority. SOC 2 Type II certified, GDPR compliant,
              and HIPAA ready—or self-host for complete control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 h-12 px-8" asChild>
                <Link href="/contact">
                  Talk to Security Team <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href="https://docs.brokle.ai/security" target="_blank" rel="noopener noreferrer">
                  Security Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeader
            badge="Certifications"
            title="Compliance Certifications"
            description="Independently verified security and compliance standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert) => (
              <Card key={cert.name} className="text-center bg-background border-0 shadow-none">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <cert.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <SectionHeader
            badge="Features"
            title="Security Features"
            description="Built-in security for peace of mind."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-none bg-muted/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              badge="Practices"
              title="Security Practices"
              description="Our commitment to operational security."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practices.map((practice) => (
                <div key={practice.title} className="flex items-start gap-4 p-6 bg-background rounded-lg">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{practice.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-Hosting Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Self-Hosting
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Data Control</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  For organizations with strict data requirements, Brokle can be self-hosted on your own
                  infrastructure. Keep all traces, prompts, and analytics within your security perimeter.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Deploy on AWS, GCP, Azure, or on-premise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Your data never leaves your network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Same features as cloud, you control updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Air-gapped deployment options available</span>
                  </li>
                </ul>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://docs.brokle.ai/self-hosting" target="_blank" rel="noopener noreferrer">
                    Self-Hosting Guide <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-lg border bg-muted/30 overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Server className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Self-Hosted Deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need more details?"
        description="Request our security questionnaire, penetration test report, or schedule a call with our security team."
        primaryCTA={{
          label: "Contact Security Team",
          href: "/contact",
        }}
        secondaryCTA={{
          label: "Trust Center",
          href: "https://trust.brokle.ai",
        }}
        features={["SOC 2 Type II", "GDPR Compliant", "HIPAA Ready"]}
        variant="muted"
      />
    </>
  );
}
