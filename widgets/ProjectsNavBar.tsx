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
        {props.hideSearch ?? 
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
            onClick={handleProfileClick} />
          <Menu>
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
                  <MenuGroup title="Jerchael">
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
                  <MenuItem>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={e => router.push('/')}>
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
