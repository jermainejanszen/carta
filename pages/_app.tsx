import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';

import "@fontsource/montserrat";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
