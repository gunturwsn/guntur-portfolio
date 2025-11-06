/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060F1E",
        surface: "#111C30",
        primary: "#64FFDA",
        accent: "#64FFDA",
        text: "#E6F1FF",
        muted: "#94A1C6",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },
      fontFamily: {
        sans: ["Inter Variable", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "Space Grotesk Variable",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        mesh: "radial-gradient(120% 120% at 0% 0%, rgba(100, 255, 218, 0.2) 0%, rgba(6, 15, 30, 0) 55%), radial-gradient(120% 120% at 100% 0%, rgba(56, 189, 248, 0.18) 0%, rgba(6, 15, 30, 0) 55%)",
      },
    },
  },
  plugins: [],
};
