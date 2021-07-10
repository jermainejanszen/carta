import { useState, useRef } from 'react';
import { 
  Text, 
  Flex,
  Box,
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
  IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import ProfileNavBar from '../../../widgets/ProjectsNavBar';

interface Props {
    
}

const New = (props: Props) => {

  const [tasks, setTasks] = useState([]);
  const taskInput = useRef(null);

  const handleAddTaskClick = () => {
    if(taskInput.current) {
      const newTask : string = taskInput.current.value.trim();
      if(newTask.length > 0) {
        setTasks(tasks.concat([newTask]))
      }
      taskInput.current.value = "";
      taskInput.current.focus();
    }
  }

  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");
  const taskBg = useColorModeValue("gray.100", "blackAlpha.600");

  return (
    <Flex 
      direction="column"
      alignItems="center"
      minH="100vh"
      bg={bg} >
        <ProfileNavBar hideSearch />
        
        <Flex 
          direction="column"
          maxW="80rem"
          width="100%"
          px="7rem"
          py="8rem" >
            <Box mb="2rem">
              <Text fontSize="4xl">
                Create a new project
              </Text>
              <Text>
                A project tracks the various tasks that are involved and provides a breakdown of the time you've spent on each one.
              </Text>
            </Box>
            <form onSubmit={e => e.preventDefault()}>
              <VStack spacing="12">
                <FormControl id="name" isRequired>
                  <FormLabel
                    htmlFor='name'
                    fontSize="3xl" >
                      Project name
                  </FormLabel>
                  <Input
                    variant="flushed"
                    type='text'
                    name='name'
                    autoComplete='off'
                    maxLength={80}
                    size="lg"
                    colorScheme="red" />
                  <FormHelperText>
                    Great project names are short and memorable.
                  </FormHelperText>
                </FormControl>
                <FormControl id="description" isRequired>
                  <FormLabel
                    htmlFor='description'
                    fontSize="2xl" >
                      Description
                  </FormLabel>
                  <Textarea
                    type='text'
                    name='description'
                    size="lg"
                    colorScheme="red"
                    maxLength={300} />
                </FormControl>
                <Box width="100%">
                  <Text fontSize="2xl">
                    Add initial tasks
                  </Text>
                  <VStack spacing="4" w="100%" my="1rem">
                    {tasks.map((value, index) => {
                      return (
                        <Flex key={index}
                          alignItems="center"
                          bg={taskBg}
                          w="100%"
                          p="0.5rem 0.5rem 0.5rem 1rem"
                          borderRadius="xl" >
                            <Text fontSize="xl" flexGrow={1} >
                              {value}
                            </Text>
                            <IconButton
                              aria-label="delete"
                              borderRadius="lg"
                              onClick={() => {
                                let newTasks = [...tasks];
                                newTasks.splice(index, 1);
                                setTasks(newTasks);
                              }} >
                              <DeleteIcon />
                            </IconButton>
                        </Flex>
                      )
                    })}
                  </VStack>
                  <form onSubmit={e => {
                      e.preventDefault();
                      handleAddTaskClick();
                    }}>
                    <InputGroup>
                      <Input
                        type="text"
                        name="task"
                        maxLength={300}
                        ref={taskInput} />
                      <InputRightElement w="fit-content">
                        <Button
                          onClick={handleAddTaskClick}>
                            Add task
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </form>
                </Box>
                <Box alignSelf="flex-end">
                  <Button variant="primary" type="submit">
                    Create project
                  </Button>
                </Box>
              </VStack>
            </form>
        </Flex>
    </Flex>
  )
}

export default New
