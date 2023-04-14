import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import RootLayout from './Layout/RootLayout'

function App() {
  const theme=extendTheme({
    colors:{
        white:{
          100:"#FFF",
          200:'#fafafa'
        },
        black:{
          100:"#ddd"
        }
    }
  })


  return (

    <ChakraProvider theme={theme}>
      <div>
        <RootLayout />
      </div>
    </ChakraProvider>


  )
}

export default App
