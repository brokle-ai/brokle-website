import { CookiePreferences } from "@/components/cookie-consent";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent-preferences";

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const savedPreferences = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences) as CookiePreferences;
      setPreferences(parsedPreferences);
    }
    setInitialized(true);
  }, []);

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedPreferences));
  };

  const hasConsented = (cookieType: keyof CookiePreferences): boolean => {
    return preferences[cookieType];
  };

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  return {
    preferences,
    updatePreferences,
    hasConsented,
    resetConsent,
    initialized,
  };
};
