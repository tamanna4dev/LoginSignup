import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>This is Homepage</Text>
 
          <TouchableOpacity

onPress={() => {
  navigation.navigate('Login')
}}>

<Text style={styles.button}>Logout</Text>
</TouchableOpacity>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
    flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
fontSize:27,
fontWeight:600
    },
    button:{
  color: "white",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#F50057",
    padding: 4,
    borderRadius: 7,
    height: 35,
    width:100,
    marginVertical: 15,
    }
})