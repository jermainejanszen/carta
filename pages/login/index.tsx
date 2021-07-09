import { useRouter } from 'next/router';
import { 
  Text, 
  Flex, 
  VStack,
  Button,
  useColorModeValue } from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub, FaApple } from 'react-icons/fa';
import SplashNavBar from '../../widgets/SplashNavBar';

interface Props {
    
}

const Login = (props: Props) => {

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/projects');
  }

  const bg = useColorModeValue("whiteAlpha.900", "gray.700");

  return (
    <Flex
      direction="column"
      alignItems="center"
      minH="100vh">
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
                  Log in
                </Text>
              
                <VStack spacing="6" my="2rem">
                  <Button
                    colorScheme="red"
                    size="lg"
                    variant="outline" 
                    leftIcon={<FaGoogle />}
                    width="20rem"
                    onClick={handleLogin}>
                      Log in with Google
                  </Button>
                  <Button 
                    colorScheme="linkedin"
                    size="lg"
                    variant="outline"
                    leftIcon={<FaFacebook />}
                    width="20rem"
                    onClick={handleLogin}>
                      Log in with Facebook
                  </Button>
                  <Button 
                    colorScheme="teal"
                    size="lg"
                    variant="outline"
                    leftIcon={<FaGithub />}
                    width="20rem"
                    onClick={handleLogin}>
                      Log in with GitHub
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    leftIcon={<FaApple />}
                    width="20rem"
                    onClick={handleLogin}>
                      Log in with Apple
                  </Button>
                </VStack>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Login
