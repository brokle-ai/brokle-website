'use client'

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ShieldCheck, Cookie, BarChart2, Settings, X } from "lucide-react";

// shadcn UI components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Types
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

// Local storage key
const COOKIE_CONSENT_KEY = "cookie-consent-preferences";

// Example "apply" function that runs scripts or tracking based on consent
function applyCookiePreferences(prefs: CookiePreferences) {
  // Real implementation: conditionally load your analytics/marketing scripts
  if (prefs.analytics) {
    console.log("Analytics cookies enabled");
    // initializeAnalytics();
  }
  if (prefs.marketing) {
    console.log("Marketing cookies enabled");
    // initializeMarketing();
  }
  if (prefs.preferences) {
    console.log("Preference cookies enabled");
  }
}

export const CookieConsent: React.FC = () => {
  // Preferences state
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // always required
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Tracks if user has previously set preferences
  const [hasSavedPreferences, setHasSavedPreferences] = useState(false);

  // Show/hide minimal banner
  const [showBanner, setShowBanner] = useState(false);

  // Show/hide advanced dialog
  const [showAdvancedDialog, setShowAdvancedDialog] = useState(false);

  // Load saved preferences once on mount
  useEffect(() => {
    const savedPrefs = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedPrefs) {
      const parsed = JSON.parse(savedPrefs) as CookiePreferences;
      setPreferences(parsed);
      setHasSavedPreferences(true);
      // Optionally apply them right away:
      applyCookiePreferences(parsed);
    } else {
      // If none saved, show the banner
      setShowBanner(true);
    }
  }, []);

  // ---- Handlers ----
  const handleAcceptAll = () => {
    const allEnabled = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allEnabled);
    savePreferences(allEnabled);
    // Hide the banner & dialog
    setShowBanner(false);
    setShowAdvancedDialog(false);
    toast("All cookies accepted", {
      description: "Your cookie preferences have been saved",
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowAdvancedDialog(false);
    toast("Preferences saved", {
      description: "Your cookie preferences have been saved",
    });
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(essentialOnly);
    savePreferences(essentialOnly);
    setShowBanner(false);
    setShowAdvancedDialog(false);
    toast("Only essential cookies accepted", {
      description: "Your cookie preferences have been saved",
    });
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    applyCookiePreferences(prefs);
    setHasSavedPreferences(true);
  };

  // ---- Render ----
  return (
    <>
      {/* 1) Card-style Cookie Banner */}
      {showBanner && !hasSavedPreferences && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-50 mx-auto flex justify-center px-4"
        >
          <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur-md dark:bg-gray-900/95 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  <CardTitle>Cookie Preferences</CardTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowBanner(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                We use cookies to enhance your browsing experience. Choose which cookies you want to allow.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/60">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Necessary</h4>
                    <p className="text-xs text-muted-foreground">Required for basic functionality</p>
                  </div>
                  <Switch className="ml-auto" checked disabled />
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/60">
                  <BarChart2 className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Analytics</h4>
                    <p className="text-xs text-muted-foreground">Helps us improve our services</p>
                  </div>
                  <Switch 
                    className="ml-auto" 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => 
                      setPreferences((prev) => ({ ...prev, analytics: checked }))
                    }
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-0 pb-4">
              <Button variant="outline" size="sm" onClick={() => setShowAdvancedDialog(true)}>
                More options
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleRejectNonEssential}>
                  Essential Only
                </Button>
                <Button size="sm" onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                  Accept All
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {/* 2) Advanced Settings Dialog (centered) */}
      <Dialog open={showAdvancedDialog} onOpenChange={setShowAdvancedDialog}>
        <DialogContent className="sm:max-w-lg rounded-xl">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <DialogTitle>Customize Cookie Settings</DialogTitle>
            </div>
            <DialogDescription>
              Choose which cookies you want to allow on this site.
            </DialogDescription>
          </DialogHeader>

          <Separator />

          <div className="py-4">
            <Accordion type="single" collapsible className="w-full">
              {/* Necessary (always checked) */}
              <AccordionItem value="necessary" className="border-b border-gray-200 dark:border-gray-800">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3 w-full">
                    <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-grow text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Necessary Cookies</span>
                        <Badge variant="outline" className="text-xs">Required</Badge>
                      </div>
                    </div>
                    <Switch checked disabled className="mr-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-sm text-muted-foreground">
                  These cookies are essential for the website to function properly and cannot be disabled.
                  They enable basic functions like page navigation, secure areas access, and remember
                  your preferences.
                </AccordionContent>
              </AccordionItem>

              {/* Analytics */}
              <AccordionItem value="analytics" className="border-b border-gray-200 dark:border-gray-800">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3 w-full">
                    <BarChart2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-grow text-left">
                      <span className="font-medium">Analytics Cookies</span>
                    </div>
                    <Switch
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, analytics: checked }))
                      }
                      className="mr-4"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-sm text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously. They help us improve our website and services.
                </AccordionContent>
              </AccordionItem>

              {/* Marketing */}
              <AccordionItem value="marketing" className="border-b border-gray-200 dark:border-gray-800">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3 w-full">
                    <Cookie className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-grow text-left">
                      <span className="font-medium">Marketing Cookies</span>
                    </div>
                    <Switch
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, marketing: checked }))
                      }
                      className="mr-4"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-sm text-muted-foreground">
                  These cookies are used to track visitors across websites to display relevant 
                  advertisements. They help make advertising more engaging to users and more valuable 
                  to publishers and advertisers.
                </AccordionContent>
              </AccordionItem>

              {/* Preferences */}
              <AccordionItem value="preferences" className="border-b border-gray-200 dark:border-gray-800">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3 w-full">
                    <Settings className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-grow text-left">
                      <span className="font-medium">Preference Cookies</span>
                    </div>
                    <Switch
                      id="preferences"
                      checked={preferences.preferences}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, preferences: checked }))
                      }
                      className="mr-4"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-sm text-muted-foreground">
                  These cookies enable a website to remember information that changes the way the 
                  website behaves or looks, like your preferred language or the region that you are in.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2">
            <Button variant="outline" onClick={handleRejectNonEssential}>
              Essential Only
            </Button>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                Accept All
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 3) (Optional) A small "Cookie Settings" button always available */}
      {hasSavedPreferences && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAdvancedDialog(true)}
            className="bg-white/90 backdrop-blur-sm shadow-md hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 gap-2 rounded-full"
          >
            <Cookie className="h-4 w-4" />
            Cookie Settings
          </Button>
        </motion.div>
      )}
    </>
  );
};