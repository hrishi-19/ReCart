import React from 'react'
import loginGif from '../assets/woman-shopping-online.gif'
import { SimpleGrid,Container,Image } from '@chakra-ui/react'
import LoginForm from '../Components/Forms/loginForm'

function LoginPage() {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} px={{ base: 0, md: 5, xl: 10 }} py={{ base: 3, md: 5, xl: 8 }} alignItems='center'>
            <Container>
                <Image src={loginGif} alt="login.gif" />
            </Container>
            <Container>
                <LoginForm/>
            </Container>
        </SimpleGrid>
    )
}

export default LoginPage
