import React from 'react'
import { Box, Image, Text, Input, Pressable, HStack, TextArea, Button } from 'native-base'

const CourseDetail = (props) => {
    const { navigation } = props
    const { route } = props
    return (
        <Box pt="20" bgColor={'#fff'}>
            <Box pl="5">
                <HStack>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={require('../icon/back-button.png')} w="9" h="9" alt="back" pl="5" />
                    </Pressable>
                    <Text fontSize={"24"} fontWeight={'bold'} pl="3"> {route.params.paramKey.course} </Text>
                </HStack>
            </Box>
            <Box pl="5">
                <Box>
                    <Text fontSize={'20'} fontWeight={'bold'} py="5"> {route.params.paramKey.course} </Text>
                    <TextArea borderWidth={'0'} fontSize="14" px="1">
                        {route.params.paramKey.desc}
                    </TextArea>
                </Box>
                <Box py="5" >
                    <Text fontSize={'18'} fontWeight={'semibold'}>{route.params.paramKey.lesson}</Text>

                    <HStack pt="3" pl="10">
                        <Image source={(route.params.paramKey.image)} w="70" h="70" alt="image" />
                        <Text pl="10" fontSize={'14'} fontWeight={'semibold'}>{route.params.paramKey.course}</Text>
                    </HStack>
                </Box>

                <Box>
                    <Text fontSize={'18'} fontWeight={'semibold'}>
                        Students in this course
                    </Text>
                    <Box mt="3" bgColor={"blueGray.200"} w="90%" h="100" mx="2" borderRadius={'20'}>

                    </Box>
                </Box>

                <Box>
                    <Text fontSize={'18'} fontWeight={'semibold'}>
                        Testimonials
                    </Text>
                    <Box mt="3" bgColor={"blueGray.200"} w="90%" h="100" mx="2" borderRadius={'20'}>

                    </Box>
                </Box>
            </Box>


            <Box mt="10">
                <Button bgColor={'#5057fe'} w="80%" h="12" mx="10" borderRadius={"20"} pt="6" >Enroll-{route.params.paramKey.price} </Button>
            </Box>
        </Box>
    )
}
export default CourseDetail