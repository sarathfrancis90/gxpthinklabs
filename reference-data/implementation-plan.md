# GXPThinklabs Website -- Complete Implementation Plan

> **Company**: GXPThinklabs (a subsidiary of SRJH, founded 2025)
> **Domain**: GxP compliance consulting for biotech, pharma, and medical device companies
> **Services**: IT Infrastructure Qualification, Computer System Validation (CSV/CSA), System Development & IT Compliance Audits
> **NOT related to gxpcompliance.com** -- GXPThinklabs is an independent, new brand

---

## 1. Project Initialization

### 1.1 Create Next.js App

```bash
npx create-next-app@latest gxpthinklabs \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack
```

### 1.2 Install Dependencies

```bash
# Core UI
npm install framer-motion@^11.18.0
npm install @radix-ui/react-accordion@^1.2.3
npm install @radix-ui/react-dialog@^1.1.4
npm install @radix-ui/react-dropdown-menu@^2.1.4
npm install @radix-ui/react-navigation-menu@^1.2.3
npm install @radix-ui/react-select@^2.1.4
npm install @radix-ui/react-separator@^1.1.1
npm install @radix-ui/react-slot@^1.1.1
npm install @radix-ui/react-tooltip@^1.1.6
npm install @radix-ui/react-visually-hidden@^1.1.1

# Theming
npm install next-themes@^0.4.4

# Icons
npm install lucide-react@^0.469.0

# Forms
npm install react-hook-form@^7.54.2
npm install @hookform/resolvers@^3.9.1
npm install zod@^3.24.1

# Utilities
npm install clsx@^2.1.1
npm install tailwind-merge@^2.6.0
npm install class-variance-authority@^0.7.1
```

### 1.3 Complete `package.json`

```json
{
  "name": "gxpthinklabs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-navigation-menu": "^1.2.3",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.6",
    "@radix-ui/react-visually-hidden": "^1.1.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^11.18.0",
    "lucide-react": "^0.469.0",
    "next": "14.2.21",
    "next-themes": "^0.4.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "tailwind-merge": "^2.6.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.21",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### 1.4 Complete Project Folder Structure

```
gxpthinklabs/
├── public/
│   ├── images/
│   │   ├── hero-bg.png
│   │   ├── about-hero.png
│   │   ├── icon.png
│   │   ├── og-image.png
│   │   ├── industry-biotech.png
│   │   ├── industry-pharma.png
│   │   ├── industry-medical.png
│   │   ├── service-infrastructure.png
│   │   ├── service-csv.png
│   │   └── service-audits.png
│   ├── documents/
│   │   └── validating-ai-systems.pdf
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx                       (Root layout with ThemeProvider)
│   │   ├── page.tsx                         (Home page)
│   │   ├── not-found.tsx                    (404 page)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── infrastructure-qualification/
│   │   │   │   └── page.tsx
│   │   │   ├── computer-system-validation/
│   │   │   │   └── page.tsx
│   │   │   └── compliance-audits/
│   │   │       └── page.tsx
│   │   ├── products/
│   │   │   └── infrastructure-compliance-library/
│   │   │       └── page.tsx
│   │   ├── resources/
│   │   │   └── white-papers/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── separator.tsx
│   │   │   └── tooltip.tsx
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── section-wrapper.tsx
│   │   ├── home/
│   │   │   ├── hero-section.tsx
│   │   │   ├── services-grid.tsx
│   │   │   ├── why-section.tsx
│   │   │   ├── industries-section.tsx
│   │   │   ├── trust-strip.tsx
│   │   │   └── cta-banner.tsx
│   │   ├── about/
│   │   │   ├── about-hero.tsx
│   │   │   ├── mission-section.tsx
│   │   │   ├── pillars-section.tsx
│   │   │   ├── timeline-section.tsx
│   │   │   └── parent-company-section.tsx
│   │   ├── services/
│   │   │   ├── service-hero.tsx
│   │   │   ├── service-card.tsx
│   │   │   ├── service-detail-grid.tsx
│   │   │   ├── compliance-library-assets.tsx
│   │   │   └── service-cta.tsx
│   │   ├── contact/
│   │   │   ├── contact-form.tsx
│   │   │   ├── contact-info.tsx
│   │   │   └── faq-section.tsx
│   │   ├── resources/
│   │   │   ├── resource-card.tsx
│   │   │   ├── resource-filter.tsx
│   │   │   └── newsletter-section.tsx
│   │   ├── products/
│   │   │   ├── product-hero.tsx
│   │   │   ├── product-category-tabs.tsx
│   │   │   └── product-feature-grid.tsx
│   │   └── shared/
│   │       ├── animated-counter.tsx
│   │       ├── section-header.tsx
│   │       ├── gradient-text.tsx
│   │       ├── glass-card.tsx
│   │       ├── scroll-reveal.tsx
│   │       └── page-transition.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── navigation.ts
│   │   ├── faq.ts
│   │   ├── resources.ts
│   │   ├── industries.ts
│   │   ├── timeline.ts
│   │   ├── products.ts
│   │   └── site-config.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   └── hooks/
│       ├── use-scroll-animation.ts
│       ├── use-counter-animation.ts
│       └── use-media-query.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── next.config.mjs
├── .env.local
├── .env.example
├── .gitignore
├── CLAUDE.md
└── reference-data/
    ├── designs/
    │   ├── home.html
    │   ├── home.png
    │   ├── home-light.html
    │   ├── home-light.png
    │   ├── about-2025.html
    │   ├── about-2025.png
    │   ├── contact.html
    │   ├── contact.png
    │   ├── infrastructure.html
    │   ├── infrastructure.png
    │   ├── csv.html
    │   ├── csv.png
    │   ├── compliance-audits.html
    │   ├── compliance-audits.png
    │   ├── products.html
    │   ├── products.png
    │   ├── white-papers.html
    │   └── white-papers.png
    ├── gxpcompliance-site-data.md
    └── implementation-plan.md
```

### 1.5 Tailwind Config (`tailwind.config.ts`)

Extracted from the Stitch HTML designs -- the dark mode palette is based on Material Design 3 tokens, the light mode palette is derived from the light Stitch export.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === DARK MODE SEMANTIC TOKENS (from Stitch) ===
        // These are used directly in dark mode via CSS variables
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dim: "hsl(var(--primary-dim))",
          container: "hsl(var(--primary-container))",
          fixed: "hsl(var(--primary-fixed))",
          "fixed-dim": "hsl(var(--primary-fixed-dim))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          dim: "hsl(var(--secondary-dim))",
          container: "hsl(var(--secondary-container))",
          fixed: "hsl(var(--secondary-fixed))",
          "fixed-dim": "hsl(var(--secondary-fixed-dim))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          dim: "hsl(var(--tertiary-dim))",
          container: "hsl(var(--tertiary-container))",
          fixed: "hsl(var(--tertiary-fixed))",
          "fixed-dim": "hsl(var(--tertiary-fixed-dim))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          dim: "hsl(var(--error-dim))",
          container: "hsl(var(--error-container))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          dim: "hsl(var(--surface-dim))",
          bright: "hsl(var(--surface-bright))",
          variant: "hsl(var(--surface-variant))",
          tint: "hsl(var(--surface-tint))",
          "container-lowest": "hsl(var(--surface-container-lowest))",
          "container-low": "hsl(var(--surface-container-low))",
          container: "hsl(var(--surface-container))",
          "container-high": "hsl(var(--surface-container-high))",
          "container-highest": "hsl(var(--surface-container-highest))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        outline: {
          DEFAULT: "hsl(var(--outline))",
          variant: "hsl(var(--outline-variant))",
        },
        "on-primary": "hsl(var(--on-primary))",
        "on-secondary": "hsl(var(--on-secondary))",
        "on-tertiary": "hsl(var(--on-tertiary))",
        "on-error": "hsl(var(--on-error))",
        "on-surface": "hsl(var(--on-surface))",
        "on-surface-variant": "hsl(var(--on-surface-variant))",
        "on-background": "hsl(var(--on-background))",
        "inverse-surface": "hsl(var(--inverse-surface))",
        "inverse-on-surface": "hsl(var(--inverse-on-surface))",
        "inverse-primary": "hsl(var(--inverse-primary))",
      },
      fontFamily: {
        headline: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        label: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
```

### 1.6 Global CSS (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ============================================
       LIGHT MODE (from Stitch home-light.html)
       ============================================ */
    --background: 0 0% 97.6%;          /* #f9f9f9 */
    --foreground: 170 5% 10.6%;        /* #1a1c1c */
    --on-background: 170 5% 10.6%;     /* #1a1c1c */
    --on-surface: 170 5% 10.6%;        /* #1a1c1c */
    --on-surface-variant: 249 10% 30%; /* #464554 */

    --surface: 0 0% 97.6%;             /* #f9f9f9 */
    --surface-dim: 0 0% 85.5%;         /* #dadada */
    --surface-bright: 0 0% 97.6%;      /* #f9f9f9 */
    --surface-variant: 0 0% 88.6%;     /* #e2e2e2 */
    --surface-tint: 239 58% 56%;       /* #494bd6 */
    --surface-container-lowest: 0 0% 100%; /* #ffffff */
    --surface-container-low: 240 2% 95.5%; /* #f3f3f4 */
    --surface-container: 0 0% 93.3%;   /* #eeeeee */
    --surface-container-high: 0 0% 91%;/* #e8e8e8 */
    --surface-container-highest: 0 0% 88.6%; /* #e2e2e2 */

    --primary: 239 62% 55%;            /* #4648d4 */
    --primary-dim: 239 77% 67%;        /* #6063ee */
    --primary-container: 239 77% 67%;  /* #6063ee */
    --primary-fixed: 240 100% 94%;     /* #e1e0ff */
    --primary-fixed-dim: 240 100% 75%; /* #c0c1ff */

    --secondary: 238 24% 46%;          /* #575992 */
    --secondary-dim: 238 24% 46%;      /* #575992 */
    --secondary-container: 240 99% 87%;/* #bdbefe */
    --secondary-fixed: 240 100% 94%;   /* #e1e0ff */
    --secondary-fixed-dim: 240 100% 75%;/* #c0c1ff */

    --tertiary: 30 100% 28%;           /* #904900 */
    --tertiary-dim: 30 100% 28%;       /* #904900 */
    --tertiary-container: 30 100% 36%; /* #b55d00 */
    --tertiary-fixed: 25 100% 89%;     /* #ffdcc5 */
    --tertiary-fixed-dim: 25 100% 76%; /* #ffb783 */

    --error: 0 75% 42%;                /* #ba1a1a */
    --error-dim: 0 75% 42%;            /* #ba1a1a */
    --error-container: 4 100% 93%;     /* #ffdad6 */

    --outline: 248 7% 49%;             /* #767586 */
    --outline-variant: 248 12% 81%;    /* #c7c4d7 */

    --on-primary: 0 0% 100%;           /* #ffffff */
    --on-secondary: 0 0% 100%;         /* #ffffff */
    --on-tertiary: 0 0% 100%;          /* #ffffff */
    --on-error: 0 0% 100%;             /* #ffffff */

    --on-primary-container: 280 100% 99%; /* #fffbff */
    --on-secondary-container: 240 29% 40%; /* #494b83 */
    --on-tertiary-container: 280 100% 99%; /* #fffbff */
    --on-error-container: 0 100% 30%;  /* #93000a */

    --inverse-surface: 170 3% 19%;     /* #2f3131 */
    --inverse-on-surface: 160 2% 94%;  /* #f0f1f1 */
    --inverse-primary: 240 100% 75%;   /* #c0c1ff */
  }

  .dark {
    /* ============================================
       DARK MODE (from Stitch home.html)
       ============================================ */
    --background: 240 12% 6%;          /* #0e0e11 */
    --foreground: 270 33% 98%;         /* #fbf8fc */
    --on-background: 270 33% 98%;      /* #fbf8fc */
    --on-surface: 270 33% 98%;         /* #fbf8fc */
    --on-surface-variant: 260 2% 67%;  /* #acaaae */

    --surface: 240 12% 6%;             /* #0e0e11 */
    --surface-dim: 240 12% 6%;         /* #0e0e11 */
    --surface-bright: 240 3% 18%;      /* #2c2c30 */
    --surface-variant: 240 5% 15%;     /* #25252a */
    --surface-tint: 239 100% 82%;      /* #a3a6ff */
    --surface-container-lowest: 0 0% 0%; /* #000000 */
    --surface-container-low: 240 7% 8%;  /* #131316 */
    --surface-container: 240 7% 11%;   /* #19191d */
    --surface-container-high: 240 5% 13%; /* #1f1f23 */
    --surface-container-highest: 240 5% 15%; /* #25252a */

    --primary: 239 100% 82%;           /* #a3a6ff */
    --primary-dim: 239 80% 66%;        /* #6063ee */
    --primary-container: 239 100% 79%; /* #9396ff */
    --primary-fixed: 239 100% 79%;     /* #9396ff */
    --primary-fixed-dim: 239 100% 76%; /* #8387ff */

    --secondary: 260 100% 77%;         /* #ac8aff */
    --secondary-dim: 260 82% 64%;      /* #8455ef */
    --secondary-container: 264 80% 42%;/* #5516be */
    --secondary-fixed: 260 100% 89%;   /* #dac9ff */
    --secondary-fixed-dim: 260 100% 81%;/* #ceb9ff */

    --tertiary: 192 100% 78%;          /* #8ce7ff */
    --tertiary-dim: 192 84% 59%;       /* #40ceed */
    --tertiary-container: 192 100% 67%;/* #53ddfc */
    --tertiary-fixed: 192 100% 67%;    /* #53ddfc */
    --tertiary-fixed-dim: 192 84% 59%; /* #40ceed */

    --error: 351 100% 72%;             /* #ff6e84 */
    --error-dim: 347 67% 52%;          /* #d73357 */
    --error-container: 340 100% 33%;   /* #a70138 */

    --outline: 260 1% 47%;             /* #767578 */
    --outline-variant: 260 2% 29%;     /* #48474b */

    --on-primary: 240 100% 32%;        /* #0f00a4 */
    --on-secondary: 264 100% 20%;      /* #280067 */
    --on-tertiary: 192 100% 20%;       /* #005464 */
    --on-error: 340 100% 14%;          /* #490013 */

    --on-primary-container: 240 100% 25%; /* #0a0081 */
    --on-secondary-container: 260 100% 89%; /* #d9c8ff */
    --on-tertiary-container: 192 100% 17%;  /* #004b58 */
    --on-error-container: 350 100% 85%;     /* #ffb2b9 */

    --inverse-surface: 270 33% 98%;    /* #fbf8fc */
    --inverse-on-surface: 240 2% 34%;  /* #555458 */
    --inverse-primary: 240 62% 56%;    /* #494bd7 */
  }
}

@layer base {
  * {
    @apply border-outline-variant;
  }

  body {
    @apply bg-background text-on-background font-body antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  ::selection {
    @apply bg-primary/30 text-on-surface;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  /* Glass panel effect from Stitch */
  .glass-panel {
    background: rgba(14, 14, 17, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .glass-panel-light {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  /* Mesh gradient background from Stitch hero */
  .mesh-gradient {
    background-image:
      radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(167, 139, 250, 0.1) 0px, transparent 50%);
  }

  /* Hero title gradient from Stitch */
  .hero-title-gradient {
    background: linear-gradient(to right, #FAFAFA, #A1A1AA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-title-gradient-light {
    background: linear-gradient(to right, #1a1c1c, #464554);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Text gradient for accent headings */
  .text-gradient {
    background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary-dim)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* CTA gradient (used in light mode primarily) */
  .cta-gradient {
    background: linear-gradient(135deg, #4648d4 0%, #6063ee 100%);
  }

  /* Hero glow radial gradient from Stitch */
  .hero-gradient {
    background: radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.15) 0%, rgba(14, 14, 17, 0) 60%);
  }

  /* Technical dot grid from CSV page */
  .technical-grid {
    background-image: radial-gradient(hsl(var(--surface-variant)) 1px, transparent 1px);
    background-size: 40px 40px;
  }
}
```

---

## 2. Design Tokens (Extracted from Stitch Exports)

### 2.1 Complete Color Palette

#### Dark Mode (Primary Palette -- from `home.html`)
| Token                    | Hex       | HSL (approx)         | Usage                              |
|--------------------------|-----------|----------------------|------------------------------------|
| `background`             | `#0e0e11` | 240 12% 6%           | Page background                    |
| `surface`                | `#0e0e11` | 240 12% 6%           | Section backgrounds                |
| `surface-container-lowest` | `#000000` | 0 0% 0%            | Deepest container                  |
| `surface-container-low`  | `#131316` | 240 7% 8%            | Slightly raised                    |
| `surface-container`      | `#19191d` | 240 7% 11%           | Cards, inputs                      |
| `surface-container-high` | `#1f1f23` | 240 5% 13%           | Elevated cards                     |
| `surface-container-highest` | `#25252a` | 240 5% 15%        | Highest elevation                  |
| `surface-bright`         | `#2c2c30` | 240 3% 18%           | Bright surfaces                    |
| `surface-variant`        | `#25252a` | 240 5% 15%           | Variant areas                      |
| `on-surface`             | `#fbf8fc` | 270 33% 98%          | Text on surfaces                   |
| `on-surface-variant`     | `#acaaae` | 260 2% 67%           | Secondary text                     |
| `primary`                | `#a3a6ff` | 239 100% 82%         | Primary actions, links             |
| `primary-dim`            | `#6063ee` | 239 80% 66%          | Darker primary variant             |
| `primary-container`      | `#9396ff` | 239 100% 79%         | Primary container bg               |
| `secondary`              | `#ac8aff` | 260 100% 77%         | Secondary accent                   |
| `secondary-dim`          | `#8455ef` | 260 82% 64%          | Darker secondary                   |
| `secondary-container`    | `#5516be` | 264 80% 42%          | Secondary container                |
| `tertiary`               | `#8ce7ff` | 192 100% 78%         | Tertiary accent                    |
| `tertiary-dim`           | `#40ceed` | 192 84% 59%          | Darker tertiary                    |
| `error`                  | `#ff6e84` | 351 100% 72%         | Error states                       |
| `outline`                | `#767578` | 260 1% 47%           | Borders                            |
| `outline-variant`        | `#48474b` | 260 2% 29%           | Subtle borders                     |
| `on-primary`             | `#0f00a4` | 240 100% 32%         | Text on primary                    |
| `on-secondary`           | `#280067` | 264 100% 20%         | Text on secondary                  |
| `inverse-surface`        | `#fbf8fc` | 270 33% 98%          | Inverse chip/badge                 |
| `inverse-primary`        | `#494bd7` | 240 62% 56%          | Primary on inverse                 |

#### Light Mode (from `home-light.html`)
| Token                    | Hex       | Usage                              |
|--------------------------|-----------|-------------------------------------|
| `background`             | `#f9f9f9` | Page background                    |
| `surface`                | `#f9f9f9` | Section backgrounds                |
| `surface-container`      | `#eeeeee` | Cards                              |
| `surface-container-low`  | `#f3f3f4` | Slightly raised                    |
| `surface-container-lowest` | `#ffffff` | Deepest (white cards)            |
| `primary`                | `#4648d4` | Primary actions                    |
| `primary-container`      | `#6063ee` | Primary container                  |
| `secondary`              | `#575992` | Secondary accent                   |
| `on-surface`             | `#1a1c1c` | Text on surfaces                   |
| `on-surface-variant`     | `#464554` | Secondary text                     |
| `outline`                | `#767586` | Borders                            |
| `outline-variant`        | `#c7c4d7` | Subtle borders                     |

### 2.2 Font Families and Weights

```
Fonts from Stitch:
  headline:  Inter (weights: 400, 500, 600, 700, 800, 900)
  body:      Inter (weights: 300, 400, 500, 600, 700, 800)
  label:     Space Grotesk (weights: 300, 400, 500, 600, 700)

Usage patterns from designs:
  - Hero H1:         font-extrabold (800) or font-black (900), tracking-tight/tracking-tighter
  - Section H2:      font-bold (700), tracking-tight
  - Card H3:         font-bold (700)
  - Body text:       font-normal (400) or font-light (300)
  - Labels/badges:   font-label (Space Grotesk), font-bold, uppercase, tracking-widest
  - Nav items:       font-medium (500), tracking-tight
  - Buttons:         font-bold (700) or font-semibold (600)
```

Google Fonts import:
```
Inter: wght@300;400;500;600;700;800;900
Space Grotesk: wght@300;400;500;600;700
```

### 2.3 Border Radius Values

```
From Stitch tailwind config:
  DEFAULT:  0.25rem  (4px)  -- inputs, small elements
  lg:       0.5rem   (8px)  -- buttons, badges
  xl:       0.75rem  (12px) -- cards, containers
  2xl:      1rem     (16px) -- larger cards (from usage)
  3xl:      1.5rem   (24px) -- CTA sections (from usage)
  full:     9999px           -- pills, avatars

From actual usage in designs:
  - Buttons:     rounded-lg (0.5rem) or rounded-xl (0.75rem)
  - Cards:       rounded-xl (0.75rem) or rounded-2xl (1rem)
  - CTA banners: rounded-[2rem] or rounded-3xl
  - Badges:      rounded-full
  - Inputs:      rounded-lg
```

### 2.4 Spacing Scale

The designs use Tailwind's default spacing scale with these notable patterns:
```
  Nav height:           py-4 (h-16 total)
  Section vertical:     py-24 (96px) or py-32 (128px)
  Section horizontal:   px-6 (24px, within max-w-7xl container)
  Card padding:         p-8 (32px) or p-10 (40px)
  Content max width:    max-w-7xl (80rem / 1280px)
  Hero max width:       max-w-5xl (64rem / 1024px) for text
  Gap between cards:    gap-6 (24px) or gap-8 (32px)
  Section header mb:    mb-16 (64px)
```

### 2.5 Key Visual Effects

```css
/* Glass card (used across all service/contact pages) */
.glass-card {
  background: rgba(25, 25, 29, 0.4);   /* dark mode */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Nav blur */
nav {
  background: rgba(9, 9, 11, 0.8);     /* bg-[#09090B]/80 */
  backdrop-filter: blur(12px);          /* backdrop-blur-md */
}

/* Hero glow orbs */
.glow-orb-primary {
  width: 24rem;   /* w-96 */
  height: 24rem;
  background: hsl(var(--primary) / 0.2);
  filter: blur(120px);
  border-radius: 9999px;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #a3a6ff, #8455ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 3. Pages & Routes

| Route                                          | Page                          | Status     |
|------------------------------------------------|-------------------------------|------------|
| `/`                                            | Home                          | Stitch design ready |
| `/about`                                       | About                         | Stitch design ready |
| `/services/infrastructure-qualification`       | Infrastructure Qualification  | Stitch design ready |
| `/services/computer-system-validation`         | Computer System Validation    | Stitch design ready |
| `/services/compliance-audits`                  | System Dev & IT Compliance    | Stitch design ready |
| `/products/infrastructure-compliance-library`  | Compliance Library (product)  | Stitch design ready |
| `/resources/white-papers`                      | White Papers / Resources      | Stitch design ready |
| `/contact`                                     | Contact Us                    | Stitch design ready |

**NOTE**: There is NO `/services/ai-system-validation` page. The AI System Validation service mentioned in some Stitch designs is excluded per the critical rules. Only 3 services.

---

## 4. Complete Content for Every Page

### 4.1 Home Page (`/`)

**Meta:**
- Title: `GXPThinklabs | Compliance Solutions for Modern Life Sciences`
- Description: `Expert GxP compliance consulting for biotech, pharma, and medical device companies. IT infrastructure qualification, computer system validation, and compliance audits.`

#### Section 1: Hero
- **Badge**: `Founded 2025` (with pulsing dot indicator)
- **H1**: `Compliance Solutions for Modern Life Sciences.`
- **Subtext**: `Expert consulting for biotech, pharma, and medical device companies navigating regulatory compliance with confidence. From strategy to execution.`
- **CTA Primary**: `Explore Our Services` (links to `#services` anchor)
- **CTA Secondary**: `Talk to an Expert` (links to `/contact`)

#### Section 2: Trust Strip
- **Label**: `Trusted by industry leaders worldwide`
- **Logos** (placeholder text for now): `BIOTECHNE`, `PHARMACON`, `MEDDEVICE`, `GENELAB`, `NOVACARE`
- Style: grayscale, opacity-50, hover reveals full color

#### Section 3: Services Grid
- **Label**: `WHAT WE DO`
- **H2**: `Comprehensive Compliance Solutions`
- **Card 1 -- Infrastructure Qualification**
  - Icon: `Server` (Lucide) or foundation icon
  - H3: `Infrastructure Qualification`
  - Body: `Risk-based assessment and qualification of IT infrastructure ensuring full regulatory alignment and data integrity across cloud, on-premise, and hybrid environments.`
  - Link: `Learn more` -> `/services/infrastructure-qualification`
- **Card 2 -- Computer System Validation**
  - Icon: `Monitor` (Lucide) or terminal icon
  - H3: `Computer System Validation`
  - Body: `GAMP 5 based validation and CSA services for LIMS, ELN, QMS, and ERP systems tailored to biotech, pharma, and medical device requirements.`
  - Link: `Learn more` -> `/services/computer-system-validation`
- **Card 3 -- System Development & IT Compliance Audits**
  - Icon: `ClipboardCheck` (Lucide) or rule icon
  - H3: `Compliance Audits`
  - Body: `Internal and third-party auditing services to identify gaps, refine SDLC processes, and ensure audit-readiness for FDA and EMA inspections.`
  - Link: `Learn more` -> `/services/compliance-audits`

#### Section 4: Why GXPThinklabs
- **H2**: `Why GXPThinklabs`
- **Body**: `Our team brings deep regulatory and industry expertise to every engagement. We combine technical knowledge with a practical approach to compliance, ensuring your focus remains on innovation.`
- **Differentiator 1**: `Strategic Excellence` -- `Aligning compliance with your business objectives for operational advantage.`
- **Differentiator 2**: `Regulatory Foresight` -- `Anticipating shifts in FDA, EMA, and global guidelines so you stay ahead.`
- **Stats Grid**:
  - `100%` / `Audit-Ready Documentation`
  - `End-to-End` / `Strategy to Execution`
  - `3` / `Core Service Lines`

> **IMPORTANT**: Do NOT use "25+ Years of Expertise" as a company stat. The company was founded in 2025. Use "team expertise" language if referencing experience.

#### Section 5: Industries We Serve
- **H2**: `Industries We Serve`
- **Card 1 -- Biotechnology**
  - Image: `/images/industry-biotech.png`
  - H3: `Biotechnology`
  - Body: `Supporting rapid scale-up from R&D to clinical phases with compliant quality systems.`
- **Card 2 -- Pharmaceutical**
  - Image: `/images/industry-pharma.png`
  - H3: `Pharmaceutical`
  - Body: `Global GxP strategy and implementation for small molecules and biologics manufacturers.`
- **Card 3 -- Medical Devices**
  - Image: `/images/industry-medical.png`
  - H3: `Medical Devices`
  - Body: `Navigating ISO 13485 and FDA 21 CFR Part 820 for Class I, II, and III medical devices.`

#### Section 6: CTA Banner
- **H2**: `Ready to Streamline Your Compliance?`
- **Body**: `Join the industry leaders who trust GXPThinklabs to secure their regulatory future. Let's build your compliance strategy together.`
- **CTA**: `Schedule a Consultation` (links to `/contact`)

---

### 4.2 About Page (`/about`)

**Meta:**
- Title: `About GXPThinklabs | Modern GxP Compliance Consulting`
- Description: `GXPThinklabs is a 2025-founded SRJH subsidiary bringing modern, data-driven GxP compliance consulting to the life sciences industry.`

#### Section 1: Hero
- **Label**: `Established 2025`
- **H1**: `Deep Expertise. Modern Approach.`
- **Body**: `Bridging the gap between rigid regulatory standards and the agility of modern technology. We define the next generation of GxP compliance.`
- Background: `/images/about-hero.png`

#### Section 2: Mission (Bento Layout)
- **H2**: `Our Mission`
- **Body**: `We partner with biotech, pharma, and medical device companies to modernize quality systems. By integrating advanced automation with rigorous 21 CFR compliance, we transform regulatory overhead into a strategic advantage.`
- **Industry Tags**: `Biotech`, `Pharma`, `Medical Devices`

#### Section 3: Core Pillars (3-column grid)
- **H2**: `Core Pillars`
- **Subtitle**: `The foundation of every engagement we undertake.`
- **Pillar 1**: `Risk-Based`
  - Body: `Prioritizing quality efforts where they matter most, following GAMP 5 principles to streamline validation without compromising safety.`
  - Icon: `Shield` (Lucide)
- **Pillar 2**: `Scalable`
  - Body: `Architecting frameworks that grow from early-stage startups to global commercialization, ensuring your tech stack evolves with your pipeline.`
  - Icon: `TrendingUp` (Lucide)
- **Pillar 3**: `Audit-Ready`
  - Body: `Maintaining a state of permanent inspection readiness through well-structured documentation and continuous compliance monitoring.`
  - Icon: `CheckCircle` (Lucide)

#### Section 4: Our Heritage (Timeline)
- **H2**: `Our Heritage`
- **Subtitle**: `Merging legacy knowledge with future-ready solutions.`
- **1997**: `Foundation of Expertise` -- `Team leaders begin defining 21 CFR Part 11 strategies for global pharma leaders.`
- **2010**: `SaaS Validation Revolution` -- `Expansion into multi-tenant cloud validation frameworks and agile SDLC compliance.`
- **2020**: `Cloud & Modern Architecture` -- `Formalizing validation practices for cloud-native and containerized environments.`
- **2025 (highlighted)**: `GXPThinklabs Founded` -- `An SRJH company established to pioneer data-driven GxP consulting for the modern era.`

> NOTE: Timeline describes the team's heritage, NOT the company claiming decades of operation.

#### Section 5: Parent Company
- **Badge**: `Part of the SRJH Ecosystem`
- **H2**: `Corporate Excellence`
- **Body**: `GXPThinklabs operates as a specialized subsidiary of SRJH, leveraging global resources and institutional knowledge to deliver unparalleled depth in compliance engineering.`

#### Section 6: CTA
- **H2**: `Ready to start?`
- **CTA Primary**: `Book a Consultation` -> `/contact`
- **CTA Secondary**: `View Solutions` -> `/#services`

---

### 4.3 Infrastructure Qualification Page (`/services/infrastructure-qualification`)

**Meta:**
- Title: `IT Infrastructure Qualification | GXPThinklabs`
- Description: `End-to-end IT infrastructure qualification and maintenance for GxP-regulated environments. Cloud, on-premise, and hybrid solutions.`

#### Section 1: Hero
- **Badge**: `INFRASTRUCTURE EXCELLENCE`
- **H1**: `IT Infrastructure Qualification and Maintenance`
- **Body**: `Bridging the gap between rigid GxP compliance and modern cloud-native, hybrid, and on-premise infrastructure. Future-proof your validated stack.`
- **CTA Primary**: `Schedule a Consultation`
- **CTA Secondary**: `View Framework`
- Image: `/images/service-infrastructure.png`

#### Section 2: Core Services (3-card grid)
- **H2**: `Core Infrastructure Services`
- **Card 1**: `Infrastructure Qualification Planning`
  - Body: `Scalable strategies for AWS, Azure, on-prem, and hybrid environments. We design the IQ/OQ framework that grows with your scaling needs.`
  - Checklist: Cloud Tenant Validation, Network Topology Qualification, Disaster Recovery Strategy
- **Card 2**: `Location Risk Assessments`
  - Body: `Comprehensive physical and digital site assessments. Evaluating environmental controls, security protocols, and connectivity redundancy.`
  - Checklist: Physical Access Control, Environmental Monitoring, 3rd Party Data Center Audits
- **Card 3**: `IT Change Management`
  - Body: `GxP-compliant lifecycle management for modern IT. Managing updates, patches, and configurations without losing your validated status.`
  - Checklist: Automated Change Logging, Impact Assessment Protocols, Infrastructure as Code (IaC) Audits

#### Section 3: Compliance Library Assets (4-card grid)
- **H2**: `Compliance Library Assets`
- **Subtitle**: `Ready-to-deploy document templates and technical frameworks.`
- **Asset 1**: `IQ/OQ/PQ Plans` -- `Comprehensive qualification master plans for server infrastructure.` (PDF, DOCX)
- **Asset 2**: `IT Standard SOPs` -- `Core operating procedures for security, access, and backup.` (DOCX)
- **Asset 3**: `Work Instructions` -- `Step-by-step technical guides for systems administrators.` (PDF)
- **Asset 4**: `Traceability Matrices` -- `Map infrastructure requirements to test scripts and risk controls.` (XLSX)
- **Link**: `Explore Full Library` -> `/products/infrastructure-compliance-library`

#### Section 4: CTA
- **H2**: `Ready to qualify your infrastructure?`
- **Body**: `Let's discuss your roadmap and ensure your IT environment meets the highest standards of GxP compliance.`
- **CTA**: `Schedule a Consultation` -> `/contact`

---

### 4.4 Computer System Validation Page (`/services/computer-system-validation`)

**Meta:**
- Title: `Computer System Validation (CSV/CSA) | GXPThinklabs`
- Description: `Risk-based computer system validation and CSA services for LIMS, QMS, ERP, and custom software in GxP-regulated environments.`

#### Section 1: Hero
- **Badge**: `LATEST COMPLIANCE STANDARDS`
- **H1**: `Computer System Validation`
- **Body**: `Bridging the gap between technological innovation and rigorous GxP compliance. Secure your digital transformation with industry-leading assurance.`
- **CTA Primary**: `Schedule a Consultation`
- **CTA Secondary**: `View Frameworks`

#### Section 2: Services (Bento Grid, 6 services)
- **H2**: `Our CSV Services`
- **Subtitle**: `Tailored validation strategies that align with your specific technology stack and regulatory requirements.`

- **Service 1 (large)**: `CSV/CSA Strategy Development`
  - Body: `Transitioning from traditional CSV to risk-based Computer Software Assurance. We help you reduce documentation burden while increasing system reliability.`
  - Tags: Risk-Based, Modernization, Strategic Alignment

- **Service 2**: `Validation Planning & Execution`
  - Body: `Comprehensive lifecycle management including Validation Plans, URS, FRS, Risk-Based Testing (IQ/OQ/PQ), and Traceability Matrices.`

- **Service 3**: `Cloud & SaaS System Validation`
  - Body: `Specialized validation frameworks for QMS, LIMS, ERP, and MES in virtualized environments.`
  - Image: server room (decorative)

- **Service 4**: `Custom Software Qualification`
  - Body: `Tailored qualification for GAMP Category 5 systems. Deep code review and structural testing for proprietary platforms.`

- **Service 5**: `Data Integrity & Compliance`
  - Body: `Thorough reviews for 21 CFR Part 11 and EU Annex 11 compliance. ALCOA+ principle application across all data streams.`

- **Service 6 (full width)**: `Remediation & Support`
  - Body: `Continuous compliance monitoring and gap remediation. We don't just find problems; we build the technical and procedural bridges to fix them, ensuring you stay inspection-ready.`

#### Section 3: CTA
- **H2**: `Ready to modernize your validation strategy?`
- **Body**: `Partner with GXPThinklabs to ensure your systems are both compliant and high-performing. Our experts are ready to accelerate your journey.`
- **CTA**: `Get Started` -> `/contact`
- **Compliance badges**: `21 CFR Part 11`, `EU Annex 11`, `GAMP 5`

---

### 4.5 Compliance Audits Page (`/services/compliance-audits`)

**Meta:**
- Title: `System Development & IT Compliance Audits | GXPThinklabs`
- Description: `Expert SDLC program development and IT compliance audits for GxP-regulated systems. Vendor audits, OSS compliance, and gap analysis.`

#### Section 1: Hero
- **Badge**: `GxP Excellence`
- **H1**: `System Development & IT Compliance Audits`
- **Body**: `Bridging the gap between rapid software development and rigorous GxP compliance. We empower life science innovators with high-velocity, compliant IT infrastructure.`
- **CTA Primary**: `Schedule a Consultation`
- **CTA Secondary**: `View Case Studies`

#### Section 2: Services (Bento Grid)
- **Card 1 (large)**: `SDLC Program Development and Optimization`
  - Body: `Standardize your development lifecycle for GxP compliance. We integrate validation steps into modern Agile and DevOps workflows without compromising speed.`
- **Card 2**: `IT and Compliance Audits`
  - Body: `Comprehensive gap analysis and audit readiness for IT infrastructure. We ensure your systems meet FDA 21 CFR Part 11 and EU Annex 11.`
- **Card 3**: `Open-Source Software (OSS) Compliance`
  - Body: `Navigate the complexities of OSS in regulated environments. Strategic assessment of library integrity, licensing, and security risks.`
- **Card 4 (large)**: `Vendor and Third-Party Compliance Audits`
  - Body: `Ensuring your supply chain meets global GxP standards. We evaluate SaaS providers, data centers, and managed service partners with precision.`

#### Section 3: Risk-Based Approach
- **H2**: `A Risk-Based Approach to Modern IT`
- **Body**: `GXPThinklabs moves beyond check-the-box compliance. We focus on critical quality attributes (CQAs) and data integrity (ALCOA+) to ensure that your IT systems aren't just compliant, but robust, secure, and resilient.`
- **Checklist**:
  - Evidence-based quality risk management
  - Scalable validation frameworks for high-growth firms
  - Deep domain expertise in BioPharma regulations

#### Section 4: CTA
- **H2**: `Ready to secure your digital infrastructure?`
- **Body**: `Join the industry leaders who trust GXPThinklabs for their most critical IT compliance initiatives.`
- **CTA**: `Schedule a Consultation`

---

### 4.6 Infrastructure Compliance Library Page (`/products/infrastructure-compliance-library`)

**Meta:**
- Title: `Infrastructure Compliance Library | GXPThinklabs`
- Description: `Enterprise-grade document templates and compliance frameworks for GxP-regulated infrastructure. IQ/OQ/PQ plans, SOPs, work instructions, and traceability matrices.`

#### Section 1: Hero
- **Badge**: `GxP COMPLIANCE FOR INFRASTRUCTURE`
- **H1**: `Infrastructure Compliance Library -- Your Complete Toolkit`
- **Body**: `Accelerate your compliance journey with ready-to-deploy document templates and technical frameworks designed specifically for GxP-regulated infrastructure environments.`
- **CTA Primary**: `Get Started`
- **CTA Secondary**: `View Samples`

#### Section 2: Product Categories (Tab Navigation + Content)
- **H2**: `Enterprise-Grade Documentation`
- **Subtitle**: `Standardized frameworks for every stage of the infrastructure lifecycle.`

**Tab 1 (default): Qualification Plans & Protocols**
- Tags: `IQ/OQ/PQ Bundle`, `Cloud Ready`
- H3: `Qualification Plans and Test Protocols`
- Body: `Exhaustive validation templates for the modern data center. Our protocols are architected to satisfy both FDA and EMA requirements for computerized systems.`
- Sub-cards:
  - `Physical & Virtual Servers` -- Includes templates for hypervisor configuration and hardware acceptance testing.
  - `Cloud Infrastructure` -- Tailored IQ/OQ for AWS/Azure/GCP shared responsibility models.
  - `Network Architecture` -- Test protocols for firewalls, switches, and secure segmentation validation.
  - `Master Plans` -- High-level strategies for multi-site infrastructure validation programs.

**Tab 2: Management SOPs**
- Items: Backup & Restore, Disaster Recovery, Incident Management

**Tab 3: Work Instructions**
- Items: Config Management, Admin Guides, Patching Protocols

**Tab 4: Risk Assessment**
- Items: Quantitative Frameworks, Qualitative Analysis, FMEA Models

**Tab 5: Traceability & Specs**
- Items: Requirement Mapping, Config Specs, Verification Logs

#### Section 3: Feature Grid (4 cards below tabs)
- **Card 1**: `Infrastructure Management SOPs` -- Backup & Restore, Disaster Recovery, Incident Management
- **Card 2**: `Work Instructions` -- Config Management, Admin Guides, Patching Protocols
- **Card 3**: `Risk Assessment Templates` -- Quantitative Frameworks, Qualitative Analysis, FMEA Models
- **Card 4**: `Traceability Matrices` -- Requirement Mapping, Config Specs, Verification Logs

#### Section 4: CTA
- **H2**: `Ready to standardise your infrastructure compliance?`
- **Body**: `Join leading biotech and pharma firms who use GXPThinklabs to maintain audit-ready infrastructure with less documentation overhead.`
- **CTA**: `Schedule a Consultation`
- **Badges**: `HIPAA Compliant`, `GDPR Ready`, `21 CFR Part 11`

---

### 4.7 White Papers / Resources Page (`/resources/white-papers`)

**Meta:**
- Title: `Resources & White Papers | GXPThinklabs`
- Description: `Download free GxP compliance white papers, guides, and industry insights from GXPThinklabs experts.`

#### Section 1: Hero
- **Badge**: `Knowledge Hub`
- **H1**: `Resources`
- **Subtitle**: `Discover the Future of Compliance`

#### Section 2: Filter Bar
- Buttons: `All`, `White Papers`, `Guides`, `Case Studies`, `Compliance Updates`

#### Section 3: Resource Cards (2-column grid)
- **Card 1**: `Validating AI Systems`
  - Type: `White Paper`, Date: `June 2024`
  - Body: `A comprehensive framework for validating non-deterministic AI models in GxP environments.`
  - Read time: `12 min read`
  - CTA: `Download` (PDF)

- **Card 2**: `CSV Best Practices for 2025`
  - Type: `Guide`, Date: `April 2025`
  - Body: `Modernizing your Computer System Validation strategy using risk-based approaches and CSA principles.`
  - Read time: `18 min read`
  - CTA: `Download`

- **Card 3**: `Infrastructure Qualification Guide`
  - Type: `Guide`, Date: `February 2025`
  - Body: `Ensuring your cloud and on-premise infrastructure meets rigorous GxP standards.`
  - Read time: `25 min read`
  - CTA: `Download`

- **Card 4**: `Data Integrity in the Digital Age`
  - Type: `White Paper`, Date: `January 2025`
  - Body: `Navigating the complexities of 21 CFR Part 11 and EU Annex 11 in a data-driven world.`
  - Read time: `15 min read`
  - CTA: `Download`

#### Section 4: Newsletter
- **H2**: `Stay ahead of the curve.`
- **Body**: `Get the latest GxP insights, white papers, and compliance updates delivered directly to your inbox.`
- **Form**: Email input + Subscribe button
- **Footnote**: `Join 500+ biotech leaders worldwide.`

---

### 4.8 Contact Page (`/contact`)

**Meta:**
- Title: `Contact GXPThinklabs | Compliance Consulting`
- Description: `Get in touch with our GxP compliance experts. Schedule a consultation for IT infrastructure qualification, CSV, or compliance audit services.`

#### Section 1: Hero
- **Badge**: `Contact Our Team`
- **H1**: `Let's Talk Compliance`
- **Body**: `Our team of GxP experts is ready to help you navigate complex regulatory landscapes. Whether you're an early-stage startup or a global enterprise, we have the solutions to ensure your operations are compliant and future-ready.`

#### Section 2: Two-Column Layout

**Left Column -- Contact Form**
- Fields:
  - Full Name (text, required)
  - Professional Email (email, required)
  - Company (text, required)
  - Service Interest (select: "Select a service", "Infrastructure Qualification", "Computer System Validation", "System Development & Compliance Audits", "Infrastructure Compliance Library", "General Inquiry")
  - Message (textarea, required)
- Submit: `Send Inquiry` button with arrow icon

**Right Column -- Contact Info**
- **Call Us**: `1.657.844.2591`
- **Email Us**: `info@gxpthinklabs.com`
- **Office Hours**: `9am - 6pm PST, Monday - Friday`
- **Map placeholder**: Styled dark mode map image with `Global Headquarters` label

#### Section 3: FAQ
- **H2**: `Frequently Asked Questions`
- **Subtitle**: `Quick answers to common inquiries about our compliance methodology.`

- **Q1**: `What is your typical engagement timeline?`
  - A: `Engagement timelines vary based on scope, but most strategy phases range from 4-8 weeks. Comprehensive system validation and infrastructure qualification projects typically span 3-6 months depending on company size and existing infrastructure.`

- **Q2**: `Do you work with early-stage startups?`
  - A: `Absolutely. We specialize in "Compliance-by-Design" for startups. We help you build scalable GxP foundations early so you don't face costly retrofitting when preparing for clinical trials or regulatory filings.`

- **Q3**: `What specific industries do you serve?`
  - A: `Our core expertise lies in biotechnology, pharmaceutical manufacturing, medical device companies, and digital health organizations requiring rigorous adherence to FDA, EMA, and ISO standards.`

- **Q4**: `How do you ensure data security during audits?`
  - A: `We utilize enterprise-grade, encrypted data rooms for all document exchanges and follow strict ISO 27001-aligned security protocols. All consultants operate under comprehensive NDAs and secure hardware environments.`

---

## 5. Component Architecture

### 5.1 Layout Components

#### `src/components/layout/navbar.tsx`
```typescript
interface NavbarProps {
  // No props -- uses navigation data from src/data/navigation.ts
}
// Used on: ALL pages (via root layout)
// Key classes: fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800
// Dark: bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]
// Light: bg-white/80 backdrop-blur-xl shadow-sm
// Behavior: "use client" -- controls mobile drawer, active state, services dropdown
```

#### `src/components/layout/mobile-nav.tsx`
```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
// Used on: ALL pages (within Navbar)
// Wraps Radix Dialog for accessibility
// Full-screen overlay with slide-in animation
// "use client"
```

#### `src/components/layout/footer.tsx`
```typescript
interface FooterProps {
  // No props -- uses site-config data
}
// Used on: ALL pages (via root layout)
// Key classes: bg-zinc-950 border-t border-zinc-900
// 4-column grid: Company info, Company links, Services links, Contact info
// Bottom bar: copyright + legal links
```

#### `src/components/layout/theme-toggle.tsx`
```typescript
interface ThemeToggleProps {
  // No props
}
// Used on: Navbar
// "use client" -- uses next-themes useTheme()
// Animated sun/moon icon swap
```

#### `src/components/layout/section-wrapper.tsx`
```typescript
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "surface" | "surface-low" | "surface-container" | "none";
}
// Used on: ALL pages -- wraps page sections
// Provides consistent py-24 px-6 max-w-7xl mx-auto
```

### 5.2 UI Primitives

#### `src/components/ui/button.tsx`
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cta";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
}
// Uses class-variance-authority (cva)
// primary:  bg-primary text-on-primary rounded-xl font-bold
// secondary: bg-surface-container border border-outline-variant text-on-surface rounded-xl
// outline:  border border-outline-variant text-on-surface hover:bg-surface-variant rounded-xl
// ghost:    text-primary hover:bg-primary/10 rounded-lg
// cta:      bg-gradient-to-r from-primary to-secondary text-on-primary rounded-xl shadow-lg
```

#### `src/components/ui/input.tsx`
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
// Key classes: w-full bg-surface-container border border-outline-variant
//   focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3
// Label: font-label text-sm text-on-surface-variant
```

#### `src/components/ui/textarea.tsx`
```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
// Same styling as Input
```

#### `src/components/ui/select.tsx`
```typescript
interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}
// Wraps Radix Select for accessible dropdown
// Same input styling
```

#### `src/components/ui/badge.tsx`
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}
// primary: bg-primary-container/20 text-primary font-label text-xs tracking-wider uppercase rounded-full
// outline: border border-outline-variant text-on-surface-variant font-label text-xs
```

#### `src/components/ui/card.tsx`
```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "elevated";
  className?: string;
  href?: string;
}
// default: bg-surface-container-high border border-outline-variant rounded-2xl p-8
// glass: glass-card (backdrop-blur)
// elevated: shadow-lg hover:shadow-xl transition-all
```

#### `src/components/ui/accordion.tsx`
```typescript
interface AccordionProps {
  items: { question: string; answer: string }[];
}
// Wraps Radix Accordion
// border border-outline-variant rounded-xl
// hover:border-primary/40 transition-colors
// Used on: Contact page FAQ
```

### 5.3 Home Components

#### `src/components/home/hero-section.tsx`
```typescript
interface HeroSectionProps {
  // No props -- content from data
}
// "use client" for Framer Motion animations
// Key classes: relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20
// Contains animated glow orbs, badge, h1, subtext, CTAs
```

#### `src/components/home/services-grid.tsx`
```typescript
interface ServicesGridProps {
  // No props -- reads from src/data/services.ts
}
// Key classes: grid grid-cols-1 md:grid-cols-2 gap-6
// Renders ServiceCard components with hover arrow + learn more link
// NOTE: Only 3 services (no AI validation)
```

#### `src/components/home/why-section.tsx`
```typescript
interface WhySectionProps {
  // No props
}
// Two-column layout: differentiators + stats grid
// Stats: animated counters via AnimatedCounter component
```

#### `src/components/home/industries-section.tsx`
```typescript
interface IndustriesSectionProps {
  // No props -- reads from src/data/industries.ts
}
// 3-column grid of image cards with gradient overlay
// group-hover:scale-110 on images
```

#### `src/components/home/trust-strip.tsx`
```typescript
interface TrustStripProps {
  // No props
}
// Flex row of placeholder logos
// opacity-50 grayscale hover:grayscale-0 transition
```

#### `src/components/home/cta-banner.tsx`
```typescript
interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}
// Gradient background card with decorative blur elements
// bg-gradient-to-r from-primary via-secondary to-secondary rounded-[2rem]
// Used on: Home, About (reusable)
```

### 5.4 About Components

#### `src/components/about/about-hero.tsx`
```typescript
interface AboutHeroProps {
  // No props
}
// Full-width background image with overlay
// "Established 2025" label
// "use client" for parallax/entrance animation
```

#### `src/components/about/mission-section.tsx`
```typescript
interface MissionSectionProps {
  // No props
}
// Bento grid layout: 7-col text + 5-col image
// Industry tag chips
```

#### `src/components/about/pillars-section.tsx`
```typescript
interface PillarsSectionProps {
  // No props
}
// 3-column card grid
// Icon + title + description per pillar
```

#### `src/components/about/timeline-section.tsx`
```typescript
interface TimelineSectionProps {
  // reads from src/data/timeline.ts
}
// "use client" for scroll reveal
// Vertical line with alternating left/right entries
// 2025 entry has special highlight styling (border-2 border-primary/40, glow shadow)
```

#### `src/components/about/parent-company-section.tsx`
```typescript
interface ParentCompanySectionProps {
  // No props
}
// Centered text section with SRJH badge
// Subtle primary/5 background overlay
```

### 5.5 Service Components

#### `src/components/services/service-hero.tsx`
```typescript
interface ServiceHeroProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}
// Used on: All 3 service pages
// Full hero with background image/gradient, badge, split title with gradient accent
```

#### `src/components/services/service-card.tsx`
```typescript
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  checklist?: string[];
  tags?: string[];
  colSpan?: number; // for bento grid
  href?: string;
  imageSrc?: string;
}
// glass-card or bg-surface-container variants
// hover:border-primary/50 transition-all
```

#### `src/components/services/service-detail-grid.tsx`
```typescript
interface ServiceDetailGridProps {
  title: string;
  subtitle?: string;
  services: ServiceCardProps[];
  layout?: "grid" | "bento";
}
// Container for service cards
// grid: standard equal columns
// bento: uses col-span for varied sizes
```

#### `src/components/services/compliance-library-assets.tsx`
```typescript
interface ComplianceLibraryAsset {
  icon: string;
  badge: string;
  title: string;
  description: string;
  format: string;
}
interface ComplianceLibraryAssetsProps {
  assets: ComplianceLibraryAsset[];
}
// 4-card grid with download icons
// Used on: Infrastructure page
```

#### `src/components/services/service-cta.tsx`
```typescript
interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  badges?: string[];
}
// Reusable CTA section for service pages
// glass-card with glow orbs or gradient background
```

### 5.6 Contact Components

#### `src/components/contact/contact-form.tsx`
```typescript
interface ContactFormProps {
  // No props -- self-contained with React Hook Form + Zod
}
// "use client"
// Uses react-hook-form with zodResolver
// Handles submit to /api/contact
// Success/error toast/message states
```

#### `src/components/contact/contact-info.tsx`
```typescript
interface ContactInfoProps {
  // No props -- reads from site-config
}
// glass-card with phone, email, hours
// Map placeholder with animated pulse dot
```

#### `src/components/contact/faq-section.tsx`
```typescript
interface FAQSectionProps {
  // reads from src/data/faq.ts
}
// "use client" -- wraps Radix Accordion
```

### 5.7 Shared Components

#### `src/components/shared/animated-counter.tsx`
```typescript
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}
// "use client"
// Uses useCounterAnimation hook
// Triggers when scrolled into view via IntersectionObserver
```

#### `src/components/shared/section-header.tsx`
```typescript
interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}
// Label: text-xs font-label font-bold text-primary tracking-[0.2em] uppercase
// Title: text-4xl md:text-5xl font-bold text-on-surface tracking-tight
// Subtitle: text-on-surface-variant
```

#### `src/components/shared/gradient-text.tsx`
```typescript
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
// Applies text-gradient utility class
```

#### `src/components/shared/glass-card.tsx`
```typescript
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}
// glass-card styling wrapper
```

#### `src/components/shared/scroll-reveal.tsx`
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
}
// "use client"
// Wraps Framer Motion + IntersectionObserver
// fade-up animation by default
```

#### `src/components/shared/page-transition.tsx`
```typescript
interface PageTransitionProps {
  children: React.ReactNode;
}
// "use client"
// Wraps Framer Motion AnimatePresence
// Used in root layout to animate between pages
```

---

## 6. Navigation Structure

### 6.1 Desktop Nav

```
[Logo: GXPThinklabs]   Home   About   Services v   Products   Resources   Contact   [Get Started]
                                        |
                                        +--- Infrastructure Qualification
                                        +--- Computer System Validation
                                        +--- System Dev & Compliance Audits
```

- Active state: `text-indigo-400 border-b-2 border-indigo-500 pb-1` (dark) / `text-indigo-600 border-b-2 border-indigo-600` (light)
- Inactive: `text-zinc-400 hover:text-zinc-100 transition-colors` (dark) / `text-slate-600 hover:text-indigo-500` (light)
- Services dropdown: Radix DropdownMenu with 3 items
- Get Started button: `bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-5 py-2 rounded-lg` (dark) / `cta-gradient text-white px-5 py-2 rounded-xl` (light)

### 6.2 Mobile Drawer

- Trigger: Hamburger icon (Lucide `Menu`) visible below `md` breakpoint
- Implementation: Radix Dialog (full-screen overlay)
- Animation: slide in from right with backdrop fade
- Contents:
  - Close button (X icon) top-right
  - Logo top-left
  - Nav items stacked vertically with larger tap targets (py-4)
  - Services section expanded by default (no dropdown)
  - Get Started button at bottom
  - Theme toggle

### 6.3 Active State Logic

- Use Next.js `usePathname()` hook
- Exact match for Home (`/`)
- `startsWith` for nested routes (e.g., `/services/` highlights "Services")
- Services dropdown shows active state when any service sub-page is active

---

## 7. Animation Plan

### 7.1 Page Transitions (Framer Motion)

```typescript
// src/components/shared/page-transition.tsx
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};
```

### 7.2 Scroll Reveal Animations

```typescript
// src/components/shared/scroll-reveal.tsx
const variants = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

// Default transition
const transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // custom cubic-bezier
};
```

**Sections using scroll-reveal:**
- Home: Services grid (staggered), Why section stats, Industries cards, CTA banner
- About: Mission, Pillars (staggered), Timeline entries (alternating left/right), Parent company
- Service pages: Service cards (staggered), CTA
- Contact: Form, Contact info, FAQ items (staggered)
- Resources: Resource cards (staggered), Newsletter
- Products: Product tabs, Feature grid

### 7.3 Hover Effects

- **Service cards**: `hover:border-primary/50 transition-all duration-300` + arrow icon fades in (`opacity-0 group-hover:opacity-100`)
- **Industry image cards**: `transition-transform duration-700 group-hover:scale-110` on images
- **Buttons**: Primary: `hover:opacity-90 active:scale-95 transition-all`; Outline: `hover:bg-surface-variant/50 transition-all`
- **Nav links**: `hover:text-zinc-100 transition-colors` (dark)
- **Footer links**: `hover:text-indigo-400 transition-colors`
- **Resource cards**: `hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/5` + image `opacity-60 group-hover:opacity-100`
- **Icon containers**: `group-hover:scale-110 transition-transform`

### 7.4 Counter Animations

```typescript
// src/hooks/use-counter-animation.ts
// Triggers when element enters viewport
// Counts from 0 to target over duration (default 2s)
// Uses requestAnimationFrame for smooth animation
// Supports prefix (e.g. "$") and suffix (e.g. "+", "%")
```

Used in:
- Home "Why" section stats
- About page (if any stat cards)

### 7.5 Special Animations

- **Hero badge pulsing dot**: CSS `animate-ping` on a small circle (from Stitch design)
- **Trust strip logo reveal**: `grayscale hover:grayscale-0 transition-all duration-500`
- **CTA banner glow**: Decorative blur circles positioned absolute
- **Navbar scroll**: Glass effect increases on scroll (opacity change)
- **FAQ accordion**: Smooth height animation via Radix + Framer Motion

---

## 8. Data Files

### 8.1 `src/data/services.ts`

```typescript
import { Server, Monitor, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  color: "primary" | "secondary" | "tertiary";
}

export const services: Service[] = [
  {
    id: "infrastructure-qualification",
    slug: "infrastructure-qualification",
    title: "IT Infrastructure Qualification",
    shortTitle: "Infrastructure Qualification",
    description:
      "GxP IT infrastructure must be documented, qualified, and maintained in a controlled state to meet regulatory expectations and industry best practices. We provide end-to-end infrastructure qualification and maintenance solutions tailored to your environment, whether on-premises, cloud-based, or hybrid.",
    shortDescription:
      "Risk-based assessment and qualification of IT infrastructure ensuring full regulatory alignment and data integrity across cloud, on-premise, and hybrid environments.",
    icon: Server,
    href: "/services/infrastructure-qualification",
    features: [
      "Infrastructure Qualification Planning & Execution for AWS, Azure, on-premises, and hybrid environments",
      "Location Risk Assessments for data centers, MDF/IDF rooms, and vendor-hosted environments",
      "IT Change Management & Periodic Review Processes to ensure infrastructure remains in a controlled state",
    ],
    color: "primary",
  },
  {
    id: "computer-system-validation",
    slug: "computer-system-validation",
    title: "Computer System Validation (CSV/CSA)",
    shortTitle: "Computer System Validation",
    description:
      "Validating and maintaining GxP-regulated IT systems requires a risk-based approach that aligns with industry best practices, GAMP guidelines, and regulatory requirements such as 21 CFR Part 11 and Annex 11. Whether you are implementing a new system, assessing an existing one, or transitioning to CSA principles, we provide the expertise and documentation needed to ensure compliance.",
    shortDescription:
      "GAMP 5 based validation and CSA services for LIMS, ELN, QMS, and ERP systems tailored to biotech, pharma, and medical device requirements.",
    icon: Monitor,
    href: "/services/computer-system-validation",
    features: [
      "CSV/CSA Strategy Development based on system risk and regulatory expectations",
      "Validation Planning & Execution: Plans, URS, FRS, Risk-Based Testing (IQ/OQ/PQ), Traceability Matrices",
      "Cloud and SaaS System Validation for QMS, LIMS, ERP, MES, and Document Management platforms",
      "Custom Software Qualification (GAMP Category 5)",
      "Data Integrity & Part 11/Annex 11 Compliance Reviews",
      "Remediation & Continuous Compliance Support",
    ],
    color: "secondary",
  },
  {
    id: "compliance-audits",
    slug: "compliance-audits",
    title: "System Development & IT Compliance Audits",
    shortTitle: "Compliance Audits",
    description:
      "A well-defined System Development Life Cycle (SDLC) and robust IT compliance processes are essential for maintaining control over GxP-regulated systems. We provide expert guidance and independent assessments to help you establish, refine, or evaluate system development, validation, and IT quality programs.",
    shortDescription:
      "Internal and third-party auditing services to identify gaps, refine SDLC processes, and ensure audit-readiness for FDA and EMA inspections.",
    icon: ClipboardCheck,
    href: "/services/compliance-audits",
    features: [
      "SDLC Program Development & Optimization for system development, testing, and change management",
      "IT & Compliance Audits assessing validation, qualification, and IT quality programs",
      "Open-Source Software Compliance Assessments for regulated environments",
      "Vendor & Third-Party Compliance Audits for cloud providers and IT service partners",
    ],
    color: "tertiary",
  },
];
```

### 8.2 `src/data/navigation.ts`

```typescript
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Infrastructure Qualification",
        href: "/services/infrastructure-qualification",
      },
      {
        label: "Computer System Validation",
        href: "/services/computer-system-validation",
      },
      {
        label: "System Dev & Compliance Audits",
        href: "/services/compliance-audits",
      },
    ],
  },
  {
    label: "Products",
    href: "/products/infrastructure-compliance-library",
  },
  { label: "Resources", href: "/resources/white-papers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Resources", href: "/resources/white-papers" },
  ],
  services: [
    {
      label: "Infrastructure Qualification",
      href: "/services/infrastructure-qualification",
    },
    {
      label: "CSV Services",
      href: "/services/computer-system-validation",
    },
    {
      label: "Compliance Audits",
      href: "/services/compliance-audits",
    },
    {
      label: "Compliance Library",
      href: "/products/infrastructure-compliance-library",
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};
```

### 8.3 `src/data/faq.ts`

```typescript
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is your typical engagement timeline?",
    answer:
      "Engagement timelines vary based on scope, but most strategy phases range from 4-8 weeks. Comprehensive system validation and infrastructure qualification projects typically span 3-6 months depending on company size and existing infrastructure.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      'Absolutely. We specialize in "Compliance-by-Design" for startups. We help you build scalable GxP foundations early so you don\'t face costly retrofitting when preparing for clinical trials or regulatory filings.',
  },
  {
    question: "What specific industries do you serve?",
    answer:
      "Our core expertise lies in biotechnology, pharmaceutical manufacturing, medical device companies, and digital health organizations requiring rigorous adherence to FDA, EMA, and ISO standards.",
  },
  {
    question: "How do you ensure data security during audits?",
    answer:
      "We utilize enterprise-grade, encrypted data rooms for all document exchanges and follow strict ISO 27001-aligned security protocols. All consultants operate under comprehensive NDAs and secure hardware environments.",
  },
  {
    question: "What regulatory frameworks do you cover?",
    answer:
      "We cover FDA 21 CFR Part 11, EU Annex 11, GAMP 5 guidelines, ISO 13485, FDA 21 CFR Part 820, ICH guidelines, and other relevant GxP regulations across global markets.",
  },
  {
    question: "Can you help with existing systems that need remediation?",
    answer:
      "Yes. We offer gap assessments and remediation services for existing validation and qualification programs. Whether you need to update legacy documentation or bring systems into current compliance, we provide structured remediation plans and execution support.",
  },
];
```

### 8.4 `src/data/resources.ts`

```typescript
export interface Resource {
  id: string;
  title: string;
  type: "white-paper" | "guide" | "case-study" | "compliance-update";
  typeLabel: string;
  date: string;
  description: string;
  readTime: string;
  downloadUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const resources: Resource[] = [
  {
    id: "validating-ai-systems",
    title: "Validating AI Systems",
    type: "white-paper",
    typeLabel: "White Paper",
    date: "June 2024",
    description:
      "A comprehensive framework for validating non-deterministic AI models in GxP environments.",
    readTime: "12 min read",
    downloadUrl: "/documents/validating-ai-systems.pdf",
    imageAlt:
      "Neural network visualization representing AI validation",
  },
  {
    id: "csv-best-practices-2025",
    title: "CSV Best Practices for 2025",
    type: "guide",
    typeLabel: "Guide",
    date: "April 2025",
    description:
      "Modernizing your Computer System Validation strategy using risk-based approaches and CSA principles.",
    readTime: "18 min read",
    imageAlt:
      "Abstract data dashboard representing modern CSV",
  },
  {
    id: "infrastructure-qualification-guide",
    title: "Infrastructure Qualification Guide",
    type: "guide",
    typeLabel: "Guide",
    date: "February 2025",
    description:
      "Ensuring your cloud and on-premise infrastructure meets rigorous GxP standards.",
    readTime: "25 min read",
    imageAlt:
      "Data center server rack with soft glow",
  },
  {
    id: "data-integrity-digital-age",
    title: "Data Integrity in the Digital Age",
    type: "white-paper",
    typeLabel: "White Paper",
    date: "January 2025",
    description:
      "Navigating the complexities of 21 CFR Part 11 and EU Annex 11 in a data-driven world.",
    readTime: "15 min read",
    imageAlt:
      "Globe with digital data representing global data integrity",
  },
];

export const resourceCategories = [
  { id: "all", label: "All" },
  { id: "white-paper", label: "White Papers" },
  { id: "guide", label: "Guides" },
  { id: "case-study", label: "Case Studies" },
  { id: "compliance-update", label: "Compliance Updates" },
];
```

### 8.5 `src/data/industries.ts`

```typescript
export interface Industry {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  color: "primary" | "secondary" | "tertiary";
}

export const industries: Industry[] = [
  {
    id: "biotechnology",
    title: "Biotechnology",
    description:
      "Supporting rapid scale-up from R&D to clinical phases with compliant quality systems.",
    imageSrc: "/images/industry-biotech.png",
    imageAlt:
      "Biotech laboratory with scientific equipment",
    color: "primary",
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    description:
      "Global GxP strategy and implementation for small molecules and biologics manufacturers.",
    imageSrc: "/images/industry-pharma.png",
    imageAlt:
      "Pharmaceutical manufacturing facility",
    color: "secondary",
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    description:
      "Navigating ISO 13485 and FDA 21 CFR Part 820 for Class I, II, and III medical devices.",
    imageSrc: "/images/industry-medical.png",
    imageAlt:
      "Medical diagnostic device in clinical setting",
    color: "tertiary",
  },
];
```

### 8.6 `src/data/timeline.ts`

```typescript
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "1997",
    title: "Foundation of Expertise",
    description:
      "Team leaders begin defining 21 CFR Part 11 strategies for global pharma leaders.",
  },
  {
    year: "2010",
    title: "SaaS Validation Revolution",
    description:
      "Expansion into multi-tenant cloud validation frameworks and agile SDLC compliance.",
  },
  {
    year: "2020",
    title: "Cloud & Modern Architecture",
    description:
      "Formalizing validation practices for cloud-native and containerized environments.",
  },
  {
    year: "2025",
    title: "GXPThinklabs Founded",
    description:
      "An SRJH company established to pioneer data-driven GxP consulting for the modern era.",
    isHighlighted: true,
  },
];
```

### 8.7 `src/data/products.ts`

```typescript
export interface ProductCategory {
  id: string;
  title: string;
  icon: string;
  items: ProductItem[];
}

export interface ProductItem {
  title: string;
  description: string;
  format?: string;
  tags?: string[];
  subItems?: { icon: string; title: string; description: string }[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "qualification-plans",
    title: "Qualification Plans & Protocols",
    icon: "FileText",
    items: [
      {
        title: "Qualification Plans and Test Protocols",
        description:
          "Exhaustive validation templates for the modern data center. Our protocols are architected to satisfy both FDA and EMA requirements for computerized systems.",
        tags: ["IQ/OQ/PQ Bundle", "Cloud Ready"],
        subItems: [
          {
            icon: "Server",
            title: "Physical & Virtual Servers",
            description:
              "Includes templates for hypervisor configuration and hardware acceptance testing.",
          },
          {
            icon: "Cloud",
            title: "Cloud Infrastructure",
            description:
              "Tailored IQ/OQ for AWS/Azure/GCP shared responsibility models.",
          },
          {
            icon: "Network",
            title: "Network Architecture",
            description:
              "Test protocols for firewalls, switches, and secure segmentation validation.",
          },
          {
            icon: "ClipboardList",
            title: "Master Plans",
            description:
              "High-level strategies for multi-site infrastructure validation programs.",
          },
        ],
      },
    ],
  },
  {
    id: "management-sops",
    title: "Management SOPs",
    icon: "Settings",
    items: [
      {
        title: "Infrastructure Management SOPs",
        description:
          "Core operating procedures for IT infrastructure management covering backup, restore, disaster recovery, security, incident response, and access management.",
        format: "DOCX",
      },
    ],
  },
  {
    id: "work-instructions",
    title: "Work Instructions",
    icon: "Terminal",
    items: [
      {
        title: "Work Instructions for Configuration Items",
        description:
          "Step-by-step technical guides for servers, virtual machines, storage, network devices, cabling, and power devices.",
        format: "PDF",
      },
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    icon: "BarChart3",
    items: [
      {
        title: "Risk Assessment Templates",
        description:
          "Comprehensive risk assessment templates for data centers, vendors, and IT systems.",
        format: "XLSX, PDF",
      },
    ],
  },
  {
    id: "traceability",
    title: "Traceability & Specs",
    icon: "GitBranch",
    items: [
      {
        title: "Traceability Matrices, Configuration Specifications, and Installation Instructions",
        description:
          "Map infrastructure requirements to test scripts and risk controls with full traceability.",
        format: "XLSX",
      },
    ],
  },
];
```

### 8.8 `src/data/site-config.ts`

```typescript
export const siteConfig = {
  name: "GXPThinklabs",
  tagline: "Compliance Solutions for Modern Life Sciences",
  description:
    "Expert GxP compliance consulting for biotech, pharma, and medical device companies.",
  url: "https://gxpthinklabs.com",
  parentCompany: "SRJH",
  founded: 2025,
  contact: {
    phone: "1.657.844.2591",
    email: "info@gxpthinklabs.com",
    hours: "9am - 6pm PST, Monday - Friday",
    address: {
      city: "Irvine",
      state: "CA",
      country: "USA",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/gxpthinklabs",
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} GXPThinklabs. A SRJH Company. All rights reserved.`,
    privacyPolicy: "/privacy",
    termsOfService: "/terms",
    cookiePolicy: "/cookies",
  },
};
```

---

## 9. Contact Form

### 9.1 Form Fields & Zod Schema

```typescript
// src/lib/types.ts (or within contact-form.tsx)
import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(200),
  serviceInterest: z
    .string()
    .min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### 9.2 Service Interest Options

```typescript
export const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "infrastructure-qualification", label: "Infrastructure Qualification" },
  { value: "computer-system-validation", label: "Computer System Validation" },
  { value: "compliance-audits", label: "System Development & Compliance Audits" },
  { value: "compliance-library", label: "Infrastructure Compliance Library" },
  { value: "general-inquiry", label: "General Inquiry" },
];
```

### 9.3 API Route (`src/app/api/contact/route.ts`)

```typescript
import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, company, serviceInterest, message } = result.data;

    // Option 1: Send email via external service (e.g., Resend, SendGrid)
    // Option 2: Store in database
    // Option 3: Forward to webhook (e.g., Slack, email)

    // For MVP: Log and return success
    // In production: integrate with email service
    console.log("Contact form submission:", {
      fullName,
      email,
      company,
      serviceInterest,
      message,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Resend recommended for Vercel)
    // await resend.emails.send({
    //   from: "noreply@gxpthinklabs.com",
    //   to: "info@gxpthinklabs.com",
    //   subject: `New inquiry from ${fullName} at ${company}`,
    //   html: `...`,
    // });

    return NextResponse.json(
      { message: "Thank you! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
```

### 9.4 Contact Form Component Behavior

```typescript
// In contact-form.tsx ("use client")
// Uses react-hook-form with zodResolver
// States: idle | submitting | success | error
// On success: shows green success message, resets form after 5 seconds
// On error: shows red error message with retry
// Disables submit button while submitting
// Shows loading spinner in button during submission
```

---

## 10. SEO & Metadata

### 10.1 Root Layout Metadata (`src/app/layout.tsx`)

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gxpthinklabs.com"),
  title: {
    default: "GXPThinklabs | Compliance Solutions for Modern Life Sciences",
    template: "%s | GXPThinklabs",
  },
  description:
    "Expert GxP compliance consulting for biotech, pharma, and medical device companies. IT infrastructure qualification, computer system validation, and compliance audits.",
  keywords: [
    "GxP compliance",
    "computer system validation",
    "CSV",
    "CSA",
    "IT infrastructure qualification",
    "GAMP 5",
    "21 CFR Part 11",
    "Annex 11",
    "pharmaceutical compliance",
    "biotech regulatory",
    "medical device compliance",
    "GXPThinklabs",
  ],
  authors: [{ name: "GXPThinklabs", url: "https://gxpthinklabs.com" }],
  creator: "GXPThinklabs",
  publisher: "GXPThinklabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gxpthinklabs.com",
    siteName: "GXPThinklabs",
    title: "GXPThinklabs | Compliance Solutions for Modern Life Sciences",
    description:
      "Expert GxP compliance consulting for biotech, pharma, and medical device companies.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GXPThinklabs - Compliance Solutions for Modern Life Sciences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GXPThinklabs | Compliance Solutions for Modern Life Sciences",
    description:
      "Expert GxP compliance consulting for biotech, pharma, and medical device companies.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.png",
  },
};
```

### 10.2 Per-Page `generateMetadata()`

```typescript
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: "About",
  description:
    "GXPThinklabs is a 2025-founded SRJH subsidiary bringing modern, data-driven GxP compliance consulting to the life sciences industry.",
  openGraph: {
    title: "About GXPThinklabs",
    description:
      "Modern GxP compliance consulting for the life sciences industry.",
    images: ["/images/og-image.png"],
  },
};

// src/app/services/infrastructure-qualification/page.tsx
export const metadata: Metadata = {
  title: "IT Infrastructure Qualification",
  description:
    "End-to-end IT infrastructure qualification and maintenance for GxP-regulated environments. Cloud, on-premise, and hybrid solutions.",
};

// src/app/services/computer-system-validation/page.tsx
export const metadata: Metadata = {
  title: "Computer System Validation (CSV/CSA)",
  description:
    "Risk-based computer system validation and CSA services for LIMS, QMS, ERP, and custom software in GxP-regulated environments.",
};

// src/app/services/compliance-audits/page.tsx
export const metadata: Metadata = {
  title: "System Development & IT Compliance Audits",
  description:
    "Expert SDLC program development and IT compliance audits for GxP-regulated systems. Vendor audits, OSS compliance, and gap analysis.",
};

// src/app/products/infrastructure-compliance-library/page.tsx
export const metadata: Metadata = {
  title: "Infrastructure Compliance Library",
  description:
    "Enterprise-grade document templates and compliance frameworks for GxP-regulated infrastructure.",
};

// src/app/resources/white-papers/page.tsx
export const metadata: Metadata = {
  title: "Resources & White Papers",
  description:
    "Download free GxP compliance white papers, guides, and industry insights from GXPThinklabs experts.",
};

// src/app/contact/page.tsx
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our GxP compliance experts. Schedule a consultation for IT infrastructure qualification, CSV, or compliance audit services.",
};
```

### 10.3 JSON-LD Schemas

```typescript
// In src/app/layout.tsx (Organization schema, site-wide)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GXPThinklabs",
  url: "https://gxpthinklabs.com",
  logo: "https://gxpthinklabs.com/images/icon.png",
  description:
    "Expert GxP compliance consulting for biotech, pharma, and medical device companies.",
  foundingDate: "2025",
  parentOrganization: {
    "@type": "Organization",
    name: "SRJH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-657-844-2591",
    contactType: "sales",
    email: "info@gxpthinklabs.com",
    availableLanguage: "English",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  },
  sameAs: ["https://www.linkedin.com/company/gxpthinklabs"],
  areaServed: "Global",
  knowsAbout: [
    "GxP Compliance",
    "Computer System Validation",
    "IT Infrastructure Qualification",
    "21 CFR Part 11",
    "GAMP 5",
    "Pharmaceutical Compliance",
    "Biotech Regulatory",
    "Medical Device Compliance",
  ],
};

// In each service page (Service schema)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Infrastructure Qualification", // varies per page
  provider: {
    "@type": "Organization",
    name: "GXPThinklabs",
  },
  description: "...", // varies per page
  areaServed: "Global",
};
```

---

## 11. Deployment

### 11.1 Vercel Configuration

The project deploys with zero-config on Vercel (Next.js is auto-detected). No `vercel.json` is strictly required, but if custom headers or redirects are needed:

```json
// vercel.json (optional)
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### 11.2 `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // If using external image sources:
    // remotePatterns: [
    //   { protocol: "https", hostname: "lh3.googleusercontent.com" },
    // ],
  },
};

export default nextConfig;
```

### 11.3 Environment Variables

```bash
# .env.example

# Contact Form Email Service (Resend recommended)
RESEND_API_KEY=re_xxxxxxxx

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Site URL (used for metadata, sitemap)
NEXT_PUBLIC_SITE_URL=https://gxpthinklabs.com
```

### 11.4 `robots.txt`

```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://gxpthinklabs.com/sitemap.xml
```

---

## 12. Implementation Order

### Phase 1: Foundation (Steps 1-4)

**Step 1: Project Initialization**
- Run `create-next-app` command
- Install all dependencies
- Set up folder structure (empty files)
- **Dependencies**: None

**Step 2: Design System & Global Styles**
- Configure `tailwind.config.ts` with all color tokens
- Write `globals.css` with CSS variables for dark/light themes
- Set up `next-themes` ThemeProvider in root layout
- Add Google Fonts (Inter, Space Grotesk) via `next/font/google`
- **Dependencies**: Step 1

**Step 3: Utility Files**
- Create `src/lib/utils.ts` (cn function using clsx + tailwind-merge)
- Create `src/lib/constants.ts` (animation constants, breakpoints)
- Create `src/lib/types.ts` (shared TypeScript types, Zod schemas)
- **Dependencies**: Step 1

**Step 4: Data Files**
- Create all data files: services.ts, navigation.ts, faq.ts, resources.ts, industries.ts, timeline.ts, products.ts, site-config.ts
- **Dependencies**: Step 1

### Phase 2: Core Components (Steps 5-8)

**Step 5: UI Primitives**
- Build Button, Input, Textarea, Select, Badge, Card, Accordion, Separator
- These are design-system-level components, no page-specific logic
- **Dependencies**: Steps 2, 3

**Step 6: Layout Components**
- Build Navbar (desktop nav, services dropdown, theme toggle, active states)
- Build MobileNav (Radix Dialog, slide-in drawer)
- Build Footer (4-column grid, legal links, social icons)
- Build SectionWrapper
- Set up root layout.tsx with Navbar, Footer, ThemeProvider
- **Dependencies**: Steps 4, 5

**Step 7: Shared Components**
- Build ScrollReveal (Framer Motion + IntersectionObserver)
- Build AnimatedCounter
- Build SectionHeader
- Build GradientText, GlassCard
- Build PageTransition
- **Dependencies**: Steps 5, 6

**Step 8: Custom Hooks**
- useScrollAnimation (IntersectionObserver for scroll-triggered animations)
- useCounterAnimation (requestAnimationFrame counter)
- useMediaQuery (responsive breakpoint detection)
- **Dependencies**: Step 1

### Phase 3: Pages (Steps 9-16)

**Step 9: Home Page**
- Build HeroSection (mesh gradient, glow orbs, badge, title, CTAs)
- Build TrustStrip
- Build ServicesGrid (3 service cards -- NO AI validation)
- Build WhySection (differentiators + stats)
- Build IndustriesSection (3 image cards)
- Build CTABanner
- Assemble Home page
- **Dependencies**: Steps 6, 7, 8

**Step 10: About Page**
- Build AboutHero (background image, label, title)
- Build MissionSection (bento grid)
- Build PillarsSection (3-column cards)
- Build TimelineSection (vertical timeline, 2025 highlight)
- Build ParentCompanySection (SRJH badge)
- Assemble About page with CTA
- **Dependencies**: Steps 6, 7

**Step 11: Infrastructure Qualification Page**
- Build ServiceHero (reusable for all service pages)
- Build service-specific detail cards (3 cards with checklists)
- Build ComplianceLibraryAssets (4 cards with download icons)
- Build ServiceCTA
- Assemble page
- **Dependencies**: Steps 6, 7

**Step 12: Computer System Validation Page**
- Build bento grid layout (6 services with varied col-spans)
- Reuse ServiceHero, ServiceCTA
- Assemble page
- **Dependencies**: Steps 6, 7, 11 (reuses ServiceHero)

**Step 13: Compliance Audits Page**
- Build bento grid layout (4 cards)
- Build Risk-Based Approach section (text + image)
- Reuse ServiceHero, ServiceCTA
- Assemble page
- **Dependencies**: Steps 6, 7, 11

**Step 14: Products (Infrastructure Compliance Library) Page**
- Build ProductHero
- Build ProductCategoryTabs (Radix tabs or custom tab state)
- Build ProductFeatureGrid (4 feature cards)
- Assemble page with CTA
- **Dependencies**: Steps 6, 7

**Step 15: Resources / White Papers Page**
- Build ResourceFilter (category buttons)
- Build ResourceCard (glass card with image, metadata, download)
- Build NewsletterSection (email signup CTA)
- Assemble page
- **Dependencies**: Steps 6, 7

**Step 16: Contact Page**
- Build ContactForm (React Hook Form + Zod + API submission)
- Build ContactInfo (phone, email, hours, map placeholder)
- Build FAQSection (Radix Accordion)
- Build API route `/api/contact/route.ts`
- Assemble page
- **Dependencies**: Steps 5, 6, 7

### Phase 4: Polish & Deploy (Steps 17-20)

**Step 17: SEO & Metadata**
- Add generateMetadata to every page
- Add JSON-LD Organization schema to root layout
- Add JSON-LD Service schemas to service pages
- Create robots.txt
- Create favicon + apple touch icon
- **Dependencies**: Steps 9-16

**Step 18: Animations & Interactions**
- Add scroll-reveal to all sections
- Add staggered entrance animations to card grids
- Add page transitions
- Add hover effects to all interactive elements
- Add counter animations to stats
- Test animation performance
- **Dependencies**: Steps 9-16

**Step 19: Responsive Testing & Light Mode**
- Test every page at mobile (375px), tablet (768px), desktop (1280px+)
- Verify light mode color variables render correctly
- Test theme toggle transitions
- Fix any responsive layout issues
- Test accessibility (keyboard navigation, screen readers)
- **Dependencies**: Steps 9-18

**Step 20: Deployment**
- Set up Vercel project
- Configure environment variables
- Run `npm run build` locally to verify no errors
- Deploy to Vercel
- Verify all pages load, forms work, images render
- Set up custom domain (gxpthinklabs.com)
- **Dependencies**: Steps 17-19

---

## Appendix A: Key Code Snippets

### `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Root Layout Structure (`src/app/layout.tsx`)

```typescript
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = { /* ... as defined in Section 10 */ };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### ThemeProvider wrapper

```typescript
// src/components/layout/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

---

## Appendix B: Critical Rules Checklist

- [x] GXPThinklabs is a NEW company founded 2025 (parent: SRJH)
- [x] NOT related to gxpcompliance.com -- no "GxP Compliance" brand references
- [x] ONLY 3 services: Infrastructure Qualification, CSV/CSA, System Dev & IT Compliance Audits
- [x] NO AI System Validation service page
- [x] Do NOT claim decades of experience for the company (team heritage only)
- [x] Tech stack: Next.js 14+ App Router, TypeScript, Tailwind CSS, Framer Motion, Radix UI, next-themes, React Hook Form + Zod, Lucide React
- [x] Deploy: Vercel
- [x] Dark + Light themes with indigo/violet accent (#6366F1 / #a3a6ff)
- [x] Mobile-first responsive design
- [x] Copyright: "A SRJH Company"
- [x] All content is ORIGINAL (not copied from gxpcompliance.com)
- [x] Content stored in data files, not hardcoded in components
- [x] Server components preferred; "use client" only when needed

---

## Appendix C: Validator Fixes (Post-Review)

### C.1 Image Optimization Strategy (`next/image`)

All images MUST use the Next.js `<Image>` component from `next/image`:

```typescript
import Image from "next/image";

// Hero background - full width, priority loading
<Image
  src="/images/hero-bg.png"
  alt="GXPThinklabs hero"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>

// Service icons - fixed size
<Image
  src="/images/service-infrastructure.png"
  alt="Infrastructure Qualification"
  width={256}
  height={256}
  className="w-16 h-16"
/>

// Industry images - responsive
<Image
  src="/images/industry-biotech.png"
  alt="Biotechnology"
  width={800}
  height={600}
  className="w-full h-auto rounded-xl"
  sizes="(max-width: 768px) 100vw, 33vw"
/>

// OG Image
<Image
  src="/images/og-image.png"
  alt="GXPThinklabs"
  width={1200}
  height={630}
/>
```

**Rules:**
- Hero images: `priority` + `fill` + `sizes="100vw"`
- Above-fold images: `priority`
- Below-fold images: default lazy loading
- Icons: explicit `width`/`height`
- All images: meaningful `alt` text
- Use `sizes` prop for responsive images to prevent layout shift

### C.2 Sitemap Generation (`src/app/sitemap.ts`)

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gxpthinklabs.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/infrastructure-qualification`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/computer-system-validation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/compliance-audits`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products/infrastructure-compliance-library`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources/white-papers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
```

### C.3 Loading States (`loading.tsx`)

```typescript
// src/app/loading.tsx — Global loading skeleton
export default function Loading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Nav skeleton */}
      <div className="h-16 border-b border-outline-variant/20" />
      {/* Hero skeleton */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="h-4 w-32 bg-surface-container rounded mb-6" />
        <div className="h-12 w-3/4 bg-surface-container rounded mb-4" />
        <div className="h-12 w-1/2 bg-surface-container rounded mb-8" />
        <div className="h-6 w-2/3 bg-surface-container-high rounded mb-8" />
        <div className="flex gap-4">
          <div className="h-12 w-40 bg-surface-container rounded-xl" />
          <div className="h-12 w-40 bg-surface-container rounded-xl" />
        </div>
      </div>
    </div>
  );
}
```

### C.4 404 Page (`src/app/not-found.tsx`)

```typescript
// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold font-headline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-on-surface mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-on-surface-variant mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-medium hover:bg-primary-dim transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

### C.5 Legal Pages (Placeholders)

```typescript
// src/app/privacy/page.tsx
export const metadata = { title: "Privacy Policy | GXPThinklabs" };
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold font-headline text-on-surface mb-8">Privacy Policy</h1>
        <p className="text-on-surface-variant">
          This privacy policy will be updated with our full data handling practices.
          For questions, contact us at privacy@gxpthinklabs.com
        </p>
      </div>
    </div>
  );
}

// src/app/terms/page.tsx
export const metadata = { title: "Terms of Service | GXPThinklabs" };
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold font-headline text-on-surface mb-8">Terms of Service</h1>
        <p className="text-on-surface-variant">
          These terms of service will be updated with our full terms.
          For questions, contact us at legal@gxpthinklabs.com
        </p>
      </div>
    </div>
  );
}
```

### C.6 Resource Card Image Sources

```typescript
// Updated resources data with imageSrc fields
export const resources = [
  {
    id: "validating-ai-systems",
    title: "Validating AI Systems in GxP Environments",
    date: "June 2024",
    category: "White Paper",
    abstract: "A comprehensive guide to validation strategies for AI and ML tools in regulated life science environments.",
    imageSrc: "/images/industry-biotech.png",
    downloadUrl: "#",
  },
  {
    id: "csv-best-practices",
    title: "CSV Best Practices for 2025",
    date: "Coming Soon",
    category: "Guide",
    abstract: "Modern approaches to computer system validation using risk-based methodologies and CSA principles.",
    imageSrc: "/images/service-csv.png",
    downloadUrl: "#",
  },
  {
    id: "infrastructure-guide",
    title: "Infrastructure Qualification Guide",
    date: "Coming Soon",
    category: "White Paper",
    abstract: "End-to-end guide for qualifying IT infrastructure in cloud, hybrid, and on-premises environments.",
    imageSrc: "/images/service-infrastructure.png",
    downloadUrl: "#",
  },
  {
    id: "data-integrity",
    title: "Data Integrity in the Digital Age",
    date: "Coming Soon",
    category: "Insight",
    abstract: "How modern organizations maintain data integrity across complex IT ecosystems.",
    imageSrc: "/images/service-audits.png",
    downloadUrl: "#",
  },
];
```

### C.7 Folder Structure Additions

Add these files to the Section 1.4 folder tree:
```
src/
  app/
    loading.tsx                       (Global loading skeleton)
    not-found.tsx                     (404 page)
    sitemap.ts                        (Auto-generated sitemap)
    privacy/
      page.tsx                        (Privacy policy placeholder)
    terms/
      page.tsx                        (Terms of service placeholder)
  components/
    layout/
      theme-provider.tsx              (next-themes wrapper)
```
