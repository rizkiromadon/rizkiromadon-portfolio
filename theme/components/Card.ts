import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const containerStyle = defineStyle({
  background: "panel",
  border: "1px solid",
  borderColor: "whiteAlpha.100",
  borderRadius: "3px",
  transition: "border-color 200ms ease",
  _hover: {
    borderColor: "phosphor",
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
