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

interface Props {
    
}

const Register = (props: Props) => {

  const router = useRouter();

  const handleGoogleLogin = () => {
    // TODO
  }

  const bg = useColorModeValue("whiteAlpha.900", "gray.700");

  return (
    <PageContainer>
      <Head>
        <title>Register | Carta</title>
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
                Register
              </Heading>

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

export default Register
