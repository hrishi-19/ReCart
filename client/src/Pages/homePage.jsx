import { Flex, Tag, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import SideBar from '../Components/sideBar'
import Products from '../Components/products/products'

function HomePage() {
  const [cat,setCat]=useState('All')
  const categories = [
    'All', 'Mobile', 'Laptop', 'Bikes', 'Shoe', 'Television'
  ]
  return (
    <Flex gap={{base:0,md:10,xl:10}} px={{base:2,md:10,xl:10}} pt='10' justifyContent='center'>
      <SideBar />
      <Stack h='80vh' overflowY='scroll' gap={25} >
      <Flex gap={4} mt='5' w='full' wrap='wrap' >
      {
        categories.map(item => (
          <Tag size='lg' key={item} variant={cat===item?'subtle':'outline'} colorScheme='purple' onClick={()=>setCat(item)} cursor='pointer' w='-webkit-max-content'>
            {item}
          </Tag>
        ))
      }

    </Flex>
        <Products />
      </Stack>
    </Flex>
  )
}

export default HomePage
