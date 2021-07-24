import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Text,
  Grid,
  Box,
  VStack,
  Button,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableInput,
  List,
  ListItem,
  HStack,
  Collapse,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import ProjectsNavBar from '../../widgets/ProjectsNavBar';
import TaskItem from '../../components/TaskItem';
import PageContainer from '../../components/PageContainer';
import { withAuthUser, AuthAction, useAuthUser } from 'next-firebase-auth';

interface Props {}

const mockData = {
  id: 'abcd',
  name: 'Miscellaneous',
  hours: 43,
  tasks: [
    {
      id: 1,
      name: 'Tensor Flow',
      time: 37368,
    },
    {
      id: 2,
      name: 'Integrating Matrix Solver',
      time: 15132,
    },
    {
      id: 3,
      name: 'Writing Matrix Solver',
      time: 10440,
    },
    {
      id: 4,
      name: 'UI Design',
      time: 24408,
    },
  ],
  description:
    "Anything and everything that isn't related to a specific project.",
};

const Project = (props: Props) => {
  const router = useRouter();
  const authUser = useAuthUser();

  const id = router.query.id;
  const [name, setName] = useState(mockData.name);
  const [description, setDescription] = useState(mockData.description);
  const [tasks, setTasks] = useState(mockData.tasks);
  const [isCounting, setIsCounting] = useState(false);

  const { isOpen, onToggle } = useDisclosure();

  const handleNameChange = (e) => {
    if (e) {
      setName(e);
    }
  };

  const handleDescriptionChange = (e) => {
    if (e) {
      setDescription(e);
    }
  };

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    setTasks(
      tasks.concat([
        {
          id: Date.now(),
          name: `Task ${tasks.length + 1}`,
          time: 0,
        },
      ])
    );
  };

  const handleEditTaskName = (index: number, newName: string) => {
    let newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], name: newName };
    setTasks(newTasks);
  };

  const handleEditTaskTime = (index: number, newTime: number) => {
    let newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], time: newTime };
    setTasks(newTasks);
  };

  const handleDeleteItemClick = (index: number) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const titleBg = useColorModeValue('#D7FAFA', 'gray.900');

  return (
    <PageContainer hasBg>
      <Head>
        <title>{name} | Carta</title>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <ProjectsNavBar hideSearch />

      <VStack maxW='100rem' width='100%' padding='7rem' spacing='2rem'>
        <Box width='100%'>
          <Editable
            defaultValue={name}
            onChange={handleNameChange}
            alignSelf='flex-start'
            fontSize='4xl'
            w='fit-content'
            p='4'
            mb='8'
            borderRadius='xl'
            bg={titleBg}>
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable
            defaultValue={description}
            onChange={handleDescriptionChange}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>

        <Grid>{/* Stats go here */}</Grid>

        <VStack w='100%'>
          <List spacing='2' w='100%'>
            {tasks.length === 0 && <Text fontSize='2xl'>No Tasks</Text>}
            {tasks.map((value, index) => {
              return (
                <ListItem key={value.id} display='flex' alignItems='center'>
                  <TaskItem
                    name={value.name}
                    time={value.time}
                    index={index}
                    editName={handleEditTaskName}
                    editTime={handleEditTaskTime}
                    setIsCounting={setIsCounting}
                  />
                  <Collapse in={isOpen} animateOpacity>
                    <IconButton
                      aria-label='delete'
                      borderRadius='lg'
                      ms='4'
                      onClick={(e) => handleDeleteItemClick(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Collapse>
                </ListItem>
              );
            })}
          </List>
          <HStack py='4' width='100%' justifyContent='space-between'>
            <Button size='lg' variant='primary' onClick={handleAddTaskClick}>
              Add Task
            </Button>
            <Button
              size='lg'
              variant='outline'
              colorScheme='green'
              onClick={onToggle}>
              {isOpen ? 'Done' : 'Edit'}
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </PageContainer>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
})(Project);
