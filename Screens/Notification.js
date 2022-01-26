import React, { useState, useEffect } from 'react'
import {
  NativeBaseProvider,
  Center,
  Text,
  Input,
  Button,
  Box,
  HStack,
  Pressable,
  Image,
  FlatList,
  VStack,
  Touchable
} from 'native-base'

const Notification = () => {
  const [selected, setSelected] = useState(0)
  const [haber, setHaber] = useState([])

  function getHaber() {
    fetch('https://api.collectapi.com/news/getNews?country=tr&tag=general', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: 'apikey 18Y3OfM83FFy2297uZRnDO:1yJshZKf8QLsHaA4rcYTzr'
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res.success)
        setHaber(res.result)
      })
  }

  useEffect(() => {
    getHaber()
  }, [])

  return (
    <Box flex="1">
      <HStack space={10}>
        <Image source={require('../icon/home-page.png')} size={'xs'} />
        <Text>Notification</Text>
      </HStack>

      <FlatList
        data={haber}
        keyExtrator={(item, index) => index}
        renderItem={({ item, index }) => (
          <Box key={index}>
            <HStack space={3} justifyContent={'space-between'}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 48 }}
                alt="resim"
              />
              <VStack>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
              </VStack>
            </HStack>
          </Box>
        )}
      />

      <Box flex={1} bg="white">
        <Pressable onPress={() => true}>
          <Box>
            <Image
              size="8"
              source={require('../icon/home-page.png')}
              mb="1"
              alt="home"
            />
            <Text color="indigo.600">Home</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => true}>
          <Box>
            <Image
              size="8"
              source={require('../icon/home-page.png')}
              mb="1"
              alt="home"
            />
            <Text color="indigo.600">Home</Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  )
}
export default Notification
