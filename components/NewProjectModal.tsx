import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  VStack,
  FormControl,
  Text,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  IconButton,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useState, useRef } from 'react';

const NewProjectModal = ({ isOpen, onClose }) => {
  const [tasks, setTasks] = useState([]);
  const taskInput = useRef(null);

  const handleAddTaskClick = () => {
    if (taskInput.current) {
      const newTask: string = taskInput.current.value.trim();
      if (newTask.length > 0) {
        setTasks(tasks.concat([newTask]));
      }
      taskInput.current.value = '';
      taskInput.current.focus();
    }
  };

  const taskBg = useColorModeValue('gray.100', 'blackAlpha.600');

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Project</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex direction='column' maxW='80rem' width='100%' px='1rem' py='1'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}>
              <VStack spacing='12'>
                <FormControl id='name' isRequired>
                  <FormLabel htmlFor='name' fontSize='3xl'>
                    Project name
                  </FormLabel>
                  <Input
                    variant='flushed'
                    type='text'
                    name='name'
                    autoComplete='off'
                    maxLength={80}
                    size='lg'
                    colorScheme='red'
                  />
                  <FormHelperText>
                    Great project names are short and memorable.
                  </FormHelperText>
                </FormControl>
                <FormControl id='description' isRequired>
                  <FormLabel htmlFor='description' fontSize='2xl'>
                    Description
                  </FormLabel>
                  <Textarea
                    type='text'
                    name='description'
                    size='lg'
                    colorScheme='red'
                    maxLength={300}
                  />
                </FormControl>
                <Box width='100%'>
                  <Text fontSize='2xl'>Add initial tasks</Text>
                  <VStack spacing='4' w='100%' my='1rem'>
                    {tasks.map((value, index) => {
                      return (
                        <Flex
                          key={index}
                          alignItems='center'
                          w='100%'
                          p='0.5rem 0.5rem 0.5rem 1rem'
                          borderRadius='xl'
                          bg={taskBg}>
                          <Text fontSize='xl' flexGrow={1}>
                            {value}
                          </Text>
                          <IconButton
                            aria-label='delete'
                            borderRadius='lg'
                            onClick={() => {
                              let newTasks = [...tasks];
                              newTasks.splice(index, 1);
                              setTasks(newTasks);
                            }}>
                            <DeleteIcon />
                          </IconButton>
                        </Flex>
                      );
                    })}
                  </VStack>
                  <Box>
                    <InputGroup>
                      <Input
                        type='text'
                        name='task'
                        maxLength={300}
                        ref={taskInput}
                        onKeyUp={(e) => {
                          if (e.code === 'Enter') {
                            handleAddTaskClick();
                          }
                        }}
                      />
                      <InputRightElement w='fit-content'>
                        <Button onClick={handleAddTaskClick}>Add task</Button>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </Box>
                <Box alignSelf='flex-end'></Box>
              </VStack>
            </form>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='primary'>Create Project</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewProjectModal;
