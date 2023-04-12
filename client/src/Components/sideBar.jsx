import { List, ListItem, Text, Box, Flex, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { BiUser, BiMessageRounded, BiLogOut } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <Box as="aside" h="90vh" boxShadow='md' p='5'>
            <Flex flexDirection='column' justifyContent='center' alignItems='start  ' gap='10' w='full'>
                <Text fontSize='2xl' color="#333" fontWeight='700' textAlign='center'>Welcome,Hrishikesh</Text>
                <List spacing='5' fontSize='xl' fontWeight='500' color="gray">
                    <NavLink to='/profile'><ListItem py='3' px='5' textAlign='start' >
                        <ListIcon as={BiUser} />
                        Profile
                    </ListItem></NavLink>
                    <NavLink to='/profile'> <ListItem py='3' px='5' textAlign='start'>
                        <ListIcon as={MdAddCircleOutline} />
                        Sell/Rent</ListItem></NavLink>
                    <NavLink to='/profile'> <ListItem py='3' px='5' textAlign='start'>
                        <ListIcon as={BiUser} />
                        My products</ListItem></NavLink>
                    <NavLink to='/profile'><ListItem py='3' px='5' textAlign='start'>
                        <ListIcon as={BiMessageRounded} />
                        Messages</ListItem></NavLink>
                    <NavLink to='/profile'>  <ListItem py='3' px='5' textAlign='start'>
                        <ListIcon as={BiLogOut} />
                        Logout</ListItem></NavLink>
                </List>
            </Flex>

        </Box>
    )
}

export default SideBar
