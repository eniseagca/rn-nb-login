import React, { useState, useEffect } from 'react'
import {
  Box,
  HStack,
  Text,
  Image,
  Input,
  Link,
  SearchIcon,
  Button
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
    <Box>
      <HStack justifyContent={'space-around'} my="4">
        <HStack>
          <Image source={require('../icon/home-page.png')} size="8" mr="5" />
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
        <Image source={require('../icon/menu.png')} size="8" />
      </HStack>
      <HStack justifyContent={'space-between'} mx="5" my="3">
        <Text fontSize="18">Promotion</Text>
        <Link href="see.com" fontSize="18">
          See all
        </Link>
      </HStack>
      <Image
        mx="4"
        source={require('../img/banner.png')}
        borderRadius={'20'}
        w="92%"
        h="40%"
        alt="banner"
      />
      <HStack justifyContent={'space-between'} mx="5" my="3">
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
    </Box>
  )
}

export default Home
