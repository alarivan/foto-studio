const defaultTheme = {
  breakpoints: ["768px", "1024px", "1200px"],
  colors: {
    text: "#111",
    background: "#f9f9f9",
    dark: "#333",
    border: "#ccc",
  },
  fonts: {
    body: "'Roboto Condensed', sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: ["1rem", "1.25rem", "1.5rem", "2.5rem", "3rem"],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, "0.5rem", "0.8rem", "1rem", "2rem", "3rem"],
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    main: "30px 0px 40px rgba(0,0,0,0.1), -30px 0px 40px rgba(0,0,0,0.1)",
  },
}

export default defaultTheme as typeof defaultTheme
