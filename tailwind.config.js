/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "6px 6px 0px rgba(2, 6, 23,.7)",
        "green-sm": "3px 3px 0px rgba(16, 185, 129, .9)",
        "green-md": "6px 6px 0px rgba(16, 185, 129, .9)",
      },
    },
  },
  plugins: [],
};
