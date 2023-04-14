import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function TransparentButton({path}) {
  return (
    <Link to={`/${path}`}><Button mt="5" bg="transparent"
     color="white.100" fontSize='lg'
      px='16' border="1px solid #fafafa"
       borderRadius="full" _hover='none'>{path}</Button></Link>
  )
}

export default TransparentButton
