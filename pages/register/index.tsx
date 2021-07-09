import { useState } from 'react';
import { 
  Text, 
  Flex, 
  VStack,
  HStack, 
  Input,
  InputGroup,
  InputRightElement, 
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormHelperText} from '@chakra-ui/react';
import SplashNavBar from "../../widgets/SplashNavBar";

interface Props {
    
}

const Register = (props: Props) => {

  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
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
                  Register
                </Text>
              
                <form>

                  <Flex direction="column">
                    <VStack spacing="6" my="2rem">
                      <HStack>
                        <Input
                          placeholder="First Name"
                          type="text"
                          name="firstname"
                          autoCorrect="off" />
                        <Input
                          placeholder="Last Name"
                          type="text"
                          name="lastname"
                          autoCorrect="off" />
                      </HStack>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        name="email" />
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        autoComplete="off" />
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        autoComplete="off" />
                    </VStack>
                    <Button
                      variant="primary"
                      onClick={handleRegister}>
                        Register
                    </Button>
                  </Flex>
                </form>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Register

