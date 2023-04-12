import { Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import NavigationButton from './Buttons/navigationButton'

export default function Navbar() {

    const navtheme = {
        px: 5,
        py:1,
        bg: '#fafafa',     
    }
   

    return (
        <Flex as='nav' sx={navtheme} boxShadow='base' h='10vh'>
            <Heading 
            fontWeight='extrabold' 
            fontSize={{base:'xl',md:'3xl',lg:'5xl'}}
            bgGradient='linear(to-r,#A88BEB,#F8CEEC)'
            bgClip='text'
            >Recart</Heading>
            <Spacer />
            
        </Flex>
    )
}
