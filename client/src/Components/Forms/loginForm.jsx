import { React, useState } from 'react'
import {
  Text,
  Input,
  Button,
  FormLabel,
  Stack,
  chakra,
  Box,
  FormControl,
  Flex,
  useToast
} from "@chakra-ui/react";

function LoginForm() {
  const toast = useToast()
  const [loginData, setLoginData] = useState({
    userName: '',
    password: ''
  })
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: 'Login Succesfull',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }
  return (
    <Flex flexDirection='column' w='100%' alignItems='center' >
      <Flex w={{ base: '100%', md: '80%', lg: '80%' }}

        flexDirection='column'
      >
        <Stack h='150px' w='100%' alignItems='center' gap='5' p='5'>
         
          <Text my="auto" fontSize='4xl' color='purple.400' fontWeight='900'>Sign in to Recart</Text>
        </Stack>
        <Box w='100%' p='6'>
          <form onSubmit={handleSubmit}>
            <Stack spacing='4' p='1rem'>
              <FormControl isRequired>
                <FormLabel>Username:</FormLabel>
                <Input type='text' placeholder='johndoe' onChange={handleChange} name='userName' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password:</FormLabel>
                <Input type='password' minLength='8' onChange={handleChange} name='password' />
              </FormControl>
              <Button type='submit' bgGradient='linear(to-r,#A88BEB,#F8CEEC)' color='white' w='100%' _hover='none'>Login</Button>
            </Stack>
          </form>
        </Box>
      </Flex>

    </Flex>
  )
}

export default LoginForm
