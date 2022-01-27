import React from 'react'
import { Box, Image, VStack, Text, Button } from 'native-base'

const Congra = (props) => {
  const { navigation } = props
  return (
    <Box
      bgColor={'white'}
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <VStack p={'8'}>
        <Box>
          <Image
            source={require('../img/sinau-logo.png')}
            w="300"
            h="300"
            alt="logo"
          />
          <Text fontWeight={'bold'} color={'#4a56fe'} fontSize={'36'} pl="20">
            Congrats!
          </Text>
          <Text
            fontWeight="semibold"
            fontSize={'16'}
            color={'gray.600'}
            mt="5"
            ml="50"
          >
            Your profile ready to use.
          </Text>
        </Box>
        <Box mt={'20'}>
          <Button
            bg="#4a56fe"
            borderRadius={'20'}
            onPress={() => navigation.navigate('home')}
          >
            Go to homepage
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
export default Congra
