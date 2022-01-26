import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Begin from './Screens/Begin'
import Login from './Screens/Login'
import Home from './Screens/Home'
import Notification from './Screens/Notification'
import { NativeBaseProvider } from 'native-base'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="begin" component={Begin} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="noti" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
export default App
