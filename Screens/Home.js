import React from 'react'
import {NativeBaseProvider ,Center, Text, Button} from 'native-base'

const Home = (props) => {
    const {navigation} = props

    return(
        <NativeBaseProvider>
            <Center>
                <Text>Home Screen</Text>
            </Center>
        </NativeBaseProvider>
    )
}
export default Home