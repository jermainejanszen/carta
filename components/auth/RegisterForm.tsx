import { useRouter } from 'next/router'
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from '../PasswordField'

export const RegisterForm = (props: HTMLChakraProps<'form'>) => {

  const router = useRouter();

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault()
        // Handle account registration.
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField />
        <Button type="submit" variant="primary" size="lg" fontSize="md">
          Register
        </Button>
      </Stack>
    </chakra.form>
  )
}