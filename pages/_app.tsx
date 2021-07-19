import { ChakraProvider } from '@chakra-ui/react';
import { initAuth } from '../firebase/initAuth';
import theme from '../theme';

import '@fontsource/montserrat';
import '../styles/globals.scss';

initAuth();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
