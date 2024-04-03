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
import { useContext, useEffect } from 'react'
import { globalContext } from '../../store/global/GlobalProvider'

type Item = {
  name: string
  country: string
}

type ItemCity = {
  city: Item
  setCity: (item: Item) => void
}

function CardWeather() {
  const { city }: { city: undefined } = useContext<ItemCity | undefined>(
    globalContext,
  )

  return city === undefined ? (
    <></>
  ) : (
    <Card
      // direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      colorScheme="blackAlpha"
      bgGradient="linear(to-t, green.300, yellow.500, blue.300)"
      p="10px"
      m="10px"
      maxW="sm"
    >
      <Stack>
        <CardBody flex="center" align="center">
          <Heading size="md">
            {city?.name}, {city?.country}
          </Heading>
          <Text py="2">Temperature: {city?.temp?.toFixed() - 273}°C</Text>
          <Text py="2">
            Wind: {((city?.wind * 3600) / 1000)?.toFixed()} km/h
          </Text>
          <Text py="2">Humidity: {city?.humidity}%</Text>
          <Box py="2" flex="center" direction="row" align="center">
            <Text>{city?.type}</Text>
            <Box>
              <Image
                src={`https://openweathermap.org/img/wn/${city?.icon}.png`}
              />
            </Box>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default CardWeather
