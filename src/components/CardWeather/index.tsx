// @ts-nocheck

import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { globalContext } from '../../store/global/GlobalProvider'
import { IoSunnyOutline } from 'react-icons/io5'

type Item = {
  name: string
  country: string
}

type ItemCity = {
  city: Item
  setCity: (item: Item) => void
}

// interface GlobalContextType {
//   city: Item
//   setCity: (item: Item) => void
// }

function CardWeather() {
  const { city }: { city: undefined } = useContext<ItemCity | undefined>(
    globalContext,
  )
  console.log(city, 'city')

  return city === undefined ? (
    <></>
  ) : (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      colorScheme="blackAlpha"
      bgColor="brown"
      p="10px"
      m="10px"
    >
      {/* <CardHeader>{name}, {country}</CardHeader> */}
      {/* {console.log(city, 'city')} */}

      <Stack>
        <CardBody>
          <Heading size="md">
            {city?.name}, {city?.country}
          </Heading>
          <Text py="2">Temperature: {city?.temp?.toFixed() - 273}°C</Text>
          <Text>Wind: {((city?.wind * 3600) / 1000)?.toFixed()} km/h</Text>
          <Text>Humidity: {city?.humidity}%</Text>
          <Box flex="center">
            <Text>{city?.type}</Text>
            <Image
              src={`https://openweathermap.org/img/wn/${city?.icon}.png`}
            />
          </Box>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default CardWeather
