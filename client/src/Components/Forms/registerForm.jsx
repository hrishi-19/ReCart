import { Flex, Box, Text, FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'


function RegisterForm() {

  return (
    <Stack w='100%' p='5' alignItems='center' gap='5' border='1px solid' borderColor='gray.100' borderRadius='xl'boxShadow='lg'>
    <Text fontWeight='900' fontSize='4xl' textAlign='center' color='gray.600' p='5'>Register</Text>
      <Box w='100%' px='5'>
        <form>
          <Flex flexDirection={{base:'column',md:'row',xl:'row'}} gap={{base:0,md:5,xl:10}}>
            <FormControl isRequired>
              <FormLabel>First Name:</FormLabel>
              <Input type='text' placeholder='John' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name:</FormLabel>
              <Input type='text' placeholder='Doe' />
            </FormControl>
          </Flex>
          <Flex flexDirection={{base:'column',md:'row',xl:'row'}} gap={{base:0,md:5,xl:10}}>
          <FormControl isRequired>
            <FormLabel>Username:</FormLabel>
            <Input type='text' placeholder='johndoe555' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email:</FormLabel>
            <Input type='email' placeholder='john@doe.com' />
          </FormControl>
          </Flex>
          <Flex flexDirection={{base:'column',md:'row',xl:'row'}} gap={{base:0,md:5,xl:10}}>
          <FormControl isRequired>
            <FormLabel>Password:</FormLabel>
            <Input type='password' minLength={8} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number:</FormLabel>
            <Input type='number' placeholder='1800-00-88' />
          </FormControl>
          </Flex>
          <Button type='submit' bgGradient='linear-gradient(to right ,rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' color='white'w='100%' mt='3' _hover='none'> Register</Button>
        </form>
        <Link to='/login'><Text fontWeight='500' color='gray.600' textAlign='center' mt='3' fontSize='sm' >Already Registered?login</Text></Link>
            
      </Box>
    </Stack>
  )
}

export default RegisterForm
