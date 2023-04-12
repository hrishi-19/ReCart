import { GridItem, SimpleGrid,Box } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/sideBar'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from '../Pages/profilePage'

function HomeLayout() {
  return (
    <Box>
    <SimpleGrid columns='3'>
      <GridItem>
        <SideBar />
        <Routes>
        <Route path='/home/profile' element={<ProfilePage/>}/>
        </Routes>
      </GridItem>
    </SimpleGrid>
    </Box>
  )
}

export default HomeLayout
