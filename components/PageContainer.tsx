import { 
  Flex,
  useColorModeValue } from '@chakra-ui/react';

interface Props {
    children?,
    hasBg? : boolean,
}

const PageContainer = (props: Props) => {

  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");

  return (
    <Flex 
      direction="column"
      alignItems="center"
      minH="100vh"
      bg={props.hasBg ? bg : "none"} >
        {props.children}
    </Flex>
  )
}

export default PageContainer
