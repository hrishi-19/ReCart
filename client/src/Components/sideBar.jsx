import {
    List, ListItem, Text, Box, Flex, ListIcon
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { BiUser, BiMessageRounded, BiLogOut, BiHomeAlt2 } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

function SideBar() {


    return (
        <Box position='fixed'>
            <Box as="aside" h="70vh" rounded='3xl' boxShadow='lg' p='5' display={{ base: 'none', md: 'flex', xl: 'flex' }} >
                <Flex flexDirection='column' justifyContent='center' alignItems='start  ' gap='10' w='full'>
                    <Text fontSize='2xl' color="#333" fontWeight='700' textAlign='center'>Welcome,Hrishikesh</Text>
                    <List spacing='5' fontSize='xl' fontWeight='500' color="gray" w='full'>
                        <Link to='/home' ><ListItem py='2' px='5' textAlign='start'>
                            <ListIcon as={BiHomeAlt2} />
                            Home
                        </ListItem></Link>
                        <NavLink to='/home/profile' ><ListItem py='2' px='5' textAlign='start'>
                            <ListIcon as={BiUser} />
                            Profile
                        </ListItem></NavLink>
                        <NavLink to='/home/add-product'> <ListItem py='2' px='5' textAlign='start'>
                            <ListIcon as={MdAddCircleOutline} />
                            Sell/Rent</ListItem></NavLink>
                        <NavLink to='/home/my-products'> <ListItem py='2' px='5' textAlign='start'>
                            <ListIcon as={BiUser} />
                            My products</ListItem></NavLink>
                        <NavLink to='/home/inbox'><ListItem py='2' px='5' textAlign='start'>
                            <ListIcon as={BiMessageRounded} />
                            Messages</ListItem></NavLink>
                        <NavLink to='/logout'>  <ListItem py='2' px='5' textAlign='start'>
                            <ListIcon as={BiLogOut} />
                            Logout</ListItem></NavLink>
                    </List>
                </Flex>

            </Box>
        </Box>

    )
}

export default SideBar
