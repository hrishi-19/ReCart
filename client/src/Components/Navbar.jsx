import { Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import NavigationButton from './Buttons/navigationButton'

export default function Navbar() {

    const navtheme = {
        px: 5,
        py:1,
        bg: 'linear-gradient(to right ,rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);',
        color: 'white'
    }
    const buttontheme = {
        
        bg: 'white',
        color: 'blue.300',
    }

    return (
        <Flex as='nav' sx={navtheme} boxShadow='base'>
            <Heading fontWeight='extrabold' fontSize={{base:'xl',md:'3xl',lg:'5xl'}}>Recart</Heading>
            <Spacer />
            <HStack gap='20'>
            <NavigationButton theme={buttontheme} text={'Register'} path={'/register'}/>
            <NavigationButton theme={buttontheme} text={'Login'} path={'/login'}/>
            </HStack>
        </Flex>
    )
}
