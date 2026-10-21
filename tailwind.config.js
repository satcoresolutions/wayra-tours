/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noche: "#0B1F1C",
        selva: "#16352E",
        musgo: "#2F6E5E",
        oro: "#C89B3C",
        oroSuave: "#E3C77E",
        arena: "#F1E8D6",
        niebla: "#B9C6BE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "gradiente-noche":
          "radial-gradient(circle at 20% 0%, #1C3D34 0%, #0B1F1C 55%, #08130F 100%)",
      },
    },
  },
  plugins: [],
};
