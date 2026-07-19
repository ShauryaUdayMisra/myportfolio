import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1F2B47",
        surface: "#273652",
        "surface-2": "#2E3E5E",
        border: "#39496B",
        "border-strong": "#4A5C82",
        ink: "#EDF0F7",
        "ink-2": "#B4BDD1",
        "ink-3": "#8290AC",
        "ink-4": "#566180",
        accent: "#E0A83C",
        "accent-dim": "rgba(224,168,60,0.12)",
        intrn: "#B46BFC",
        "intrn-dim": "rgba(180,107,252,0.08)",
        moro: "#4A9D6F",
        "moro-dim": "rgba(74,157,111,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      fontSize: {
        hero: ["clamp(4.5rem,14vw,14rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        display: ["clamp(2.25rem,5vw,5rem)", { lineHeight: "1.05" }],
        headline: ["clamp(1.25rem,2.5vw,2rem)", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        xs: ["0.8125rem", { lineHeight: "1.4" }],
        "2xs": ["0.75rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        site: "1280px",
        prose: "68ch",
      },
      spacing: {
        section: "clamp(5rem,10vw,10rem)",
        "section-sm": "clamp(3rem,6vw,6rem)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulse-dot 3s ease-in-out infinite",
        "draw-line": "draw-line 1.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
