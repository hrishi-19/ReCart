import { Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/sideBar'

function AddProducts() {
  return (
    <Flex gap='10' p='10'>
    <SideBar/>
    Add products
    </Flex>
  )
}

export default AddProducts
