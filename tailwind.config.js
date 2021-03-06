module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0072c4",
          secondary: "#3b82f6",
          accent: "#0091ae",
          neutral: "#78716c",
          "base-100": "#FFFFFF",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#F3F4F6",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
