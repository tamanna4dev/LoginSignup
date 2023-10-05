import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/Screen/Welcome'
import Login from './src/Screen/Login'
import AppNavigation from './src/Navigation/AppNavigation'
import SignUp from './src/Screen/SignUp'
import Homepage from './src/Screen/Homepage'






const App = () => {
  return (
    <View style={{flex:1}}>

   
   <AppNavigation /> 


    </View>
  )
}

export default App

const styles = StyleSheet.create({})