import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import { Button, TextInput } from "react-native-paper";

export default function Login({ navigation }) {
  const [user, setuserName] = useState("");
  const [password, setPass] = useState("");
  const uri = "http://192.168.1.5:8081/login";
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="שם משתמש"
        value={user}
        onChangeText={(user) => setuserName(user)}
      />
      <TextInput
        label="סיסמא"
        Type="outline"
        value={password}
        onChangeText={(password) => setPass(password)}
      />
      <Button
      icon="login"
        mode="contained"
        onPress={() => {
          navigation.navigate("HomePage", {
            a: user,
            b: password,
          });
        }}
      >
        לדף הבית
      </Button>
      <Button
        icon="playlist-edit"
        mode="contained"
        onPress={() => {
          navigation.navigate("RegisterPage");
        }}
      >
        להרשמה
      </Button>
      <Button
        icon="do-not-disturb"
        mode="contained"
        onPress={() => {
          fetch(uri, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user + " " + password),
          })
            .then((jsonRes) => jsonRes.json())
            .then((data) => {
              console.log(data);
              navigation.navigate("HomePage",{
                a: user,
                b: password,
              });
            })
            .catch((err) => {
              console.log("error data " + err);
            });
        }}
      >
        בדיקת שרת
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
