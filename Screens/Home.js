import React from 'react'
import Footer from '../Components/Footer'
import {
  Box,
  HStack,
  Text,
  Image,
  Input,
  Link,
  SearchIcon,
  Button,
  Pressable,
  FlatList,
  VStack,
  Spacer
} from 'native-base'
const Fav = (props) => {
  const { isFav } = props
  if (isFav) {
    return <Image source={require('../img/fav.png')} alt="fav" w="6" h="6" />
  } else {
    return (
      <Image source={require('../img/notfav.png')} alt="notfav" w="6" h="6" />
    )
  }
}

const Home = (props) => {
  const { navigation } = props

  const data = [
    {
      id: '1',
      image: require('../img/noti2.png'),
      desc: '3D Design Basic',
      star: '4',
      isFav: false,
      price: '$24,99'
    },
    {
      id: '2',
      image: require('../img/noti4.png'),
      desc: 'Characters Animation',
      star: '5',
      isFav: true,
      price: '$22,69'
    }
  ]
  return (
    <Box flex={1} bgColor={'#fff'}>
      <HStack justifyContent={'space-around'} mt="12" mb="5">
        <HStack>
          <Image
            source={require('../icon/logo.png')}
            size="9"
            mr="5"
            alt="home"
            borderRadius={'10'}
          />
          <Text fontSize="24" fontWeight="bold">
            Hello, Daniel!
          </Text>
        </HStack>
        <HStack>
          <Pressable onPress={() => navigation.navigate('noti')}>
            <Image
              borderRadius={'10'}
              source={require('../icon/noti.png')}
              size="9"
              mr="5"
              alt="noti"
            />
          </Pressable>
          <Image borderRadius={'10'} source={require('../icon/fav.png')} size="9" alt="favori" />
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
        <Pressable>
          <Image source={require('../icon/menu.png')} size="8" alt="menu" />
        </Pressable>
      </HStack>
      <HStack justifyContent={'space-between'} mx="5" mt="3">
        <Text fontSize="18">Promotion</Text>
        <Link onPress={() => navigation.navigate('promotion')} fontSize="18">
          See all
        </Link>
      </HStack>
      <Pressable onPress={() => navigation.navigate('login')}>
        <Box mx="4" h="200" py="5">
          <Image
            source={require('../img/banner.png')}
            borderRadius={'20'}
            w="100%"
            h="100%"
            alt="banner"
          />
        </Box>
      </Pressable>
      <HStack justifyContent={'space-between'} mx="5" mb="2">
        <Text fontSize="18">Awesome courses</Text>
        <Link fontSize="18" onPress={() => navigation.navigate('awesome')}>
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
        <Box w="80%" h="300" ml="10" safeAreaTop mt={'1'}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box my="3">
                <HStack>
                  <Image source={item.image} w="70" h="70" alt="course" />
                  <Box ml="5" w="150">
                    <VStack>
                      <Text mb="2" fontWeight="bold" fontSize="14">
                        {item.desc}
                      </Text>
                      <HStack>
                        <Image source={require('../img/star.png')} alt="star" />
                        <Text pl="2">{item.star}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <Box ml="6">
                    <VStack>
                      <Fav isFav={item.isFav} mb="2" />
                      <Text color="#4a56fe">{item.price}</Text>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            )}
          />
        </Box>

        <Footer />
      </Box>
    </Box>
  )
}

export default Home
