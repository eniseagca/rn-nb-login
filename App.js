import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Begin from './Screens/Begin'
import Login from './Screens/Login'
import Home from './Screens/Home'
import Register from './Screens/Register'
import Congra from './Screens/Congra'
import Users from './Screens/Users'
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
          <Stack.Screen name="regi" component={Register} />
          <Stack.Screen name="cong" component={Congra} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="noti" component={Notification} />
          <Stack.Screen name="users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
export default App
