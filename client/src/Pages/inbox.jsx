import { Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/sideBar'

function Inbox() {
  return (
    <Flex gap={{base:0,xl:20,lg:10}} px={{base:2,xl:10,lg:5}} pt={{base:'10vh',md:'10'}} position={{base:'static',md:'relative'}} top='10vh'>
    <SideBar/>
    inbox
    </Flex>
  )
}

export default Inbox
