import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import { Button, TextInput } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";

export default function QuestionPage({ navigation }) {
  const [UserName, setuserName] = useState("user-Name");
  const [Password, setPass] = useState("pass-");
  const [Nuser, setNuser] = useState("user-Name");
  const [Npass, setNpass] = useState("pass");
  const uri = "http://192.168.1.9:8081/HomePage";

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
      <Button icon="pan_tool" mode="contained"
      onPress={
        ()=>{
          navigation.navigate("HomePage");
        }
      }>
        go to LOGIN screen
      </Button>
      <EmergencyButton/>
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
