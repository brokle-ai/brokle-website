import ContactPage from "@/features/contact/contact-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Brokle",
  description: "Get in touch with Brokle. Questions about LLM observability, enterprise features, or technical support.",
  openGraph: {
    title: "Contact Us - Brokle",
    description: "Get in touch with Brokle. Questions about LLM observability, enterprise features, or technical support.",
    url: "https://brokle.ai/contact",
    siteName: "Brokle",
    type: "website",
  },
};

export default function Contact() {
  return <ContactPage />;
}