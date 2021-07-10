import { useRouter } from 'next/router';
import { 
  Text, 
  Flex,
  Box,
  VStack,
  useColorModeValue, 
  Divider} from '@chakra-ui/react';

interface Data {
  id: string,
  name: string,
  hours: number,
  tasks: number,
  description: string,
}

interface Props {
  data: Data,
  color: number,
}

const ProjectCard = (props: Props) => {

  const router = useRouter();
  const colors = ["#BAE7ED", "#B0FF94", "#638695", "#F98E8E"];

  const bg = useColorModeValue("white", "gray.900");

  return (
    <Flex
      direction="column"
      bg={bg}
      borderRadius="xl"
      boxShadow="0 0 8px rgba(0, 0, 0, 0.3)"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      onClick={() => {router.push(`/projects/${props.data.id}`)}}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)"
      }}>
        <Box
          width="100%"
          height="8rem">
            <Box
              height="12"
              borderTopRadius="xl" 
              bg={colors[props.color % colors.length]} />
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              p="1rem 1rem 0 1rem"
              noOfLines={2} >
              {props.data.name}
            </Text>
        </Box>
        <Box p="6" flexGrow={1}>
          <Text fontSize="xl">{props.data.hours} hours</Text>
          <Text fontSize="xl">{props.data.tasks} tasks</Text>
          <Divider my="2" />
          <Text noOfLines={5}>
            {props.data.description}
          </Text>
        </Box>
    </Flex>
  )
}

export default ProjectCard
