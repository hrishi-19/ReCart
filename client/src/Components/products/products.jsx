import React from 'react'
import { products } from '../../data'
import ProductCard from './productCard'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Products() {
  return (

    <Flex wrap='wrap' gap='5' alignItems='center' justifyContent={{base:'center',md:'flex-start',xl:'flex-start'}}>
      {products.map(item => 
        <Link to={`/product/${item.id}`}>
          <ProductCard id={item.id} productName={item.productName} type={item.type}
            price={item.price} img={item.img} />
        </Link>
      )}
    </Flex>

  )
}

export default Products
