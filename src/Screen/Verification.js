import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from "react";


const verification = ({navigation}) => {
  const [errormsg, setErrormsg] = useState(null);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#000', padding: 20,width:360,height:240}}>
    
<Text style={{color:'#fff', fontWeight :'600',fontSize:56,textAlign:'center' }}>USED</Text>
<Text style={{color:'#fff', fontWeight :'600',fontSize:21,textAlign:'center' }}>Used2, Inc.</Text>
<Text style={{color:'#fff', fontWeight :'400',fontSize:10,textAlign:'center' }}>Buying and selling online</Text>
</View>
<View style={{ backgroundColor: '#fff',width:360,borderTopRightRadius:25,borderTopLeftRadius:25,marginTop:-20,padding:25}}>
<Text style={{color:'#000', fontWeight :'600',fontSize:28,textAlign:'center', }}>Verification</Text>
<Text style={styles.bwmessage}>A Code has been sent been sent to you on email</Text>
{
errormsg ? (<Text style={styles.errormessage}>{errormsg} </Text>): null
}

<Text style={styles.lables}>code</Text>

<TextInput style={styles.input}
placeholder="Enter your code"
onPressIn={() => setErrormsg(null)}
onChangeText={(text) => setFdata({ ...fdata, password: text })}
   />
<Text style={{color:'#f9005c', fontWeight :'400',fontSize:14,textAlign:'right' }}>Forgot Password</Text>

<TouchableOpacity
            onPress={() => {
              Sendtobackend('Homepage');
            }}
          >
            <Text style={styles.button}>Login in</Text>
          </TouchableOpacity>
  

<Text style={{color:'#9f8c90', fontWeight :'400',fontSize:14, }}>Don't have an account?
<Text style={{color:'#f9005c', fontWeight :'400',fontSize:14,marginBottom:-5 }}> Create a new account</Text>
</Text>
</View>
    </View>
  )
}

export default verification

const styles = StyleSheet.create({
    input: {
        height: 49,
           backgroundColor:'#ddd',
            padding: 10,
            borderRadius:10,
            marginVertical:8,
            width:308,
    
            
    },
    lables: {
        fontSize: 15,
        color:'#9f8c90',
        fontWeight: '500',
    },
    button:{
      color:'#fff',
      backgroundColor:'#f9005c',
      textAlign:'center',
      borderRadius:4,
      width:305,
      height:45,
      marginVertical:20,
      fontSize:16,
      padding:9,
    }  ,
    errormessage: {
        color: "white",
        fontSize: 12,
        textAlign: "center",
        backgroundColor: "#F50057",
        padding: 3,
        borderRadius: 7,
        height: 25,
        marginVertical: 10,
      },

      bwmessage:{
        color: "white",
        fontSize: 12,
        textAlign: "center",
        backgroundColor: "#000",
        padding: 3,
        borderRadius: 7,
        height: 25,
        marginVertical: 10,
      },
    });
