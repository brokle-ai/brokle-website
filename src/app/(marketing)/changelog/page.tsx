import ChangelogPage from "@/features/changelog/changelog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - Brokle",
  description: "Stay updated with the latest Brokle features, improvements, and bug fixes for LLM observability.",
  openGraph: {
    title: "Changelog - Brokle",
    description: "Stay updated with the latest Brokle features, improvements, and bug fixes for LLM observability.",
    url: "https://brokle.ai/changelog",
    siteName: "Brokle",
    type: "website",
  },
};

export default function Changelog() {
  return <ChangelogPage />;
}