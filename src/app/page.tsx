import HomePageComponent from "@/features/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brokle - AI Data Labeling Platform",
  description: "Accelerate your AI development with real-time collaboration, advanced ML integrations, and streamlined project management — all in one powerful annotation platform.",
};

export default function Home() {
  return <HomePageComponent />;
}