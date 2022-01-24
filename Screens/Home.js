import React from 'react'
import {NativeBaseProvider ,Center, Text, Button ,Input,SearchIcon,HStack,Stack,VStack,Image,Box} from 'native-base'

const Home = (props) => {
    const {navigation} = props

    return(
        <NativeBaseProvider>
            <Center> 
                <HStack space={10} ml={'1'} pt={'10'} pb={'10'}>
                    <Stack ml={'1'}><Image source={require('../icon/home-page.png')} size="8"/></Stack>
                    <Stack><Text w="150" fontSize="20" fontWeight="bold">Hello!</Text></Stack>
                    <Stack><Image source={require('../icon/notification.png')} size="8"/></Stack>
                    <Stack><Image source={require('../icon/hearts.png')} size="8"/></Stack>
                </HStack>

                <HStack space={10}>
                    <Stack>
                        
                <Input borderColor={'blue.500'} w={'300'} variant="rounded"
                InputRightElement={
                    <SearchIcon 
                    size={4} mr="2" color="muted.400"  /> } placeholder="Search"/>  
                    </Stack>
                    <Stack>
                        <Image source={require('../icon/menu.png')} size="8"/>
                    </Stack>
                </HStack>
               
            </Center>
        </NativeBaseProvider>
    )
}
export default Home