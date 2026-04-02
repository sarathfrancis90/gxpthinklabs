# GXPThinklabs Website

## Project Overview
Industry-leading software services website for **GXPThinklabs** (parent company: SRJH). GxP compliance consulting serving biotech, pharma, and medical device companies.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Primitives**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Theming**: next-themes (dark-mode-first)
- **Deployment**: Vercel

## Design Principles
- **Mobile-first** responsive design
- **Dark-mode-first** with light mode toggle
- Industry-leading UI/UX (Linear/Vercel/Stripe caliber)
- Designs created in **Google Stitch** first, then implemented in code
- Indigo/violet accent palette (#6366F1) to stand out from corporate blue competitors

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Project Structure
- `reference-data/` — Scraped content from gxpcompliance.com (domain reference only)
- `src/app/` — Next.js App Router pages
- `src/components/` — React components (ui/, layout/, home/, services/, shared/)
- `src/lib/` — Utilities, constants, types
- `src/hooks/` — Custom React hooks
- `src/data/` — Content data files
- `public/` — Static assets (images, icons, fonts, documents)

## MCP Integrations
- **Google Stitch** — AI-powered UI design tool for creating page designs
- **Google Gemini API** — Image/icon generation (Nano Banana Pro subscription)

## Conventions
- Use `cn()` utility from `lib/utils.ts` for conditional classnames
- All components use TypeScript with proper prop types
- Prefer server components; use `"use client"` only when needed
- Follow existing patterns when adding new pages/components
- Keep content in `src/data/` files, not hardcoded in components
