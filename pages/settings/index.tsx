import Head from 'next/head';
import {
  Flex,
  useColorModeValue,
  useColorMode,
  Divider,
  Input,
  FormLabel,
  FormHelperText,
  FormControl,
  Textarea,
  VStack,
  Heading,
  Switch,
} from '@chakra-ui/react';
import ProfileNavBar from '../../widgets/ProjectsNavBar';
import PageContainer from '../../components/PageContainer';
import { withAuthUser, AuthAction, useAuthUser } from 'next-firebase-auth';

interface Props {}

const Settings = (props: Props) => {
  const authUser = useAuthUser();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PageContainer hasBg>
      <Head>
        <title>Settings | Carta</title>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <ProfileNavBar authUser={authUser} hideSearch />

      <VStack
        spacing='8'
        alignItems='flex-start'
        maxW='80rem'
        width='100%'
        px='7rem'
        py='8rem'>
        <VStack spacing='4' alignItems='flex-start'>
          <Heading>General Settings</Heading>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='color-mode' mb='0'>
              Dark mode
            </FormLabel>
            <Switch
              id='color-mode'
              colorScheme='red'
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
            />
          </FormControl>
        </VStack>
        <Divider />
        <VStack spacing='4' alignItems='flex-start'>
          <Heading>Account Settings</Heading>
          <form onSubmit={(e) => e.preventDefault()}>
            <VStack spacing='6' alignItems='flex-start'>
              <FormControl id='name'>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Jerchael' type='text' />
                <FormHelperText>
                  Your name will be visible to teamates and other collaborators.
                </FormHelperText>
              </FormControl>

              <FormControl id='bio'>
                <FormLabel>Bio</FormLabel>
                <Textarea placeholder='I like turtles' maxLength={300} />
                <FormHelperText>
                  Tell us a little bit about yourself! Passions, hobbies, and
                  achievements.
                </FormHelperText>
              </FormControl>

              <FormControl id='website'>
                <FormLabel>Website</FormLabel>
                <Input placeholder='carta.com' type='text' />
                <FormHelperText>
                  Do you have a website? Drop it here so people can go visit it!
                </FormHelperText>
              </FormControl>

              <FormControl id='twitter'>
                <FormLabel>Twitter</FormLabel>
                <Input placeholder='Carta' type='text' />
                <FormHelperText>
                  Want some extra twitter followers?
                </FormHelperText>
              </FormControl>

              <FormControl id='company'>
                <FormLabel>Company</FormLabel>
                <Input placeholder='Carta' type='text' />
                <FormHelperText>
                  Are you using Carta for company work?
                </FormHelperText>
              </FormControl>
            </VStack>
          </form>
        </VStack>
      </VStack>
    </PageContainer>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
})(Settings);
