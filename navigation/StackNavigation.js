import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SignupScreen from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
   
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Registro' component={SignupScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
   

    
  )
}


export default StackNavigation