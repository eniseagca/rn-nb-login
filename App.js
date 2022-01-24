import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Begin from './Screens/Begin'
import Login from './Screens/Login'
const Stack = createNativeStackNavigator()

const App = () => {
  return(
     <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="begin" component={Begin}/>
      <Stack.Screen name="login" component={Login}/>
    </Stack.Navigator>
      </NavigationContainer>
      )
 
}
export default App