import { Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/sideBar'

function MyProducts() {
  return (
    <Flex gap={{base:0,xl:20,lg:10}} p={{base:2,xl:10,lg:5}} position={{base:'static',md:'relative'}} top='10vh'>
    <SideBar/>
    myproducts
    </Flex>
  )
}

export default MyProducts
