import React from 'react'
import { SimpleGrid, GridItem } from '@chakra-ui/react'
import LoginForm from '../Components/Forms/loginForm'
import image from '../assets/rF.jpg'
import FormImg from '../Components/Forms/formImg'

function LoginPage() {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} px={{ base: 0, md: 5, xl: 10 }} py={{ base: 0, md: 5, xl: 8 }} mx='auto' w={{ base: "100%", md: "75%", lg: "75%" }}>
            <GridItem colSpan={1}>
                <LoginForm />
            </GridItem>
            <GridItem colSpan={1} height={{base:"50vh",md:"auto",lg:"auto"}}>
                <FormImg img={image} heading={"Welcome Back,"}
                    text={"To keep connected with us please login with your personal info."} path="register" />
            </GridItem>



        </SimpleGrid>
    )
}

export default LoginPage
