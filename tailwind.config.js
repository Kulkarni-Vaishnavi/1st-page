/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { roboto: "Roboto" } },
    colors: {
      pink: "#b2b8f1",
      indigo: { "100": "#0c57cc", "200": "#0d47a1", "300": "#0c2ea8" },
      gray: { "100": "rgba(0, 0, 0, 0.47)", "200": "rgba(0, 0, 0, 0.45)" },
      white: "#fff",
      black: "#000",
    },
    fontSize: { base: "20px", lg: "32px" },
  },
  corePlugins: { preflight: false },
};
