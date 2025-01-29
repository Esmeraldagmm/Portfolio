/** 
 * 
 @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "royal-blue": "#0000FF",
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
