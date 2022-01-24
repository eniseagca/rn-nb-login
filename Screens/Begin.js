import React from 'react'
import { Button, VStack, Center, NativeBaseProvider, Image, Text, Stack } from 'native-base'

const Begin = (props) => {
    const {navigation} = props
    return (
        <NativeBaseProvider>
            <Center flex={1} bg="white" >
                <VStack space={'8'}>
                    <Image mt="16" source={require('../img/sinau-logo.png')} w="300" h="300" alt='sinau' />
                   <Text mt="8" fontWeight="semibold" color={'gray.600'} ml="7" fontSize="sm">
                        The best online course of this century.
                    </Text>
                  
                   <Button bg="#4a56fe" rounded={'30'} mt="16" onPress={()=>navigation.navigate('login')} >
                        Next
                    </Button>

                    </VStack>
            </Center>
        </NativeBaseProvider>
    )
}
export default Begin