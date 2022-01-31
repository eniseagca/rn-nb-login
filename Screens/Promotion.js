import React from 'react'
import { Box, Text, Image, HStack, VStack, Button, Pressable } from 'native-base'
import Footer from '../Components/Footer'

const Promotion = (props) => {
    const { navigation } = props

    return (
        <Box bgColor={'#fff'}>
            <Box mt="20">
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
                    <Text fontSize={'24'} fontWeight={'bold'} ml="10"> Promotion</Text>
                </HStack>
            </Box>
            <Box>
                <Box w="90%" h="170" bgColor={'#5057fe'} borderRadius={'20'} mt="5" ml="5">
                    <HStack>
                        <Image source={require('../img/1.png')} w="154" h="162" borderRadius={'20'} mt="2" ml="5" alt="image1" />
                        <VStack mt="5" w="40" ml="2">
                            <Text fontSize={'20'} fontWeight={'700'} color={'#fff'} mb="2">3D Design Fundamentals</Text>
                            <Button w="24" h="9" borderRadius={'20'} bgColor={'#ffb800'} _text={{ color: '#fff', fontWeight: '600', fontSize: "12" }} >Check Now!</Button>
                        </VStack>
                    </HStack>
                </Box>
                <Box w="90%" h="170" bgColor={'#ffca42'} borderRadius={'20'} mt="5" ml="5">
                    <HStack>
                        <Image source={require('../img/2.png')} w="154" h="162" borderRadius={'20'} mt="2" ml="2" alt="image2" />
                        <VStack mt="5" w="40" ml="2" >
                            <Text fontSize={'20'} fontWeight={'700'} color={'#fff'} mb="2" >3D Abstract Design Course</Text>
                            <Button w="24" h="9" borderRadius={'20'} bgColor={'#5057fe'} _text={{ color: '#fff', fontWeight: '600', fontSize: "12" }} >Check Now!</Button>

                        </VStack>
                    </HStack>
                </Box>

                <Box w="90%" h="170" bgColor={'#5057fd'} borderRadius={'20'} mt="5" ml="5">
                    <HStack>
                        <Image source={require('../img/3.png')} w="162" h="142" borderRadius={'20'} mt="2" ml="2" alt="image3" />
                        <VStack mt="5" w="40" ml="2">
                            <Text fontSize={'20'} fontWeight={'700'} color={'#fff'} mb="2" >3D Object Shape Course</Text>
                            <Button w="24" h="9" borderRadius={'20'} bgColor={'#ffb800'} _text={{ color: '#fff', fontWeight: '600', fontSize: "12" }} >Check Now!</Button>

                        </VStack>
                    </HStack>
                </Box>
            </Box>
            <Box pt="20" >
                <Footer />
            </Box>
        </Box>
    )
}
export default Promotion