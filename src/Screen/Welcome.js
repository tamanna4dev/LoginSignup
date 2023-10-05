import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
   
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#000', padding: 20,width:360,height:500}}>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'#fff', fontWeight :'600',fontSize:50, }}>WELCOME</Text>
        <Text style={{color:'#fff', fontWeight :'600',fontSize:50, }}>TO</Text>

<Text style={{color:'#fff', fontWeight :'600',fontSize:50,textAlign:'center' }}>USES</Text>
<TouchableOpacity

          onPress={() => {
            navigation.navigate('SignUp')
          }}>

<Text style={{ color:'#fff',backgroundColor:'#f9005c',textAlign:'center',borderRadius:4,width:140,height:43,marginVertical:20,fontSize:16,padding:8,}}> Sign up</Text>


        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => {
            navigation.navigate('Login')
          }}>

<Text style={{color:'#fff',backgroundColor:'#f9005c',textAlign:'center',borderRadius:4,width:140,height:43,marginVertical:0,fontSize:17,padding:8,}}>Log in </Text>


        </TouchableOpacity>
</View>
    </View>    
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})