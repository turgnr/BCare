import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";

import { Button, TextInput } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function infoPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerContainer}>מידע משפטי</Text>
        <Text style={styles.warnings}>
          המידע באפליקציה נאסף ממקורות המפורטים מטה השימוש במידע באחריותך בלבד
        </Text>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>כותרת 1</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 1
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>כותרת 2</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 2
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>כותרת 3</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 3
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>כותרת 4</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 4
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>כותרת 5</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 5
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>כותרת 6</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 6
          </Text>
        </View>
        <Button
          icon="pan_tool"
          mode="contained"
          onPress={() => {
            navigation.navigate("HomePage");
          }}
          style={{ backgroundColor: "blue" }}
        >
          חזרה למסך הבית
        </Button>
      </ScrollView>
      <EmergencyButton />
      <ReportButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  warnings: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20,
    elevation: 1,
    fontWeight: "bold",
  },
  headerContainer: {
    backgroundColor: "#8c6cce",
    color: "yellow",
    fontSize: 35,
    textAlign: "center",
    marginHorizontal: 20,
    elevation: 1,
  },
  headline: {
    backgroundColor: "#8c6cce",
    color: "yellow",
    fontSize: 24,
    textAlign: "left",
    marginHorizontal: 5,
    elevation: 1,
  },
});
