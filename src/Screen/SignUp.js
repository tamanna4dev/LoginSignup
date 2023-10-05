import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const SignUp = ({ navigation }) => {
  const [errormsg, setErrormsg] = useState(null);
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    dob: "",
    address: "",
  });
  const Sendtobackend = () => {
    console.log(fdata);
    if (
      fdata.name == "" ||
      fdata.email == "" ||
      fdata.password == "" ||
      fdata.cpassword == "" ||
      fdata.dob == "" ||
      fdata.address == ""
    ) {
      setErrormsg("All fields are required");
      return;
    } else if (fdata.password !== fdata.cpassword) {
      setErrormsg("password and Confirm password must be same");
      return;
    }
    else {
      fetch('http://10.0.2.2.:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      })
      .then(res => res.json()).then(
        data => {
          // console.log(data)
          if (data.error) {
            setErrormsg(data.error);
          }
        }
      )
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(238, 238, 238)",
      }}
    >
      <ScrollView>
        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          <Text
            style={{
              color: "#000",
              fontWeight: "600",
              fontSize: 28,
              textAlign: "center",
            }}
          >
            Create a New Account
          </Text>
          <Text
            style={{
              color: "#948c8c",
              fontWeight: "400",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Already Registered?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  color: "#f9005c",
                  fontWeight: "400",
                  fontSize: 14,
                  marginBottom: -5,
                }}
              >
                {" "}
                Login here
              </Text>
            </TouchableOpacity>
          </Text>
          {errormsg ? (
            <Text style={styles.errormessage}>{errormsg} </Text>
          ) : null}
          <Text style={styles.lables}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, name: text })}
          />
          <Text style={styles.lables}>Email </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, email: text })}
          />
          <Text style={styles.lables}>DOB</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Date of Birth"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, dob: text })}
          />

          <Text style={styles.lables}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Enter your Password"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, password: text })}
          />

          <Text style={styles.lables}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Confirm your Password"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
          />

          <Text style={styles.lables}>Address</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Enter your Address"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({ ...fdata, address: text })}
          />

          <TouchableOpacity
            onPress={() => {
              Sendtobackend();
            }}
          >
            <Text style={styles.button}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    height: 49,
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    width: 308,
  },
  lables: {
    fontSize: 15,
    color: "#9f8c90",
    fontWeight: "500",
  },
  inputs: {
    height: 75,
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginVertical: 11,
    width: 308,
    paddingBottom: 50,
  },
  button: {
    color: "#fff",
    backgroundColor: "#f9005c",
    textAlign: "center",
    borderRadius: 4,
    width: 310,
    height: 43,
    marginVertical: 9,
    fontSize: 16,
    padding: 9,
    fontWeight: "600",
  },
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
