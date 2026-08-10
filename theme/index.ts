import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts, {
  fontSizes,
  lineHeights,
  letterSpacings,
  fontWeights,
} from "./foundations/typography";
import ButtonTheme from "./components/Button";
import CardTheme from "./components/Card";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bg: "void",
      color: "signal",
    },
    "*::selection": {
      background: "phosphor",
      color: "void",
    },
    "*:focus-visible": {
      outline: "2px solid",
      outlineColor: "phosphor",
      outlineOffset: "2px",
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontWeights,
  styles,
  components: {
    Button: ButtonTheme,
    Card: CardTheme,
  },
});

export default theme;
