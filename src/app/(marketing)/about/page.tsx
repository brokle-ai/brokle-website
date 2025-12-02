import AboutPage from "@/features/about/about-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Brokle",
  description: "Learn about Brokle's mission to make LLM applications observable, debuggable, and improvable. Open-source at our core.",
  openGraph: {
    title: "About Us - Brokle",
    description: "Learn about Brokle's mission to make LLM applications observable, debuggable, and improvable.",
    url: "https://brokle.ai/about",
    siteName: "Brokle",
    type: "website",
  },
};

export default function About() {
  return <AboutPage />;
}