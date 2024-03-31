import { Input, Button, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useState } from 'react'
import { globalContext } from '../../store/global/GlobalProvider'

const API_KEY = '1bd0fcbc9d17fde994dd15a7a0d12259'

function InputWeather() {
  const [value, setValue] = useState<string>('')
  const [load, setLoad] = useState<boolean>(false)
  const { setCity } = useContext(globalContext)

  // const [resp, setResp] = useState({})
  const handleChange = (event: any) => setValue(event.target.value)
  async function getWeather(city: string) {
    setLoad(true)
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      )
      // setResp(response)

      setCity({
        name: response?.data?.name,
        country: response?.data?.sys?.country,
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoad(false)
    }
  }

  function handleSearch() {
    getWeather(value)
  }

  return (
    <div>
      <Stack spacing={4} direction="row" align="center">
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
    </div>
  )
}

export default InputWeather
