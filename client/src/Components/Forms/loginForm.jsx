import React from 'react'
import {
  Text,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa"
import {Link} from 'react-router-dom'

function LoginForm() {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)
  return (
    <Flex flexDirection='column' w='100%' alignItems='center' >
      <Flex w={{ base: '100%', md: '80%', lg: '80%' }}
       borderRadius='2xl'
        bgGradient='linear-gradient(to right ,rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);'
         flexDirection='column'
         >
        <Stack h='200px' w='100%' alignItems='center' gap='5' p='5'>
          <Avatar bg='blackAlpha.100' />
          <Text fontSize='4xl' color='white' fontWeight='900'>Welcome back</Text>

        </Stack>
        <Box w='100%' p='6'
         borderTopRadius='3xl'
         borderBottomRadius='2xl'
          bg='white'
          border='1px'
          borderColor='gray.100'
          boxShadow='xl' >
          <form>
            <Stack spacing='4' p='1rem'>
              <FormControl isRequired>
                <InputGroup >
                  <InputLeftElement children={<CFaUserAlt color='blue.400' />} pointerEvents='none' />
                  <Input type='text' placeholder='johndoe' />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<CFaLock color='blue.400' />} pointerEvents='none' />
                  <Input type='password' minLength='8' />
                </InputGroup>
              </FormControl>
              <Button type='submit' bgGradient='linear-gradient(to right ,rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' color='white' w='100%' _hover='none'>Login</Button>
              <Link to='/register'><Text fontWeight='500' color='gray.600' textAlign='center' fontSize='sm' >New user?Register</Text></Link>
            </Stack>
          </form>
        </Box>
      </Flex>

    </Flex>
  )
}

export default LoginForm
