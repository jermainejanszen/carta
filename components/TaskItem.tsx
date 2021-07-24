import { useState, useRef, useEffect } from 'react';
import {
  Text,
  Flex,
  Box,
  HStack,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableInput,
  useEditableControls,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { secondsToHours } from '../utils/helpers';

interface Props {
  name: string;
  time: number;
  index: number;
  editName: (index: number, newName: string) => void;
  editTime: (index: number, newTime: number) => void;
  setIsCounting: (isCounting: boolean) => void;
}

const TaskItem = (props: Props) => {
  const nameInput = useRef(null);
  const countRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [name, setName] = useState(props.name);
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  const handleEditClick = (e) => {
    setEditMode(!editMode);
    if (editMode) {
      props.editName(props.index, name.trim());
      setName(name.trim());
    }
  };

  const handleNameChange = () => {
    if (nameInput.current) {
      setName(nameInput.current.value);
    }
  };

  const handleNameKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEditClick(null);
    }
  };

  const handleTimeStartClick = (e) => {
    if (!isCounting) {
      setIsCounting(true);
      props.setIsCounting(true);
      countRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  const handleTimeStopClick = (e) => {
    if (isCounting) {
      clearInterval(countRef.current);
      props.editTime(props.index, time);
      setIsCounting(false);
      props.setIsCounting(false);
    }
  };

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton
          aria-label='done'
          borderRadius='full'
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label='cancel'
          borderRadius='full'
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <IconButton
          aria-label='edit'
          size='sm'
          borderRadius='full'
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  };

  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Flex
      width='100%'
      minHeight='4rem'
      justifyContent='space-between'
      alignItems='center'
      px='4'
      bg={bg}
      borderRadius='xl'>
      <Box>
        <Editable
          defaultValue={name}
          fontSize='xl'
          isPreviewFocusable={false}
          display='flex'>
          <EditablePreview me='4' />
          <EditableInput me='4' />
          <EditableControls />
        </Editable>
      </Box>
      <HStack>
        <ButtonGroup size='lg'>
          <Button
            colorScheme={!isCounting ? 'green' : ''}
            disabled={isCounting}
            variant='ghost'
            onClick={handleTimeStartClick}>
            Start
          </Button>
          <Button
            colorScheme={isCounting ? 'red' : ''}
            disabled={!isCounting}
            variant='ghost'
            onClick={handleTimeStopClick}>
            Stop
          </Button>
        </ButtonGroup>
        <Flex
          w='9rem'
          h='2.5rem'
          border='1px solid'
          borderRadius='lg'
          alignItems='center'>
          <Text fontSize='lg' w='100%' textAlign='center'>
            {secondsToHours(time)}
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default TaskItem;
