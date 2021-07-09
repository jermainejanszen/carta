import { useRouter } from 'next/router';
import { 
  Flex,
  HStack, 
  Avatar,
  Switch, 
  Image, 
  useColorModeValue,
  useColorMode,
  Input,
  InputGroup,
  Menu, 
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuGroup, 
  MenuDivider,
  InputRightElement} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

interface Props {
  hideSearch? : boolean,
}

const ProfileNavBar = (props: Props) => {

  const router = useRouter();

  const handleHomeClick = (e) => {
      e.preventDefault();
      router.push('/projects');
  }
  
  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push('/profile');
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex
      justifyContent="space-between"
      padding="1rem 4rem" 
      w="100%"
      bg={bg}
      boxShadow="0 0 12px rgba(0, 0, 0, 0.4)"
      position="fixed" >
        <Image 
            src="/logo.svg" 
            alt="logo"
            h="3rem"
            cursor="pointer" 
            onClick={handleHomeClick} />
      <HStack spacing="8">
        {props.hideSearch ?? 
          <InputGroup>
            <Input
              type="text"
              placeholder="Search projects..." />
            <InputRightElement>
              <IconButton 
                aria-label="Search"
                icon={<SearchIcon />} />
            </InputRightElement>
          </InputGroup>
        }
        <Flex alignItems="center">
          <Avatar
            bg="red.500"
            cursor="pointer" 
            onClick={handleProfileClick} />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Profile"
              icon={<ChevronDownIcon w="2rem" h="2rem" />}
              variant="ghost"
              borderRadius="full"
              mx="1rem" />
            <MenuList>
              <MenuGroup title="Jerchael">
                <MenuItem onClick={handleProfileClick}>
                  My Profile
                </MenuItem>
                <MenuItem onClick={handleHomeClick}>
                  My Projects
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem>
                Settings
              </MenuItem>
              <MenuItem>
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default ProfileNavBar
