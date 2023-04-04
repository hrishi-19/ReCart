import { ChakraProvider } from '@chakra-ui/react'
import RootLayout from './Layout/RootLayout'

function App() {


  return (

    <ChakraProvider>
    <div>
      <RootLayout/>
    </div>
    </ChakraProvider>


  )
}

export default App
