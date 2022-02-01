import React from 'react'
import { Box, Text, Image, FlatList, VStack, HStack, Button, Pressable } from 'native-base'
import Footer from '../Components/Footer'

const Fav = (props) => {
    const { isFav } = props

    if (isFav) {
        return <Image source={require('../img/fav.png')} alt="fav" w="6" h="6" />
    }
    else {
        return <Image source={require('../img/notfav.png')} alt="notfav" w="6" h="6" />
    }

}
const Awesome = (props) => {
    const { navigation } = props
    const awesome_data = [
        {
            "id": "1",
            "image": require('../img/noti3.png'),
            "course": "3D Design Basic",
            "star": "4",
            "isFav": false,
            "lesson": "24 lessons",
            "price": "$24,99",
            "desc": "In this course you will learn how to build a space to a 3-dimensional product.There are 24 premium learning videos for you."
        },
        {
            "id": "2",
            "image": require('../img/noti4.png'),
            "course": "Characters Animation",
            "star": "4.8",
            "isFav": true,
            "lesson": "22 lessons",
            "price": "$22,69",
            "desc": "In this course you will learn how to build a space to a 3-dimensional product.There are 24 premium learning videos for you."

        },
        {
            "id": "3",
            "image": require('../img/aw3.png'),
            "course": "3D Abstract Design",
            "star": "4.5",
            "isFav": false,
            "lesson": "18 lessons",
            "price": "$30,50",
            "desc": "In this course you will learn how to build a space to a 3-dimensional product.There are 24 premium learning videos for you."

        },
        {
            "id": "4",
            "image": require('../img/aw4.png'),
            "course": "Product Design",
            "star": "4.8",
            "isFav": false,
            "lesson": "23 lessons",
            "price": "$25,99",
            "desc": "In this course you will learn how to build a space to a 3-dimensional product.There are 24 premium learning videos for you."

        },
        {
            "id": "5",
            "image": require('../img/aw5.png'),
            "course": "Game Design",
            "star": "4.9",
            "isFav": false,
            "lesson": "25 lessons",
            "price": "$12,69",
            "desc": "In this course you will learn how to build a space to a 3-dimensional product.There are 24 premium learning videos for you."

        }
    ]

    return (
        <Box flex={1} bgColor={'#f6f7fe'}>
            <Box pt="20" pl="5" mb="1" bgColor={'#fff'} pb="5">
                <HStack mb="5">
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={require('../icon/back-button.png')} w="8" h="8" alt="back" />
                    </Pressable>
                    <Text fontSize={'22'} fontWeight={'bold'} ml="5">
                        Awesome Courses
                    </Text>
                </HStack>
                <Box>
                    <HStack space={'3'} >
                        <Button bgColor={'#304ffe'} _text={{ color: '#fff' }} borderRadius={'20'} w="25%" h="9">
                            All Courses
                        </Button>

                        <Button w="25%" h="9" bgColor={'#fff'} borderColor={'#304ffe'} borderWidth={'1'} borderRadius={'20'} _text={{ color: '#304ffe' }}>
                            Popular
                        </Button>

                        <Button w="26%" h="9" bgColor={'#fff'} borderColor={'#304ffe'} borderWidth={'1'} borderRadius={'20'} _text={{ color: '#304ffe' }} >
                            Newest
                        </Button>
                    </HStack>
                </Box>
            </Box>
            <Box >
                <FlatList data={awesome_data} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                    <Box bgColor={'#fff'} pt="3" mb="5" ml="5" w="90%" h="90" borderRadius={'20'}>
                        <HStack>

                            <Image source={(item.image)} w="60" h="60" ml="5" />
                            <VStack ml="3" w="200">
                                <Pressable onPress={() => navigation.navigate('coursedetail', { paramKey: item })}>
                                    <Text fontSize="18" fontWeight={'semibold'}>
                                        {item.course}
                                    </Text>
                                </Pressable>
                                <Text color={'gray.600'} fontSize={"10"}>{item.lesson}</Text>
                                <HStack >
                                    <Image source={require('../img/star.png')} w="4" h="4" />
                                    <Text fontSize={'12'} ml="1" >
                                        {item.star}
                                    </Text>
                                </HStack>
                            </VStack>

                            <VStack ml="1" alignItems={"flex-end"} justifyContent={'center'}>
                                <Fav isFav={item.isFav} mt="3" />
                                <Text mt="3" color={'blue.900'}>
                                    {item.price}
                                </Text>
                            </VStack>

                        </HStack>

                    </Box>

                )} />
            </Box>

            <Box my="10" mx="4">
                <Footer />
            </Box>
        </Box>
    )
}
export default Awesome