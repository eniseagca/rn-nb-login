import React from 'react'
import {
  Text,
  Box,
  HStack,
  Pressable,
  Image,
  FlatList,
  VStack,
  Spacer
} from 'native-base'

const Notification = (props) => {
  const { navigation } = props
  const data = [
    {
      id: '1',
      name: 'noti1',
      image: require('../img/noti1.png'),
      desc: 'Course succesfully enrolled',
      time: '17:00'
    },
    {
      id: '2',
      name: 'noti2',
      image: require('../img/noti1.png'),
      desc: 'Thank you for purchasing',
      time: '16:00'
    },
    {
      id: '3',
      name: 'noti3',
      image: require('../img/noti2.png'),
      desc: '3D Design Basic(NEW)',
      time: '15:00'
    },
    {
      id: '4',
      name: 'noti4',
      image: require('../img/noti3.png'),
      desc: 'Discount 50% available !',
      time: '14:00'
    },
    {
      id: '5',
      name: 'noti5',
      image: require('../img/noti4.png'),
      desc: 'Characters Animation (NEW)',
      time: '13:00'
    }
  ]

  return (
    <Box>
      <Box w="100%" h="20" bgColor={'white'}>
        <HStack>
          <Pressable onPress={() => navigation.navigate('home')}>
            <Image
              ml="5"
              source={require('../icon/home-page.png')}
              w="10"
              h="10"
              alt="home"
            ></Image>
          </Pressable>
          <Text fontSize="24" fontWeight={'bold'} ml="10">
            Notification
          </Text>
        </HStack>
      </Box>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box w="100%" h="90" pl="5" key={item} mb="3" bgColor={'white'}>
            <HStack>
              <Image source={item.image} w="90" h="90" alt="notif"></Image>
              <Spacer />
              <Box w="290" h="90">
                <VStack>
                  <Text fontSize="20" fontWeight={'bold'}>
                    {item.desc}
                  </Text>
                  <Text color="gray.500">{item.time}</Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        )}
      />
    </Box>
  )
}
export default Notification
