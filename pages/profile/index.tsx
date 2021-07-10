import { 
  Text, 
  Flex, 
  Grid,
  Box,
  Image,
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
  IconButton,
  HStack, } from '@chakra-ui/react';
import { FiCheckCircle, FiCalendar, FiClock } from 'react-icons/fi';
import ProfileNavBar from '../../widgets/ProjectsNavBar';
import styles from '../../styles/Profile.module.scss';

interface Props {
    
}

const Profile = (props: Props) => {
  return (
    <Flex 
      direction="column"
      alignItems="center"
      minH="100vh" >
        <ProfileNavBar hideSearch />

        <Grid
          templateColumns="repeat(5, minmax(0, 1fr))"
          gap="2rem"
          p="7rem"
          maxW="90rem"
          width="100%" >
            <Box
              gridColumn="1 / span 1" >
              <Image
                borderRadius="3xl"
                src="/cofounder1.jpg" 
                alt="pog" />
            </Box>

            <Box
              gridColumn="2 / span 2" >
                <Text fontSize="3xl">
                  Jerchael
                </Text>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime distinctio debitis voluptate incidunt corporis earum quod iure.
                </Text>
            </Box>

            <Box
              gridColumn="4 / span 2" >
                <Text fontSize="2xl">
                  Personal statistics
                </Text>
                <VStack width="100%" alignItems="flex-start">
                  <HStack>
                    <FiCheckCircle size={42} />
                    <Box>
                      <Text fontSize="xl">
                        15
                      </Text>
                      <Text>
                        Tasks completed
                      </Text>
                    </Box>
                  </HStack>
                  <HStack>
                    <FiCalendar size={42} />
                    <Box>
                      <Text fontSize="xl">
                        23
                      </Text>
                      <Text>
                        Projects completed
                      </Text>
                    </Box>
                  </HStack>
                  <HStack>
                    <FiClock size={42} />
                    <Box>
                      <Text fontSize="xl">
                        23hrs
                      </Text>
                      <Text>
                        Total time spent
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
            </Box>

              <div className={styles.row2}>
                <div className={styles.userInfo}>
                    <h3>
                      Links
                    </h3>
                    <div className={styles.company}>
                      <img src="/icons/job.svg" alt="company" />
                      <h4>
                        Carta
                      </h4>
                    </div>
                    <div className={styles.website}>
                      <img src="/icons/website.svg" alt="website" />
                      <h4>
                        Carta.co
                      </h4>
                    </div>
                    <div className={styles.twitter}>
                      <img src="/icons/twitter.svg" alt="website" />
                    <h4>
                      alexcrocrox@twitter.com
                    </h4>
                    </div>
                  </div>
                  <div className={styles.graph}>
                    <h3>
                      Insights
                    </h3>
                  </div>
              </div>
        </Grid>
    </Flex>
  )
}

export default Profile
