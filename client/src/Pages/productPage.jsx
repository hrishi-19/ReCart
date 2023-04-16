import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../Components/sideBar'

function ProductPage() {
    const{id}=useParams()
  return (
    <Flex gap={{base:0,xl:20,lg:10}} px={{base:2,xl:10,lg:5}} pt={{base:'10vh',md:'10'}} position={{base:'static',md:'relative'}} top='10vh'>
    <SideBar />
    <Box w={{base:'full',lg:'50vw',xl:'50vw'}} position={{base:'static',md:'absolute'}} left='35%'>
      {id}
    </Box>
  </Flex>
  )
}

export default ProductPage
