// ============================================
// CENTRALIZED THEME CONFIGURATION
// Change colors here to update the entire site.
//
// This file is the single source of truth for
// brand colors used across the website.
//
// After editing values here, also update the
// matching CSS custom properties in globals.css
// and the hardcoded rgba() values (search for
// "theme-config" comments in globals.css).
// ============================================

export const themeConfig = {
  brand: {
    name: "GXPThinklabs",
    tagline: "Compliance Solutions for Modern Life Sciences",
  },

  colors: {
    // Primary brand color (seed for dynamic color system)
    primary: {
      hex: "#0D7377",       // Deep teal/emerald
      hsl: "181 80% 26%",
      rgb: "13, 115, 119",
    },
    secondary: {
      hex: "#14919B",       // Teal confidence
      hsl: "184 75% 34%",
      rgb: "20, 145, 155",
    },
    tertiary: {
      hex: "#4A90A4",       // Tech blue
      hsl: "198 38% 47%",
      rgb: "74, 144, 164",
    },

    // Dark mode backgrounds
    dark: {
      background: "#0A0E12",
      surface: "#131A1F",
      surfaceHigh: "#1A2129",
    },

    // Light mode backgrounds
    light: {
      background: "#F0F4F8",
      surface: "#FFFFFF",
      surfaceHigh: "#E4E9EE",
    },
  },

  // Gradient presets (used across the site)
  gradients: {
    primary: "linear-gradient(135deg, #0D7377, #14919B)",
    cta: "linear-gradient(135deg, #0D7377 0%, #14919B 100%)",
    text: "linear-gradient(135deg, #0D7377, #14919B)",
    textDark: "linear-gradient(135deg, #6DC8C5, #6BC4CC)",
    hero: "linear-gradient(to right, #0f172a, #1e293b)",
    heroDark: "linear-gradient(to right, #FAFAFA, #A1A1AA)",
  },

  // RGB values for rgba() usage in animations/glows
  glowColors: {
    primary: "13, 115, 119",       // #0D7377
    secondary: "20, 145, 155",     // #14919B
    tertiary: "74, 144, 164",      // #4A90A4
    primaryLight: "109, 200, 197", // #6DC8C5 — dark mode primary
  },
} as const;

// Helper to generate CSS custom properties from config
export function getThemeCSSVars() {
  return {
    "--brand-primary": themeConfig.colors.primary.hex,
    "--brand-secondary": themeConfig.colors.secondary.hex,
    "--brand-tertiary": themeConfig.colors.tertiary.hex,
  };
}
