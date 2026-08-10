const fonts = {
  heading: "var(--font-space-mono), monospace",
  body: "var(--font-inter), sans-serif",
  pixel: "var(--font-pixelify-sans), monospace",
};

const fontSizes = {
  xs: "0.6875rem",
  sm: "0.8125rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.375rem",
  "2xl": "1.75rem",
  "3xl": "2.25rem",
  "4xl": "2.875rem",
  "5xl": "3.75rem",
};

const lineHeights = {
  tight: 1.15,
  snug: 1.35,
  base: 1.6,
  relaxed: 1.75,
};

const letterSpacings = {
  tightest: "-0.02em",
  tight: "-0.01em",
  normal: "0",
  wide: "0.04em",
  wider: "0.12em",
  widest: "0.2em",
};

const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export default fonts;
export { fontSizes, lineHeights, letterSpacings, fontWeights };
