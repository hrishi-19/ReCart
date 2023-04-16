import { Avatar, Box, Button, Flex, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

function ProfileForm() {
  const toast=useToast()
  const[profileData,setProfileData]=useState({
    firstName:'Hrishikesh',
    lastName:'kamath',
    pasword:'12356789',
    phone:'1002003003'
  })
  const handleChange=(e)=>{

    setProfileData({
      ...profileData,
      [e.target.name]:e.target.value

    })
   
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(profileData)
    toast({
      title: 'Profile Updated.',
          description: "Your profile was updated successfuly.",
          status: 'success',
          duration: 1000,
          isClosable: true,
    })
   
  }
  return (
    <Box >

      <form w='full' onSubmit={handleSubmit}>
        <Avatar src="https://bit.ly/ryan-florence" size='xl' />
        <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} alignItems='center' justifyContent='center' gap={{ base: 0, md: 5, xl: 10 }} mt="2" w='full'>

          <FormControl isRequired flex='1/2'>
            <FormLabel>First Name:</FormLabel>
            <Input type='text'  name='firstName'  value={profileData.firstName} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired flex='1/2'>
            <FormLabel>Last Name:</FormLabel>
            <Input type='text'  name='lastName' value={profileData.lastName} onChange={handleChange}/>
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
            <Input type='password' minLength={8}  onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number:</FormLabel>
            <Input type='number'  name='phone' value={profileData.phone} onChange={handleChange}/>
          </FormControl>
        </Flex>
       <Flex gap='10' mt='5'>
       <Button variant='outline' colorScheme='red' >Cancel</Button>
       <Button variant='outline' colorScheme='green' type='submit' >Submit</Button>
       </Flex>
      </form>

    </Box>
  )
}

export default ProfileForm
