import React from 'react'
import {
  Input,
  Text,
  Box,
  HStack,
  Image,
  VStack,
  Button,
  Link,
  Checkbox
} from 'native-base'
const Register = (props) => {
  const { navigation } = props
  return (
    <Box flex={1} justifyContent={'center'} bgColor={'white'}>
      <VStack p="6" mx="2" my="2">
        <Box alignItems={'center'}>
          <VStack>
            <Image
              alt="logo"
              source={require('../img/sinau-logo.png')}
              w="200"
              h="200"
            />
            <Text fontSize={'20'} fontWeight="bold" pl="8">
              Sign up for free
            </Text>
          </VStack>
        </Box>
        <VStack>
          <Text ml="3" color="gray.500" fontWeight="bold">
            Email*
          </Text>
          <Input
            placeholder="username"
            pl={'4'}
            mt={'2'}
            borderColor={'#4a56fe'}
            borderRadius={20}
          />
        </VStack>
        <VStack mt="4">
          <Text ml="3" color="gray.500" fontWeight="bold">
            Password*
          </Text>
          <Input
            placeholder="password"
            pl={'4'}
            mt={'2'}
            borderColor={'#4a56fe'}
            borderRadius={20}
          />
        </VStack>
        <VStack>
          <Checkbox mt={'2'}>
            <Text>Remember me</Text>
          </Checkbox>

          <Button
            borderRadius="20"
            py={'2'}
            my={'4'}
            bgColor={'#4a56fe'}
            onPress={() => navigation.navigate('cong')}
          >
            Sign up
          </Button>
        </VStack>

        <VStack alignItems={'center'} space={'5'}>
          <Text color="#4a56fe">Forgot the Password?</Text>
          <Text>or continue with</Text>
        </VStack>
        <HStack justifyContent={'space-around'} py="3">
          <Image source={require('../img/f.png')} size="8" alt="face" />
          <Image source={require('../img/g.png')} size="8" alt="google" />
        </HStack>
        <HStack justifyContent={'center'}>
          <Text color="gray.500">Already have an account? </Text>
          <Link onPress={() => navigation.navigate('login')}>Sign in</Link>
        </HStack>
      </VStack>
    </Box>
  )
}
export default Register
