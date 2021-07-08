import { extendTheme } from "@chakra-ui/react";

import fonts from './fonts';
import styles from "./styles";

// Component style overrides
import Button from "./components/button";

const overrides = {
  fonts,
  styles,
  components: {
    Button,
  },
};

export default extendTheme(overrides);