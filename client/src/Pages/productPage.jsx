import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../Components/sideBar'

function ProductPage() {
    const{id}=useParams()
  return (
    <Flex gap='10' px='10' pt='10'>
    <SideBar />
    <Box h='80vh' overflowY='scroll'>
      {id}
    </Box>
  </Flex>
  )
}

export default ProductPage
