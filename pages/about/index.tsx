import Head from 'next/head';
import { 
  Flex,
  Grid, 
  Box,
  Text,
  VStack,
  Image,
  useColorModeValue, } from '@chakra-ui/react';
import SplashNavBar from '../../widgets/SplashNavBar';


interface Props {

}

const About = (props: Props) => {

  const cardTitleColor = useColorModeValue("gray.700", "white");
  const cardBg = useColorModeValue("whiteAlpha.700", "blackAlpha.700");

  const ContentCard = (props) => {
    return (
      <Grid id="keep-track"
        templateColumns="1fr 1fr"
        bg={cardBg}
        borderRadius="xl"
        padding="2rem"
        boxShadow="0 0 8px rgba(0, 0, 0, 0.2)" >
          {props.children}
      </Grid>
    );
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      minH="100vh">
      <Head>
        <title>About | Carta</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <SplashNavBar />

      <Flex 
        direction="column"
        alignItems="center"
        maxW="60rem"
        margin="6rem 0"
        padding="0 1rem">

        <Box id="title" margin="2rem 0 4rem 0">
          <Text fontSize="5rem" color="lightsalmon">
            Carta
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            Our mission 
          </Text>
          <Text fontSize="large">
            Carta's main objective is to help you achieve your goals in the most efficient and informed way possible. Carta was born out of necessity, we needed a way to keep track of where we were spending our time while working on various projects. While brainstorming on what product would be most benifical to users, it became clear that there were three core elements that needed to be addressed. Firstly there needed to be a clear and simple way to accurately log time spent on specific tasks within a given project. Second was finding a way to intergrate a collaborative aspect by allowing users to delegate specific tasks to one another while also being able to view how much time was being spent on those tasks. Third was helping users organize themselves by providing the option to add tags, reminders, and deadlines to tasks to help ensure an efficient workflow.
          </Text>
        </Box>

        <VStack spacing="4rem">
          <ContentCard>
            <Box>
              <Text fontSize="4xl" fontWeight="bold" color={cardTitleColor}>
                Keep Track
              </Text>
              <Text fontSize="xl">
                Effortlessly keep track of time worked on a project with the press of a button.
              </Text>
            </Box>
            <Image src="survey.svg" alt="survey" height="10rem" margin="auto" />
          </ContentCard>
          <ContentCard>
            <Image src="scrum.svg" alt="scrum" height="10rem" margin="auto" />
            <Box>
              <Text fontSize="4xl" fontWeight="bold" color={cardTitleColor}>
                Collaborate
              </Text>
              <Text fontSize="xl">
                Clearly view the time spent by yourself and other teammates on different tasks for a given project
              </Text>
            </Box>
          </ContentCard>
          <ContentCard>
            <Box>
              <Text fontSize="4xl" fontWeight="bold" color={cardTitleColor}>
                Stay On Top
              </Text>
              <Text fontSize="xl">
                By setting reminders, time limits, and adding tags, Carta helps you stay fully organized.
              </Text>
            </Box>
            <Image src="ontop.svg" alt="moon" height="10rem" margin="auto" />
          </ContentCard>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default About
