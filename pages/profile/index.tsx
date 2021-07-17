import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import { 
  Text, 
  Flex, 
  Grid,
  Box,
  Image,
  useColorModeValue,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber, 
  Tooltip} from '@chakra-ui/react';
import { FiCheckCircle, FiCalendar, FiClock, FiMail } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { RiGroupLine } from 'react-icons/ri';
import ProfileNavBar from '../../widgets/ProjectsNavBar';
import PageContainer from '../../components/PageContainer';
import { useRouter } from 'next/router';

interface Props {
    
}

const Profile = (props: Props) => {
  const [session] = useSession();

  useEffect(() => {
    if (!session) {
      useRouter().push('/');
    }
  })


  const cardBg = useColorModeValue("whiteAlpha.400", "blackAlpha.400");
  const psBg = useColorModeValue("gray.100", "blackAlpha.600");

  return (
    <PageContainer>
      <Head>
        <title>Profile | Carta</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ProfileNavBar hideSearch />

      <Grid
        templateColumns="repeat(5, minmax(0, 1fr))"
        gap="2rem"
        p="7rem"
        maxW="90rem"
        width="100%" >
          <Flex
            gridColumn="1 / span 1"
            direction="column"
            justifyContent="center" >
            <Image
              borderRadius="3xl"
              src="/cofounder1.jpg" 
              alt="pog" />
          </Flex>

          <Flex
            gridColumn="2 / span 2"
            direction="column"
            justifyContent="center" >
              <Text fontSize="3xl">
                {session?.user.name}
              </Text>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime distinctio debitis voluptate incidunt corporis earum quod iure.
              </Text>
          </Flex>

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
                      <Stat>
                        <StatLabel>
                          Tasks completed
                        </StatLabel>
                        <StatNumber>
                          15
                        </StatNumber>
                      </Stat>
                  </HStack>
                  <HStack
                    spacing="4"
                    p="4"
                    w="100%"
                    borderRadius="xl"
                    bg={psBg} >
                      <FiCalendar size={42} />
                      <Stat>
                        <StatLabel>
                          Projects completed
                        </StatLabel>
                        <StatNumber>
                          23
                        </StatNumber>
                      </Stat>
                  </HStack>
                  <HStack
                    spacing="4"
                    p="4"
                    w="100%"
                    borderRadius="xl"
                    bg={psBg} >
                    <FiClock size={42} />
                    <Stat>
                        <StatLabel>
                          Total time spent
                        </StatLabel>
                        <StatNumber>
                          23hrs
                        </StatNumber>
                      </Stat>
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
                <Tooltip hasArrow label="Company">
                  <Text fontSize="lg">
                    Carta
                  </Text>
                </Tooltip>
              </HStack>
              <HStack>
                <CgWebsite size={24} />
                <Tooltip hasArrow label="Website">
                  <Text fontSize="lg">
                    Carta.co
                  </Text>
                </Tooltip>
              </HStack>
              <HStack>
                <FiMail size={24} />
                <Tooltip hasArrow label="Email">
                  <Text fontSize="lg">
                    {session?.user.email}
                  </Text>
                </Tooltip>
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
    </PageContainer>
  )
}

export default Profile
