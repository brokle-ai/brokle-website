import BlogPage from "@/features/blog/blog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Brokle",
  description: "Engineering insights, product updates, and best practices for building production LLM applications.",
  openGraph: {
    title: "Blog - Brokle",
    description: "Engineering insights, product updates, and best practices for building production LLM applications.",
    url: "https://brokle.ai/blog",
    siteName: "Brokle",
    type: "website",
  },
};

export default function Blog() {
  return <BlogPage />;
}
