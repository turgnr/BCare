import React, { useState } from "react";
import { StyleSheet, Linking } from "react-native";
import { FAB } from "react-native-paper";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import * as SMS from 'expo-sms';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff00ff",
    accent: "#bb0bce",
    background: "#e8c6e7",
    surface: "#d362dd",
    onBackground: "#808000",
    onSurface: "#04f5ae",
    placeholder: "#f06292",
    text: "red",
  },
};
export default function ReportButton({ navigation }) {
  const [Sosms, SetSosms] = useState("0547657344");
  const [tMes, SettMes] = useState("בבקשה לחזור אליי בקשר לאלימות במשפחה");

async function sendsms() {
const isAvailable = await SMS.isAvailableAsync();
if (isAvailable) {
    const { rr } = await SMS.sendSMSAsync(Sosms,tMes);
} else {
  console.log("there's no SMS available on this device");
}


  }
  return (
    <FAB
      style={styles.fab}
      small
      icon="heart-pulse"
      theme={theme}
      onPress={
        sendsms /*() => Linking.openURL("sms:0547657344?body=בקשה לחזור אליי בקשר לאלימות במשפחה")*/
      }
    />
  );
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 8,
    left: 0,
    bottom: 0,
  },
});
