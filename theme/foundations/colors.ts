const colors = {
  void: "#0B0E14",
  panel: "#141922",
  phosphor: "#8FE3CF",
  amber: "#E8A84E",
  magenta: "#F2679E",
  violet: "#B48CF2",
  cyan: "#5FD9F5",
  signal: "#F4F1E8",
  dim: "#5A6472",
};

const gradients = {
  signalSpectrum: "linear-gradient(90deg, #8FE3CF 0%, #5FD9F5 45%, #B48CF2 75%, #F2679E 100%)",
  auroraGlow: "radial-gradient(circle at 20% 20%, rgba(143,227,207,0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(180,140,242,0.14), transparent 50%), radial-gradient(circle at 50% 100%, rgba(242,103,158,0.12), transparent 55%)",
  panelBorder: "linear-gradient(135deg, #8FE3CF 0%, #5FD9F5 40%, #B48CF2 70%, #F2679E 100%)",
};

export default colors;
export { gradients };
