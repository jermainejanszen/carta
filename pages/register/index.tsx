import { useRouter } from 'next/router';
import Head from 'next/head';
import { 
  Text, 
  Flex, 
  VStack,
  Button,
  useColorModeValue} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub, FaApple } from 'react-icons/fa';
import SplashNavBar from "../../widgets/SplashNavBar";
import PageContainer from '../../components/PageContainer';

interface Props {
    
}

const Register = (props: Props) => {

  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push('/projects');
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
            padding="10"
            border="1px solid gray"
            borderRadius="xl"
            bg={bg}>
              <Text fontSize="4xl">
                Welcome to Carta
              </Text>
            
              <VStack spacing="6" my="2rem">
                <Button
                  colorScheme="red"
                  size="lg"
                  variant="outline" 
                  leftIcon={<FaGoogle />}
                  width="20rem"
                  onClick={handleRegister}>
                    Register with Google
                </Button>
                <Button 
                  colorScheme="linkedin"
                  size="lg"
                  variant="outline"
                  leftIcon={<FaFacebook />}
                  width="20rem"
                  onClick={handleRegister}>
                    Register with Facebook
                </Button>
                <Button 
                  colorScheme="teal"
                  size="lg"
                  variant="outline"
                  leftIcon={<FaGithub />}
                  width="20rem"
                  onClick={handleRegister}>
                    Register with GitHub
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<FaApple />}
                  width="20rem"
                  onClick={handleRegister}>
                    Register with Apple
                </Button>
              </VStack>
          </Flex>
      </Flex>
    </PageContainer>
  )
}

export default Register

