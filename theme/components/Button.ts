import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { gradients } from "../foundations/colors";

const phosphorOutline = defineStyle({
  border: "1px solid",
  borderColor: "phosphor",
  color: "phosphor",
  background: "transparent",
  borderRadius: "2px",
  fontFamily: "var(--font-space-mono), monospace",
  letterSpacing: "wide",
  textTransform: "uppercase",
  fontSize: "sm",
  transition: "background-color 160ms ease, color 160ms ease, box-shadow 160ms ease",
  _hover: {
    background: "phosphor",
    color: "void",
    boxShadow: "0 0 20px rgba(143, 227, 207, 0.45)",
  },
  _focusVisible: {
    boxShadow: "none",
    outline: "2px solid",
    outlineColor: "phosphor",
    outlineOffset: "2px",
  },
});

const spectrumSolid = defineStyle({
  backgroundImage: gradients.signalSpectrum,
  color: "void",
  borderRadius: "2px",
  fontFamily: "var(--font-space-mono), monospace",
  letterSpacing: "wide",
  textTransform: "uppercase",
  fontSize: "sm",
  fontWeight: "bold",
  backgroundSize: "160% 100%",
  backgroundPosition: "0% 0%",
  transition: "background-position 300ms ease, box-shadow 300ms ease",
  _hover: {
    backgroundPosition: "100% 0%",
    boxShadow: "0 0 24px rgba(180, 140, 242, 0.45)",
  },
  _focusVisible: {
    boxShadow: "none",
    outline: "2px solid",
    outlineColor: "violet",
    outlineOffset: "2px",
  },
});

const amberSolid = defineStyle({
  background: "amber",
  color: "void",
  borderRadius: "2px",
  fontFamily: "var(--font-space-mono), monospace",
  letterSpacing: "wide",
  textTransform: "uppercase",
  fontSize: "sm",
  transition: "opacity 160ms ease",
  _hover: {
    opacity: 0.85,
    background: "amber",
  },
  _focusVisible: {
    boxShadow: "none",
    outline: "2px solid",
    outlineColor: "amber",
    outlineOffset: "2px",
  },
});

const ghost = defineStyle({
  color: "dim",
  fontFamily: "var(--font-space-mono), monospace",
  letterSpacing: "wide",
  textTransform: "uppercase",
  fontSize: "sm",
  borderRadius: "2px",
  transition: "color 160ms ease",
  _hover: {
    color: "magenta",
    background: "transparent",
  },
  _focusVisible: {
    boxShadow: "none",
    outline: "2px solid",
    outlineColor: "dim",
    outlineOffset: "2px",
  },
});

const ButtonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "medium",
    borderRadius: "2px",
  },
  variants: {
    phosphorOutline,
    spectrumSolid,
    amberSolid,
    ghost,
  },
  defaultProps: {
    variant: "phosphorOutline",
  },
});

export default ButtonTheme;
