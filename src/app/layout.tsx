import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { CookieConsentProvider } from "@/providers/cookie-consent-provider";
import { Toaster } from "sonner";
import { CookieConsent } from "@/components/cookie-consent";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brokle - Open Source LLM Observability Platform",
  description: "Debug and improve your LLM applications with traces, evals, prompt management, and metrics. Open source, OpenTelemetry-native, enterprise-ready.",
  keywords: ["LLM observability", "LLM tracing", "prompt management", "AI monitoring", "LLM evaluation", "OpenTelemetry"],
  authors: [{ name: "Brokle" }],
  openGraph: {
    title: "Brokle - Open Source LLM Observability Platform",
    description: "Debug and improve your LLM applications with traces, evals, prompt management, and metrics.",
    type: "website",
    locale: "en_US",
    siteName: "Brokle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brokle - Open Source LLM Observability Platform",
    description: "Debug and improve your LLM applications with traces, evals, prompt management, and metrics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <CookieConsentProvider>
          <AnalyticsTracker />
          <ThemeProvider defaultTheme="system" storageKey="brokle-ui-theme">
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <CookieConsent />
            <Toaster />
          </ThemeProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
