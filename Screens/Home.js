import React from 'react'
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
          <Pressable onPress={() => navigation.navigate('noti')}>
            <Image
              source={require('../icon/notification.png')}
              size="8"
              mr="5"
              alt="noti"
            />
          </Pressable>
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
      <HStack justifyContent={'space-between'} mx="5" mb="2">
        <Text fontSize="18">Awesome courses</Text>
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
        <Box w="80%" h="54%" ml="10" safeAreaTop mt={'1'}>
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

        <Box h="12" mx="5" safeAreaBottom>
          <HStack justifyContent={'space-around'}>
            <Pressable onPress={() => navigation.navigate('home')}>
              <Box w="20" h="9">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/home.png')}
                  alt="home"
                />
              </Box>
            </Pressable>
            <Pressable>
              <Box w="9" h="9">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/menu.png')}
                  alt="menu"
                />
              </Box>
            </Pressable>
            <Pressable>
              <Box w="9" h="9">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/message.png')}
                  alt="mail"
                />
              </Box>
            </Pressable>
            <Pressable>
              <Box w="9" h="9">
                <Image
                  w="100%"
                  h="100%"
                  source={require('../icon/profile.png')}
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
