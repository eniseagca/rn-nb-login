import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Begin from './Screens/Begin'
import Login from './Screens/Login'
import Home from './Screens/Home'
import Register from './Screens/Register'
import Congra from './Screens/Congra'
import Promotion from './Screens/Promotion'
import Notification from './Screens/Notification'
import Awesome from './Screens/Awesome'
import { NativeBaseProvider } from 'native-base'
import CourseDetail from './Screens/Course-detail'

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
          <Stack.Screen name="promotion" component={Promotion} />
          <Stack.Screen name="awesome" component={Awesome} />
          <Stack.Screen name="coursedetail" component={CourseDetail} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
export default App
