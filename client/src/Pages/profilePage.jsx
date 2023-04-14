import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/sideBar'
import ProfileForm from '../Components/Forms/profileForm'

function ProfilePage() {
  return (
    <Flex gap={{base:0,xl:5,lg:3}} p={{base:2,xl:10,lg:5}}>
    <SideBar />
    <Box w={{base:'full',lg:'50vw',xl:'50vw'}}>
    <Text fontSize='2xl' fontWeight='600' color='gray'>Profile</Text>
    <ProfileForm/>
    </Box>
    </Flex>
  )
}

export default ProfilePage
