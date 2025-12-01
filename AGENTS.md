# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `src/app` with route groups like `(marketing)`, `(product)`, `(company)`, and `(legal)` plus server actions in `src/app/actions`.
- Feature-scoped UI and copy reside in `src/features/<area>`; shared primitives in `src/components/ui`, layout chrome in `src/components/layout`, and custom composites in `src/components/custom`.
- Shared state/providers are under `src/context` and `src/providers`; hooks in `src/hooks`; helpers and constants in `src/lib`.
- Static assets and favicons belong in `public`. Global configuration is at the repo root (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`).

## Build, Test, and Development Commands
- Install: `pnpm install` (repo uses `pnpm-lock.yaml`; npm/yarn will work but may drift).
- Develop: `pnpm dev` to run the Turbopack dev server on port 3000.
- Production: `pnpm build` generates the Turbopack bundle; `pnpm start` serves the built output.
- Quality: `pnpm lint` runs ESLint with the Next/TypeScript config.

## Coding Style & Naming Conventions
- TypeScript-first React with the App Router; prefer functional components and server components where possible.
- Keep components in PascalCase files (`Navbar.tsx`), hooks prefixed with `use` (`useTheme`), and route segments lower-case.
- Tailwind CSS v4 is the styling layer; co-locate styles with components and keep class lists purposeful. Use `class-variance-authority` and `tailwind-merge` helpers where merging variants.
- Import via the `@/` alias for anything under `src`. Run `pnpm lint` before pushing to catch style or accessibility issues.

## Testing Guidelines
- No automated test suite is configured yet. When adding tests, prefer React Testing Library for components and Playwright for page flows; add a `pnpm test` script alongside.
- For new features, cover at least the critical happy path and one edge case (e.g., required form fields, error banners). Co-locate tests next to the component or feature folder.

## Commit & Pull Request Guidelines
- Follow the existing history: short, imperative messages (`upgrade nextjs to 16`, `code cleanup`). Keep subject lines under ~72 chars.
- Before opening a PR, ensure `pnpm lint` and (once added) tests pass. Note any skipped checks.
- PRs should include: concise summary of scope, linked issue or ticket, screenshots for UI changes, and notes on migrations or env vars. Mention any new routes or breaking changes explicitly.

## Security & Configuration Tips
- Store secrets in `.env.local`; never commit them. Use `NEXT_PUBLIC_*` only for values safe for the client bundle.
- Review cookie usage (`CookieConsentProvider`, `js-cookie`) and theme storage keys when introducing new client state. Validate external script or iframe additions against Content Security Policy needs.
