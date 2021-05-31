import * as React from "react";
import { StyleSheet,Linking } from "react-native";
import { FAB } from "react-native-paper";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
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
export default function EmergencyButton({ navigation }) {
  return (
    <FAB
      style={styles.fab}
      small
      icon="heart-pulse"
      theme= {theme}
      onPress={() => {
       Linking.openURL(`tel:${118}`);
      }}
    />
  );
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 8,
    right: 0,
    bottom: 0,
  },
});
