import {
    Flex, Heading, Spacer, Text, IconButton, List, ListIcon, ListItem

} from '@chakra-ui/react'
import React, { useState } from 'react'
import {navData} from '../data'
import { Link, NavLink } from 'react-router-dom'
import {BiMenu,BiX } from 'react-icons/bi'

export default function Navbar() {
    const [display, changeDisplay] = useState('none')
    const links = navData

    const navtheme = {
        px: 5,
        py: 1,
        bg: '#fafafa',
    }


    return (
        <Flex as='nav' sx={navtheme} boxShadow='base' h='10vh' alignItems='center'>
            <Heading
                fontWeight='extrabold'
                fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                bgGradient='linear(to-r,#A88BEB,#F8CEEC)'
                bgClip='text'
            >Recart</Heading>
            <Spacer />
            <IconButton
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={
                    <BiMenu />
                }
                onClick={() => changeDisplay('flex')}
                display={['flex', 'flex', 'none', 'none']}
            />
            <Flex
                w='100vw'
                display={display}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                gap='10'
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Open Menu"
                        size="lg"
                        icon={
                            <BiX />
                        }
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>
                <Text fontSize='2xl' color="#333" fontWeight='700' textAlign='center'>Welcome,Hrishikesh</Text>
                <List spacing='15' fontSize='xl' fontWeight='500' color="gray" w='full'>
                    {
                        links.map(item => {
                            return (
                                item.name === 'Home' ? <Link to={item.path} ><ListItem py='2' px='5' textAlign='center' onClick={() => changeDisplay('none')}>
                                    <ListIcon as={item.icon} />
                                    {item.name}
                                </ListItem></Link> : <NavLink to={item.path} ><ListItem py='2' px='5' textAlign='center'  onClick={() => changeDisplay('none')}>
                                    <ListIcon as={item.icon} />
                                    {item.name}
                                </ListItem></NavLink>
                            )
                        })
                    }

                </List>
            </Flex>

        </Flex>
    )
}
