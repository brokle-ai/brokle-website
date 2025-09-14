# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev` or `npm run dev`
- **Build for production**: `pnpm build` or `npm run build`
- **Run linter**: `pnpm lint` or `npm run lint`
- **Start production server**: `pnpm start` or `npm start`

## Project Architecture

This is a Next.js 15 website built with App Router, TypeScript, and Tailwind CSS for the Brokle platform. The project follows Next.js best practices with a feature-based architecture.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes for dark/light mode support
- **Notifications**: Sonner for toast notifications

### Directory Structure

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── (marketing)/        # Route group for marketing pages
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   └── contact/page.tsx
│   ├── (legal)/            # Route group for legal pages
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── (product)/          # Route group for product pages
│   ├── (company)/          # Route group for company pages
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles with CSS variables
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout-specific components (Navbar, Footer)
│   └── cookie-consent.tsx # Cookie consent component
├── features/              # Feature-based page components
│   ├── home/              # Homepage components
│   ├── about/             # About page components
│   ├── contact/           # Contact page components
│   └── [feature]/         # Other feature modules
├── lib/                   # Utilities and configuration
├── context/               # React context providers
├── providers/             # Application providers
└── hooks/                 # Custom React hooks (if needed)
```

### App Router Structure

The app uses Next.js 15 App Router with route groups for organization:
- `(marketing)` - Public marketing pages (about, pricing, contact)
- `(legal)` - Legal pages (privacy policy, terms of service)
- `(product)` - Product-specific pages
- `(company)` - Company pages (careers, enterprise)

Route groups don't affect the URL structure but help organize related pages.

### Component Architecture

- **shadcn/ui**: UI components configured with "new-york" style and neutral base color
- **Tailwind CSS v4**: Uses CSS variables and @import syntax for theming
- **Server Components**: Pages are Server Components by default for better performance
- **Client Components**: Interactive components marked with 'use client'

### Key Features

- **Server-Side Cookie Consent**: Cookie management handled server-side
- **Theme System**: Integrated dark/light mode with system preference detection
- **Form Handling**: Contact forms use Server Actions for server-side processing
- **SEO Optimized**: Each page has proper metadata and meta tags
- **Type Safety**: Full TypeScript coverage with strict mode

### Development Notes

- Uses absolute imports with `@/` prefix via path alias configuration
- All routing handled by Next.js App Router (no client-side routing library)
- Server Actions are used for form submissions and server-side logic
- Images optimized with Next.js Image component
- Features organized as reusable components in the features directory
- Layout includes global providers: ThemeProvider, CookieConsentProvider, Toaster