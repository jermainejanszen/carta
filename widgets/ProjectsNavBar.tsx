import { useRouter } from 'next/router';
import { 
  Flex,
  HStack, 
  Avatar,
  Box, 
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
  InputRightElement,
  MenuItemOption,
  MenuOptionGroup } from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { useUser } from '../providers/UserContext'
import {AuthUser} from 'next-firebase-auth'

interface Props {
  hideSearch? : boolean,
  authUser: AuthUser,
}

const ProfileNavBar = (props: Props) => {
  const { hideSearch, authUser } = props;
  const router = useRouter();
  const user = useUser();
  console.log(user);
  const handleHomeClick = (e) => {
      e.preventDefault();
      router.push('/projects');
  }
  
  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push('/profile');
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    user.signout();
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const handleColorModeChange = (value : 'light' | 'dark') => {
    if (value === 'light') {
      if (colorMode === 'dark') {
        toggleColorMode();
      }
    } else if (value === 'dark') {
      if (colorMode === 'light') {
        toggleColorMode();
      }
    }
  }
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex
      justifyContent="space-between"
      padding="1rem 4rem" 
      w="100%"
      bg={bg}
      boxShadow="0 0 12px rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex="dropdown" >
        <Image 
            src="/logo.svg" 
            alt="logo"
            h="3rem"
            cursor="pointer" 
            onClick={handleHomeClick} />
      <HStack spacing="8">
        {hideSearch ?? 
          <InputGroup>
            <Input
              type="text"
              placeholder="Search projects..." />
            <InputRightElement>
              <IconButton 
                aria-label="Search"
                icon={<SearchIcon />}
                borderRightRadius="lg" />
            </InputRightElement>
          </InputGroup>
        }
        <Flex alignItems="center">
          <Avatar
            bg="red.500"
            cursor="pointer" 
            name={authUser.displayName}
            src={authUser.photoURL}
            onClick={handleProfileClick} />
          <Menu isLazy>
            {({ isOpen }) => (
              <Box>
                <MenuButton
                  isActive={isOpen}
                  as={IconButton}
                  aria-label="Profile"
                  icon={
                    <ChevronDownIcon 
                      w="2rem" h="2rem"
                      transition="all 0.3s ease" 
                      transform={isOpen && "rotate(180deg)"} />
                  }
                  variant="ghost"
                  borderRadius="full"
                  mx="1rem" />
                <MenuList>
                  <MenuGroup title={authUser.displayName}>
                    <MenuItem onClick={handleProfileClick}>
                      My Profile
                    </MenuItem>
                    <MenuItem onClick={handleHomeClick}>
                      My Projects
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuOptionGroup 
                    title="Color mode" 
                    type="radio" 
                    defaultValue={colorMode === 'light' ? 'light' : 'dark'}
                    onChange={handleColorModeChange} >
                      <MenuItemOption value="light">
                        Light
                      </MenuItemOption>
                      <MenuItemOption value="dark">
                        Dark
                      </MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider />
                  <MenuItem onClick={e => router.push('/settings')}>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Box>
            )}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default ProfileNavBar
