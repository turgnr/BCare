import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import { Button, TextInput } from "react-native-paper";

export default function Test({ navigation }) {
  const [UserName, setuserName] = useState("user-Name");
  const [Password, setPass] = useState("pass-");
  const [Nuser, setNuser] = useState("user-Name");
  const [Npass, setNpass] = useState("pass");
  const [iSvalid, setiSvalid] = useState(false);
  const uri = "http://192.168.1.2:8081/test";

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="User"
        value={UserName}
        onChangeText={(UserName) => setuserName(UserName)}
      />
      <TextInput
        label="Pass"
        value={Password}
        onChangeText={(Password) => setPass(Password)}
      />
      <Button
        icon="offine_bolt"
        mode="contained"
        onPress={() => {
          console.log("try POST");
          fetch(uri, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ UserName: UserName, Password: Password }),
          }).catch((err) => {
            console.log("error data " + err);
          });
        }}
      >
        Login
      </Button>
      <Button
        icon="pan_tool"
        mode="contained"
        onPress={() => {
          console.log("try GET");
          fetch(uri)
            .then((res) => res.json())
            .then((data) => {
              setNuser(data.UserName);
              setNpass(data.Password);
              setiSvalid(data.isValid);
              if (data.isValid) {
                navigation.navigate("Login");
              }
            })
            .catch((err) => {
              console.log("END GET:error data " + err);
            });
        }}
      >
        Get
      </Button>
      <Button icon="pan_tool" mode="contained"
      onPress={
        ()=>{
          navigation.navigate("Login");
        }
      }>
        go to LOGIN screen
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
