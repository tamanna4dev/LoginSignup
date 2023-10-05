import { StyleSheet, Text, View,TextInput ,TouchableOpacity,} from 'react-native'
import React, { useState } from "react";

const Login = ({navigation}) => {
  const [errormsg, setErrormsg] = useState(null);
  const [fdata, setFdata] = useState({
    
    email: "",
    password: "",
  });


  const Sendtobackend = () => {
    // console.log(fdata);
    if (fdata.email == '' || fdata.password == ''){
        setErrormsg("All fields are required");
        return;
      }
      else {
        alert('logged successfully');
        navigation.navigate('Homepage')
      }
  }
  return (
       
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#000', padding: 20,width:360,height:240}}>
    
<Text style={{color:'#fff', fontWeight :'600',fontSize:56,textAlign:'center' }}>USES</Text>
<Text style={{color:'#fff', fontWeight :'600',fontSize:18,textAlign:'center' }}>Used2, Inc.</Text>
<Text style={{color:'#fff', fontWeight :'400',fontSize:10,textAlign:'center' }}>Buying and selling online</Text>
</View>



<View style={{ backgroundColor: '#fff',width:360,borderTopRightRadius:25,borderTopLeftRadius:25,marginTop:-20,padding:25}}>
<Text style={{color:'#000', fontWeight :'600',fontSize:28,textAlign:'center', }}>Login</Text>
<Text style={{color:'#666', fontWeight :'400',fontSize:15,textAlign:'center' }}>Sign in to continue</Text>
{
errormsg ? (<Text style={styles.errormessage}>{errormsg} </Text>): null}
<Text style={styles.lables}>Email</Text>

          <TextInput style={styles.input}
placeholder="Enter your Email"
onPressIn={() => setErrormsg(null)}
onChangeText={(text) => setFdata({ ...fdata, email: text })}
          />

<Text style={styles.lables}>Password</Text>
          <TextInput style={styles.input}
   secureTextEntry
   placeholder="Enter your Password"
   onPressIn={() => setErrormsg(null)}
   onChangeText={(text) => setFdata({ ...fdata, password: text })}
      />
<Text style={{color:'#f9005c', fontWeight :'400',fontSize:14,textAlign:'right' }}>Forgot Password</Text>
<View style={{justifyContent: 'center', alignItems: 'center',}}>
<TouchableOpacity
            onPress={() => {
              Sendtobackend('Homepage');
            }}
          >
            <Text style={styles.button}>Login in</Text>
          </TouchableOpacity>

<Text style={{color:'#9f8c90', fontWeight :'400',fontSize:14, }}>Don't have an account?
<TouchableOpacity

onPress={() => {
  navigation.navigate('SignUp')
}}>

<Text style={{color:'#f9005c', fontWeight :'400',fontSize:14,marginBottom:-5 }}>Create a new account</Text>
</TouchableOpacity>
</Text>

</View>
    </View>
    </View>
  )
}

export default Login

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
  });
  

