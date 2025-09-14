import { CookiePreferences } from '@/components/cookie-consent';
import Cookies from 'js-cookie';

// Default cookie options
const cookieDefaults = {
  expires: 365, // days
  path: '/',
  sameSite: 'strict' as const,
  secure: typeof window !== 'undefined' ? window.location.protocol === 'https:' : true,
};

export const initializeAnalytics = () => {
  // Initialize your analytics service (Google Analytics, Plausible, etc.)
  console.log('Analytics initialized');
  
  // Example: Google Analytics
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'G-XXXXXXXXXX');
};

export const initializeMarketing = () => {
  // Initialize marketing pixels (Facebook, LinkedIn, etc.)
  console.log('Marketing cookies initialized');
  
  // Example: Facebook Pixel
  // !function(f,b,e,v,n,t,s) {
  //   if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //   n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t,s)}(window, document,'script',
  //   'https://connect.facebook.net/en_US/fbevents.js');
  //   fbq('init', 'XXXXXXXXXXXXXXXXX');
  //   fbq('track', 'PageView');
};

export const applyPreferences = (preferences: CookiePreferences) => {
  if (preferences.analytics) {
    initializeAnalytics();
  }
  
  if (preferences.marketing) {
    initializeMarketing();
  }
  
  if (preferences.preferences) {
    // Enable preference cookies
    console.log('Preference cookies initialized');
  }
};

export const setCookie = (name: string, value: string, options = {}) => {
  Cookies.set(name, value, { ...cookieDefaults, ...options });
};

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  Cookies.remove(name, { path: cookieDefaults.path });
};
