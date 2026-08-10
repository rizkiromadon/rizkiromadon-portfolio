import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

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
  transition: "background-color 160ms ease, color 160ms ease",
  _hover: {
    background: "phosphor",
    color: "void",
  },
  _focusVisible: {
    boxShadow: "none",
    outline: "2px solid",
    outlineColor: "phosphor",
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
    color: "signal",
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
    amberSolid,
    ghost,
  },
  defaultProps: {
    variant: "phosphorOutline",
  },
});

export default ButtonTheme;
