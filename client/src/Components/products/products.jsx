import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Products() {
  const[products, setproducts]= useState([])
  const getAllProducts = async () => {
    const response = await axios.get('/api/product/')
   setproducts(response.data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  return (

    <Flex wrap='wrap' gap='5' alignItems='center' justifyContent={{base:'center',md:'flex-start',xl:'flex-start'}}>
      { products.length && products.map(item => 
        <Link to={`/product/${item.id}`}>
          <ProductCard key={item._id} productName={item.productName} type={item.type}
            price={item.price} img={item.img} />
        </Link>
      )}
    </Flex>

  )
}

export default Products
