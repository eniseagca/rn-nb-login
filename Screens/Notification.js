import React from 'react'
import Footer from '../Components/Footer'
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
    <Box flex={1} bgColor={'white'}>
      <Box w="100%" h="100" my="7" ml="1" safeAreaTop>
        <HStack>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              ml="5"
              source={require('../icon/back-button.png')}
              w="9"
              h="9"
              borderRadius={'5'}
              alt="home"
            ></Image>
          </Pressable>
          <Text fontSize="24" fontWeight={'bold'} ml="10">
            Notification
          </Text>
        </HStack>
      </Box>
      <Box w="100%" h="600">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Box w="100%" h="70" pl="8" key={item} mb="3" bgColor={'white'}>
              <HStack>
                <Image source={item.image} w="70" h="70" alt="notif"></Image>
                <Spacer />
                <Box w="290" h="90">
                  <VStack ml="2">
                    <Text fontSize="16" fontWeight={'semibold'}>
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
      <Footer />
    </Box>
  )
}
export default Notification
