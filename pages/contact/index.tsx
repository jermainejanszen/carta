import Head from 'next/head';
import {
  Text, 
  Flex, 
  VStack,
  Button,
  useColorModeValue, 
  Textarea} from '@chakra-ui/react';
import SplashNavBar from '../../widgets/SplashNavBar';

interface Props {
    
}

const Contact = (props: Props) => {

  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");
  const cardBg = useColorModeValue("whiteAlpha.700", "blackAlpha.700");

  return (
    <Flex
      direction="column"
      alignItems="center"
      minH="100vh"
      bg={bg} >
        <Head>
          <title>Contact | Carta</title>
          <link rel="icon" href="/logo.svg" />
        </Head>
        <SplashNavBar />

        <Flex 
          direction="column"
          maxW="80rem"
          width="100%"
          px="7rem"
          py="8rem" >
            <VStack 
              spacing="4" 
              alignItems="flex-start"
              p="8"
              borderRadius="xl"
              boxShadow="0 0 8px rgba(0, 0, 0, 0.2)"
              bg={cardBg}>
                <Text fontSize="3xl">
                  Feedback
                </Text>
                <Textarea />
                <Button variant="primary" alignSelf="flex-end">Submit</Button>
            </VStack>
        </Flex>
    </Flex>
  )
}

export default Contact
