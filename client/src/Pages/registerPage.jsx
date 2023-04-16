import React from 'react'
import image from '../assets/rF.jpg'
import RegisterForm from '../Components/Forms/registerForm'
import {GridItem, SimpleGrid } from '@chakra-ui/react'
import FormImg from '../Components/Forms/formImg'


function RegisterPage() {

    return (
       
            <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 2 }}
            px={{ base: 0, md: 5, xl: 10 }} 
            pt={{ base: 0, md: 5, lg: '15vh' }} 
            mx='auto' 
            w={{ base: "100%", md: "75%", lg: "75%" }}
           >
                <GridItem colSpan={1}>
                    <FormImg img={image} heading={"Welcome Back,"} 
                    text={"To keep connected with us please login with your personal info."} path="login"/>
                </GridItem>
                <GridItem colSpan={1}>
                    <RegisterForm />
                </GridItem>
            </SimpleGrid>
    )
}

export default RegisterPage
