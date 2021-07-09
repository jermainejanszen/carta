import { useRouter } from 'next/router';
import { 
  Flex, 
  Button, 
  ButtonGroup,
  Switch, 
  Image, 
  useColorModeValue,
  useColorMode} from '@chakra-ui/react';

interface Props {
    
}

const SplashNavBar = (props: Props) => {

  const router = useRouter();

  const handleHomeClick = (e) => {
      e.preventDefault();
      router.push('/');
  }

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push('/about');
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push('/login');
  }

  const handleRegisterClick = (e) => {
    e.preventDefault();
    router.push('/register');
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex
      justifyContent="space-between"
      padding="1rem 4rem" 
      w="100%"
      bg={bg}
      boxShadow="0 0 12px rgba(0, 0, 0, 0.4)"
      position="fixed" >
        <Image 
          src="/logo.svg" 
          alt="logo"
          h="3rem"
          cursor="pointer" 
          onClick={handleHomeClick} />
        <ButtonGroup alignItems="center">
          <Switch colorScheme="red" isChecked={colorMode === "light"} onChange={toggleColorMode} />
          <Button variant="ghost" onClick={handleHomeClick}>Home</Button>
          <Button variant="ghost" onClick={handleAboutClick}>About</Button>
          <Button variant="ghost" onClick={handleLoginClick}>Log in</Button>
          <Button variant="primary" onClick={handleRegisterClick}>
            Register
          </Button>
        </ButtonGroup>
    </Flex>
  )
}

export default SplashNavBar
