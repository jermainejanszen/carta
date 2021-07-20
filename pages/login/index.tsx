import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Flex,
  SimpleGrid,
  VisuallyHidden,
  Button,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import SplashNavBar from '../../widgets/SplashNavBar';
import PageContainer from '../../components/PageContainer';
import firebase from 'firebase/app';
import 'firebase/auth';

interface Props {}

const Login = (props: Props) => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // The signed-in user info.
        var user = result.user;
        router.push('/projects');
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  };

  const bg = useColorModeValue('whiteAlpha.900', 'gray.700');

  return (
    <PageContainer>
      <Head>
        <title>Login | Carta</title>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <SplashNavBar />

      <Flex flexGrow={1} direction='column' justifyContent='center'>
        <Flex
          direction='column'
          alignItems='center'
          py='8'
          px={{ base: '4', md: '10' }}
          borderRadius='xl'
          bg={bg}
          shadow='xl'>
          <Heading size='xl' fontWeight='normal'>
            Log in
          </Heading>

          <SimpleGrid mt='6' columns={3} spacing='3'>
            <Button color='currentColor' variant='outline' disabled>
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button>
            <Button
              color='currentColor'
              variant='outline'
              onClick={handleGoogleLogin}>
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
            <Button color='currentColor' variant='outline' disabled>
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
            </Button>
          </SimpleGrid>
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default Login;
