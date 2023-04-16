import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/sideBar'
import ProductForm from '../Components/Forms/productForm'

function AddProducts() {
  return (
    <Flex  gap={{base:0,md:10,xl:20}}
    px={{base:2,md:10,xl:10}}
    pt={{base:'10vh',md:'10'}}
    position={{base:'static',md:'relative'}}
    top='10vh'>
    <SideBar />
    <Box w={{base:'full',lg:'50vw',xl:'50vw'}} position={{base:'static',md:'absolute'}} left='35%' >
    <Text fontSize='2xl' fontWeight='600' color='gray'>List your product</Text>
    <ProductForm/>
    </Box>
    </Flex>
  )
}

export default AddProducts
