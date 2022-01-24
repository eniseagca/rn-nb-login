import React, { useState } from 'react'
import { Text, Input, NativeBaseProvider, Center, Button, Image, Checkbox, Link, HStack, Stack } from 'native-base'

const Login = (props) => {
    const { navigation } = props
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <NativeBaseProvider>
            <Center flex={1} bg="white" >

                <Image source={require('../img/sinau-logo.png')} w="200" h="200" alt="logo" />
                <Text fontSize="2xl" fontWeight="bold" color='gray.700' >Sign in to your account</Text>
                <Stack space={2}>
                    <Stack space={1}>
                        <Text pt={'3'} pl={'2'} color='gray.400' fontWeight={'bold'} >Email<Text color='red.500'>*</Text></Text>
                        <Input variant="rounded" placeholder="Email or Phone Number" w={{ base: "100%" }} />
                        <Text pt={'3'} pl={'2'} color='gray.400' fontWeight={'bold'}>Password<Text color='red.500' >*</Text></Text>
                    </Stack>
                    <Input variant="rounded" placeholder="Password" w={{ base: "75%", md: "25%", }} type={show ? "text" : "password"}
                        InputRightElement={
                            <Button size="xs" w="1/6" h="full" onPress={handleClick} bg="#97a6fe" _text={{ color: "white" }} >
                                {show ? "Hide" : "Show"}
                            </Button>
                        } />
                    <Checkbox value="purple" colorSheme="purple" accessibilityLabel='Remember me' py={'1'} size="sm" >Remember me</Checkbox>
                    <Button bg="#97a6fe" w="300" rounded={'30'} _text={{ color: "white" }} >Sign in</Button>
                </Stack>

                <Link href="password.com" mt={4} _text={{ color: "#415dfe", fontWeight: "medium" }} isUnderlined='false'>Forgot the password?</Link>
                <Text pb="3">or continue with</Text>

                <Stack space={5}>
                    <HStack space={20}>
                        <Link href="facebook.com"><Image source={require('../img/f.png')} size="xs" alt="face" />
                        </Link>
                        <Link href="google.com" ><Image source={require('../img/g.png')} size="xs" alt="google" />
                        </Link>
                    </HStack>
                </Stack>

                <Text>Don't have an account </Text>  <Link href="signup.com" _text={{ color: "#415dfe" }} isUnderlined='false' >Sign up</Link>

            </Center>
        </NativeBaseProvider>
    )
}

export default Login