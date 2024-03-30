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

//     console.log(data.name);
//     console.log(data.sys.country);
//     console.log((data.wind.speed*3600/1000).toFixed(), "wind");
//     console.log(data.main.temp.toFixed(), "temp");
//     console.log(data.weather[0].main);

function CardWeather() {
  const { city } = useContext(globalContext)

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

      <Stack>
        <CardBody>
          <Heading size="md">
            {city?.data?.name}, {city?.data?.sys?.country}
          </Heading>
          {console.log(city, 'user')}
          <Text py="2">
            Temperature: {city?.data?.main?.temp?.toFixed() - 273}°C
          </Text>
          <Text>
            Wind: {((city?.data?.wind?.speed * 3600) / 1000)?.toFixed()} km/h
          </Text>
          <Text>Humidity: {city?.data?.main?.humidity}%</Text>
          <Text>{city?.data?.weather[0]?.main}</Text>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default CardWeather
