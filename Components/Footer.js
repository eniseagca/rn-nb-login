import React from 'react'
import { Box, HStack, Pressable, Image } from 'native-base'

const Footer = (props) => {

    return (
        <Box flex={.2}>
            <HStack justifyContent={'space-around'}>
                <Pressable onPress={() => props.navigation.navigate('home')}>
                    <Box w="20" h="9">
                        <Image
                            w="100%"
                            h="100%"
                            source={require('../icon/home.png')}
                            alt="home"
                        />
                    </Box>
                </Pressable>
                <Pressable>
                    <Box w="9" h="9">
                        <Image
                            w="100%"
                            h="100%"
                            source={require('../icon/menu.png')}
                            alt="menu"
                        />
                    </Box>
                </Pressable>
                <Pressable>
                    <Box w="9" h="9">
                        <Image
                            w="100%"
                            h="100%"
                            source={require('../icon/message.png')}
                            alt="mail"
                        />
                    </Box>
                </Pressable>
                <Pressable>
                    <Box w="9" h="9">
                        <Image
                            w="100%"
                            h="100%"
                            source={require('../icon/profile.png')}
                            alt="profile"
                        />
                    </Box>
                </Pressable>
            </HStack>
        </Box>
    )
}

export default Footer