import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'


function RegisterForm() {

  const toast=useToast()
  const navigate=useNavigate()
  const[registerData,setRegisterData]=useState({
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    password:'',
    phone:''
  })
  const handleChange=(e)=>{

    setRegisterData({
      ...registerData,
      [e.target.name]:e.target.value

    })
   

  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const response=await axios.post('/api/auth/register',{...registerData})
      if(response.status===201){
        toast({
          title: `Success`,
              description: `Your account has been created.`,
              status: 'success',
              duration: 1000,
              isClosable: true,
        })
       setTimeout(function(){navigate('/home')},2000)
       
        

      }
    }catch(err){
      console.log(err)
      
      toast({
        title: `warning.`,
            description: `username or email already exits`,
            status: 'warning',
            duration: 1000,
            isClosable: true,
      })
    }
   
   
  }

  return (
    <Stack w='100%' p='5' alignItems='center' gap='5'>
      <Text fontWeight='900' fontSize='4xl' textAlign='center' color='purple.400' p='5'>Create Account</Text>
      <Box w='100%' px='5'>
        <form onSubmit={handleSubmit}>
          <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
            <FormControl isRequired>
              <FormLabel>First Name:</FormLabel>
              <Input type='text' placeholder='John' onChange={handleChange} name='firstName'/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name:</FormLabel>
              <Input type='text' placeholder='Doe' onChange={handleChange} name='lastName'/>
            </FormControl>
          </Flex>
          <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
            <FormControl isRequired>
              <FormLabel>Username:</FormLabel>
              <Input type='text' placeholder='johndoe555' onChange={handleChange} name='userName'/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email:</FormLabel>
              <Input type='email' placeholder='john@doe.com' onChange={handleChange} name='email'/>
            </FormControl>
          </Flex>
          <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
            <FormControl isRequired>
              <FormLabel>Password:</FormLabel>
              <Input type='password' minLength={8} onChange={handleChange} name='password'/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number:</FormLabel>
              <Input type='number' placeholder='1800-00-88' onChange={handleChange} name='phone'/>
            </FormControl>
          </Flex>
          <Button type='submit' bgGradient='linear(to-r,#A88BEB,#F8CEEC)' color='white' w='100%' mt='3' _hover='none'> Register</Button>
        </form>
        

      </Box>
    </Stack>
  )
}

export default RegisterForm
