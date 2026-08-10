import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { gradients } from "../foundations/colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const containerStyle = defineStyle({
  position: "relative",
  background: "panel",
  border: "1px solid",
  borderColor: "whiteAlpha.100",
  borderRadius: "3px",
  transition: "border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease",
  _before: {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "3px",
    padding: "1px",
    backgroundImage: gradients.panelBorder,
    opacity: 0,
    transition: "opacity 200ms ease",
    pointerEvents: "none",
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  _hover: {
    borderColor: "transparent",
    boxShadow: "0 12px 32px -12px rgba(180,140,242,0.35)",
    transform: "translateY(-2px)",
    _before: {
      opacity: 1,
    },
  },
});

const observatory = definePartsStyle({
  container: containerStyle,
  header: {
    paddingBottom: 2,
  },
  body: {
    paddingTop: 2,
  },
});

const CardTheme = defineMultiStyleConfig({
  variants: { observatory },
  defaultProps: {
    variant: "observatory",
  },
});

export default CardTheme;
