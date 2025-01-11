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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "grey-background": "var(--grey-background)",
        "grey-subtext": "var(--grey-subtext)",
        "grey-medium": "var(--grey-medium)",
        "grey-secondary": "var(--grey-secondary)",
        "grey-neutral": "var(--grey-neutral)",
        "grey-neutral-neutral": "var(--grey-neutral-neutral)",
        disabled: "var(--disabled)",
      },
    },
  },
  plugins: [],
}

