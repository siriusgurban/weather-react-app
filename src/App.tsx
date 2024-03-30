import { useEffect, useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import InputWeather from './components/InputWeather'
import CardWeather from './components/CardWeather'
import { GlobalProvider } from './store/global/GlobalProvider'
// import API_KEY from './constants/weather_api_key.ts'

function App() {
  const [respo, setRespo] = useState({})

  useEffect(() => {
    setRespo(respo)
  }, [respo])

  return (
    <>
      <GlobalProvider>
        <ChakraProvider>
          <div className="">
            <h1 className="text-3xl font-bold text-cyan-700">Weather App</h1>
            <InputWeather />
            <CardWeather />
          </div>
        </ChakraProvider>
      </GlobalProvider>
    </>
  )
}

export default App
