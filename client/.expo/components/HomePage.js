import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  BackHandler,
} from "react-native";

import { Button } from "react-native-paper";

export default function HomePage({ navigation, route }) {
  const { a, b } = route.params;
  const [Nid, setid] = useState(a);
  const [Npass, setpass] = useState(b);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <Button
          icon="offine_bolt"
          mode="contained"
          onPress={() => navigation.navigate("infoPage")}
        >
          info screen
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="offine_bolt"
          mode="contained"
          onPress={() => navigation.navigate("QuestionPage")}
        >
          question screen
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="offine_bolt"
          mode="contained"
          onPress={() => navigation.navigate("xPage")}
        >
          X screen
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="offine_bolt"
          mode="contained"
          onPress={() => navigation.navigate("tablePage")}
        >
          table screen
        </Button>
      </SafeAreaView>
      <Text>
        Hello {Nid} your pass is :{Npass}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#BB4DDA",
    borderWidth: 0,
    color: "#A63EC4",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
