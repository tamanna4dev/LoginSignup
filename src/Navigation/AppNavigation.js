import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screen/Welcome';
import SignUp from '../Screen/SignUp';
import Login from '../Screen/Login';
import Homepage from '../Screen/Homepage';






const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      
  
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
      
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default AppNavigation

const styles = StyleSheet.create({})