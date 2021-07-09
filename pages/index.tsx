import Head from 'next/head';
import { useRouter } from 'next/router';
import { 
  Text, 
  Flex, 
  Spacer, 
  Grid, 
  Image } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icon';
import { TimeIcon, CheckCircleIcon } from '@chakra-ui/icons';
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
    const CollaborateIcon = createIcon({
      displayName: "CollaborateIcon",
      viewBox: "0 0 33 33",
      path: [
        (<path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M6.6 24.75C8.87818 24.75 10.725 22.9032 10.725 20.625C10.725 18.3468 8.87818 16.5 6.6 16.5C4.32183 16.5 2.475 18.3468 2.475 20.625C2.475 22.9032 4.32183 24.75 6.6 24.75ZM3.8147e-06 29.7C3.8147e-06 27.6455 0.938699 25.8103 2.41059 24.5998C3.4629 25.7086 4.95071 26.4 6.6 26.4C8.24929 26.4 9.7371 25.7086 10.7894 24.5998C12.2613 25.8103 13.2 27.6455 13.2 29.7V33H3.8147e-06V29.7Z" 
          fill="currentColor"/>),
        (<path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M26.4 8.25C28.6782 8.25 30.525 6.40317 30.525 4.125C30.525 1.84683 28.6782 0 26.4 0C24.1218 0 22.275 1.84683 22.275 4.125C22.275 6.40317 24.1218 8.25 26.4 8.25ZM19.8 13.2C19.8 11.1455 20.7387 9.3103 22.2106 8.09984C23.2629 9.20858 24.7507 9.89997 26.4 9.89997C28.0493 9.89997 29.5371 9.20858 30.5894 8.09984C32.0613 9.3103 33 11.1455 33 13.2V16.5H19.8V13.2Z" 
          fill="currentColor"/>),
        (<path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M26.9 29.7V19.8H25.9V29.2H19.8V26.4L16.5 29.7L19.8 33V30.2H26.4H26.9V29.7Z" 
          fill="currentColor"/>),
        (<path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M13.2 3.8V6.6L16.5 3.3L13.2 0V2.8H6.6H6.1V3.3V13.2H7.1V3.8H13.2Z" 
          fill="currentColor"/>),
      ],
    });

    let cardIcon;
    if (props.icon === "clock") {
      cardIcon = <TimeIcon h={7} w={7} m={2} />;
    } else if (props.icon === "collaborate") {
      cardIcon = <CollaborateIcon h={7} w={7} m={2} />;
    } else if (props.icon === "checkmark") {
      cardIcon = <CheckCircleIcon h={7} w={7} m={2} />;
    }

    return (
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        maxW="80"
        bg="whiteAlpha.900"
        padding="6"
        margin="4"
        borderRadius="xl"
        border="1px solid gray"
        _hover={{
          borderColor: "cyan.400",
          color: "cyan.400",
        }}
        onClick={e => router.push(props.link)}>
          <Flex direction="column" alignItems="center">
            {cardIcon}
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
