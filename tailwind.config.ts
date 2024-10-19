import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color variables linked to CSS variables
      colors: {
        background: "var(--background)", // Custom CSS variable for background color
        foreground: "var(--foreground)", // Custom CSS variable for foreground color
        primary: {
          50: '#0c3a28',
          100: '#072318',
        },
      },
      // Additional container configuration
      container: {
        center: true, // Center the container on the page
        padding: {
          DEFAULT: "1rem", // Padding on mobile devices (small screens)
          sm: "1rem", // Small screens (phones)
          md: "2rem", // Medium screens (tablets)
          lg: "4rem", // Large screens (desktops)
          xl: "6rem", // Extra-large screens
          "2xl": "8rem", // 2XL screens
        },
        screens: {
          sm: "100%", // Make container full width on small screens
          md: "100%", // Full width on medium screens
          lg: "1024px", // Fixed width on large screens
          xl: "1280px", // Fixed width on extra-large screens
          "2xl": "1536px", // Fixed width on 2XL screens
        },
      },
    },
  },
  plugins: [],
};

export default config;
