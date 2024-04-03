// @ts-nocheck

import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import InputWeather from './components/InputWeather'
import CardWeather from './components/CardWeather'
import { GlobalProvider, globalContext } from './store/global/GlobalProvider'

// import API_KEY from './constants/weather_api_key.ts'

type Item = {
  name: string
  country: string
}

type ItemCity = {
  city: Item
  setCity: (item: Item) => void
}

function App() {
  const a = useContext<ItemCity | undefined>(globalContext)
  const [id, setId] = useState()
  const [state, setState] = useState('')

  function gradientChanger(param: number) {
    console.log(a?.city?.id, 'a')
    // console.log(param?.toString()?.startsWith('8'), 'fn')

    if (param?.toString()?.startsWith('8')) {
      setState(`linear(to-r, gray.300, yellow.400, pink.200)`)
    } else {
      setState(`linear(to-l, #7928CA, #FF0080)`)
    }
  }

  useEffect(() => {
    setId(a?.city?.id)
    gradientChanger(id)
  }, [state, id])

  return (
    <div>
      <GlobalProvider>
        <ChakraProvider>
          <Box
            w="100%"
            h="100vh"
            flex="center"
            align="center"
            py="50px"
            bgGradient="linear(to-r, orange.500, gray.300, , green.500)"
          >
            <InputWeather />
            <CardWeather />
          </Box>
        </ChakraProvider>
      </GlobalProvider>
    </div>
  )
}

export default App
