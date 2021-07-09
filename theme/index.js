import { extendTheme } from "@chakra-ui/react";

import colors from './colors';
import fonts from './fonts';
import styles from "./styles";

// Component style overrides
import Button from "./components/button";

const overrides = {
  colors,
  fonts,
  styles,
  components: {
    Button,
  },
};

export default extendTheme(overrides);