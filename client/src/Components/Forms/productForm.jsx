import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { convertToBse64 } from '../../utils/helperFunctions'

function ProductForm() {
    const toast=useToast()
    const[productData,setProductData]=useState({
        productName:'',
        desc:'',
        type:'Sell',
        category:'',
        price:'',
        img:'',
        seller:'642a8825242c8817a2527e5c'
        
    })
    const handleChange=(e)=>{
        setProductData({
        ...productData,
        [e.target.name]:e.target.value
  
      })
     
    }

    const  handleFileChange =async (e)=>{
        const file =e.target.files[0];
        const base64 = await convertToBse64(file);
        setProductData({
            ...productData,
            [e.target.name]:base64
        })

    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
   try{
    const response=await axios.post('/api/product/add',{
        ...productData
    })
    if(response.status===201){
        toast({
            title: `Successfull .`,
                description: `Item listed for ${productData.type}`,
                status: 'success',
                duration: 1000,
                isClosable: true,
          })
          setProductData({
            productName:'',
            desc:'',
            type:'Sell',
            category:'',
            price:'',
            img:'',
            seller:'642a8825242c8817a2527e5c'
            
          })
    }
   
      
      
   }catch(err){
    toast({
        title: `Error occured.`,
            description: `${err}`,
            status: 'error',
            duration: 1000,
            isClosable: true,
      })
   }
     
    }
    return (
        <Box pb='10'>
            <form w='full' onSubmit={handleSubmit}>
                <FormControl isRequired >
                    <FormLabel>Product Name:</FormLabel>
                    <Input type='text' name='productName' onChange={handleChange} value={productData.productName}/>
                </FormControl>
                <FormControl isRequired mt='5'>
                    <FormLabel>Description:</FormLabel>
                    <Textarea rows='10' cols='5' type='text' name='desc' onChange={handleChange} value={productData.desc}/>
                </FormControl>
                <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
                    <FormControl isRequired>
                        <FormLabel>List under:</FormLabel>
                        <RadioGroup >
                            <HStack spacing={5}>
                                <Radio value='Sell' name='type'  onChange={handleChange}>Sell</Radio>
                                <Radio value='Rent' name='type'  onChange={handleChange}>Rent</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Category:</FormLabel>
                        <Input type='text' name='category' onChange={handleChange} value={productData.category}/>
                    </FormControl>
                </Flex>
                <Flex flexDirection={{ base: 'column', md: 'row', xl: 'row' }} gap={{ base: 0, md: 5, xl: 10 }} mt="2">
                    <FormControl isRequired>
                        <FormLabel>Price(RS):</FormLabel>
                        <Input type='number' name='price' onChange={handleChange} value={productData.price}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Image:</FormLabel>
                        <Input type='file' name ='img' accept="image/png, image/jpg, image/jpeg" border='none' onChange={handleFileChange} />
                    </FormControl>
                </Flex>
                <Flex gap='10' mt='5'>
                    <Button variant='solid' colorScheme='red' >Cancel</Button>
                    <Button variant='solid' colorScheme='green' type='submit' >Submit</Button>
                </Flex>
            </form>

        </Box>
    )
}

export default ProductForm
