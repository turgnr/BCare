import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import { Button, TextInput } from "react-native-paper";

export default function xPage({ navigation }) {
  const [UserName, setuserName] = useState("user-Name");
  const [Password, setPass] = useState("pass-");
  const [Nuser, setNuser] = useState("user-Name");
  const [Npass, setNpass] = useState("pass");
  const uri = "http://192.168.1.5:8081/HomePage";

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ backgroundColor: "#a7a6a9", color: "yellow", fontSize: 20 }}
      >
        this is inline style
      </Text>
      <Text style={styles.green}>just green</Text>
      <Text style={styles.biggray}>just biggray</Text>
      <Text style={[styles.biggray, styles.green]}>biggray, then green</Text>
      <Text style={[styles.green, styles.biggray]}>green, then biggray</Text>
      <Button
        icon="pan_tool"
        mode="contained"
        onPress={() => {
          navigation.navigate("HomePage");
        }}
      >
        חזרה למסך הבית
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
  biggray: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 30,
  },
  green: {
    color: "green",
  },
});
