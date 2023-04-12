import { Box,Button,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import TransparentButton from '../Buttons/transparentButton'

function FormImg({img,heading,text,path}) {
    return (
        <Box style={{ backgroundImage: `url(${img})` }}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            w='full' h='full'
            py='5'
        >
            <Flex h='full' flexDirection='column' alignItems='center' justifyContent='center' >
                <Text color='white.100' p='4' fontSize='5xl'>{heading}</Text>
                <Text color='white.200' w='70%' textAlign='center' fontSize='lg'>{text}</Text>
               <TransparentButton path={path}/>
            </Flex>
           
        </Box>
    )
}

export default FormImg
