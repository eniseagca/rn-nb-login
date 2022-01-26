import React, { useState, useEffect } from 'react'
import {
  Pressable,
  NativeBaseProvider,
  Center,
  Text,
  Button,
  Input,
  SearchIcon,
  HStack,
  Stack,
  VStack,
  Image,
  Box,
  Link,
  FlatList
} from 'native-base'

const Home = (props) => {
  const { navigation } = props
  const [selected, setSelected] = useState(0)
  const [book, setBook] = useState([])
  function getData() {
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
        setBook(res.result)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box flex="1">
      <Center>
        <HStack space={19}>
          <Image
            source={require('../icon/home-page.png')}
            size="8"
            alt="home"
          />

          <Text w="200" fontSize="24" fontWeight="bold">
            Hello!
          </Text>
          <Pressable onPress={() => navigation.navigate('noti')}>
            <Image
              source={require('../icon/notification.png')}
              size="8"
              alt="bildirim"
            />
          </Pressable>
          <Image source={require('../icon/hearts.png')} size="8" alt="favori" />
        </HStack>

        <HStack space={10}>
          <Stack>
            <Input
              borderColor={'blue.500'}
              w={'300'}
              variant="rounded"
              InputRightElement={
                <SearchIcon size={4} mr="2" color="muted.400" />
              }
              placeholder="Search"
            />
          </Stack>
          <Stack>
            <Image source={require('../icon/menu.png')} size="8" alt="menu" />
          </Stack>
        </HStack>
        <HStack space={'52%'} my="1">
          <Stack>
            <Text fontSize="16">Promotion</Text>
          </Stack>
          <Stack>
            <Link
              isUnderlined="false"
              _text={{ fontSize: '16', color: '#4053fd', fontWeight: 'bold' }}
            >
              See all
            </Link>
          </Stack>
        </HStack>
        <Box rounded={'3xl'} bg={'#4053fd'} w="90%" h="35%">
          <Center bg="violet.500" position="absolute" top="10" left="41">
            <Image
              source={require('../img/colour.png')}
              size="md"
              alt="color"
            />
          </Center>
          <Center position="absolute" right="45" top="5" w="150">
            <Text fontSize={'20'} color={'white'}>
              3D Design Fundamentals
            </Text>
            <Button
              variant="solid"
              bg={'yellow.400'}
              rounded={'xl'}
              _text={{ color: 'white' }}
              mt="2"
            >
              Check Now!
            </Button>
          </Center>
        </Box>
        <Box>
          <HStack space={'40%'} my="1">
            <Stack>
              <Text fontSize="16">Awesome Courses</Text>
            </Stack>
            <Stack>
              <Link
                isUnderlined="false"
                _text={{ fontSize: '16', color: '#4053fd', fontWeight: 'bold' }}
              >
                See all
              </Link>
            </Stack>
          </HStack>
        </Box>
      </Center>
      <Button.Group ml={'7'} size="md">
        <Button rounded="2xl" bg={'#4053fd'}>
          All Course
        </Button>
        <Button
          rounded="2xl"
          bg={'white'}
          borderWidth={'1'}
          borderColor={'#4053fd'}
          _text={{ color: '#4053fd' }}
        >
          Popular
        </Button>
        <Button
          rounded="2xl"
          bg={'white'}
          borderWidth={'1'}
          borderColor={'#4053fd'}
          _text={{ color: '#4053fd' }}
        >
          Newest
        </Button>
      </Button.Group>
      <Box mx={'5'}>
        <FlatList
          data={book}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <Box key={index}>
              <HStack space={3} justifyContent={'space-between'}>
                <Image source={{ uri: item.image }} size="48" alt="resim" />
                <VStack>
                  <Text>{item.name}</Text>
                  <Text>{item.description}</Text>
                </VStack>
              </HStack>
            </Box>
          )}
        />
      </Box>
      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
        <HStack bg="white" alignItems="center" safaAreaBottom space={5}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Image
                size="8"
                source={require('../icon/home-page.png')}
                mb="1"
                alt="home"
              />
              <Text color="indigo.600">Home</Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Image
                size="8"
                source={require('../icon/menu.png')}
                mb="1"
                alt="menu"
              />
              <Text color="indigo.600">Option</Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Image
                size="8"
                source={require('../icon/mail.png')}
                mb="1"
                alt="mail"
              />
              <Text color="indigo.600">Message</Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Image
                size="8"
                source={require('../icon/user.png')}
                mb="1"
                alt="user"
              />
              <Text color="indigo.600">Profile</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  )
}

export default Home
