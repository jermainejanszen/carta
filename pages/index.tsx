import Head from 'next/head';
import { useRouter } from 'next/router';
import { 
  Text, 
  Flex, 
  Spacer, 
  Grid,
  Box, 
  Image, 
  useColorModeValue} from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icon';
import { TimeIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';
import SplashNavBar from '../widgets/SplashNavBar';

interface CardProps {
  icon: string,
  link: string,
  title: string,
  description: string,
};

export default function Home() {

  const router = useRouter();

  const FeatureCard = (props : CardProps) => {
    let cardIcon;
    if (props.icon === "clock") {
      cardIcon = <FiClock size="2rem" />;
    } else if (props.icon === "collaborate") {
      cardIcon = <FiUsers size="2rem" />;
    } else if (props.icon === "checkmark") {
      cardIcon = <FiCheckCircle size="2rem" />;
    }

    const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.700");

    return (
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        maxW="80"
        bg={bg}
        padding="6"
        margin="4"
        borderRadius="xl"
        border="1px solid gray"
        transition="all 0.2s ease"
        cursor="pointer"
        _hover={{
          borderColor: "cyan.400",
          color: "cyan.400",
        }}
        onClick={e => router.push(props.link)}>
          <Flex direction="column" alignItems="center">
            <Box my={2}>
              {cardIcon}
            </Box>
            <Text fontSize="2xl">
              {props.title}
            </Text>
          </Flex>
          <Text marginTop="4" fontSize="xl">
            {props.description}
          </Text>
          <Text marginTop="4">
            Learn more &#x2192;
          </Text>
      </Flex>
    );
  }

  return (
    <Flex 
      direction="column"
      alignItems="center"
      minH="100vh">
      <Head>
        <title>Carta</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <SplashNavBar />

      <Flex direction="column" m="15vh 4rem" maxW="80rem">
        <Flex w="100%" marginBottom="14rem">
          <Flex direction="column" maxW="30rem">
            <Text fontSize="5rem" color="lightsalmon">
              Carta
            </Text>
            <Text fontSize="4xl">
              Lets change how you get things done.
            </Text>
          </Flex>
          <Spacer />
          <Image src="/study.svg" alt="study" height="14rem" margin="auto" />
        </Flex>

        <Flex direction="column">
          <Text fontSize="4xl">
            Collaborate and keep track of time across you projects.
          </Text>
          <Text fontSize="xl">
            Carta allows users to timekeep on projects with other collegues, friends, classmates, or anybody you work with. 
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" marginTop="8">
            <FeatureCard 
              link="/about#keep-track"
              icon="clock"
              title="Keep Track"
              description="Effortlessly keep track of time worked on a project with the press of a button." />
            <FeatureCard 
              link="/about#collaborate"
              icon="collaborate"
              title="Collaborate"
              description="Clearly view the time spent by yourself and others on different tasks for a given project." />
            <FeatureCard 
              link="/about#stay-on-top"
              icon="checkmark"
              title="Stay On Top"
              description="By setting reminders, time limits, and adding tags, Carta helps you stay fully organized." />
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  )
}
