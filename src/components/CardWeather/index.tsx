import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { globalContext } from '../../store/global/GlobalProvider'

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

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      colorScheme="blackAlpha"
      p="10px"
      m="10px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <CardHeader>{/* {name}, {country} */}</CardHeader>
      {/* {console.log(city, 'city')} */}

      <Stack>
        <CardBody>
          <Heading size="md">{/* {name}, {country} */}</Heading>
          {/* <Text py="2">
            Temperature: {data?.main?.temp?.toFixed() - 273}°C
          </Text>
          <Text>
            Wind: {((data?.wind?.speed * 3600) / 1000)?.toFixed()} km/h
          </Text>
          <Text>Humidity: {data?.main?.humidity}%</Text>
          <Text>{data?.weather[0]?.main}</Text> */}
        </CardBody>
      </Stack>
    </Card>
  )
}

export default CardWeather
