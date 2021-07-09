import { useState } from 'react';
import { useRouter } from 'next/router';
import { 
  Text, 
  Flex, 
  VStack, 
  Input,
  InputGroup,
  InputRightElement, 
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormHelperText} from '@chakra-ui/react';
import SplashNavBar from '../../widgets/SplashNavBar';

interface Props {
    
}

const Login = (props: Props) => {

  const [showPass, setShowPass] = useState(false);
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
              <Text fontSize="5xl">
                Log in
              </Text>
            
              <form onSubmit={handleLogin}>
            
                <Flex direction="column">
                  <VStack spacing="6" my="2rem">
                    <FormControl>
                      <FormLabel>Username</FormLabel>
                      <Input placeholder="Username" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={showPass ? "text" : "password"}
                          placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={() => setShowPass(!showPass)}>
                            {showPass ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormHelperText 
                        cursor="pointer">
                          Forgot password?
                      </FormHelperText>
                    </FormControl>
                  </VStack>

                  <Button
                    variant="primary"
                    onClick={handleLogin}
                    alignSelf="center">
                      Log in
                  </Button>
                </Flex>
              </form>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Login
