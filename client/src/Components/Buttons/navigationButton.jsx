import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

function NavigationButton({text,theme,path}) {
  return (
    <div>

    <Link to={path}><Button sx={theme} children={text}/></Link>
      
    </div>
  )
}

export default NavigationButton
