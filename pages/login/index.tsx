import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Text, 
  Flex, 
  SimpleGrid,
  VisuallyHidden,
  Button,
  useColorModeValue, 
  Heading,
  Link} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import SplashNavBar from '../../widgets/SplashNavBar';
import PageContainer from '../../components/PageContainer';
import { DividerWithText } from '../../components/DividerWithText';
import { LoginForm } from '../../components/auth/LoginForm';
import { signIn } from 'next-auth/client';

interface Props {
    
}

const Login = (props: Props) => {

  const router = useRouter();

  const signInCallbackURL : string = 'http://localhost:3000/projects';
  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: signInCallbackURL });
  }

  const bg = useColorModeValue("whiteAlpha.900", "gray.700");

  return (
    <PageContainer>
      <Head>
        <title>Login | Carta</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <SplashNavBar />
      
      <Flex 
        flexGrow={1}
        direction="column"
        justifyContent="center">
          <Flex
            direction="column"
            alignItems="center"
            py="8"
            px={{ base: '4', md: '10' }}
            borderRadius="xl"
            bg={bg}
            shadow="xl" >
              <Heading size="xl" fontWeight="normal">
                Log in
              </Heading>
              <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                <Text as="span">Don&apos;t have an account? </Text>
                <Link href="#" color="blue">Register</Link>
              </Text>
              <LoginForm />
            
              <DividerWithText mt="6">or continue with</DividerWithText>

              <SimpleGrid mt="6" columns={3} spacing="3">
                <Button color="currentColor" variant="outline" disabled>
                  <VisuallyHidden>Login with Facebook</VisuallyHidden>
                  <FaFacebook />
                </Button>
                <Button color="currentColor" variant="outline" onClick={handleGoogleLogin}>
                  <VisuallyHidden>Login with Google</VisuallyHidden>
                  <FaGoogle />
                </Button>
                <Button color="currentColor" variant="outline" disabled>
                  <VisuallyHidden>Login with Github</VisuallyHidden>
                  <FaGithub />
                </Button>
              </SimpleGrid>
          </Flex>
      </Flex>
    </PageContainer>
  )
}

export default Login
