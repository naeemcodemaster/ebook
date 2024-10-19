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
        primary:{
          50:'#0c3a28',
          100:'#072318',
          
        }
      },
      // Additional container configuration
      container: {
        center: true, // Center the container on the page
        padding: "10rem", // Padding applied to all screen sizes
      },
    },
  },
  plugins: [],
};

export default config;
