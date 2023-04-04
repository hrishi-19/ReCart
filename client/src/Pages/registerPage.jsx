import React from 'react'
import RegisterForm from '../Components/Forms/registerForm'
import registerImg from '../assets/register-page.jpg'
import { Container, Image, SimpleGrid } from '@chakra-ui/react'


function RegisterPage() {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} px={{ base: 0, md: 5, xl: 10 }} py={{ base: 3, md: 5, xl: 8 }} alignItems='center' >
            <Container>
                <Image src={registerImg} />
            </Container>
            <Container>
                <RegisterForm />
            </Container>
        </SimpleGrid>



    )
}

export default RegisterPage
