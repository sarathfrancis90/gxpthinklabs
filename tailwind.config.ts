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
        // === SEMANTIC TOKENS — Emerald Authority palette ===
        // All driven by CSS custom properties
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
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          dim: "hsl(var(--tertiary-dim))",
          container: "hsl(var(--tertiary-container))",
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
        "on-primary-container": "hsl(var(--on-primary-container))",
        "on-secondary-container": "hsl(var(--on-secondary-container))",
        "on-tertiary-container": "hsl(var(--on-tertiary-container))",
        "on-error-container": "hsl(var(--on-error-container))",
        "inverse-surface": "hsl(var(--inverse-surface))",
        "inverse-on-surface": "hsl(var(--inverse-on-surface))",
        "inverse-primary": "hsl(var(--inverse-primary))",
      },
      fontFamily: {
        headline: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        label: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
