import React,{useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./homeStack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
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

export default function App() {
  return (
    <PaperProvider>
      <StatusBar></StatusBar>
      <NavigationContainer theme={theme}>{RootStack()}</NavigationContainer>
    </PaperProvider>
  );
}
