import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import colors from './colors';
import fonts from './fonts';
import styles from "./styles";

// Component style overrides
import Button from "./components/button";

const themeConfig : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const overrides = {
  config: themeConfig,
  colors,
  fonts,
  styles,
  components: {
    Button,
  },
};

export default extendTheme(overrides);