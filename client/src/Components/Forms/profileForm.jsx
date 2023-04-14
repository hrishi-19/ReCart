import { Avatar, Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

function ProfileForm() {
  return (
    <Box >

      <form w='full'>
        <Avatar src="https://bit.ly/ryan-florence" size='xl' />
        <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} alignItems='center' justifyContent='center' gap={{ base: 0, md: 5, xl: 10 }} mt="2" w='full'>

          <FormControl isRequired flex='1/2'>
            <FormLabel>First Name:</FormLabel>
            <Input type='text'  name='firstName'  value="Hrishikesh" />
          </FormControl>
          <FormControl isRequired flex='1/2'>
            <FormLabel>Last Name:</FormLabel>
            <Input type='text'  name='lastName' value="Kamath"/>
          </FormControl>
        </Flex>
        <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
          <FormControl isRequired>
            <FormLabel>Username:</FormLabel>
            <Input type='text'  name='userName' value="hrishikamath" isDisabled/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email:</FormLabel>
            <Input type='email' name='email' value="hrishikeshkamah999@gmail.com" isDisabled/>
          </FormControl>
        </Flex>
        <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
          <FormControl isRequired>
            <FormLabel>Password:</FormLabel>
            <Input type='password' minLength={8} name='password' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number:</FormLabel>
            <Input type='number'  name='phone' value="0090090098" />
          </FormControl>
        </Flex>
       <Flex gap='10' mt='5'>
       <Button variant='outline' colorScheme='red' >Cancel</Button>
       <Button variant='outline' colorScheme='green' >Submit</Button>
       </Flex>
      </form>

    </Box>
  )
}

export default ProfileForm
