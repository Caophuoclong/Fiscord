module.exports = {
  content: [
    "./src/**/*.{ts,tsx, svg}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        nord: {
          dark: "#434C5E",
          light: "#81A1C1",
          before: {
            dark: "#88C0D0",
            light: "#D8DEE9",
          },
          channel: {
            selected: "#50545b",
            hover: "#313844"
          }
        },
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
