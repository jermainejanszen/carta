import { ChakraProvider } from '@chakra-ui/react';
import { initAuth } from '../firebase/initAuth';
import UserProvider from '../providers/UserContext';
import theme from '../theme';

import '@fontsource/montserrat';
import '../styles/globals.scss';

initAuth();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
