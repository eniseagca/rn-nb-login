import React, { useState, useEffect } from 'react'
import {
  Box,
  HStack,
  Text,
  Image,
  Input,
  Link,
  SearchIcon,
  Button,
  VStack,
  Pressable
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
    <Box flex={1}>
      <HStack justifyContent={'space-around'} my="4">
        <HStack>
          <Image
            source={require('../icon/home-page.png')}
            size="8"
            mr="5"
            alt="home"
          />
          <Text fontSize="24" fontWeight="bold">
            Hello, Daniel!
          </Text>
        </HStack>
        <HStack>
          <Image
            source={require('../icon/notification.png')}
            size="8"
            mr="5"
            alt="noti"
          />
          <Image source={require('../icon/hearts.png')} size="8" alt="favori" />
        </HStack>
      </HStack>
      <HStack ml="5">
        <Input
          placeholder="Search"
          pl="2"
          w={{ base: '87%' }}
          borderRadius={'20'}
          InputRightElement={<SearchIcon size={4} mr="2" color="muted.400" />}
        />
        <Image source={require('../icon/menu.png')} size="8" alt="menu" />
      </HStack>
      <HStack justifyContent={'space-between'} mx="5" my="3">
        <Text fontSize="18">Promotion</Text>
        <Link href="see.com" fontSize="18">
          See all
        </Link>
      </HStack>
      <Pressable onPress={() => navigation.navigate('login')}>
        <Box mx="4" h="160">
          <Image
            source={require('../img/banner.png')}
            borderRadius={'20'}
            w="100%"
            h="100%"
            alt="banner"
          />
        </Box>
      </Pressable>
      <HStack justifyContent={'space-between'} mx="5">
        <Text fontSize="18">All courses</Text>
        <Link fontSize="18" href="see.com">
          See all
        </Link>
      </HStack>
      <HStack ml="5" space={'3'}>
        <Button bgColor={'#4a56fe'} borderRadius={'20'}>
          All Course
        </Button>
        <Button
          bgColor={'#eee'}
          borderRadius={'20'}
          borderWidth={'2'}
          borderColor="#4a56fe"
        >
          <Text color={'#4a56fe'}>Popular</Text>
        </Button>
        <Button
          bgColor={'#eee'}
          borderRadius={'20'}
          borderWidth={'2'}
          borderColor="#4a56fe"
        >
          <Text color={'#4a56fe'}>Newest</Text>
        </Button>
      </HStack>
      <Box>
        <Box
          w="80%"
          h="56%"
          ml="10"
          bgColor={'blue.200'}
          safeAreaTop
          mt={'1'}
        ></Box>

        <Box h="8" mx="5" safeAreaBottom>
          <HStack justifyContent={'space-around'}>
            <Pressable onPress={() => navigation.navigate('home')}>
              <Box w="8" h="8">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/home-page.png')}
                  alt="home"
                />
              </Box>
            </Pressable>
            <Pressable>
              <Box w="8" h="8">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/menu.png')}
                  alt="menu"
                />
              </Box>
            </Pressable>
            <Pressable>
              <Box w="8" h="8">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/mail.png')}
                  alt="mail"
                />
              </Box>
            </Pressable>
            <Pressable>
              <Box w="8" h="8">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/user.png')}
                  alt="profile"
                />
              </Box>
            </Pressable>
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
