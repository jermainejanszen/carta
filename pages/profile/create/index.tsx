import { useEffect, useState } from 'react';
import { 
  Flex,
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  useColorModeValue, 
  FormControl,
  FormLabel} from '@chakra-ui/react';
import PageContainer from '../../../components/PageContainer';
import { useRouter } from 'next/router';

interface Props {
  
};

const NewProfile = (props: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSave = () => {
    router.push('/projects');
  }

  const handleSignOut = (e) => {
    e.preventDefault();
  }
  
  const cardBg = useColorModeValue("whiteAlpha.700", "blackAlpha.500");

  return (
    <PageContainer>
      <Flex 
        direction="column"
        maxW="80rem"
        width="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center" >
          <VStack 
            spacing="4" 
            alignItems="flex-start"
            p="8"
            borderRadius="xl"
            boxShadow="0 0 8px rgba(0, 0, 0, 0.2)"
            bg={cardBg}>
              <Heading fontSize="3xl">
                Create New Profile
              </Heading>

              <FormControl isRequired>
                <FormLabel>
                  Name
                </FormLabel>
                <Input value={name} onChange={e => setName(e.currentTarget.value)} />
              </FormControl>

              <FormControl>
                <FormLabel>
                  Company/School
                </FormLabel>
                <Input />
              </FormControl>

              <FormControl>
                <FormLabel>
                  Location
                </FormLabel>
                <Input />
              </FormControl>

              <FormControl>
                <FormLabel>
                  Website
                </FormLabel>
                <Input />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>
                  Bio
                </FormLabel>
                <Textarea />
              </FormControl>

              <Flex 
                w="100%"
                justifyContent="space-between">
                  <Button variant="ghost" onClick={handleSignOut}>Sign Out</Button>
                  <Button variant="primary" onClick={handleSave}>Save</Button>
              </Flex>
          </VStack>
      </Flex>
    </PageContainer>
  );
};

export default NewProfile;