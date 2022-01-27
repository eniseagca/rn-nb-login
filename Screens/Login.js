import React, { useState } from 'react'
import {
  Box,
  Text,
  Input,
  Button,
  Image,
  Checkbox,
  Link,
  HStack,
  VStack
} from 'native-base'

const Login = (props) => {
  const { navigation } = props
  const [goster, setGoster] = useState(false)
  const [userName, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  function postData() {
    fetch('https://reqbin.com/sample/post/json', { method: 'Post' })
      .then((respond) => {
        return respond.json()
      })
      .then((respond) => {
        if (respond.success === 'true') {
          navigation.navigate('home')
        } else {
          setGoster(true)
        }
      })
  }

  return (
    <Box flex={1} justifyContent={'center'} bgColor={'white'}>
      <VStack p="6" mx="2" my="2">
        <VStack ml="20">
          <Image
            alt="logo"
            source={require('../img/sinau-logo.png')}
            w="200"
            h="200"
          />
          <Text fontSize={'20'} fontWeight="bold">
            Sign in to your account
          </Text>
        </VStack>
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
            onChangeText={(text) => setUser(text)}
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
            onChangeText={(text) => setPassword(text)}
          />
        </VStack>
        <VStack>
          <Checkbox mt={'2'}>
            <Text>Remember me</Text>
          </Checkbox>

          <Button
            disabled={password.length === 0 || userName.length === 0}
            borderRadius="20"
            py={'2'}
            my={'4'}
            bgColor={'#4a56fe'}
            onPress={() => navigation.navigate('home')}
          >
            Sign in
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
          <Text color="gray.500">Don't have an account? </Text>
          <Link href="signup.com">Sign up</Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Login
