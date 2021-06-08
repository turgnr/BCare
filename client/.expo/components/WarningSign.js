import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import { Button} from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function WarningSign({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerContainer}>סימני אזהרה</Text>
        <Text style={styles.warnings}>
          המידע באפליקציה נאסף ממקורות המפורטים מטה השימוש במידע באחריותך בלבד
        </Text>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>אלימות כללית</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 1
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>אלימות פיזית</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 2
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>אלימות טכנולוגית</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 3
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>אלימות מינית</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 4
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
        <Text style={styles.headline}>אלימות מילולית ו\או נפשית</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            מידע 5
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>אלימות כלכלית</Text>
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
