import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase';
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const RegisterForm = (props: HTMLChakraProps<'form'>) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickReveal = () => {
    onToggle()
    const input = inputRef.current
    if (input) {
      input.focus({ preventScroll: true })
      const length = input.value.length * 2
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length)
      })
    }
  }

  return (
    <chakra.form
      onSubmit={async (e) => {
        e.preventDefault()
        try {
          const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
          // Signed in 
          var user = userCredential.user;
          // ...
        } catch(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        }
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input 
            name="email" 
            type="email" 
            autoComplete="email" 
            required
            onChange={e => {
              setEmail(e.currentTarget.value);
            }} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputRightElement>
              <IconButton
                bg="transparent !important"
                variant="ghost"
                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                onClick={onClickReveal}
              />
            </InputRightElement>
            <Input
              ref={inputRef}
              name="password"
              type={isOpen ? 'text' : 'password'}
              required
              onChange={e => {
                setPassword(e.currentTarget.value);
              }} 
            />
          </InputGroup>
        </FormControl>
        <Button type="submit" variant="primary" size="lg" fontSize="md">
          Register
        </Button>
      </Stack>
    </chakra.form>
  )
}