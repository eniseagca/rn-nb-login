/* eslint-disable react/prop-types */
import React from 'react'
import { Button, VStack, Box, Image, Text } from 'native-base'

const Begin = (props) => {
  const { navigation } = props
  return (
    <Box
      bgcolor={'black'}
      flex={1}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <VStack p={'8'}>
        <Image
          source={require('../img/sinau-logo.png')}
          w="300"
          h="300"
          alt="logo"
          mb={'5'}
        />
        <Text
          fontWeight="semibold"
          color={'gray.600'}
          fontSize="sm"
          py="20"
          ml="5"
        >
          The best online course of this century.
        </Text>

        <Button
          bg="#4a56fe"
          borderRadius={'20'}
          onPress={() => navigation.navigate('login')}
          mt={'2'}
        >
          Next
        </Button>
      </VStack>
    </Box>
  )
}
export default Begin
