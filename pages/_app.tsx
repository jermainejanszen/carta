import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'next-auth/client';
import theme from '../theme';

import "@fontsource/montserrat";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
