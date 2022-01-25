import React from 'react'
import {NativeBaseProvider ,Center, Text, Button ,Input,SearchIcon,HStack,Stack,VStack,Image,Box ,Link,AspectRatio } from 'native-base'

const Home = (props) => {
    const {navigation} = props

    return(
        <NativeBaseProvider>
            <Center> 
                <HStack space={10} ml={'1'} py={'4'}>
                    <Stack ml={'1'}><Image source={require('../icon/home-page.png')} size="8"/></Stack>
                    <Stack><Text w="150" fontSize="24" fontWeight="bold">Hello!</Text></Stack>
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
               <HStack space={'180'} my='1'>
                   <Stack >
                       <Text fontSize="20">Promotion</Text>
                   </Stack>
                   <Stack>
                       <Link isUnderlined="false" _text={{fontSize:'20',color:'#4053fd',fontWeight:"bold"}}>See all</Link>
                   </Stack>
               </HStack>
                    <Box rounded={'3xl'} bg={'#4053fd'} w="370" h="150">
                            
                        <Center bg="violet.500" position="absolute" top="10" left="41" >
                            <Image source={require('../img/colour.png')} size="md"/>
                        </Center>
                        <Center position="absolute" right="45" top="8" w="150">
                            <Text fontSize={'20'}>3D Design Fundamentals</Text>
                            <Button variant="solid"  bg={"yellow.400"} rounded={'xl'} _text={{color:'gray.50'}} mt="2">Check Now!</Button>
                        </Center>
                    </Box>
                    <HStack space={'120'} my='5'>
                   <Stack >
                       <Text fontSize="20">Awesome Courses</Text>
                   </Stack>
                   <Stack>
                       <Link isUnderlined="false" _text={{fontSize:'20',color:'#4053fd',fontWeight:"bold"}}>See all</Link>
                   </Stack>
               </HStack>
               <Button.Group  rounded={'xl'}  _focus={{colorScheme:'#4053fd'}}>
                   <Button>All Course</Button>
                   <Button>Popular</Button>
                   <Button>Newest</Button>
               </Button.Group>
            </Center>
        </NativeBaseProvider>
    )
}


export default Home