'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Get initial theme from localStorage or use defaultTheme if none exists
  const [theme, setTheme] = useState<Theme>(() => {
    // Only attempt to access localStorage if running in browser environment
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey)
      // Only use stored theme if it's a valid theme value
      if (storedTheme === "dark" || storedTheme === "light" || storedTheme === "system") {
        return storedTheme
      }
    }
    return defaultTheme
  })

  // This effect updates the DOM and stores the preference
  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove both theme classes before applying the new one
    root.classList.remove("light", "dark")
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
    
    // Store the user's preference in localStorage
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  // Add listener for system preference changes when in system mode
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      
      // Initial setup based on current preference
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(
        mediaQuery.matches ? "dark" : "light"
      )
      
      // Update when system preference changes
      const handleChange = (event: MediaQueryListEvent) => {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(
          event.matches ? "dark" : "light"
        )
      }
      
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext)
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  
  return context
}