import { 
  Text, 
  Flex, 
  Grid,
  Box,
  Image,
  Button,
  useColorModeValue, 
  Divider, 
  Input,
  FormLabel,
  FormHelperText, 
  FormControl,
  Textarea, 
  VStack,
  InputGroup, 
  InputRightElement,
  IconButton,
  HStack, } from '@chakra-ui/react';
import { FiCheckCircle, FiCalendar, FiClock, FiTwitter } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { RiGroupLine } from 'react-icons/ri';
import ProfileNavBar from '../../widgets/ProjectsNavBar';

interface Props {
    
}

const Profile = (props: Props) => {

  const cardBg = useColorModeValue("whiteAlpha.400", "blackAlpha.400");
  const psBg = useColorModeValue("gray.100", "blackAlpha.600");

  return (
    <Flex 
      direction="column"
      alignItems="center"
      minH="100vh" >
        <ProfileNavBar hideSearch />

        <Grid
          templateColumns="repeat(5, minmax(0, 1fr))"
          gap="2rem"
          p="7rem"
          maxW="90rem"
          width="100%" >
            <Box
              gridColumn="1 / span 1" >
              <Image
                borderRadius="3xl"
                src="/cofounder1.jpg" 
                alt="pog" />
            </Box>

            <Box
              gridColumn="2 / span 2" >
                <Text fontSize="3xl">
                  Jerchael
                </Text>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime distinctio debitis voluptate incidunt corporis earum quod iure.
                </Text>
            </Box>

            <Box
              gridColumn="4 / span 2"
              p="4"
              borderRadius="xl"
              bg={cardBg}
              boxShadow="0 0 8px rgba(0, 0, 0, 0.4)" >
                <Text fontSize="2xl" mb="3">
                  Personal statistics
                </Text>
                <VStack
                  spacing="3" 
                  width="100%" 
                  alignItems="flex-start">
                    <HStack
                      spacing="4"
                      p="4"
                      w="100%"
                      borderRadius="xl"
                      bg={psBg} >
                      <FiCheckCircle size={42} />
                      <Box>
                        <Text fontSize="xl">
                          15
                        </Text>
                        <Text>
                          Tasks completed
                        </Text>
                      </Box>
                    </HStack>
                    <HStack
                      spacing="4"
                      p="4"
                      w="100%"
                      borderRadius="xl"
                      bg={psBg} >
                      <FiCalendar size={42} />
                      <Box>
                        <Text fontSize="xl">
                          23
                        </Text>
                        <Text>
                          Projects completed
                        </Text>
                      </Box>
                    </HStack>
                    <HStack
                      spacing="4"
                      p="4"
                      w="100%"
                      borderRadius="xl"
                      bg={psBg} >
                      <FiClock size={42} />
                      <Box>
                        <Text fontSize="xl">
                          23hrs
                        </Text>
                        <Text>
                          Total time spent
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>
            </Box>

            <VStack
              gridColumn="1 / span 2"
              alignItems="flex-start"
              p="4"
              borderRadius="xl"
              bg={cardBg}
              boxShadow="0 0 8px rgba(0, 0, 0, 0.4)" >
                <Text fontSize="2xl">
                  Links
                </Text>
                <HStack>
                  <RiGroupLine size={24} />
                  <h4>
                    Carta
                  </h4>
                </HStack>
                <HStack>
                  <CgWebsite size={24} />
                  <h4>
                    Carta.co
                  </h4>
                </HStack>
                <HStack>
                  <FiTwitter size={24} />
                  <h4>
                    alexcrocrox@twitter.com
                  </h4>
                </HStack>
            </VStack>

            <Box
              gridColumn="3 / span 4"
              p="4"
              borderRadius="xl"
              bg={cardBg}
              boxShadow="0 0 8px rgba(0, 0, 0, 0.4)" >
                <Text fontSize="2xl">
                  Insights
                </Text>
            </Box>
        </Grid>
    </Flex>
  )
}

export default Profile
