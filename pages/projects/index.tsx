import { useRouter } from 'next/router';
import { 
  Text, 
  Grid,
  VStack,
  useColorModeValue } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import ProfileNavBar from '../../widgets/ProjectsNavBar';
import ProjectCard from '../../components/ProjectCard';

const mockData = [
  {
    id: "abcd",
    name: "Miscellaneous",
    hours: 43,
    tasks: 129,
    description: "Anything and everything that isn't related to a specific project. Anything and everything that isn't related to a specific project. Anything and everything that isn't related to a specific project. Anything and everything that isn't related to a specific project. Anything and everything that isn't related to a specific project. Anything and everything that isn't related to a specific project."
  },{
    id: "efgh",
    name: "BIO 323 Lab With A Long Title Name That Just Keeps Going",
    hours: 5.8,
    tasks: 15,
    description: "Biology lab for enzyme denaturing."
  },{
    id: "ijkl",
    name: "Coding Project",
    hours: 28.4,
    tasks: 34,
    description: "A program that can recognize handwriting and solve matrices."
  },{
    id: "mnop",
    name: "UI Design",
    hours: 16.2,
    tasks: 37,
    description: "Designing the UI for the Carta website."
  },
]

interface Props {
    
}

const Projects = (props: Props) => {

  const router = useRouter();

  const titleBg = useColorModeValue("#D7FAFA", "gray.900");
  const newProjectBg = useColorModeValue(
    "linear-gradient(to-r, #FAC584, #FF8C80)", 
    "linear-gradient(to-r, cyan.800, blue.800)");

  return (
    <VStack
      direction="column"
      alignItems="center"
      minH="100vh">
        <ProfileNavBar />

        <VStack 
          direction="column"
          maxW="100rem"
          width="100%"
          padding="7rem">
            <Text
              alignSelf="flex-start"
              fontSize="5xl"
              w="fit-content"
              p="4"
              mb="8"
              borderRadius="xl"
              bg={titleBg} >
                Projects
            </Text>

            <Grid
              width="100%"
              templateColumns="repeat(auto-fill, 20rem)"
              gap="2rem" >
                <VStack
                  spacing="1rem"
                  alignItems="center"
                  justifyContent="center"
                  p="3rem"
                  borderRadius="xl"
                  boxShadow="0 0 8px rgba(0, 0, 0, 0.3)"
                  cursor="pointer"
                  color="white"
                  bgGradient={newProjectBg}
                  transition="all 0.2s ease-in-out"
                  onClick={() => router.push('/projects/new')}
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)"
                  }}>
                    <Text fontSize="3xl">
                      New Project
                    </Text>
                    <FiPlusCircle size="8rem" />
                </VStack>
                {mockData.map((value, index) => <ProjectCard data={value} color={index} key={index} />)}
            </Grid>
        </VStack>
    </VStack>
  )
}

export default Projects
