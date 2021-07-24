import { useRouter } from 'next/router';
import { 
  Text, 
  Flex,
  Box,
  useColorModeValue, 
  Divider } from '@chakra-ui/react';
import {Project} from '../providers/UserContext'
import {secondsToHours} from '../utils/helpers'

interface Props {
  data: Project,
  color: number,
}

const ProjectCard = (props: Props) => {
  const {data, color} = props;
  const totalTime = props.data?.tasks.reduce((prev, cur) => prev + cur.time, 0)
  const router = useRouter();
  const colors = ["#BAE7ED", "#B0FF94", "#638695", "#F98E8E"];

  const bg = useColorModeValue("white", "gray.900");

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      bg={bg}
      borderRadius="xl"
      boxShadow="0 0 8px rgba(0, 0, 0, 0.3)"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      onClick={() => {router.push(`/projects/${data.id}`)}}
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
              bg={colors[color % colors.length]} />
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              p="1rem 1rem 0 1rem"
              noOfLines={2} >
              {data.name}
            </Text>
        </Box>
        <Box p="6">
          <Text fontSize="xl">{secondsToHours(totalTime)} hours</Text>
          <Text fontSize="xl">{data.tasks?.length} tasks</Text>
          <Divider my="2" />
          <Text noOfLines={5}>
            {data.description}
          </Text>
        </Box>
    </Flex>
  )
}

export default ProjectCard
