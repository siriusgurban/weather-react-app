// @ts-nocheck

import { Input, Button, Stack, Heading, Box } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useState } from 'react'
import { globalContext } from '../../store/global/GlobalProvider'
import { useToastHook } from '../../hooks/useToastHook'

const API_KEY = '1bd0fcbc9d17fde994dd15a7a0d12259'

type Item = {
  name: string
  country: string
}

type ItemCity = {
  city: Item
  setCity: (item: Item) => void
}

function InputWeather() {
  const [value, setValue] = useState<string>('')
  const [load, setLoad] = useState<boolean>(false)
  const [state, newToast] = useToastHook()
  const { setCity }: { setCity: ItemCity } = useContext<ItemCity | undefined>(
    globalContext,
  )

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value)
  async function getWeather(city: string) {
    setLoad(true)
    newToast(false)

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      )
      setCity({
        name: response?.data?.name,
        country: response?.data?.sys?.country,
        temp: response.data?.main?.temp,
        wind: response.data?.wind?.speed,
        humidity: response.data?.main?.humidity,
        icon: response.data?.weather[0]?.icon,
        type: response.data?.weather[0]?.main,
        id: response.data?.weather[0]?.id,
      })
      console.log(response)
      console.log(response.data?.weather[0]?.id, 'id')
    } catch (error) {
      if (error) {
        newToast(true)
      }
      console.error(error)
    } finally {
      setLoad(false)
    }
  }

  function handleSearch() {
    getWeather(value)
  }

  return (
    <Box flex="center" align="center">
      <Heading className="text-3xl font-bold text-cyan-800 p-2 text-center">
        Weather App
      </Heading>
      <Stack spacing={4} direction="col" align="center" w="sm">
        <Input
          color="teal"
          placeholder="City name"
          size="md"
          variant="filled"
          value={value}
          onChange={handleChange}
        />
        <Button
          colorScheme="teal"
          size="md"
          variant="outline"
          onClick={handleSearch}
          isLoading={load}
        >
          Search
        </Button>
      </Stack>
    </Box>
  )
}

export default InputWeather
